package controllers;

import com.google.gson.Gson;
import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import models.UserComponent;
import play.Play;
import play.mvc.*;

public class WebCompiler  extends Controller {
    public static void compile() {
        String job = params.get("job", String.class);
        String targetJSON = params.get("target", String.class);
        UserComponent uc = new Gson().fromJson(params.get("target"), UserComponent.class);
        System.out.println(decode(uc.content));
        String workingDir = (String)Play.configuration.get("workingdir");
        renderText(uc.name);
    }
    
    private static String decode(String raw){
        String encoded = null;
        try {
            encoded = URLDecoder.decode(raw.replaceAll("%20", " "), "UTF-8");
        } catch (UnsupportedEncodingException ex) {
            Logger.getLogger(WebCompiler.class.getName()).log(Level.SEVERE, null, ex);
        }
        return encoded;
    }

    private static String decodePlusSign(String input){
      String target = "\\%2B";
      String replace = "+";
      Pattern pattern = Pattern.compile(target);
      Matcher matcher = pattern.matcher(input);
      return matcher.replaceAll(replace);
    }
}
