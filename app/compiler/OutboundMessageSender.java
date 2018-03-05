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
        safeSend(msg);
    }
    
    public void sendBugs(String job, String bugs){
        String msg = "{\"job\":\"" + job + "\",";
        msg += "\"status\":\"error\",\"type\":\"bug\",\"bugs\":[{";
        msg += bugs;
        msg += "}]}";
        safeSend(msg);
    }
    
    public void sendComplete(String job, String data){
        String msg = "{\"job\":\"" + job + "\",";
        msg += "\"status\":\"complete\",\"result\":\"";
        msg += CompilerSocket.encode(data);
        msg += "\"}";
        safeSend(msg);
    }
    
    public void sendVcResult(Boolean result, String id, long proofDuration, long timeout){
        String msg = "{\"job\":\"verify\",\"status\":\"processing\",";
        msg += "\"result\":{\"id\":\"" + id + "\",\"result\":\"";
        if(result) {
            msg += "Proved, " + proofDuration + " ms";
        }
        else {
            if (timeout != 0) {
                if (proofDuration < timeout) {
                    msg += "Unable to prove, " + proofDuration + " ms";
                } else {
                    msg += "Timeout after " + timeout + " ms";
                }
            }
            else {
                msg += "Skipped";
            }
        }
        msg += "\"}";
        msg += "}";
        safeSend(msg);
    }

    private void safeSend(String msg) {
        // YS: An helper method that only sends a message if the outbounds is still open
        if (myOutbound.isOpen()) {
            myOutbound.send(msg);
        }
    }
}
