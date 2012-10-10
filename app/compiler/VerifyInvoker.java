/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package compiler;

import edu.clemson.cs.r2jt.ResolveCompiler;
import edu.clemson.cs.r2jt.compilereport.CompileReport;
//import org.apache.catalina.websocket.WsOutbound;
//import webui.utils.WebSocketWriter;
//import webui.core.UserEvent;

/**
 *
 * @author Parker
 */
public class VerifyInvoker {

    private ResolveCompiler r;
    private String[] args;
    //private WsOutbound myWsOutbound;
    
    //private variables
    //private String          compilerMainDirLoc;
    //private int             proverTimeoutLength;
    //private StringBuffer    outputBuffer;
    
    //public VerifyInvoker(String cmpDir, int proTime, StringBuffer sb)
    public VerifyInvoker(ResolveCompiler rc, String[] a)//, WsOutbound outbound)
    {
        r = rc;
        args = a;
        //myWsOutbound = outbound;
        //compilerMainDirLoc = cmpDir;
        //proverTimeoutLength = proTime;
        //outputBuffer = sb;
    }

    
    public StringBuffer verifyResolve(){
        //WebSocketWriter writer = new WebSocketWriter(myWsOutbound);
        StringBuffer opBuffer = new StringBuffer();
        StringBuffer outputBuffer = new StringBuffer();
        Boolean proved = false;
        String syntaxError = "true";
        String proveComplete = "false";
        String proveVCs = "";
        try{
            /*r.wsCompile(args, writer);
            if(r.hasError()){
                syntaxError = "true";
            }*/
        }catch(Exception ex){
            
        }

        opBuffer.append("<compile>");
        opBuffer.append("<verifyResults>");
        opBuffer.append("<compilerOutput>");
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
        opBuffer.append("<result>");
        proved = cr.proveSuccess();
        if(proved){
            //writer.writeTextMessage("Correct");
            opBuffer.append("CORRECT");
        }
        else{
            //writer.writeTextMessage("Not Correct");
            opBuffer.append("NOT CORRECT");
        }
        opBuffer.append("</result>");
        
        opBuffer.append("<vc>");
        //String asrtFile = getNewFilePath(conceptDir, "assert", hex, fileType);
        //readFile(out, asrtFile, "VC");
        //Stack<String> userFileNames = (Stack<String>) session.getAttribute("userFileNames");
        //userFileNames.push(asrtFile);
        opBuffer.append("</vc>");

        String success = "false";
        if(cr.proveSuccess()){
            opBuffer.append("<proofs>"+cr.getProveVCs()+"</proofs>");
            success = "true";
        }
        opBuffer.append("<verifySuccess>" + success + "</verifySuccess>");
        opBuffer.append("</verifyResults>");
        //opBuffer.append(printHTMLHex(hex));
        opBuffer.append("</compile>");
        

        //CompilerLauncher c = new CompilerLauncher(args, inputFile, out, false, session, userFileMap);
        //Thread t = new Thread(c);
        //session.setAttribute("tid", t);
        //String proveFile = getNewFilePath(conceptDir, "proof", hex, fileType);
        //userFileNames.push(proveFile);
        //session.setAttribute("proofFile", proveFile);
        //t.start();
        //try {
            //out.println("wait");
            //Thread.sleep(3000);
        //} catch (InterruptedException ex) {
            //Logger.getLogger(WebCompiler.class.getName()).log(Level.SEVERE, null, ex);
        //}
        /*if(session.getAttribute("tid") == null){
            CompileReport cr = (CompileReport)session.getAttribute("compileReport");
            proved = cr.proveSuccess();
            if(!cr.hasError()){
                syntaxError = "false";
                proveComplete = "true";
                proveVCs = cr.getProveVCs();
                if(proveVCs == null){
                proveVCs = (String) session.getAttribute("proveVCs");
                }
                //event.setMyProverResults(proveVCs);
                outputBuffer.append(proveVCs);
            }
            else{
                outputBuffer.append("{\"results\":[{");
                if(cr.hasErrors()){
                    opBuffer.append(cr.getErrors());
                    event.setMyCompileSuccess(false);
                    event.setMyCompilerErrors(cr.getErrors());
                }
                if(cr.hasBugReports()){
                    if(cr.hasErrors()){
                        opBuffer.append("},{");
                    }
                    opBuffer.append(cr.getBugReports());
                    event.setMyCompileSuccess(false);
                    event.setMyBugReports(cr.getBugReports());
                }
                outputBuffer.append("}]}");
            }
        }
        else{
            CompileReport cr = (CompileReport)session.getAttribute("compileReport");
            synchronized(cr){
                if(!cr.hasError()){
                    syntaxError = "false";
                }
                proveVCs = cr.getProveVCs();
            }
        }
        if(syntaxError.equals("true")){
            opBuffer.append(encode(outputBuffer.toString()));
        }
        else{
            opBuffer.append(outputBuffer.toString());
        }
        outputBuffer.delete(0, outputBuffer.length());
        opBuffer.append("</compilerOutput>");
        opBuffer.append("<proveComplete>" + proveComplete + "</proveComplete>");
        opBuffer.append("");
        opBuffer.append("<syntaxError>" + syntaxError + "</syntaxError>");
        opBuffer.append("<result>");
        if(proved){
            opBuffer.append("CORRECT");
        }
        else{
            opBuffer.append("NOT CORRECT");
        }
        opBuffer.append("</result>");
        
        opBuffer.append("<vc>");
        String asrtFile = getNewFilePath(conceptDir, "assert", hex, fileType);
        //readFile(out, asrtFile, "VC");
        Stack<String> userFileNames = (Stack<String>) session.getAttribute("userFileNames");
        userFileNames.push(asrtFile);
        opBuffer.append("</vc>");

        opBuffer.append("</verifyResults>");
        opBuffer.append(printHTMLHex(hex));
        opBuffer.append("</compile>");
        //out.flush();*/
        //System.err.flush();
        //System.out.flush();
        return opBuffer;
    }
    
    
    private String printHTMLHex(String toPrint)
    {
        String output = "";
        output += "<hex>" + toPrint + "</hex>";
        output += "<files>";
        output += "</files>";
        return output;
    }
    
    
}
