package controllers;

import java.io.ByteArrayInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.logging.Level;
import java.util.logging.Logger;
import play.Play;
import play.mvc.Controller;
import play.mvc.With;

public class Downloader extends Controller {
    public static void download(String job, String name, String dir){
        String slash = System.getProperty("file.separator");
        String workingDir = (String)Play.configuration.get("workingdir");
        if(job != null && name != null && dir != null){
            String tempWsDir = workingDir + "tempFiles" + slash +
                                     dir + slash;
            File jarFile = new File(tempWsDir  + "RESOLVE" + slash + name + ".jar");
            if(jarFile.exists()){
                if(job.equals("download")){
                    try {
                        FileInputStream fis = new FileInputStream(jarFile);
                        byte fileContent[] = new byte[(int)jarFile.length()];
                        fis.read(fileContent);
                        fis.close();
                        jarFile.delete();
                        File tempDir = new File(tempWsDir);
                        if(emptyAndDelete(tempDir)){
                            System.out.println("Successflly deleted " + dir);
                        }
                        //String strFileContent = new String(fileContent);
                        InputStream is = new ByteArrayInputStream(fileContent);
                        renderBinary(is, name + ".jar");
                    } catch (Exception ex) {
                        Logger.getLogger(Downloader.class.getName()).log(Level.SEVERE, null, ex);
                    } finally {
                        jarFile.delete();
                    }
                }
                else if(job.equals("cancel")){
                    jarFile.delete();
                }
                File tempDir = new File(tempWsDir);
                if(emptyAndDelete(tempDir)){
                    System.out.println("Successflly deleted " + dir);
                }
            }
        }
            
    }
    
    private static boolean emptyAndDelete(File dir){
        boolean ret = false;
        File[] files = dir.listFiles();
        if(files.length == 0){
            ret = dir.delete();
        }
        else{
            for(File f: files){
                ret = emptyAndDelete(f);
                if(ret != true){
                    return false;
                }
            }
            if(ret){
                dir.delete();
            }
        }
        return ret;
    }
}
