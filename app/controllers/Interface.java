package controllers;

import play.*;
import play.mvc.*;

import java.util.*;
import play.cache.Cache;

//import models.*;

public class Interface extends Controller {

    public static void index() {
        
        String name = Cache.get(session.getId(), String.class);
        if(name == null){
            name = "Chuck";
            Cache.set(session.getId(), name);
            System.out.println("setting name");
        }
        else{
            System.out.println(name);
        }
        render(name);
    }

}