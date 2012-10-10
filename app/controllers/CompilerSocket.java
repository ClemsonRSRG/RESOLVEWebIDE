package controllers;

import com.google.gson.Gson;
import compiler.JavaTranslatorInvoker;
import compiler.VCGeneratorInvoker;
import edu.clemson.cs.r2jt.ResolveCompiler;
import edu.clemson.cs.r2jt.data.MetaFile;
import edu.clemson.cs.r2jt.data.ModuleKind;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import models.UserComponent;
import play.Play;
import play.mvc.WebSocketController;

/**
 *
 * @author Chuck
 */
public class CompilerSocket extends WebSocketController {
    public static void compile(String job, String target) {
        String slash = System.getProperty("file.separator");
        String relativeMainDir = "RESOLVE" + slash + "Main" + slash;
        UserComponent uc = new Gson().fromJson(target, UserComponent.class);
        String workingDir = (String)Play.configuration.get("workingdir");
        String compilerMainDir = workingDir + slash + uc.project + slash + relativeMainDir;
        ResolveCompiler r = null;
        String msg = "{\"status\":\"info\",\"msg\":\"received " + job + ", launching\"}";
        outbound.send(msg);
        HashMap<String, MetaFile> userFileMap = new HashMap<String, MetaFile>();
        MetaFile umf = getTargetMetaFile(uc);
        String key = "";
        if(!umf.getMyPkg().equals("")){
            key += umf.getMyPkg() + ".";
        }
        key += umf.getMyFileName();
        userFileMap.put(key, umf);
        if(job.compareTo("translateJava") == 0){
            //Constructing compiler
            String[] args = {"-maindir", compilerMainDir, "-translate", 
                "-webinterface"};
            r = new ResolveCompiler(args, umf, userFileMap);

            //invoking the translator with the compiler specially created for
            //translating
            JavaTranslatorInvoker gji = new JavaTranslatorInvoker(r, args, outbound);
            //outbound.send(gji.generateJava().toString());
            gji.generateJava(job);//event);
        }
        else if(job.compareTo("genVCs") == 0){
            //Constructing compiler
            String[] args = {"-maindir", compilerMainDir, "-vcs", 
                        "-listVCs", "-webinterface"};
            r = new ResolveCompiler(args, umf, userFileMap);

            VCGeneratorInvoker vcgi = new VCGeneratorInvoker(r, args, outbound);
            vcgi.generateVcs(job);
        }
        //System.out.println(decode(uc.content));
        //outbound.send(uc.name);
    }
    
    private static MetaFile getTargetMetaFile(UserComponent component){
        MetaFile targetFile = null;
        String fileName = component.name;
        //String fileSource = decodePlusSign(decode(component.content));
        String fileSource = component.content;
        //System.out.println(component.content);
        String pkg = component.pkg;
        ModuleKind kind = getFileKind(component.type);
        targetFile = new MetaFile(fileName, pkg, pkg, fileSource, kind);
        return targetFile;
    }
    
    private static ModuleKind getFileKind(String fileType){
        ModuleKind kind = null;
        if(fileType.equals("c")){
            kind = ModuleKind.CONCEPT;
        }
        else if(fileType.equals("r")){
            kind = ModuleKind.CONCEPT_BODY;
        }
        else if(fileType.equals("e")){
            kind = ModuleKind.ENHANCEMENT;
        }
        else if(fileType.equals("er")){
            kind = ModuleKind.ENHANCEMENT_BODY;
        }
        else if(fileType.equals("f")){
            kind = ModuleKind.FACILITY;
        }
        return kind;
    }
                
    private static String decode(String raw){
        String encoded = null;
        try {
            encoded = URLDecoder.decode(raw.replaceAll("%20", " "), "UTF-8");
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(WebCompiler.class.getName()).log(Level.SEVERE, null, ex);
        }
        return encoded;
    }
    
    private static String decodePlusSign(String input){
        String target = "\\%2B";
        String replace = "+";
        Pattern pattern = Pattern.compile(target);
        Matcher matcher = pattern.matcher(input);
        return matcher.replaceAll(replace);
    }
    
    public static String encode(String raw){
        String encoded = null;
        try {
            encoded = URLEncoder.encode(raw.replaceAll(" ", "%20"), "UTF-8");
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(CompilerSocket.class.getName()).log(Level.SEVERE, null, ex);
        }
        return encoded;
    }
}
