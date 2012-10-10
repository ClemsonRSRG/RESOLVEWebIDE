/*
 * These functions control what happens in the output pane
 */

// initializr the tabs
function initializeOutput(){
    //$( "#output_container" ).panel({fit:true});
    $( "#output_tabs" ).tabs({fit:true});
    $( "#output_tabs .ui-tabs-nav, #output_tabs .ui-tabs-nav > *" )
			.removeClass( "ui-corner-all ui-corner-top" )
			.addClass( "ui-corner-bottom" );
    //$('#console').scrollTop($('#console').scrollHeight);
}


function log(msg){
    //var consoleDiv = $("#console");
    //consoleDiv.append(msg+"<br/>");
    //consoleDiv[0].scrollTop = consoleDiv[0].scrollHeight;
    //var consoleDiv = document.getElementById("console");
    //consoleDiv.innerHTML += msg+"<br/>";
    //consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

