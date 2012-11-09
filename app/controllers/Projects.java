package controllers;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import models.Project;
import models.User;
import play.Play;
import play.mvc.*;
import projectGeneration.WorkspaceJsonGenerator;

@With(Secure.class)
public class Projects extends Controller {
    
    @Before
    static void setConnectedUser() {
        if(Security.isConnected()) {
            String email = Security.connected();
            User user = User.find("byEmail", email).first();
            renderArgs.put("user", user);
        }
    }
    
    public static void projects(){
        List<Project> projects = Project.getOpenProjects();
        String email = null;
        if(Security.isConnected()) {
            email = Security.connected();
            projects.addAll(Project.getUserProjects(email));
        }
        renderArgs.put("projects", projects);
        render();
    }
    
    public static void updateProject(){
        Long id = params.get("id", Long.class);
        String openProject = params.get("openProject", String.class);
        String standardHidden = params.get("standardHidden", String.class);
        String defaultProject = params.get("defaultProject", String.class);
        boolean open = openProject != null;
        boolean standard = standardHidden != null;
        boolean defaultP = defaultProject != null;
        if(update(id, open, standard, defaultP)){
            
        }
        projects();
    }
    
    public static boolean update(Long id,
                                    boolean openProject,
                                    boolean standardHidden,
                                    boolean defaultProject){
        boolean success = false;
        try {
            Project project = Project.findById(id);
            project.openProject = openProject;
            project.standardHidden = standardHidden;
            project.defaultProject = defaultProject;
            String slash = System.getProperty("file.separator");
            String workspacesDir = (String)Play.configuration.get("workingdir") + slash + "workspaces" + slash;
            WorkspaceJsonGenerator jsonGen = new WorkspaceJsonGenerator(workspacesDir);
            String jsonRep = jsonGen.generateJSON(project.name, project.standardHidden);
            if(jsonRep != null){
                project.jsonRep = jsonRep;
                project.jsonRepDate = new Date().toString();
                success = true;
            }
            else{
                System.out.println("error generating JSON");
            }
            project.save();
        } catch (IOException ex) {
            Logger.getLogger(Projects.class.getName()).log(Level.SEVERE, null, ex);
        } finally{
            return success;
        }
    }
    
    public static void addproject(){
        String email = Security.connected();
        User user = User.find("byEmail", email).first();
        //Long id = params.get("id", Long.class);
        String name = params.get("name", String.class);
        String openProject = params.get("openProject", String.class);
        String standardHidden = params.get("standardHidden", String.class);
        String defaultProject = params.get("defaultProject", String.class);
        Project project = new Project(name, email, openProject != null, standardHidden != null);
        //project.id = 6;//Project.count();
        project.save();
        if(update(project.id, openProject != null, standardHidden != null, false)){
            
        }
        projects();
    }
}
