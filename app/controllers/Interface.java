package controllers;

import play.*;
import play.mvc.*;

import java.util.*;
import java.util.logging.Level;
import models.Project;
import models.User;
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
        /*String userName = "default";
        String userSession = session.getId();
        Boolean loggedIn = Cache.get(userSession + "_status", Boolean.class);
        User user = null;
        if(loggedIn != null){
            user = Cache.get(userSession + "_user", User.class);
            // --if(loggedIn){
                // --user = Cache.get(userSession + "_user", User.class);
                // --Cache.set(userSession + "_user", user);
            // --}
        }
        else{
            Cache.set(userSession + "_status", false);
            // @todo set to default user profile
            user = User.find("byEmail", "ctcook@g.clemson.edu").first();
            Cache.set(userSession + "_user", user);
        }*/
        List<Project> projects = Project.getOpenProjects();
        String email = null;
        if(Security.isConnected()) {
            email = Security.connected();
            projects.addAll(Project.getUserProjects(email));
        }
        renderArgs.put("projects", projects);
        Long selectedProject = params.get("p", Long.class);
        //Long selectedProject = new Long(0);
        if(selectedProject != null){
            Project proj = Project.getProject(selectedProject, email);
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
            renderArgs.put("selectedProject", Project.getDefault());
        }
        render();
    }

}