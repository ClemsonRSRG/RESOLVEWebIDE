package models;

import java.util.Date;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.*;
import javax.persistence.Table;
import org.apache.commons.lang.StringEscapeUtils;
import play.db.jpa.Model;
import projectGeneration.WorkspaceJsonGenerator;

@Entity
@Table(name="userComponents")
public class UserComponent extends Model {
    public String name;
    public String pkg;
    public String project;
    public String type;
    public String parent;
    public Date createdAt;
    
    @Lob
    public String content;
    
    @ManyToOne
    public User author;
    
    public UserComponent(String name, String pkg, String project, String content, String type){
        this.name = name;
        this.pkg = pkg;
        this.project = project;
        this.content = content;
        this.type = type;
        this.author = null;
        this.createdAt = new Date();
    }
    
    public void setCreatedDate(){
        this.createdAt = new Date();
    }
    
    public String toJson(){
        StringBuilder json = new StringBuilder();
        json.append("{");
        json.append("\"name\":\"");
        json.append(this.name);
        json.append("\",");
        json.append("\"pkg\":\"");
        json.append(this.pkg);
        json.append("\",");
        json.append("\"project\":\"");
        json.append(this.project);
        json.append("\",");
        json.append("\"content\":\"");
        //json.append(this.content);
        json.append(WorkspaceJsonGenerator.encode(this.content));
        json.append("\",");
        json.append("\"parent\":\"");
        json.append(this.parent);
        json.append("\",");
        json.append("\"type\":\"");
        json.append(this.type);
        json.append("\"");
        json.append("}"); 
        return json.toString();
    }
    
    /*public List<UserComponent> getUserComponents(User author){
        JPAQuery userComponents = find("byAuthor", author, true);
        return userComponents;
    }*/
}
