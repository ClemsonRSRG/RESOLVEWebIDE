package compiler;

import edu.clemson.cs.r2jt.proving2.Metrics;
import edu.clemson.cs.r2jt.proving2.ProverListener;
import edu.clemson.cs.r2jt.proving2.model.PerVCProverModel;

/**
 * Created with IntelliJ IDEA.
 * User: chuck
 * Date: 4/3/13
 * Time: 1:45 PM
 * To change this template use File | Settings | File Templates.
 */
public class WsListener implements ProverListener {
    
    private OutboundMessageSender myOutbound;
    
    public WsListener(OutboundMessageSender outbound) {
        myOutbound = outbound;
    }
    
    @Override
    public void progressUpdate(double v) {
        //To change body of implemented methods use File | Settings | File Templates.
        //System.out.println("########################### update: "+v);
    }

    @Override
    public void vcResult(boolean b, PerVCProverModel perVCProverModel, Metrics metrics) {
        //To change body of implemented methods use File | Settings | File Templates.
        System.out.println("############################# result: "+b);
        myOutbound.sendVcResult(b, perVCProverModel.getTheoremName());
    }
}