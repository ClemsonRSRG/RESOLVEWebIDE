package models;

import java.util.List;
import javax.persistence.Entity;
import javax.persistence.Table;
import play.db.jpa.Model;

/**
 *
 * @author Chuck
 */
@Entity
@Table(name="projects")
public class Project extends Model {
    public String name;
    public String ownerEmail;
    public String jsonRep;
    public String jsonRepDate;
    public boolean openProject;
    public boolean standardHidden;
    public boolean defaultProject;
    
    public Project(String name, String ownerEmail, Boolean openProject,
                    Boolean standardHidden){
        this.name = name;
        this.ownerEmail = ownerEmail;
        this.jsonRep = "";
        this.jsonRepDate = "";
        this.openProject = openProject;
        this.standardHidden = standardHidden;
        this.defaultProject = false;
    }
    
    public static List<Project> getOpenProjects(){
        return find("byOpenProject", true).fetch();
    }
    
    public static List<Project> getUserProjects(String email){
        return find("byOwnerEmailAndOpenProject", email, false).fetch();
    }
    
    public static List<Project> getPrivateProjects(){
        return find("byOwnerEmailIsNullAndOpenProject", false).fetch();
    }
    
    public static Project getDefault(){
        return find("byDefaultProject", true).first();
    }
    
    public static Project getProject(Long name, String email){
        Project proj = find("byIdAndOpenProject", name, true).first();
        if(proj == null){ // project is not open
            proj = find("byIdAndOwnerEmail", name, email).first();
        }
        return proj;
    }
}
