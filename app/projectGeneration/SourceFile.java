/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package projectGeneration;

/**
 *
 * @author ctcook
 */
import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class SourceFile {
	private String content;

	public SourceFile(String path, boolean noComments){
            FileInputStream fstream = null;
            DataInputStream is = null;
            BufferedReader br = null;
            content = "";
            try {
                fstream = new FileInputStream(path);
                is = new DataInputStream(fstream);
                br = new BufferedReader(new InputStreamReader(is));
                String line;
                Pattern p;
                Matcher m;
                while((line = br.readLine()) != null){
                    /*if(noComments){
                        p = Pattern.compile(".*(--.*)");
                        m = p.matcher(line);
                        //line = m.replaceAll("");
                        if(m.find()){
                            line = line.substring(0, line.indexOf("--"));
                            content += line + "\n";
                        }
                        else{
                            content += line + "\n";
                        }
                    }
                    else{
                        content += line + "\n";
                    }*/
                    content += line + "\n";
                }
                //p = Pattern.compile("//.*$", Pattern.MULTILINE);

                if(noComments){
                    p = Pattern.compile("^(.*\\(\\*([^\\*]*(\\*[^\\)])*)*\\*\\))");
                    m = p.matcher(content);
                    content = m.replaceAll("");
                    p = Pattern.compile("((\n|\r\n)(\n|\r\n)(\n|\r\n)(\n|\r\n)*)");
                    m = p.matcher(content);
                    content = m.replaceAll("\n\n");
                    //p = Pattern.compile("(^\\s+)");
                    content = content.trim();
                }
            } catch (Exception ex) {
            }
	}

	public String getContent(){
		return content;
	}
}

