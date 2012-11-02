/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function initializeProjectHandlers(){
    var projectButton = $("#project-selector");
    projectButton.click(function(){
       showProjects(projectButton);
    });
}

function initializeMenuHandlers(){
    $("#help_overview").click(function(){
        alert("clicked overview") ;
    });
}

function showProjects(projectButton){
    $("#project_list").children().removeClass("hidden").addClass("visible");
    projectButton.unbind("click").click(function(){
        hideProjects(projectButton);
    });
}

function hideProjects(projectButton){
    $("#project_list").children().removeClass("visible").addClass("hidden");
    projectButton.unbind("click").click(function(){
        showProjects(projectButton);
    });
}