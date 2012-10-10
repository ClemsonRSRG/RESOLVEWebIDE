package compiler;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



import edu.clemson.cs.r2jt.ResolveCompiler;
import edu.clemson.cs.r2jt.compilereport.CompileReport;
import edu.clemson.cs.r2jt.data.MetaFile;
import java.io.PrintWriter;
import java.util.HashMap;
import javax.servlet.http.HttpSession;

/**
 *
 * @author Chuck
 */
public class CompilerLauncher implements Runnable {

    private MetaFile inputFile;
    private String args[];
    PrintWriter out;
    HttpSession session;
    private HashMap<String,MetaFile> myUserFileMap;
    private boolean launchInThread = false;
    private long tid = new Long(0);

    private Boolean proved = false;
    private String syntaxError = "false";

    CompilerLauncher(String[] args, MetaFile inputFile, PrintWriter out,
                        boolean launchInThread, HttpSession session,
                        HashMap<String,MetaFile> userFileMap){
        this.inputFile = inputFile;
        this.args = args;
        this.out = out;
        this.launchInThread = launchInThread;
        this.session = session;
        myUserFileMap = userFileMap;
    }

    /*public void launch(){
        if(launchInThread){
            Thread t = new Thread(this);
            tid = t.getId();
            t.setPriority(Thread.MIN_PRIORITY);
            t.start();
        }
        else{
            run();
        }
    }*/

    public void run() {
        CompileReport cr = null;
        //WebCompileReport wcr = null;
        try{
            ResolveCompiler r = new ResolveCompiler(args, inputFile, myUserFileMap);
            cr = r.getReport();
            //wcr = new WebCompileReport();
            session.setAttribute("compileReport", cr);
            r.compile(args);
            //redirect.flush();
            if(cr.hasError()){
                //wcr.setError();
                syntaxError = "true";
            }
            if(cr.proveSuccess()){
                //wcr.setProveSuccess();
                proved = true;
            }
            //wcr.setProveVCs(cr.getProveVCs());
            //session.setAttribute("compileReport", wcr);
            //r.resetReport();
            //session.setAttribute("proveVCs", new String(cr.getProveVCs()));
            session.removeAttribute("tid");
        }catch(Exception ex){
            //System.out.println("Error within resolve compiler");
            //System.out.println();
            //System.out.println(ex);
            //System.out.println();
            //System.out.println(ex.toString());
        }
        if(launchInThread){
            session.setAttribute("compileReport", cr);
        }
    }

    /*public long getTid(){
        return tid;
    }*/

    /*Boolean getProven() {
        return proved;
    }

    String getSyntaxError() {
        return syntaxError;
    }*/

    /*class CompileReport {

    }*/

}
