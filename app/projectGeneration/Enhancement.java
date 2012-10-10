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

public class Enhancement {
	private String name;
        private String dirName;
	private String concept;
	private String body;
	private Realization[] realizations = null;
	private int realizCount;

	public Enhancement(String n, String d, String c, int len, String path){
		name = n;
                dirName = d;
		concept = c;
		realizations = new Realization[len];
		realizCount = 0;

                boolean noComments = true;
		SourceFile sf = new SourceFile(path, noComments);
		body = sf.getContent();
	}

	public String getName(){
		return name;
	}

	public String getConcept(){
		return concept;
	}

	public static boolean isEnhancement(String s){
		String enh = "([^\\s]+(\\.(?i)(en))$)";
		Pattern p;
		Matcher m;
		p = Pattern.compile(enh);
		m = p.matcher(s);
		return m.matches();
	}

	public static String getName(String s){
		Pattern p = Pattern.compile("[.\\s]+");
		String[] results = p.split(s);
		return results[0];
	}

	public void addEnhRealiz(Realization r){
		realizations[realizCount++] = r;
	}

        public String generateEnhJSON(){
            StringBuilder sb = new StringBuilder();
            body = WorkspaceJsonGenerator.encode(body);
            sb.append("{");
            sb.append("\"type\":\"e\",");
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
            sb.append("\"custom\":\"false\",");
            sb.append("\"realizations\":");
            sb.append(generateEnhRealizJSON());
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

	private String generateEnhRealizJSON(){
            StringBuilder sb = new StringBuilder();
            sb.append("[");
            for(int i = 0; i < realizCount; i++){
                    sb.append(realizations[i].generateRealizJSON());
                    if(i < realizCount - 1){
                        sb.append(",");
                    }
            }
            sb.append("]");
            return sb.toString();
	}
                        
	public String writeEnhXML(){
            StringBuilder sb = new StringBuilder();
            body = WorkspaceJsonGenerator.encode(body);
            sb.append("<enhancement>");
            sb.append("<enh_name>" + name + "</enh_name>");
            sb.append("<enh_dirName>" + dirName + "</enh_dirName>");
            sb.append("<enh_content>" + body + "</enh_content>");
            sb.append("<custom>false</custom>");
            sb.append("<enh_realizations>");
            sb.append(writeEnhRealizXML());
            sb.append("</enh_realizations>");
            sb.append("</enhancement>");
            return sb.toString();
	}

	private String writeEnhRealizXML(){
            StringBuilder sb = new StringBuilder();
            for(int i = 0; i < realizCount; i++){
                    sb.append(realizations[i].writeEnhRealizXML());
            }
            return sb.toString();
	}
}

