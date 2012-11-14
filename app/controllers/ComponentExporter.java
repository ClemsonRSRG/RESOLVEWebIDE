package controllers;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Iterator;
import java.util.List;
import models.Project;
import models.User;
import models.UserComponent;
import models.UserEvent;
import org.apache.commons.lang.StringEscapeUtils;
import play.mvc.Controller;
import play.mvc.With;

@With(Secure.class)
public class ComponentExporter extends Controller {
    
    public static void exportComponents(String project){
        if(Security.isConnected()) {
            String email = Security.connected();
            User user = User.find("byEmail", email).first();
            String userComponents = "{\"project\":\"" + project + "\",\"components\":[";
            List<UserComponent> components = UserComponent.find("byAuthor_idAndProject", user.id, project).fetch();
            Iterator it = components.iterator();
            while(it.hasNext()){
                UserComponent uc = (UserComponent)it.next();
                userComponents += uc.toJson();
                if(it.hasNext()){
                    userComponents += ",";
                }
                UserEvent event = new UserEvent(uc.name, uc.pkg, uc.project,
                            "exportComponent", uc.content, uc.author);
                event.save();
            }
            userComponents += "]}";
            InputStream is = new ByteArrayInputStream(userComponents.getBytes());
            renderBinary(is, project + ".json");
        } 
    }
}
