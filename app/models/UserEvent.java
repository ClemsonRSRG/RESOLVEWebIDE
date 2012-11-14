package models;

import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import play.db.jpa.Model;

@Entity
@Table(name="userEvents")
public class UserEvent extends Model {
    public String name;
    public String pkg;
    public String project;
    public String eventType;
    //@Lob
    public String content;
    public Date eventDate;
    @ManyToOne
    public User author;
    
    public UserEvent(String name, String pkg, String project, String eventType,
                        String content, User author){
        this.name = name;
        this.pkg = pkg;
        this.project = project;
        this.eventType = eventType;
        this.content = content;
        this.eventDate = new Date();
        this.author = author;
    }
    
    public UserEvent(String eventType, String project, User author){
        this.project = project;
        this.eventType = eventType;
        this.eventDate = new Date();
        this.author = author;
    }
}
