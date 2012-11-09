var errorEditor;

function addErrors(errorArray, component, errMsg) {
      
   var errors = new Array();
   var session = editor.getSession();
   //var doc = component.get("editorSession").doc;
   var fileName = component.get("name");
   var errorLines = new Array();

   var editorLength = session.doc.getValue().split(/\n/).length;   

   for(var i=0; i < errorArray.length; i++) {
       var error = errorArray[i].error;
       var thisName = error.fn;
       thisName = thisName.substring(0, thisName.indexOf("."));
       if(thisName != ""){
            var lineNum = error.ln;
            var msg = "";
            var content = "";
            if(fileName != thisName){
                content += error.fn + "(" + lineNum + ")\n";
            }
            content += decode(error.msg);
            //var lines = content.split("\n").length + 1;
            msg += content;
            //msg += "<textarea class=\"vcText\" readonly=\"readonly\" rows=\""+lines+"\"";
            //msg += "style=\"font-family:Monaco,monospace\">"+content+"</textarea>";

            if(lineNum > editorLength) {
                lineNum = editorLength;
               //errors.push({row: editorLength - 1, column: 0, text: msg, type: "error"});
            } else {
               if(fileName == thisName){
                  //errors.push({row: lineNum - 1, column: 0, text: msg, type: "error"});
               }
               else{
                   lineNum = editorLength;
                  //errors.push({row: editorLength - 1, column: 0, text: msg, type: "error"});
               }
            }
            errors.push({row: lineNum - 1, column: 0, text: msg, type: "error"});
            var alreadyIn = false;
            for(var j = 0; j < errorLines.length; j++){
                if(errorLines[j] == lineNum){
                    alreadyIn = true;
                    break;
                }
            }
            if(!alreadyIn){
                errorLines.push(lineNum);
            }
            /*errMsg += lineNum;
            if(i < errorArray.length-1){
                errMsg += ", ";
            }*/
       }
   }
   errMsg += " errors detected on line";
   if(errorLines.length > 1){
       errMsg += "s: ";
   }
   else{
       errMsg += ": ";
   }
   for(i = 0; i < errorLines.length; i++){
       errMsg += errorLines[i];
       if(i < errorLines.length-1){
           errMsg += ", ";
       }
   }
   //addFileError(selectedFile, errMsg, "Compiler");
   session.setAnnotations(errors);
   // @todo move this into a function, it is a duplicate of the the error tooltip in checker.js
    var gutters = $(".ace_error");
    /*gutters.die("mouseover");
    gutters.live("mouseover", function(event){
        event.stopPropagation();
        var el = $(event.currentTarget);
        var errorMsg = el.attr("title");
        //var that = $(this);
        if(errorMsg != ""){
            var errorLine = el.html();
            var errorCol = null;
            jQuery.each(errors, function(index, item){
                if(item.row + 1 == errorLine){
                    errorCol = item.column;
                }
            });
            var errorLines = errorMsg.split("\n");
            var caratLine = errorLines[errorLines.length-2];
            
            addQtip(el, errorMsg);
        }
    });*/
}

var vcEditor;
var title, lastTarget;
var lastSelectedLineNum = null;

function addVcs(component, vcArray) {
   
   var vcs = new Array();
   var session = editor.getSession();
   var fileName = component.get("name");

   var editorLength = session.doc.getValue().split(/\n/).length;   

   for(var i=0; i < vcArray.length; i++) {
       //var loc = vcArray[i].step.match(/: [a-zA-Z_0-9.]+/g);
       var thisName = vcArray[i].sourceFile;
       if(typeof thisName !== "undefined"){
           thisName = thisName.substring(0, thisName.indexOf("."));
           //if(thisName != ""){
            //var thisName = loc[0];
            //thisName = thisName.substr(0, thisName.indexOf("."));
            //var msg = "";
            //msg += vcArray[i].step.replace(/\n/g, "") + "\n\n";
            //msg += "VC: " + vcArray[i].vcID + "\n\n";
            //msg += vcArray[i].content + "\n";
            //msg += "@";
            var msg = "";
            msg += "{\"step\":\"" + vcArray[i].step.replace(/\n/g, "") + "\",";
            msg += "\"vc\":\"VC: " + vcArray[i].vcID.replace(/\n/g, "") + "\",";
            msg += "\"goal\":\"" + vcArray[i].goal.replace(/\n/g, "") + "\",";
            msg += "\"given\":\"" + vcArray[i].given + "\"}";
            msg += "@";
            msg = getVcSteps(encodeVcContent(msg));
            //msg = msg.replace(/\n/g, "");
            var lineNum = vcArray[i].line;

            if(lineNum > editorLength) {
               vcs.push({row: editorLength - 1, column: 0, text: msg, type: "vc"});
            } else {
               if(fileName == thisName) 
                  vcs.push({row: lineNum - 1, column: 0, text: msg, type: "vc"});
                  //vcs.push({row: lineNum - 1, column: 0, text: msg, type: "warning"});
               else
                  vcs.push({row: editorLength - 1, column: 0, text: msg, type: "vc"});
            }
       }
       //}
   }
   
   session.setAnnotations(vcs);
   $("#vcs").empty();
   //logVCs(vcs);
   logVCs(vcArray);
   var javaSession = component.get("componentModel").get("javaEditorSession");
   if(component.get("type") === "f" && javaSession != null){
       //var simpleJavaDoc = selectedFile.javaEditorSession.doc;
       javaSession.doc._emit("annotate",vcs);
   }
    //var t, timerSet, title, lastTarget;
    //var targetId = targetContent.attr("id");
    //var vcIcon = $("#"+targetId).find(".ace_gutter-cell.ace_vc");
    var vcIcon = $("#code_editor").find(".ace_gutter-cell.ace_vc");
    
    //var vcCorrectIcon = $("#codeEditor").find(".ace_gutter-cell.ace_vc_selected");
    //var vcCloseIcon = $(".vc_close");
    vcIcon.die();
    vcIcon.live("click", function(target){
        //var session = editor.getSession();
        //var vcs = $(target.target).attr("title");
        var lineNum = $(target.target).html();
        selectVC(lineNum);
        //var formattedVCs = formatVCs(encodeVcContent(vcs));
        //selectVC(formattedVCs);
        //showVcBox($(target.target),encodeVcContent(title), vcs, session.doc);
    });
}

function addWaitGif(div){
    var loc = window.location;
    //var smallWaitGif = loc.origin+(loc.pathname.length>1?loc.pathname+"/":loc.pathname)+"public/images/wait20trans.gif";
    //var smallWaitGif = loc.origin+(loc.pathname.length>1?loc.pathname+"/":loc.pathname)+"public/images/wait20trans.gif";
    //var waitGif = $("<img>").attr({src:smallWaitGif, alt:"WaitGif"});
    var waitGif = $("<div>");
    waitGif.addClass("waitGif");
    div.append(waitGif);
    return waitGif;
}

function addQtip(el, tip, type){
    var tipClass;
    if(type == "vc"){
        tipClass = "ui-tooltip-VC"
    }
    else{
        tipClass = "";
    }
    el.qtip({
        content: {
            text: "<pre>"+tip+"</pre>"
        }, 
        show: {
            event: false, // Only show when show() is called manually
            ready: true // Also show on page load
        },
        style: {
            classes: tipClass + ' ui-tooltip-rounded',
            tip:{
                corner: 'top left'
            }
        }
    });
}

function VC(vcID, content, step, goal, given, line, sf){
    this.vcID = vcID;
    this.content = content;
    this.step = step;
    this.goal = goal;
    this.given = given;
    this.line = line;
    this.sourceFile = sf;
    this.proved = null;
    this.proofTime = null;
    this.proof = null;
}
