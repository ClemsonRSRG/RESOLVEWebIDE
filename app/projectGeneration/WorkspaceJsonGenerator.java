/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package projectGeneration;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.Iterator;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Pattern;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;
//import webui.core.ConfigFile;

/**
 *
 * @author Chuck
 */
public class WorkspaceJsonGenerator {
    //private ConfigFile myConfigFile;
    private String myWorkspacesPath;
    private Facility[] myFacilities;
    private Theory[] myTheories;
    private int myFacIndex;
    private int myTheoryIndex;
    
    private ArrayList<File> myFilesToZip = null;
    private String[] myResolveJavaBaseFiles = {
                        "RESOLVE_BASE.java",
                        "RESOLVE_INTERFACE.java",
                        "RType.java",
                        "RTypeWrapper.java",
                        "Std_IO_Fac.java",
                        "TextIO.java"
                        };
    
    public WorkspaceJsonGenerator(String workspacesPath){
        myWorkspacesPath = workspacesPath;
        //System.out.println(workspacesPath);
        //myConfigFile = cf;
        //myWorkspacesPath = "C:\\Users\\Chuck\\Documents\\Clemson-RESOLVE-work\\interface-working-dir\\interface\\workspaces\\";
    }
    
    public String generateJSON(String workspaceName, boolean standardHidden) throws IOException{
        boolean hideStandard = standardHidden;
        StringBuilder sb = new StringBuilder();
    	String slash = System.getProperty("file.separator");
        //String userType = (String) session.getAttribute("userType");
        //String library = request.getParameter("library");

        // Set up relative directories we need
        String autoGenConceptPath = "RESOLVE"+ slash + "Main"+ slash + "Concepts"+ slash;
        //String autoGenFacilityPath = "RESOLVE"+ slash + "Main"+ slash + "Facilities"+ slash + "User"+ slash;
        String autoGenFacilityPath = "RESOLVE"+ slash + "Main"+ slash + "Facilities"+ slash;
        String autoGenTheoryPath = "RESOLVE"+ slash + "Main"+ slash + "Math_Units"+ slash;

        //String workspacesPath = cf.getWorkspacesDir();
        String libraryPath = myWorkspacesPath + workspaceName + slash;
        //String libraryXML = cf.getLibXML();
        //String libraryXML = libraryPath + cf.getWorkspaceXmlFileName();
        String autoGenConceptsLoc = libraryPath + autoGenConceptPath;
        String autoGenFacilityLoc = libraryPath + autoGenFacilityPath;
        String autoGenTheoryLoc = libraryPath + autoGenTheoryPath;
        //String adminPage = "Admin";
        //String uploadedFilePrefix = cf.getUploadedFilePrefix();

        myFilesToZip = new ArrayList<File>();
        addResolveJavaBaseFiles(libraryPath);
        // Read the directories in the Concepts folder
        //uploadedFilePrefix = "a_a";
        //autoGenConceptsLoc = "/root/apache-tomcat-6.0.20/webapps/java/WEB-INF/classes/chuck/workspace/RESOLVE/Main/Concepts/";
        //autoGenFacilityLoc = "/root/apache-tomcat-6.0.20/webapps/java/WEB-INF/classes/chuck/workspace/RESOLVE/Main/Facilities/User/";
        File dir = new File(autoGenConceptsLoc);
        //addToZip(dir);
        File[] dirList = dir.listFiles();

        // Create the array to store the Concepts
        ConceptFile[] concepts = new ConceptFile[dirList.length * 3];
        //Arrays.sort(dirList);

        ConceptFile.resetCount();
        int j = 0;
        boolean validConcept = false;
        //out.println("<data>");

        // Begin reading the concept folders
        for(int i = 0; i < dirList.length; i++){
            if(dirList[i].isDirectory() && (dirList[i].getName().compareTo("Standard") != 0)){
                //addToZip(dirList[i]);
                String conceptDirName = dirList[i].getName();
                String conceptDir = autoGenConceptsLoc + conceptDirName + "/";
                //String conceptName = conceptDirName + "_Template.co";
                String conceptName = conceptDirName + ".co";
                String dirName = conceptDirName;
                String conceptTreeLoc = conceptDirName + "/" + conceptName;

                // Read files in the current concept folder
                File file = new File(conceptDir);
                File[] fileList = file.listFiles();
                //Arrays.sort(fileList);

                // Loop through files looking for .co file
                for(int k = 0; k < fileList.length; k++){
                    if((checkForAndDeleteInvalidFile(fileList[k], "")) && (fileList[k].getName().compareTo(conceptName) == 0)){
                        //out.println("<found>Found .co file: " + fileList[k].getName() + "</found>");

                        // found concept file, set valid and store concept file
                        validConcept = true;
                        concepts[j++] = new ConceptFile(conceptDirName, dirName, conceptName,
                                                       conceptTreeLoc, fileList.length,
                                                       conceptDir + conceptName, "false");
                        addToZip(fileList[k]);
                    }
                }

                // Continue only if valid concept
                if(validConcept){
                    // Search the directory for enhancements
                    for(int k = 0; k < fileList.length; k++){
                        // If file is an enhancement, store the info and add it to the concepts list of enhancements
                        if((checkForAndDeleteInvalidFile(fileList[k], "")) && Enhancement.isEnhancement(fileList[k].getName())){
                            String eName = Enhancement.getName(fileList[k].getName());
                            String eFileName = fileList[k].getName();
                            Enhancement e = new Enhancement(eName, dirName, conceptDirName, fileList.length,
                                                            conceptDir + eFileName);
                            addToZip(fileList[k]);

                            // Search the directory for realizations for this enhancement
                            for(int l = 0; l < fileList.length; l++){
                                if((checkForAndDeleteInvalidFile(fileList[l], "")) && Realization.isRealiz(fileList[l].getName())){
                                    String name =  Realization.getName(fileList[l].getName());
                                    String path = conceptDir + fileList[l].getName();
                                    String fileName = fileList[l].getName();
                                    Realization r = new Realization(name, dirName, conceptDir + fileName, "er", eName);
                                    //Check to see if the realization is for this enhancement
                                    //if(r.isEnhRealiz(conceptDirName + "_Template;", eName, path, out)){
                                    if(r.isEnhRealiz(conceptDirName + ";", eName, path)){
                                        e.addEnhRealiz(r);
                                        addToZip(fileList[l]);
                                    }
                                }
                            }
                            // Add the enhancement to the current concept
                            concepts[j - 1].addEnhancement(e);
                        }
                    }

                    // Search the directory for realizations of the current concept
                    for(int k = 0; k < fileList.length; k++){
                        if((checkForAndDeleteInvalidFile(fileList[k], "")) && Realization.isRealiz(fileList[k].getName())){
                            String name =  Realization.getName(fileList[k].getName());
                            String path = conceptDir + fileList[k].getName();
                            String fileName = fileList[k].getName();
                            Realization r = new Realization(name, dirName, conceptDir + fileName, "r", dirName);

                            //Check to see if the realization is for this enhancement
                            //if(r.isConRealiz(conceptDirName + "_Template;", path, out)){
                            if(r.isConRealiz(conceptDirName + ";", path)){
                                concepts[j - 1].addRealiz(r);
                                addToZip(fileList[k]);
                            }
                        }
                    }
                }
            }

            // Deal with the Standard Concepts being in a sub-folder
            if(dirList[i].getName().compareTo("Standard") == 0){
                File dir2 = new File(autoGenConceptsLoc + "Standard/");
                File[] dirList2 = dir2.listFiles();
                //Arrays.sort(dirList2);
                boolean validStandardConcept = false;

                // Begin reading the concept folders
                for(int k = 0; k < dirList2.length; k++){
                    if(dirList2[k].isDirectory()){
                        //addToZip(dirList2[k]);
                        validStandardConcept = false;
                        String conceptDirName = dirList2[k].getName();
                        String conceptDir = autoGenConceptsLoc + "Standard/" + conceptDirName + "/";
                        String conceptPath = conceptDirName;
                        String conceptName = dirList2[k].getName() + ".co";
                        //String conceptPath = conceptDirName + "_Template;";
                        //String conceptName = dirList2[k].getName() + "_Template.co";
                        String dirName = "Standard/" + conceptDirName;
                        String conceptTreeLoc = dirList2[k].getName() + "/" + conceptName;

                        // Read files in the current concept folder
                        File file = new File(conceptDir);
                        File[] fileList = file.listFiles();
                        //Arrays.sort(fileList);

                        // Loop through files looking for .co file
                        for(int l = 0; l < fileList.length; l++){
                            if((checkForAndDeleteInvalidFile(fileList[l], "")) && (fileList[l].getName().compareTo(conceptName) == 0)){
                                //out.println("<found>Found .co file: " + fileList[l].getName() + "</found>");

                                // found concept file, set valid and store concept file
                                validStandardConcept = true;
                                if(!hideStandard){
                                    concepts[j++] = new ConceptFile(conceptDirName, dirName, 
                                                                    conceptName, conceptTreeLoc,
                                                                    fileList.length, conceptDir + conceptName,
                                                                    "true");
                                }  
                                addToZip(fileList[l]);
                            }
                            // Since these are the standard files, we need all the Java files to the zip archive
                            else{
                                String fileName = fileList[l].getName();
                                String ext = fileName.substring(fileName.indexOf(".") + 1, fileName.length());
                                //System.out.println(ext);
                                if(ext.toLowerCase().equals("java") || 
                                        ext.toLowerCase().equals("rb") ||
                                        ext.toLowerCase().equals("co") ||
                                        ext.toLowerCase().equals("en")){
                                    addToZip(fileList[l]);
                                }
                            }
                            /*if(!validStandardConcept){
                                // fix the unique case for Location_Linking_Tempate_1
                                String specialName = "Location_Linking_Template_1.co";
                                if(fileList[l].getName().compareTo(specialName) == 0){
                                    validStandardConcept = true;
                                    concepts[j++] = new ConceptFile(conceptDirName, dirName, 
                                                                    specialName, conceptTreeLoc,
                                                                    fileList.length, conceptDir + specialName);
                                    conceptPath = conceptDirName;
                                    //conceptPath = conceptDirName + "_Template_1;";
                                    addToZip(fileList[l]);
                                }
                            }*/
                        }

                        // Continue only if valid concept
                        if(validStandardConcept){
                            // Search the directory for enhancements
                            for(int m = 0; m < fileList.length; m++){
                                // If file is an enhancement, store the info and add it to the concepts list of enhancements
                                if((checkForAndDeleteInvalidFile(fileList[m], "")) && Enhancement.isEnhancement(fileList[m].getName())){
                                    String eName = Enhancement.getName(fileList[m].getName());
                                    String eFileName = fileList[m].getName();
                                    Enhancement e = new Enhancement(eName, dirName, conceptDirName, fileList.length, conceptDir + eFileName);
                                    addToZip(fileList[m]);

                                    // Search the directory for realizations for this enhancement
                                    for(int l = 0; l < fileList.length; l++){
                                        if((checkForAndDeleteInvalidFile(fileList[l], "")) && Realization.isRealiz(fileList[l].getName())){
                                            String name =  Realization.getName(fileList[l].getName());
                                            String path = conceptDir + fileList[l].getName();
                                            String fileName = fileList[l].getName();
                                            Realization r = new Realization(name, dirName, conceptDir + fileName, "er", eName);
                                            //Check to see if the realization is for this enhancement
                                            if(r.isEnhRealiz(conceptPath, eName, path)){
                                                if(!hideStandard){
                                                    e.addEnhRealiz(r);
                                                }  
                                                addToZip(fileList[l]);
                                            }
                                        }
                                        }
                                    // Add the enhancement to the current concept
                                    if(!hideStandard){
                                        concepts[j - 1].addEnhancement(e);
                                    }
                                }
                            }

                            // Search the directory for realizations of the current concept
                            for(int l = 0; l < fileList.length; l++){
                                if((checkForAndDeleteInvalidFile(fileList[l], "")) && Realization.isRealiz(fileList[l].getName())){
                                    String name =  Realization.getName(fileList[l].getName());
                                    String path = conceptDir + fileList[l].getName();
                                    String fileName = fileList[l].getName();
                                    Realization r = new Realization(name, dirName, conceptDir + fileName, "r", dirName);

                                    //Check to see if the realization is for this enhancement
                                    if(r.isConRealiz(conceptPath, path)){
                                        if(!hideStandard){
                                            concepts[j - 1].addRealiz(r);
                                        }
                                        addToZip(fileList[l]);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        // Read the directories in the User Facilities folder
        // @todo add support for adding the standard facs to the zip file
        dir = new File(autoGenFacilityLoc);
        int numFacilities = countFilesInDir(dir);

        myFacilities = new Facility[numFacilities];
        myFacIndex = 0;
        readFacilities(dir, "");

        // Read in the math theory files
        dir = new File(autoGenTheoryLoc);
        int numTheories = countFilesInDir(dir);

        myTheories = new Theory[numTheories];
        myTheoryIndex = 0;
        readTheories(dir);

        dirList = dir.listFiles();

        //sb.append("<config>");
        //sb.append(writeConfigFileInfo());
        //sb.append("<libraryFiles>");
        StringBuilder libDateXML = new StringBuilder();
        Date date = Calendar.getInstance().getTime();
        libDateXML.append("<libDate workspace=\"");
        libDateXML.append(workspaceName);
        libDateXML.append("\">");
        libDateXML.append("<year>" + getDateTime(date, "yyyy") + "</year>");
        libDateXML.append("<month>" + getDateTime(date, "MM") + "</month>");
        libDateXML.append("<day>" + getDateTime(date, "dd") + "</day>");
        libDateXML.append("<hour>" + getDateTime(date, "HH") + "</hour>");
        libDateXML.append("<minute>" + getDateTime(date, "mm") + "</minute>");
        libDateXML.append("<second>" + getDateTime(date, "ss") + "</second>");
        libDateXML.append("<timeZone>" + getDateTime(date, "z") + "</timeZone>");
        libDateXML.append("</libDate>");
        //sb.append(libDateXML.toString());
        //sb.append(writeConceptsXML(concepts));
        //sb.append(writeFacilitiesXML(myFacilities));
        //sb.append(writeTheoriesXML(myTheories));
        //sb.append("</libraryFiles>");
        //sb.append("</config>");

        /*Boolean updateSuccess = myConfigFile.updateWorkspaceXML(sb.toString(),
                                                libDateXML.toString(), workspaceName);
        sb = new StringBuilder();
        if(updateSuccess){
            sb.append("Successfully created XML Config for: " + workspaceName + "<br/><br/>");
            sb.append("from: " + libraryPath + "<br/><br/>");
            // @todo is libraryPath the right thing to pass here?
            if(writeZipFile(myWorkspacesPath, workspaceName)){
                sb.append("Workspace successfully zipped");
            }
            else{
                updateSuccess = false;
                sb.append("There has been an error zipping the workspace");
            }
        }
        else{
            sb.append("There has been a problem updating the database");
        }
        ConceptFile.resetCount();
        System.out.println(sb.toString());
        return updateSuccess;*/
        sb.append(generateJSON(concepts, myFacilities, myTheories));
        return sb.toString();
    }
    
    private String generateJSON(ConceptFile[] concepts, 
                                Facility[] facilities,
                                Theory[] theories){
        StringBuilder sb = new StringBuilder();
        sb.append("{");
        sb.append("\"components\":");
        sb.append(generateComponentsJSON(concepts, facilities, theories));
        /*sb.append("\"concepts\":");
        sb.append(generateConceptsJSON(concepts));
        sb.append(",\"facilities\":");
        sb.append(generateFacilitiesJSON(facilities));
        sb.append(",\"theories\":");
        sb.append(generateTheoriesJSON(theories));*/
        sb.append("}");
        return sb.toString();
    }
    
    private String generateComponentsJSON(
                        ConceptFile[] concepts,
                        Facility[] facilities,
                        Theory[] theories){
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for(int i=0; i < ConceptFile.getCount(); i++){
            if(concepts[i] != null){
                sb.append(concepts[i].generateConceptJSON());
            }
            //if(i < ConceptFile.getCount() - 1){
            sb.append(",");
            //}
        }
        int numFacs = 0;
        int i = 0;
        for(Facility f : facilities){
            if(f != null){
                numFacs++;
            }
        }
        for(Facility f : facilities){
            if(f != null){
                sb.append(f.generateFacilityJSON());
                //if(i < numFacs - 1){
                sb.append(",");
                //}
                i++;
            }
        }
        int numTheories = 0;
        i = 0;
        for(Theory t : theories){
            if(t != null){
                numTheories++;
            }
        }
        for(Theory t : theories){
            sb.append(t.generateTheoryJSON());
            if(i < numTheories - 1){
                sb.append(",");
            }
            i++;
        }
        sb.append("]");
        return sb.toString();
    }
    
    private String generateConceptsJSON(ConceptFile[] concepts){
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for(int i=0; i < ConceptFile.getCount(); i++){
            if(concepts[i] != null){
                sb.append(concepts[i].generateConceptJSON());
            }
            if(i < ConceptFile.getCount() - 1){
                sb.append(",");
            }
        }
        sb.append("]");
        return sb.toString();
    }

    private String generateFacilitiesJSON(Facility[] facilities){
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        int numFacs = 0;
        int i = 0;
        for(Facility f : facilities){
            if(f != null){
                numFacs++;
            }
        }
        for(Facility f : facilities){
            if(f != null){
                sb.append(f.generateFacilityJSON());
                if(i < numFacs - 1){
                    sb.append(",");
                }
                i++;
            }
        }
        sb.append("]");
        return sb.toString();
    }

    private String generateTheoriesJSON(Theory[] theories){
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        int numTheories = 0;
        int i = 0;
        for(Theory t : theories){
            if(t != null){
                numTheories++;
            }
        }
        for(Theory t : theories){
            sb.append(t.generateTheoryJSON());
            if(i < numTheories - 1){
                sb.append(",");
            }
            i++;
        }
        sb.append("]");
        return sb.toString();
    }

    private String writeConceptsXML(ConceptFile[] concepts){
        StringBuilder sb = new StringBuilder();
        sb.append("<concepts>");
        for(int i=0; i < ConceptFile.getCount(); i++){
            if(concepts[i] != null){
                sb.append(concepts[i].writeConceptXML());
            }
        }
        sb.append("</concepts>");
        return sb.toString();
    }

    private String writeFacilitiesXML(Facility[] facilities){
        StringBuilder sb = new StringBuilder();
        sb.append("<facilities>");
        for(Facility f : facilities){
            if(f != null){
                sb.append(f.writeFacilityXML());
            }
        }
        sb.append("</facilities>");
        return sb.toString();
    }

    private String writeTheoriesXML(Theory[] theories){
        StringBuilder sb = new StringBuilder();
        sb.append("<theories>");
        for(Theory f : theories){
            sb.append(f.writeTheoryXML());
        }
        sb.append("</theories>");
        return sb.toString();
    }

    private String writeConfigFileInfo(){
        StringBuilder sb = new StringBuilder();
        sb.append("<configFileInfo>");
        sb.append("<defaultWorkspace>true</defaultWorkspace>");
        sb.append("</configFileInfo>");
        return sb.toString();
    }
    private String getDateTime(Date date, String format){
        SimpleDateFormat sdf = new SimpleDateFormat(format);
        return sdf.format(date);
    }

    // @todo get rid of this method, not needed any more
    private boolean checkForAndDeleteInvalidFile(File f, String uploadedFilePrefix){
        if(f.isFile()){
            return true;
            /*String name = f.getName();
            int prefixLength = uploadedFilePrefix.length();
            String realPrefix = name.substring(0, prefixLength);
            if(!realPrefix.equals(uploadedFilePrefix)){
                return true;
            }
            f.delete();*/
        }
        return false;
    }
    
    private int countFilesInDir(File dir){
        int count = 0;
	File[] dirList = dir.listFiles();
        if(dirList.length == 0){
            return count;
        }
        for(File f : dirList){
            if(f.isFile() && (Facility.isFacility(f) || Theory.isTheory(f))){
                count++;
            }
            else if(f.isDirectory()){
                count += countFilesInDir(f);
            }
        }
        return count;
    }

    private void readFacilities(File dir, String uploadedFilePrefix){
        File[] dirList = dir.listFiles();
        if(dirList.length == 0){
            return;
        }
        for(File f : dirList){
            if(f.isDirectory()){
                //addToZip(f);
                readFacilities(f, uploadedFilePrefix);
            }
            else if(f.isFile() && checkForAndDeleteInvalidFile(f, uploadedFilePrefix) &&  Facility.isFacility(f)){
                String name = f.getName();
                String path = f.getAbsolutePath();
                File parentDir = f.getParentFile();
                // we don't want standard facs to be visible in the web interface
                if(!parentDir.getName().equals("Standard")){
                    myFacilities[myFacIndex++] = new Facility(name, path);
                }
                addToZip(f);
            }
        }
    }

    private void readTheories(File dir){
        File[] dirList = dir.listFiles();

        for(File f : dirList){
            if(f.isFile() && Theory.isTheory(f)){
                String name = f.getName();
                String path = f.getAbsolutePath();
                myTheories[myTheoryIndex++] = new Theory(name, path);
                addToZip(f);
            }
            else if(f.isDirectory()){
                readTheories(f);
            }
        }

    }

    public static String encode(String raw){
        String encoded = null;
        try {
            encoded = URLEncoder.encode(raw.replaceAll(" ", "%20"), "UTF-8");
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(WorkspaceJsonGenerator.class.getName()).log(Level.SEVERE, null, ex);
        }
        return encoded;
    }
    
    public static String decode(String raw){
        String encoded = null;
        try {
            encoded = URLDecoder.decode(raw, "UTF-8");
            encoded = encoded.replaceAll("%20", " ");
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(WorkspaceJsonGenerator.class.getName()).log(Level.SEVERE, null, ex);
        }
        return encoded;
    }
    
    private void addToZip(File f){
        if(!myFilesToZip.contains(f)){
            myFilesToZip.add(f);
        }
    }
    
    private void addResolveJavaBaseFiles(String workspaceDir){
        for(String name: myResolveJavaBaseFiles){
            String filePath = workspaceDir + "RESOLVE" + File.separator + name;
            myFilesToZip.add(new File(filePath));
        }
    }
    
    private boolean writeZipFile(String workspaceLoc, String library){
        boolean ret = true;
        final int BUFFER = 2048;
        File zipFile = new File(workspaceLoc + File.separator + library + ".zip");
        if(zipFile.exists()){
            zipFile.delete();
        }
        //System.out.println(zipFile.getAbsolutePath());
        BufferedInputStream in = null;
        FileOutputStream fos = null;
        ZipOutputStream zos = null;
        try {
            fos = new FileOutputStream(zipFile);
            zos = new ZipOutputStream(new BufferedOutputStream(fos));
            zos.setMethod(ZipOutputStream.DEFLATED);
            Iterator it = myFilesToZip.iterator();
            while(it.hasNext()){
                File f = (File)it.next();
                byte[] buffer = new byte[BUFFER];
                int length;
                if(f.isFile()){
                    String filePath = f.getAbsolutePath();
                    in = new BufferedInputStream(new FileInputStream(f), BUFFER);
                    filePath = removePrePath(filePath, library);
                    //System.out.println("filepath:"+filePath);
                    ZipEntry entry = new ZipEntry(filePath);
                    zos.putNextEntry(entry);
                    while((length = in.read(buffer, 0, BUFFER)) != -1){
                        zos.write(buffer, 0, length);
                    }
                    zos.closeEntry();
                    in.close();
                }
            }
        } catch (IOException ex) {
            Logger.getLogger(WorkspaceJsonGenerator.class.getName()).log(Level.SEVERE, null, ex);
            ret = false;
        } finally {
            try {
                zos.close();
                fos.close();
            } catch (IOException ex) {
                Logger.getLogger(WorkspaceJsonGenerator.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
        return ret;
    }
    
    private String removePrePath(String path, String libraryName){
        String[] tokens = path.split(Pattern.quote(File.separator));
        String ret = "";
        boolean pathStarted = false;
        int count = 1;
        for(String token : tokens){
            if(!pathStarted){
                if(token.equals(libraryName)){
                    pathStarted = true;
                }
            }
            else{
                ret += token;
                if(count < tokens.length){
                    ret += File.separator;
                }
            }
            count++;
        }
        return ret;
    }
}
