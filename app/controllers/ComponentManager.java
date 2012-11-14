package controllers;

import com.google.gson.Gson;
import models.User;
import models.UserComponent;
import models.UserEvent;
import org.apache.commons.lang.StringEscapeUtils;
import play.mvc.Controller;
import play.mvc.With;

@With(Secure.class)
public class ComponentManager extends Controller {
    public static void add(String job, String target){
        if(Security.isConnected()) {
            String email = Security.connected();
            User user = User.find("byEmail", email).first();
            String body = params.get("body");
            body = StringEscapeUtils.unescapeJava(body);
            target = body.substring(1, body.length() - 1);
            UserComponent uc = new Gson().fromJson(target, UserComponent.class);
            uc.author = user;
            uc.setCreatedDate();
            uc.create();
            UserEvent event = new UserEvent(uc.name, uc.pkg, uc.project,
                        "createComponent", uc.content, uc.author);
            event.save();
        } 
    }
    
    public static void update(String job, String target){
        if(Security.isConnected()) {
            String email = Security.connected();
            User user = User.find("byEmail", email).first();
            String body = params.get("body");
            body = StringEscapeUtils.unescapeJava(body);
            target = body.substring(1, body.length() - 1);
            UserComponent updatedUc = new Gson().fromJson(target, UserComponent.class);
            UserComponent uc = UserComponent.find("byNameAndPkgAndProjectAndAuthor",
                                    updatedUc.name, updatedUc.pkg, updatedUc.project, user).first();
            uc.content = StringEscapeUtils.unescapeJava(updatedUc.content);
            uc.save();
            UserEvent event = new UserEvent(uc.name, uc.pkg, uc.project,
                        "saveComponent", uc.content, uc.author);
            event.save();
        } 
    }
    
    public static void del(String target){
        if(Security.isConnected()) {
            String email = Security.connected();
            User user = User.find("byEmail", email).first();
            UserComponent updatedUc = new Gson().fromJson(target, UserComponent.class);
            UserComponent uc = UserComponent.find("byNameAndPkgAndProjectAndAuthor",
                                    updatedUc.name, updatedUc.pkg, updatedUc.project, user).first();
            uc.delete();
            UserEvent event = new UserEvent(uc.name, uc.pkg, uc.project,
                        "deleteComponent", uc.content, uc.author);
            event.save();
        } 
    }
    
    public static void rename(String job, String newName, String target){
        if(Security.isConnected()) {
            String email = Security.connected();
            User user = User.find("byEmail", email).first();
            UserComponent updatedUc = new Gson().fromJson(target, UserComponent.class);
            UserComponent uc = UserComponent.find("byNameAndPkgAndProjectAndAuthor",
                                    updatedUc.name, updatedUc.pkg, updatedUc.project, user).first();
            uc.name = newName;
            uc.save();
            UserEvent event = new UserEvent(uc.name, uc.pkg, uc.project,
                        "renameComponent", uc.content, uc.author);
            event.save();
        } 
    }
}
