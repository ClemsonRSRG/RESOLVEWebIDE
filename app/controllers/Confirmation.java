package controllers;

import models.User;
import notifiers.Mails;
import play.mvc.Controller;

public class Confirmation extends Controller  {
    
    public static void index() {
        // Variables
        String email = params.get("email");
        String confirmation = params.get("c_code");
        
        // Check if the user is in our database and has the correct confirmation code
        User currentUser = User.find("byEmail", email).first();
        if (currentUser != null && currentUser.confirmationCode.equals(confirmation)) {
            // Variables
            String firstName = currentUser.firstName;
            String lastName = currentUser.lastName;
            
            // Mark the user as authenticated in our database
            User.authenticate(email);
            
            // Send welcome email
            Mails.welcome(currentUser);
            
            // Render success page!
            render("Confirmation/index.html", email, firstName, lastName);
        } else {
            // Render the main web interface page
            render("Interface/index.html");
        }
    }
    
    public static void resendConfirmation(String email) {
        // Check if the user is in our database
        User currentUser = User.find("byEmail", email).first();
        if (currentUser != null) {
            Mails.confirmation(currentUser);
            
            // Render the web page
            render("Registration/handleSubmit.html");
        } else {
            // Render the main web interface page
            render("Interface/index.html");
        }
    }
}
