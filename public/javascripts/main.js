
function intializeUserControls(){
    var login = $("#control_login");
    var logout = $("#control_logout");
    var settings = $("#control_settings");
    
    logout.click(function(event){
        //event.preventDefault();
        //createLogoutDialog();
    });
}

function logout(url){
    localStorage.clear();
    window.location.href=url;
}

function createLogoutDialog(){
    $.ajax({
        url: "login",
        success: function(data){
            var frame = $("<iframe>");
            var controlDialog = $("#dialog_user_controls");
            controlDialog.html(frame);
            frame.contents().find('html').html(data);
            createDialog(controlDialog, "500px", "500px");
        },
        error: function(err){
            Ccnsole.log(err);
        }
    });
    //var data = $("<iframe>").attr({"src":"login"});
    //var controlDialog = $("#dialog_user_controls");
    //controlDialog.html(data);
    //createDialog(controlDialog, "500px", "500px");
    
}

function createDialog(controlDialog, width, height){
    hideBack();
    controlDialog.dialog({
        //"width": width,
        //"height": height,
        buttons: {
            "Ok": function() {
                $(this).dialog("close");
                showBack();
            },
            "Cancel": function() {
                $(this).dialog("close");
                showBack();
            }
        },
        closeOnEscape: false,
        beforeClose: function(event, ui){
            showBack();
        }
    });
}

function hideBack(){
    $("#background").css({display: "block"});
}

function showBack(){
    $("#background").css({display: "none"});
}


