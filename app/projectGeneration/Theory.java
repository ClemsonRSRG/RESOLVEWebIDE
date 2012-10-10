/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package projectGeneration;

import java.io.File;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 *
 * @author Chuck
 */
public class Theory {
    private String name;
    private String dirName;
    private String body;
    private Boolean custom = false;

    public Theory(String fileName, String path){
        //name = n;
        name = fileName.substring(0, fileName.length() - 3);
        File f = new File(path);
        dirName = f.getParentFile().getName();

        boolean noComments = true;
        SourceFile sf = new SourceFile(path, noComments);
        body = sf.getContent();
    }

    public void setName(String n){
        name = n;
    }

    public String getName(){
        return name;
    }

    public String generateTheoryJSON(){
        StringBuilder sb = new StringBuilder();
        body = WorkspaceJsonGenerator.encode(body);
        sb.append("{");
        sb.append("\"type\":\"t\",");
        sb.append("\"id\":\"");
        sb.append(getComponentKey());
        sb.append("\",");
        sb.append("\"name\":\"");
        sb.append(name);
        sb.append("\",");
        sb.append("\"pkg\":\"");
        sb.append(dirName);
        sb.append("\",");
        sb.append("\"content\":\"");
        sb.append(body);
        sb.append("\",");
            sb.append("\"custom\":\"false\"");
        sb.append("}");
        return sb.toString();
    }
        
    private String getComponentKey(){
        StringBuilder sb = new StringBuilder();
        sb.append("theories");
        sb.append(".");
        sb.append(name);
        return sb.toString();
    }

    public String writeTheoryXML(){
        StringBuilder sb = new StringBuilder();
        body = WorkspaceJsonGenerator.encode(body);
        sb.append("<theory>");
        sb.append("<name>" + name + "</name>");
        sb.append("<body>" + body + "</body>");
        sb.append("<custom>false</custom>");
        sb.append("</theory>");
        return sb.toString();
    }

    public static boolean isTheory(File file){
        String s = file.getName();
        String enh = "([^\\s]+(\\.(?i)(mt))$)";
        Pattern p;
        Matcher m;
        p = Pattern.compile(enh);
        m = p.matcher(s);
        return m.matches();
    }

}
