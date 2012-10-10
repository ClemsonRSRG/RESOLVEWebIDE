/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package compiler;

import edu.clemson.cs.r2jt.ResolveCompiler;
import edu.clemson.cs.r2jt.compilereport.CompileReport;
import edu.clemson.cs.r2jt.data.MetaFile;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.channels.FileChannel;
import java.util.HashMap;
import java.util.Stack;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.http.HttpSession;
//import webui.core.UserEvent;

/**
 *
 * @author Parker
 */
public class JarBuilderInvoker {
    
    private String uploadedFileFacilityLoc;
    private String jarTempLoc;
    private ResolveCompiler r;
    private String[] args;
    
    public JarBuilderInvoker(ResolveCompiler cr, String[] a, String upFileLoc, 
            String jarTemp)
    {
        r = cr;
        args = a;
        uploadedFileFacilityLoc = upFileLoc;
        jarTempLoc = jarTemp;
    }
    
    public StringBuffer generateFacility(MetaFile inputFile, String name)
    {
        String realName = name;
        StringBuffer opBuffer = new StringBuffer();
        Stack<String> userFileNames = new Stack<String>();
        String concept = inputFile.getMyAssocConcept();
        String userName = realName + ".jar";
        String jarName = inputFile.getMyFileName() + ".jar";
        // @todo there may be an issue with the jarname being the same, this should be put in the temp folder instead
        String jarFile = uploadedFileFacilityLoc + jarName;
        userFileNames.push(jarFile);
        String syntaxError = "false";
        Boolean archived = false;

        opBuffer.append("<compile>");
        opBuffer.append("<buildResults>");
        opBuffer.append("<compilerOutput>");

        try{
            r.compile(args);
            CompileReport cr = r.getReport();
            if(r.hasError()){
                syntaxError = "true";
            }
            if(r.archived()){
                archived = true;
            }
            //r.resetReport();
            copyFileToTempDir(jarFile, jarName, jarTempLoc);
            //delete all the files created
            while(!userFileNames.isEmpty()){
                File f = new File(userFileNames.pop());
                boolean deleted = f.delete();
                if(deleted)
                    System.out.println("deleting: " + f.getAbsolutePath());
                else
                    System.out.println("There was an error deleting: " + f.getAbsolutePath());
            }
        }catch(Exception ex){
            
        } finally{
            
        }
        CompileReport cr = r.getReport();
        opBuffer.append("{\"results\":[{");
        if(cr.hasErrors()){
            opBuffer.append(cr.getErrors());
        }
        if(cr.hasBugReports()){
            if(cr.hasErrors()){
                opBuffer.append("},{");
            }
            opBuffer.append(cr.getBugReports());
        }
        opBuffer.append("}]}");
        opBuffer.append("</compilerOutput>");
        opBuffer.append("<syntaxError>" + syntaxError + "</syntaxError>");
        String bool;
        if(archived){
            bool = "true";
        }
        else{
            bool = "false";
        }
        opBuffer.append("<result>" + bool + "</result>");

        opBuffer.append("<code>");
        opBuffer.append("java file used to be here");
        opBuffer.append("</code>");

        opBuffer.append("<jarFile>");
        opBuffer.append("<concept>" + concept + "</concept>");
        opBuffer.append("<jarName>" + jarName + "</jarName>");
        opBuffer.append("<userName>" + userName + "</userName>");
        opBuffer.append("</jarFile>");

        opBuffer.append("</buildResults>");
        opBuffer.append("</compile>");
        System.err.flush();
        System.out.flush();
        return opBuffer;
    }
    
    private void copyFileToTempDir(String file, String name, String loc){
        File j = new File(file);
        if(j.exists()){

            FileChannel source = null;
            FileChannel destination = null;
            File jNew = new File(loc+name);
            if(!jNew.exists()) {
                try {
                    jNew.createNewFile();
                    source = new FileInputStream(j).getChannel();
                    destination = new FileOutputStream(jNew).getChannel();
                   destination.transferFrom(source, 0, source.size());
                    if(source != null) {
                      source.close();
                    }
                    if(destination != null) {
                      destination.close();
                    }
                } catch (IOException ex) {
                    Logger.getLogger(JarBuilderInvoker.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }
    }
}
