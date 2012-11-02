/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package projectGeneration;

/**
 *
 * @author ctcook
 */
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Realization {
	private String name;
        private String dirName;
	private String body;
        private String type;
        private String parent;

	public Realization(String n, String d, String path, String t, String parent){
		name = n;
                dirName = d;
                type = t;
                this.parent = parent;

                boolean noComments = true;
		SourceFile sf = new SourceFile(path, noComments);
		body = sf.getContent();
	}

	public static String getName(String s){
		Pattern p = Pattern.compile("[.\\s]+");
		String[] results = p.split(s);
		return results[0];
	}

	public static boolean isRealiz(String s){
		String enh = "([^\\s]+(\\.(?i)(rb))$)";
		Pattern p;
		Matcher m;
		p = Pattern.compile(enh);
		m = p.matcher(s);
		return m.matches();
	}

	public String generateRealizJSON(){
            StringBuilder sb = new StringBuilder();
            body = WorkspaceJsonGenerator.encode(body);
            sb.append("{");
            sb.append("\"type\":\"");
            sb.append(type);
            sb.append("\",");
            sb.append("\"id\":\"");
            sb.append(getComponentKey());
            sb.append("\",");
            sb.append("\"name\":\"");
            sb.append(name);
            sb.append("\",");
            sb.append("\"pkg\":\"");
            sb.append(dirName);
            sb.append("\",");
            sb.append("\"parent\":\"");
            sb.append(parent);
            sb.append("\",");
            sb.append("\"custom\":\"false\",");
            sb.append("\"content\":\"");
            sb.append(body);
            sb.append("\"");
            sb.append("}");
            return sb.toString();
	}
        
        private String getComponentKey(){
            StringBuilder sb = new StringBuilder();
            sb.append(dirName);
            sb.append(".");
            sb.append(name);
            return sb.toString();
        }

	public String writeRealizXML(){
            StringBuilder sb = new StringBuilder();
            body = WorkspaceJsonGenerator.encode(body);
            sb.append("<realization>");
            sb.append("<realiz_name>" + name + "</realiz_name>");
            sb.append("<realiz_dirName>" + dirName + "</realiz_dirName>");
            sb.append("<realiz_body>" + body + "</realiz_body>");
            sb.append("<custom>false</custom>");
            sb.append("</realization>");
            return sb.toString();
	}

	public String writeEnhRealizXML(){
            StringBuilder sb = new StringBuilder();
            body = WorkspaceJsonGenerator.encode(body);
            sb.append("<enhancement_realization>");
            sb.append("<enh_realiz_name>" + name + "</enh_realiz_name>");
            sb.append("<enh_realiz_dirName>" + dirName + "</enh_realiz_dirName>");
            sb.append("<enh_realiz_content>" + body + "</enh_realiz_content>");
            sb.append("<custom>false</custom>");
            sb.append("</enhancement_realization>");
            return sb.toString();
	}

	public boolean isEnhRealiz(String cName, String eName, String path){
            return containsFor(body, eName + " ");
	}

	public boolean isConRealiz(String cName, String path){
                return containsFor(body, cName) || containsFor(body, cName + ";");
	}
        
	public static boolean compare(String s){
		String t = "((?i)(for))";
		Pattern p;
		Matcher m;
		p = Pattern.compile(t);
		m = p.matcher(s);
		return m.matches();
	}

        private boolean containsFor(String src, String tar){
            String t = "(for " + tar + ")";
            Pattern p = Pattern.compile(t);
            Matcher m = p.matcher(src);
            return m.find();
        }

}

