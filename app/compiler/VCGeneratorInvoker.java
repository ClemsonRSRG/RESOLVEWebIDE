/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package compiler;

import edu.clemson.cs.r2jt.ResolveCompiler;
import edu.clemson.cs.r2jt.compilereport.CompileReport;
import play.mvc.Http;

/**
 *
 * @author Parker
 */
public class VCGeneratorInvoker {

    private ResolveCompiler r;
    private String[] args;
    private Http.Outbound myOutbound;
    
    public VCGeneratorInvoker(ResolveCompiler rc, String[] a, Http.Outbound outbound)
    {
        r = rc;
        args = a;
        myOutbound = outbound;
    }
    
    
    public void generateVcs(String job)
    {
        OutboundMessageSender outbound = new OutboundMessageSender(myOutbound);
        //Run the compiler
        try{
            r.compile(args);
            
        }
        catch(Exception ex){
            //obviously not too concerned about this situation ever happening
        }
        CompileReport cr = r.getReport();
        boolean errors = false;
        if(cr.hasErrors()){
            errors = true;
            outbound.sendErrors(job, cr.getErrors());
        }
        if(cr.hasBugReports()){
            errors = true;
            outbound.sendBugs(job, cr.getBugReports());
        }
        if(!errors){
            outbound.sendComplete(job, cr.getOutput());
        }
        
        /*StringBuffer opBuffer = new StringBuffer();
        String syntaxError = "false";

        opBuffer.append("<compile>");
        opBuffer.append("<genVcResults>");
        opBuffer.append("<compilerOutput>");

        try{
            r.compile(args);
            if(r.hasError()){
                syntaxError = "true";
            }
        }catch(Exception ex){
            
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

        String success = "false";
        if(cr.vcSuccess()){
            opBuffer.append("{"+cr.getOutput()+"}");
            success = "true";
        }
        opBuffer.append("<vcSuccess>" + success + "</vcSuccess>");
        opBuffer.append("</genVcResults>");
        opBuffer.append("</compile>");
        return opBuffer;*/
    }
    
}
