package controllers;

import models.*;
import play.cache.*;
import play.libs.*;
import play.mvc.Controller;
import play.data.validation.*;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Registration extends Controller {
    
    public static void index() {
        // Render an ID
        String randomID = Codec.UUID();
        render(randomID);
    }
    
    public static void handleSubmit(String email, String emailConfirm,
            String password, String passwordConfirm,
            String firstName, String lastName, String code, String randomID) {
        
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
        
        // Validation Rules for Captcha
        validation.equals(code, Cache.get(randomID)).message(
                "Invalid code. Please type it again");
                
        // Handle Errors
        if (validation.hasErrors()) {
            render("Registration/index.html", randomID);
        }
        
        // Add new user to the database
        String hashPass = User.passWordHash(password);
        User user = new User(email, hashPass, firstName, lastName);
        user.create();
        
        // Render Success Page
        render();
        
        // Clear the parms field
        email = "";
        emailConfirm = "";
        password = "";
        passwordConfirm = "";
        firstName = "";
        lastName = "";
        hashPass = "";
        
        // Delete Stored Captcha
        Cache.delete(randomID);
    }
    
    public static void captcha(String id) {
        // Image class used to generate the captcha
        Images.Captcha captcha = Images.captcha(160, 50);
        
        // Generate a code and stored in the Cache
        String code = captcha.getText("#990000", 5);
        Cache.set(id, code, "10mn");
        captcha.setBackground("#996633", "#FF9900");
        
        renderBinary(captcha);
    }
}