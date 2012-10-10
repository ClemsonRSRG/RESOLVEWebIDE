/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package projectGeneration;

/**
 *
 * @author ctcook
 */
public class ConceptFile {
	private String name;
        private String dirName;
	private String location;
	private String body;
	private String standardConcept;
	private Enhancement[] enhancements = null;
	private Realization[] realizations = null;
	private int enhCount;
	private int realizCount;
	private static int count;

	public ConceptFile(String n, String d, String fn, String l, int len, String path, String standardConcept){
		//name = n;
                name = fn.substring(0, fn.length() - 3);
                dirName = d;
		location = l;
		enhancements = new Enhancement[len];
		realizations = new Realization[len];
		enhCount = 0;
		realizCount = 0;
		count++;

                boolean noComments = true;
		SourceFile sf = new SourceFile(path, noComments);
		body = sf.getContent();
                this.standardConcept = standardConcept;
	}

	public void setName(String n){
		name = n;
	}

	public void setLocation(String l){
		location = l;
	}

	public static void resetCount(){
		count = 0;
	}

	public String getName(){
		return name;
	}

	public String getLocation(){
		return location;
	}

	public static int getCount(){
		return count;
	}

        public String generateConceptJSON(){
            StringBuilder sb = new StringBuilder();
            body = WorkspaceJsonGenerator.encode(body);
            //body = (URLEncoder.encode(body.replaceAll(" ", "%20"), "UTF-8"));
            sb.append("{");
            sb.append("\"type\":\"c\",");
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
            sb.append("\"standard\":\"");
            sb.append(standardConcept);
            sb.append("\",");
            sb.append("\"custom\":\"false\",");
            sb.append("\"realizations\":");
            sb.append(generateRealizJSON());
            sb.append("\"enhancements\":");
            sb.append(generateEnhJSON());
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

        public String writeConceptXML(){
            StringBuilder sb = new StringBuilder();
            body = WorkspaceJsonGenerator.encode(body);
            //body = (URLEncoder.encode(body.replaceAll(" ", "%20"), "UTF-8"));
            sb.append("<concept>");
            sb.append("<name standard=\"");
            sb.append(standardConcept);
            sb.append("\">");
            sb.append(name);
            sb.append("</name>");
            sb.append("<dirName>" + dirName + "</dirName>");
            sb.append("<body>" + body + "</body>");
            sb.append("<custom>false</custom>");
            sb.append("<enhancements>");
            sb.append(writeEnhXML());
            sb.append("</enhancements>");
            sb.append("<realizations>");
            sb.append(writeRealiz());
            sb.append("</realizations>");
            sb.append("</concept>");
            return sb.toString();
	}

	public void addEnhancement(Enhancement e){
		enhancements[enhCount++] = e;
	}

	public String generateRealizJSON(){
            StringBuilder sb = new StringBuilder();
            sb.append("[");
            for(int i = 0; i < realizCount; i++){
                    sb.append(realizations[i].generateRealizJSON());
                    if(i < realizCount - 1){
                        sb.append(",");
                    }
            }
            sb.append("],");
            return sb.toString();
	}

	public String generateEnhJSON(){
            StringBuilder sb = new StringBuilder();
            sb.append("[");
            for(int i = 0; i < enhCount; i++){
                    sb.append(enhancements[i].generateEnhJSON());
                    if(i < enhCount - 1){
                        sb.append(",");
                    }
            }
            sb.append("]");
            return sb.toString();
	}

	private String writeEnhXML(){
            StringBuilder sb = new StringBuilder();
            for(int i = 0; i < enhCount; i++){
                    sb.append(enhancements[i].writeEnhXML());
            }
            return sb.toString();
	}

	public void addRealiz(Realization r){
		realizations[realizCount++] = r;
	}

	public String writeRealiz(){
            StringBuilder sb = new StringBuilder();
            for(int i = 0; i < realizCount; i++){
                    sb.append(realizations[i].writeRealizXML());
            }
            return sb.toString();
	}
}
