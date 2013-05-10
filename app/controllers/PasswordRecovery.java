package controllers;

import models.User;
import notifiers.Mails;
import play.mvc.Controller;

public class PasswordRecovery extends Controller {
    
    public static void index() {
        // Render the password recovery index page
        render();
    }
    
    public static void handleSubmit(String email) {
        // Validation Rules for User Email
        validation.required(email);
        validation.email(email);
        
        User user = User.find("byEmail", email).first();
        if (user == null) {
            validation.addError("email", "Email not found! Please check for spelling!");
        }
        
        // Handle Errors
        if (validation.hasErrors()) {
            render("PasswordRecovery/index.html");
        }
        
        // Mark the user as not authenticated
        User.generateConfirmation(email);
        
        // Send email to recover the password
        Mails.lostPassword(user);
        
        // Render the email sent page
        render();
    }
    
    public static void processRequest() {
        // Variables
        String email = params.get("email");
        String confirmation = params.get("c_code");
        
        // Check if the user is in our database and has the correct confirmation code
        User user = User.find("byEmail", email).first();
        if (user != null && user.confirmationCode.equals(confirmation)) {
            // Render password reset page
            render(email);
        } else {
            // Render the account error page
            render("errors/Account_Error.html");
        }
    }
    
    public static void success(String email, String password, String passwordConfirm) {
        // Get user information
        User user = User.find("byEmail", email).first();
        
        // Validation Rules for Password
        validation.required(password);
        validation.minSize(password, 6);
        validation.required(passwordConfirm);
        validation.equals(passwordConfirm, password);
            
        // Handle Errors
        if (validation.hasErrors()) {
           render("PasswordRecovery/processRequest.html", email);
        }
            
        // Mark the user as authenticated in our database
        User.authenticate(email);
            
        // Send password reset email
        Mails.resetPassword(user);
        
        // Render success page!
        render(email);
    }
}
