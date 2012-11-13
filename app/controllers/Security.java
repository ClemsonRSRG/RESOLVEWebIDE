package controllers;

import models.*;

public class Security extends Secure.Security {
    
    static boolean authenticate(String email, String password) {
        // Variables
        boolean retval = false;
        
        // Connect to the account
        User currentUser = User.connect(email, password);
        if (currentUser != null) {
            if (User.hasAuthenticated(email, password)) {
                // Connect success
                retval = true;

                // Set the last login date
                User.lastLogin(email, password);
                UserEvent ev = new UserEvent("login", "", currentUser);
                ev.save();
            } else {
                // Render the page asking them to authenticate their account
                render("Registration/authenticate.html", email);
            }
        }
        
        return retval;
    }
    
    static boolean check(String requires) {
        int userLevel = User.find("byEmail", connected()).<User>first().userType;
        if(hasAccess(requires, userLevel)) {
            return true;
        }
        return false;
    }
    
    static void onDisconnect() {
        String email = Security.connected();
        User currentUser = User.find("byEmail", email).first();
        UserEvent ev = new UserEvent("logout", "", currentUser);
        ev.save();
    }
    
    static void onDisconnected() {
        Interface.index();
    }
    
    private static boolean hasAccess(String requires, int userLevel){
        boolean access = false;
        if(requires.equals("user")){
            if(userLevel >= 0){
                access = true;
            }
        }
        else if(requires.equals("superuser")){
            if(userLevel >= 1){
                access = true;
            }
        }
        else if(requires.equals("admin")){
            if(userLevel >= 2){
                access = true;
            }
        }
        return access;
    }
    
}
