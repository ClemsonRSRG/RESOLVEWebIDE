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
        User user = User.find("byEmail", email).first();
        if (user != null) {
            if (user.confirmationCode.equals(confirmation)) {
                // Variables
                String firstName = user.firstName;
                String lastName = user.lastName;

                // Mark the user as authenticated in our database
                User.authenticate(email);

                // Send welcome email
                Mails.welcome(user);

                // Render success page!
                render("Confirmation/index.html", email, firstName, lastName);
            } else {
                // Render confirmation link expired page
                render("Confirmation/expired.html");
            }            
        } else {
            // Render the account error page
            render("errors/Account_Error.html");
        }
    }
    
    public static void resendConfirmation(String email) {
        // Check if the user is in our database
        User user = User.find("byEmail", email).first();
        if (user != null) {
            User.generateConfirmation(email);
            Mails.confirmation(user);
            
            // Render the web page
            render("Registration/handleSubmit.html");
        } else {
            // Render the account error page
            render("errors/Account_Error.html");
        }
    }
}
