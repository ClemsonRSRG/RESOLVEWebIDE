package controllers;

import models.*;

public class Security extends Secure.Security {
    
    static boolean authenticate(String email, String password) {
        return User.connect(email, password) != null;
    }
    
    static boolean check(String requires) {
        String userLevel = User.find("byEmail", connected()).<User>first().userType;
        if(hasAccess(requires, Integer.parseInt(userLevel))) {
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
