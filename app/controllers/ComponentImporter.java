package controllers;

import com.google.gson.Gson;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.Iterator;
import java.util.List;
import models.ComponentImport;
import models.User;
import models.UserComponent;
import models.UserEvent;
import org.apache.commons.lang.StringEscapeUtils;
import play.mvc.Controller;
import projectGeneration.WorkspaceJsonGenerator;

/**
 *
 * @author Chuck
 */
public class ComponentImporter extends Controller {
    public static void importComponents(){
        if(Security.isConnected()) {
            String email = Security.connected();
            User user = User.find("byEmail", email).first();
            StringBuilder output = new StringBuilder("{\"actions\":[");
            String json = params.get("body");
            //json = StringEscapeUtils.unescapeJava(json);
            ComponentImport importing = new Gson().fromJson(json, ComponentImport.class);
            Iterator it = importing.importComponents.iterator();
            while(it.hasNext()){
                UserComponent uc = (UserComponent) it.next();
                uc.author = user;
                uc.content = WorkspaceJsonGenerator.decode(uc.content);
                uc.setCreatedDate();
                

                UserComponent existingUc = UserComponent.find("byNameAndPkgAndProjectAndAuthor",
                                        uc.name, uc.pkg, uc.project, user).first();
                if(existingUc != null){
                    output.append("{\"action\":\"Deleting\",");
                    output.append("\"name\":\"");
                    output.append(existingUc.name);
                    UserComponent deletedUc = existingUc.delete();
                    boolean deleted = (deletedUc != null)?true:false;
                    output.append("\",\"success\":\"");
                    output.append(deleted);
                    output.append("\"},");
                    UserEvent event = new UserEvent(deletedUc.name, deletedUc.pkg, deletedUc.project,
                            "importDeleteComponent", deletedUc.content, deletedUc.author);
                    event.save();
                }
                boolean created = uc.create();
                output.append("{\"action\":\"Adding\",");
                output.append("\"name\":\"");
                output.append(uc.name);
                output.append("\",\"success\":\"");
                output.append(created);
                output.append("\"}");
                
                if(it.hasNext()){
                    output.append(",");
                }
                UserEvent event = new UserEvent(uc.name, uc.pkg, uc.project,
                            "importComponent", uc.content, uc.author);
                event.save();
            }
            output.append("]}");
            renderJSON(output);
            // @todo actually write them to the database (and overwrite if necessary)
            
            //System.out.print(output);
            
            /*String userComponents = "{\"project\":\"" + project + "\",\"components\":[";
            List<UserComponent> components = UserComponent.find("byAuthor_idAndProject", user.id, project).fetch();
            Iterator it = components.iterator();
            while(it.hasNext()){
                UserComponent uc = (UserComponent)it.next();
                userComponents += uc.toJson();
                if(it.hasNext()){
                    userComponents += ",";
                }
            }
            userComponents += "]}";
            InputStream is = new ByteArrayInputStream(userComponents.getBytes());
            renderBinary(is, project + ".json");*/
        } 
    }
}
