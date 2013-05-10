package controllers;

import com.google.gson.Gson;
import play.*;
import play.mvc.*;

import java.util.*;
import java.util.logging.Level;
import models.Project;
import models.User;
import models.UserComponent;
import models.UserEvent;
import play.cache.Cache;

//import models.*;

//@With(Secure.class)
@With(Compress.class)
public class Interface extends Controller {
    @Before
    static void setConnectedUser() {
        if(Security.isConnected()) {
            String email = Security.connected();
            User user = User.find("byEmail", email).first();
            renderArgs.put("user", user);
        }
    }

    public static void index() {
        List<Project> projects = Project.getOpenProjects();
        String email = null;
        if(Security.isConnected()) {
            email = Security.connected();
            projects.addAll(Project.getUserProjects(email));
            projects.addAll(Project.getPrivateProjects());
        }
        Project proj = null;
        renderArgs.put("projects", projects);
        Long selectedProject = params.get("p", Long.class);
        //Long selectedProject = new Long(0);
        if(selectedProject != null){
            proj = Project.getProject(selectedProject, email);
            if(proj != null){
                String concept = params.get("c", String.class);
                String er = params.get("er", String.class);
                if(concept != null){
                    renderArgs.put("c", concept);
                    if(er != null){
                        renderArgs.put("er", er);
                    }
                }
                else{
                    String facility = params.get("f", String.class);
                    if(facility != null){
                        renderArgs.put("f", facility);
                    }
                }
                renderArgs.put("selectedProject", proj);
            }
            else{
                try {
                    Secure.login();
                } catch (Throwable ex) {
                    java.util.logging.Logger.getLogger(Interface.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
        }
        else{
            proj = Project.getDefault();
            renderArgs.put("selectedProject", proj);
        }
        
        /* Check if it is in research mode */
        String version = (String)Play.configuration.get("version");
        renderArgs.put("version", version);
        
        String userComponents = null;
        User currUser = null;
        if(email != null){
            userComponents = "{\"components\":[";
            currUser = User.find("byEmail", email).first();
            List<UserComponent> components = UserComponent.find("byAuthor_idAndProject", currUser.id, proj.name).fetch();
            Iterator it = components.iterator();
            while(it.hasNext()){
                UserComponent uc = (UserComponent)it.next();
                userComponents += uc.toJson();
                if(it.hasNext()){
                    userComponents += ",";
                }
            }
            userComponents += "]}";
            //System.out.println(userComponents);
        }
        renderArgs.put("ucs", userComponents);
        UserEvent event = new UserEvent("getIndex", proj.name, currUser);
        event.save();
        render();
    }

}