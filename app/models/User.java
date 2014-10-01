/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package models;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.persistence.Entity;
import javax.persistence.Table;
import notifiers.Mails;
import play.db.jpa.Model;

@Entity
@Table(name="users")
public class User extends Model {
    public String email;
    public String firstName;
    public String lastName;
    public String password;
    public int userType;
    public Date lastLogin;
    public Date createdOn;
    public String currentProject;
    public Boolean authenticated;
    public String confirmationCode;
    
    public User(String email, String password, String firstName, String lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        createdOn = new Date();
        currentProject = Project.getDefault().name;
        userType = 0;
        authenticated = false;
        
        // Generate confirmation code
        confirmationCode = passWordHash(password + email + firstName);
        
        // Send email to the new user
        Mails.confirmation(this);
    }
    
    public static Boolean hasAuthenticated(String email, String password) {
        User currentUser = find("byEmailAndPassword", email, passWordHash(password)).first();
        return currentUser.authenticated;
    }
    
    public static void authenticate(String email) {
        User currentUser = find("byEmail", email).first();
        currentUser.authenticated = true;
        currentUser.confirmationCode = "";
        currentUser.save();
    }

    public static void resetPassword(String email, String password) {
        User user = find("byEmail", email).first();
        user.password = passWordHash(password);
        user.save();
    }
    
    public static void generateConfirmation(String email) {
        User user = find("byEmail", email).first();
        String toBeHash = user.password + user.email + user.firstName;
        String retval = passWordHash(toBeHash);
        user.confirmationCode = retval;
        user.authenticated = false;
        user.save();
    }
    
    public static User connect(String email, String password) {
        return find("byEmailAndPassword", email, passWordHash(password)).first();
    }
    
    public static void lastLogin(String email, String password) {
        User currentUser = find("byEmailAndPassword", email, passWordHash(password)).first();
        currentUser.lastLogin = new Date();
        currentUser.save();
    }
    
    // SHA-256 password hashing
    public static String passWordHash(String passWord){
        StringBuilder sb = new StringBuilder();
        try {
            MessageDigest md = MessageDigest.getInstance("SHA-256");
            md.update(passWord.getBytes());

            byte byteData[] = md.digest();

            //convert the byte to hex format method 1
            for (int i = 0; i < byteData.length; i++) {
                sb.append(Integer.toString((byteData[i] & 0xff) + 0x100, 16).substring(1));
            }
        } catch (NoSuchAlgorithmException ex) {
            Logger.getLogger(User.class.getName()).log(Level.SEVERE, null, ex);
        }
        return sb.toString();
    }
}
