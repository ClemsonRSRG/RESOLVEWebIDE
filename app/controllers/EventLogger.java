package controllers;

import com.google.gson.Gson;
import java.util.Date;
import models.User;
import models.UserEvent;
import org.apache.commons.lang.StringEscapeUtils;
import play.mvc.Controller;

public class EventLogger extends Controller {
    public static void logEvent(){
        String body = params.get("body");
        body = StringEscapeUtils.unescapeJava(body);
        String target = body.substring(1, body.length() - 1);
        //System.out.println(body);
        //if(job.compareTo("create") == 0){
        UserEvent event = new Gson().fromJson(target, UserEvent.class);
        if(Security.isConnected()) {
            String email = Security.connected();
            event.author = User.find("byEmail", email).first();
        }
        event.eventDate = new Date();
        event.save();
    }
}
