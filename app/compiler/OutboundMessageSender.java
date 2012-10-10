package compiler;

import controllers.CompilerSocket;
import play.mvc.Http.Outbound;

public class OutboundMessageSender {
    private Outbound myOutbound;
    
    public OutboundMessageSender(Outbound outbound){
        myOutbound = outbound;
    }
    
    public void sendErrors(String job, String errors){
        String msg = "{\"job\":\"" + job + "\",";
        msg += "\"status\":\"error\",\"type\":\"error\",\"errors\":[{";
        msg += errors;
        msg += "}]}";
        myOutbound.send(msg);
    }
    
    public void sendBugs(String job, String bugs){
        String msg = "{\"job\":\"" + job + "\",";
        msg += "\"status\":\"error\",\"type\":\"bug\",\"bugs\":[{";
        msg += bugs;
        msg += "}]}";
        myOutbound.send(msg);
    }
    
    public void sendComplete(String job, String data){
        String msg = "{\"job\":\"" + job + "\",";
        msg += "\"status\":\"complete\",\"result\":\"";
        msg += CompilerSocket.encode(data);
        msg += "\"}";
        myOutbound.send(msg);
    }
}
