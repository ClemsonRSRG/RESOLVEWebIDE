package controllers;

import models.*;

public class Security extends Secure.Security {
    
    static boolean authenticate(String email, String password) {
        boolean retval = false;
        if (User.connect(email, password) != null) {
            retval = true;
            
            // Set the last login date
            User.lastLogin(email, password);
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
