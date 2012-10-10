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
import play.db.jpa.Model;

@Entity
@Table(name="Users")
public class User extends Model {
    public String email;
    public String firstName;
    public String lastName;
    public String password;
    public String userType;
    public String lastLogin;
    public String currentProject;
    public Boolean authenticated;
    public String confirmationCode;
    
    public User(String email, String password, String firstName, String lastName) {
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        userType = "user";
    }
    
    public static User connect(String email, String password) {
        return find("byEmailAndPassword", email, passWordHash(password)).first();
    }
    
    // SHA-256 password hashing
    private static String passWordHash(String passWord){
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
