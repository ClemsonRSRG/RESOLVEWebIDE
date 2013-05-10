/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package compiler;

import edu.clemson.cs.r2jt.ResolveCompiler;
import edu.clemson.cs.r2jt.compilereport.CompileReport;
import play.mvc.Http;
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
    private Http.Outbound myOutbound;
    
    //public VerifyInvoker(String cmpDir, int proTime, StringBuffer sb)
    public VerifyInvoker(ResolveCompiler rc, String[] a, Http.Outbound outbound)
    {
        r = rc;
        args = a;
        myOutbound = outbound;
    }

    
    public void verifyResolve(String job){
        OutboundMessageSender outbound = new OutboundMessageSender(myOutbound);
        //Run the compiler
        try{
            // Pass in a listener to the prover
            WsListener listener = new WsListener(outbound);
            r.compile(args, listener);            
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
    }    
}
