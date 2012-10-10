package compiler;

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */



/**
 *
 * @author Chuck
 */

public class WebCompileReport {
    private boolean vc = false;
    private boolean prove = false;
    private boolean translate = false;
    private boolean jar = false;
    private boolean error = false;
    private String facilityName = "";
    private String proveVCs = null;

    public WebCompileReport(){

    }

    public void resetReport(){
        vc = false;
        prove = false;
        translate = false;
        jar = false;
        error = false;
        facilityName = "";
    }

    public void setVcSuccess(){
        vc = true;
    }

    public void setProveSuccess(){
        prove = true;
    }

    public void setProveVCs(String s){
        proveVCs = s;
    }

    public void setTranslateSuccess(){
        translate = true;
    }

    public void setJarSuccess(){
        jar = true;
    }

    public void setError(){
        error = true;
    }

    public void setFacilityName(String facName){
        facilityName = facName;
    }

    public boolean vcSuccess(){
        return vc;
    }

    public boolean proveSuccess(){
        return prove;
    }

    public String getProveVCs(){
        return proveVCs;
    }

    public boolean translateSuccess(){
        return translate;
    }

    public boolean jarSuccess(){
        return jar;
    }

    public boolean hasError(){
        return error;
    }

    public String getFacilityName(){
        return facilityName;
    }
}

