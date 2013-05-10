package notifiers;

// Imports
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import play.db.jpa.GenericModel;
import models.User;
import play.Play;
import play.mvc.*;

public class Mails extends Mailer {
    
    public static void welcome(User user) {
        setSubject("Welcome to RESOLVE Web IDE");
        addRecipient(user.email);
        setFrom("Clemson RSRG <do_not_reply@resolve.cs.clemson.edu>");
        
        String link = Http.Request.current().getBase() + (String)Play.configuration.get("http.path") + "/";
        send(user, link);
    }
    
    public static void confirmation(User user) {
        String confirmationCode = user.confirmationCode;
        setSubject("RESOLVE Web IDE Registration Confirmation");
        addRecipient(user.email);
        setFrom("Clemson RSRG <do_not_reply@resolve.cs.clemson.edu>");
        
        String link = Http.Request.current().getBase() + (String)Play.configuration.get("http.path") + "/confirm?c_code=" + confirmationCode + "&email=" + user.email;
        send(user, link);
    }
 
    public static void lostPassword(User user) {        
        String confirmationCode = user.confirmationCode;
        setSubject("RESOLVE Web IDE Password Recovery");
        addRecipient(user.email);
        setFrom("Clemson RSRG <do_not_reply@resolve.cs.clemson.edu>");
        
        String link = Http.Request.current().getBase() + (String)Play.configuration.get("http.path") + "/reset?c_code=" + confirmationCode + "&email=" + user.email;
        send(user, link);
    }
    
    public static void resetPassword(User user) {
        setSubject("RESOLVE Web IDE Password Reset");
        addRecipient(user.email);
        setFrom("Clemson RSRG <do_not_reply@resolve.cs.clemson.edu>");
        send(user);
    }
}