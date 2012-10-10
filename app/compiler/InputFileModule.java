/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package compiler;

import edu.clemson.cs.r2jt.data.MetaFile;
import edu.clemson.cs.r2jt.data.ModuleKind;
import java.io.File;
import java.util.HashMap;
import java.util.Random;
import java.util.Stack;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import javax.servlet.http.HttpServletRequest;
//import ui.init.InterfaceConfig;

/**
 *
 * @author Parker
 */
public class InputFileModule {
    
     Stack<MetaFile> userMetaFiles;
     HashMap<String, MetaFile> userFileMap;
     HttpServletRequest request;
     
     String numberFiles;
     String fileType;
     String filePkg;
     String fileConcept;
     String fileName;
     String key;
     
     Random randGen;
     
    public InputFileModule(MetaFile targetFile)
    {
        userMetaFiles = new Stack<MetaFile>(); 
        userFileMap = new HashMap<String, MetaFile>();
        
        randGen = new Random();
        
        userMetaFiles.push(targetFile);
    }
    
    public InputFileModule(HttpServletRequest r, String fileSource, ModuleKind kind)
    {
        userMetaFiles = new Stack<MetaFile>(); 
        userFileMap = new HashMap<String, MetaFile>();
        request = r;
        
        numberFiles =   request.getParameter("numberFiles");
        fileType =      request.getParameter("fileType");
        filePkg =       request.getParameter("pkg");
        fileConcept =   request.getParameter("concept");
        fileName =      request.getParameter("fileName");
        key = "";
        
        randGen = new Random();
        
        userMetaFiles.push(new MetaFile(fileName, fileConcept, filePkg, fileSource, kind));
    }
    
    //public void createMetaFiles(InterfaceConfig ic, String type)
    public void createMetaFiles( String type)
    {
        File tempWsDirFile = null;
        //String selectedWsName = request.getParameter("selectedWsName");
        
        /*int numFiles = Integer.parseInt(numberFiles);
        if(numFiles > 1){
            // Save uploaded user files as userFile objects
            for(int userSavedFiles=0; userSavedFiles<(numFiles - 1); userSavedFiles++){
                String uFileWorkspace = request.getParameter("ws" + Integer.toString(userSavedFiles));
                if(uFileWorkspace != null){
                    if(uFileWorkspace.equals("default")){
                        uFileWorkspace = ic.getDefaultWorkspaceName();
                    }
                    String uFileName = request.getParameter("fileName" + Integer.toString(userSavedFiles));
                    if(!uFileName.equals(fileName) && uFileWorkspace.equals(selectedWsName)){
                        String uFileType = request.getParameter("fileType" + Integer.toString(userSavedFiles));
                        String uFilePkg = request.getParameter("pkg" + Integer.toString(userSavedFiles));
                        String uFileConcept = request.getParameter("concept" + Integer.toString(userSavedFiles));
                        String uFileSource = decodePlusSign(request.getParameter("contents" + Integer.toString(userSavedFiles)));
                        ModuleKind uKind = getFileKind(uFileType);
                        MetaFile uInputFile = new MetaFile(uFileName, uFileConcept, uFilePkg, uFileSource, uKind);
                        userMetaFiles.push(uInputFile);
                    }
                }
            }

            // if we are building a jar, we need to figure out the names of the
            // compiled Java files, and run through the meta files
            // and make any name to hex replacements
            if(type.compareTo("buildDriver") == 0){
                String tempWsDir = ic.getTempFileDir() + //uploadedFilePrefix +
                                        Integer.toHexString(new Integer(randGen.nextInt())) +
                                        "_temp" + System.getProperty("file.separator");
                String tempMainDir = tempWsDir +
                                        "RESOLVE" + System.getProperty("file.separator") +
                                        "Main" + System.getProperty("file.separator");
                tempWsDirFile = new File(tempWsDir);
                tempWsDirFile.mkdir();
                
                Iterator it = userMetaFiles.iterator();
                while(it.hasNext()){
                    MetaFile mf = (MetaFile)it.next();
                    mf.setIsCustomLoc();
                    mf.setMyCustomPath(tempMainDir);
                    File tempFile = mf.getMyCustomFile();
                    tempFile.getParentFile().mkdirs();
                }
            }
        }*/
        
        // we run through the meta files and create the hashmap
          for(MetaFile mf : userMetaFiles) {
            key = "";
            if(!mf.getMyPkg().equals("")){
                key += mf.getMyPkg() + ".";
            }
            key += mf.getMyFileName();
            userFileMap.put(key, mf);
        }
    }
    
    public HashMap getMetaFiles()
    {
        return userFileMap;
    }
    
    
    
    //Helper Methods
    
    private String decodePlusSign(String input){
        String target = "\\%2B";
        String replace = "+";
        Pattern pattern = Pattern.compile(target);
        Matcher matcher = pattern.matcher(input);
        return matcher.replaceAll(replace);
    }
    
    private ModuleKind getFileKind(String fileType){
        ModuleKind kind = null;
        if(fileType.equals("concept")){
            kind = ModuleKind.CONCEPT;
        }
        else if(fileType.equals("conRealiz")){
            kind = ModuleKind.CONCEPT_BODY;
        }
        else if(fileType.equals("enh")){
            kind = ModuleKind.ENHANCEMENT;
        }
        else if(fileType.equals("enhRealiz")){
            kind = ModuleKind.ENHANCEMENT_BODY;
        }
        else if(fileType.equals("facility")){
            kind = ModuleKind.FACILITY;
        }
        return kind;
    }
}
