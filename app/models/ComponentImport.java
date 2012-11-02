package models;

import java.util.List;
import play.db.jpa.Model;

public class ComponentImport extends Model {
    public String project;
    public List<UserComponent> importComponents;
}
