package controllers;

import models.*;
import play.mvc.Controller;
import play.data.validation.*;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Registration extends Controller {
    
    public static void index() {
        render();
    }
    
    public static void handleSubmit(String email, String emailConfirm,
            String password, String passwordConfirm,
            String firstName, String lastName) {
        
        // Validation Rules for User Email
        validation.required(email);
        validation.email(email);
        validation.required(emailConfirm);
        validation.equals(emailConfirm, email);
        
        if (User.find("byEmail", email).first() != null) {
            validation.addError("email", "Email already in use!");
        }
        
        // Validation Rules for Password
        validation.required(password);
        validation.minSize(password, 6);
        validation.required(passwordConfirm);
        validation.equals(passwordConfirm, password);
        
        // Validation Rules for Name
        validation.required(firstName);
        validation.required(lastName);
                
        // Handle Errors
        if (validation.hasErrors()) {
            render("@index");
        }
        
        // Add new user to the database
        String hashPass = passWordHash(password);
        User user = new User(email, hashPass, firstName, lastName);
        user.create();
        
        // Render Success Page
        render(email, firstName, lastName);
        
        // Clear the parms field
        params.flash();
    }
    
    // SHA-256 password hashing (Copy from User.java)
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
