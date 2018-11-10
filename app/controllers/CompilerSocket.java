package controllers;

import com.google.gson.Gson;
import compiler.*;
import edu.clemson.cs.r2jt.ResolveCompiler;
import edu.clemson.cs.r2jt.data.MetaFile;
import edu.clemson.cs.r2jt.data.ModuleKind;
import edu.clemson.cs.r2jt.rewriteprover.ProverListener;
import java.io.File;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Random;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import models.User;
import models.UserComponent;
import play.Play;
import play.db.jpa.GenericModel.JPAQuery;
import play.mvc.Http.WebSocketEvent;
import play.mvc.WebSocketController;
import webui.utils.WebSocketWriter;
import play.mvc.Http.WebSocketClose;
import play.mvc.Http.WebSocketFrame;
import models.CompilerResult;

/**
 *
 * @author Chuck
 */
public class CompilerSocket extends WebSocketController {
    public static void compile(String job, String project/*, String target, String project*/) {
        String target = "";
        boolean recvCloseEvent = false;
        while(inbound.isOpen() && !recvCloseEvent){
            WebSocketEvent e = await(inbound.nextEvent());

            // YS: Check to see if we actually got some frame data
            if (e instanceof WebSocketFrame) {
                target = ((WebSocketFrame)e).textData;
                if(!target.equals("")){
                    break;
                }
            }
            // YS: Don't execute the logic for compile if the client 
            // closed the socket.
            else if (e instanceof WebSocketClose) {
                recvCloseEvent = true;
            }
        }

        // YS: Don't need to execute any of the logic if the socket is closed.
        if (recvCloseEvent || !inbound.isOpen()) {
            return;
        }

        UserComponent uc = new Gson().fromJson(target, UserComponent.class);
        WebSocketWriter myWsWriter = new WebSocketWriter(outbound);
        String slash = System.getProperty("file.separator");
        String relativeMainDir = "RESOLVE" + slash + "Main" + slash;
        uc.content = decode(uc.content);
        //UserComponent uc = new Gson().fromJson(target, UserComponent.class);
        String workingDir = (String)Play.configuration.get("workingdir");
        String compilerMainDir = workingDir + "workspaces" + slash + uc.project + slash + relativeMainDir;
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
        User user = null;
        if(Security.isConnected()) {
            String email = Security.connected();
            user = User.find("byEmail", email).first();
            JPAQuery query = UserComponent.find("byAuthor_idAndProject", user.id, project);
            List<UserComponent> ucs = query.fetch();
            for(UserComponent c : ucs){
                MetaFile umf2 = getTargetMetaFile(c);
                String key2 = "";
                if(!umf2.getMyPkg().equals("")){
                    key2 += umf2.getMyPkg() + ".";
                }
                key2 += umf2.getMyFileName();
                if(!key2.equals(key)){
                    userFileMap.put(key2, umf2);
                }
                    
            }
        }

        CompilerResult cr = new CompilerResult(uc.name, uc.pkg, project, uc.type, job, uc.content, null, 0, user, uc.parent);

        if(job.compareTo("translateJava") == 0){
            //Constructing compiler
            String[] args = {"-maindir", compilerMainDir, "-javaTranslate", 
                "-webinterface"};
            r = new ResolveCompiler(args, umf, userFileMap);

            //invoking the translator with the compiler specially created for
            //translating
            JavaTranslatorInvoker gji = new JavaTranslatorInvoker(r, args, outbound);
            //outbound.send(gji.generateJava().toString());
            gji.generateJava(job, cr);//event);
        }
        else if(job.compareTo("genVCs") == 0){
            //Constructing compiler
/*            String[] args = {"-maindir", compilerMainDir, "-vcs", 
                        "-listVCs", "-webinterface"};*/
	    String[] args = {"-maindir", compilerMainDir, "-altVCs",
			"-webinterface"};
            r = new ResolveCompiler(args, umf, userFileMap);

            VCGeneratorInvoker vcgi = new VCGeneratorInvoker(r, args, outbound);
            vcgi.generateVcs(job, cr);
        }
        else if(job.compareTo("verify") == 0){
            //Constructing compiler
/*            String[] args = {"-maindir", compilerMainDir, "-vcs", 
                        "-listVCs", "-newprove", "-webinterface",
                        "-timeout", "15000"};*/
	    String[] args = {"-maindir", compilerMainDir, "-altVCs",
			"-newprove", "-webinterface",
			"-timeout", "7000"};
            r = new ResolveCompiler(args, umf, userFileMap);

            VerifyInvoker vcgi = new VerifyInvoker(r, args, outbound);
            vcgi.verifyResolve(job, cr);
        }
	else if(job.compareTo("verify2") == 0){
/*	    String[] args = {"-maindir", compilerMainDir, "-vcs",
                        "-listVCs", "-ccprove", "-webinterface",
			"-timeout", "15000"};*/
	    String[] args = {"-maindir", compilerMainDir, "-altVCs",
			"-ccprove", "-webinterface",
			"-timeout", "3000", "-num_tries", "3"};
            r = new ResolveCompiler(args, umf, userFileMap);

            VerifyInvoker vcgi = new VerifyInvoker(r, args, outbound);
            vcgi.verifyResolve(job, cr);
	}
        else if(job.compareTo("buildJar") == 0){
            
            // we create a temporary version of the workspace with a hierarchy
            // matching the userfiles for writing Java source and bytecode for the jar
            String tempDir = Integer.toHexString(new Integer(new Random().nextInt())) +
                                "_temp";
            String tempWsDir = workingDir + "tempFiles" + slash +
                                 tempDir + slash;
            String tempMainDir = tempWsDir + "RESOLVE" + slash + "Main" + slash;
            File tempWsDirFile = new File(tempWsDir);
            tempWsDirFile.mkdir();
            for(MetaFile mf: userFileMap.values()){
                mf.setIsCustomLoc();
                mf.setMyCustomPath(tempMainDir);
                File tempFile = mf.getMyCustomFile();
                tempFile.getParentFile().mkdirs();
            }
            umf.setJarTempDir(tempWsDir + "RESOLVE" + slash);
            
            //Constructing compiler
            String[] args = {"-maindir", compilerMainDir, 
                        "-createJar", "-verboseJar", "-webinterface"};
            r = new ResolveCompiler(args, umf, userFileMap);

            JarBuilderInvoker jbi = new JarBuilderInvoker(r, args, tempDir, outbound);
            jbi.generateFacilityJar(job, umf, cr);
        }
        else if(job.compareTo("prettyJavaTranslate") == 0){
            String[] args = {"-maindir", compilerMainDir, "-prettyJavaTranslate", 
                "-webinterface"};
            r = new ResolveCompiler(args, umf, userFileMap);

            //invoking the translator with the compiler specially created for
            //translating
            JavaTranslatorInvoker gji = new JavaTranslatorInvoker(r, args, outbound);
            //outbound.send(gji.generateJava().toString());
            gji.generateJava(job, cr);//event);
        }
        else if(job.compareTo("prettyCTranslate") == 0){
            String[] args = {"-maindir", compilerMainDir, "-prettyCTranslate", 
                "-webinterface"};
            r = new ResolveCompiler(args, umf, userFileMap);

            //invoking the translator with the compiler specially created for
            //translating
            JavaTranslatorInvoker gji = new JavaTranslatorInvoker(r, args, outbound);
            //outbound.send(gji.generateJava().toString());
            gji.generateJava(job, cr);//event);
        }
        else if(job.compareTo("analyze") == 0){
            String[] args = {"-maindir", compilerMainDir, "-webinterface"};
            r = new ResolveCompiler(args, umf, userFileMap);

            //invoking the translator with the compiler specially created for
            //translating
            JavaTranslatorInvoker gji = new JavaTranslatorInvoker(r, args, outbound);
            //outbound.send(gji.generateJava().toString());
            gji.generateJava(job, cr);//event);
        }
        //System.out.println("done!");
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
        if(kind.equals(ModuleKind.FACILITY)){
            //pkg = "Facilities";
        }
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
        else if(fileType.equals("t")){
            kind = ModuleKind.THEORY;
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
