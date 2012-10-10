package models;

import javax.persistence.Entity;
import javax.persistence.Table;
import play.db.jpa.Model;

@Entity
@Table(name="UserComponents")
public class UserComponent extends Model {
    public String name;
    public String pkg;
    public String project;
    public String content;
    public String type;
    public UserComponent(String name, String pkg, String project, String content, String type){
        this.name = name;
        this.pkg = pkg;
        this.project = project;
        this.content = content;
        this.type = type;
    }
}
