/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package compiler;

import controllers.CompilerSocket;
import edu.clemson.cs.r2jt.ResolveCompiler;
import edu.clemson.cs.r2jt.compilereport.CompileReport;
import edu.clemson.cs.r2jt.data.MetaFile;
import java.net.URLEncoder;
import java.util.HashMap;
import play.mvc.Http.Outbound;
//import webui.core.UserEvent;

public class PrettyTranslatorInvoker {
    
    private String args[];
    private ResolveCompiler r;
    private Outbound myOutbound;
    
    public PrettyTranslatorInvoker(ResolveCompiler c, String a[], Outbound outbound)
    {
        args = a;
        r = c;
        myOutbound = outbound;
    }
    
    public void generateJava(String job)
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
    }
    
}
