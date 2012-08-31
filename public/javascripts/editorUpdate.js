var errorEditor;

function addErrors(errorArray, component, errMsg) {
      
   var errors = new Array();
   var session = editor.getSession();
   //var doc = component.get("editorSession").doc;
   var fileName = component.get("name");
   var errorLines = new Array();

   var editorLength = doc.getValue().split(/\n/).length;   

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
    gutters.die("mouseover");
    gutters.live("mouseover", function(event){
        event.stopPropagation();
        var el = $(event.currentTarget);
        var errorMsg = el.attr("title");
        //var that = $(this);
        if(errorMsg != ""){
            addQtip(el, errorMsg);
            /*el.attr({title: ""});
            $(this).qtip({
                content: {
                    text: "<pre>"+errorMsg+"</pre>"
                }, 
                show: {
                    event: false, // Only show when show() is called manually
                    ready: true // Also show on page load
                },
                hide: "unfocus"
            });*/
        }
        /*$(this).mouseout(function(){
            $(this).attr({title: errorMsg});
            that.qtip("api").hide();
        });*/
    });
}

var vcEditor;
var title, lastTarget;
var lastSelectedLineNum = null;

function addVcs(component, vcArray) {
   
   var vcs = new Array();
   var session = editor.getSession();
   var fileName = component.get("name");

   var editorLength = doc.getValue().split(/\n/).length;   

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
   /*if(selectedFile.fileType == "facility" && selectedFile.javaEditorSession != null){
       var simpleJavaDoc = selectedFile.javaEditorSession.doc;
       simpleJavaDoc._emit("annotate",vcs);
   }*/
    //var t, timerSet, title, lastTarget;
    //var targetId = targetContent.attr("id");
    //var vcIcon = $("#"+targetId).find(".ace_gutter-cell.ace_vc");
    var vcIcon = $("#code_editor").find(".ace_gutter-cell.ace_vc");
    //var vcCorrectIcon = $("#codeEditor").find(".ace_gutter-cell.ace_vc_selected");
    //var vcCloseIcon = $(".vc_close");
    vcIcon.die();
    //vcCorrectIcon.die();
    /*vcIcon.live("mouseover", function(target){
        //bindMouseover(target, vcs, doc);
        var dataVcs = $(target.target).attr("data-vcs");
        if(dataVcs == null){
            var vcs = $(target.target).attr("title");
            var vcSteps = getVcSteps(encodeVcContent(vcs));
            $(target.target).attr("title", vcSteps);
            $(target.target).attr("data-vcs", vcs);
        }            
        //$(target.target).attr("title", vcs);
    });*/
        
    //var gutters = $(".ace_vcs");
    //gutters.die("mouseover");
    vcIcon.live("mouseenter", function(event){
        event.stopPropagation();
        var el = $(event.currentTarget);
        var vcs = el.attr("title");
        //var dataVcs = el.attr("data-vcs");
        //if(dataVcs == null){
            //el.attr("data-vcs", vcs);
        //}
        var vcSteps = getVcSteps(encodeVcContent(vcs));
        //var that = $(this);
        if(vcs != ""){
            addQtip(el, vcSteps, "vc");
            //el.attr({title: ""});
            /*el.qtip({
                content: {
                    text: "<pre>"+vcSteps+"</pre>"
                }, 
                show: {
                    event: false, // Only show when show() is called manually
                    ready: true // Also show on page load
                }//,
                //hide: {
                    //event: 'mouseleave'
                //},
                //events: {
                    //hide: function(event, api){
                        //var tooltip = api.elements.tooltip;
                        //console.log("hide called");
                        //el.attr({title: vcs});
                    //}
                /}
            });*/
        }
        //el.mouseleave(function(){
            //el.attr({title: vcs});
            //el.qtip("hide");
            //el.qtip("api").hide();
        //});
    });
    vcIcon.live("click", function(target){
        var session = editor.getSession();
        var vcs = $(target.target).attr("title");
        var lineNum = $(target.target).html();
        selectVC(lineNum);
        //var formattedVCs = formatVCs(encodeVcContent(vcs));
        //selectVC(formattedVCs);
        //showVcBox($(target.target),encodeVcContent(title), vcs, session.doc);
    });
   /*vcIcon.live("click", function(target) {
       var session = editor.getSession();
       clearLastSelected(vcs, session.doc);
        //clearTimeout(t);
        $(target.target).unbind("mouseout").bind("mouseout", function(target) {
            $(target.target).attr("title", title);
            lastTarget = $(target.target);
        });
        vcIcon.die("mouseover");
        //vcIcon.live("mouseover", bindMouseover);
        vcIcon.live("mouseover", function(target){
            title = $(target.target).attr("title");
            $(target.target).attr("title", "");
            $(target.target).unbind("mouseout").bind("mouseout", function(target) {
                $(target.target).attr("title", title);
            });
        });
        //timerSet = false;
        lastSelectedLineNum = $(target.target).html();
        updateAndEmit(lastSelectedLineNum, "vc_selected", vcs, session.doc);
        showVcBox($(target.target),encodeVcContent(title), vcs, session.doc);
        //$.each(vcs,
            //function(){
                //var vcLineNum = this.row + 1;
                //if(vcLineNum.toString() == lineNum){
                    //this.type = "vc_correct";
            //}
        //});
        //session.doc._emit("annotate", vcs);
    });
    vcCorrectIcon.live("mouseover", function(target){
        title = $(target.target).attr("title");
        $(target.target).attr("title", "Click to release this VC");
        $(target.target).unbind("mouseout").bind("mouseout", function(target){
            $(target.target).attr("title", title);
        });
    });
    vcCorrectIcon.live("click", function(target){
        var session = selectedFile.editorSession;
        lastSelectedLineNum = null;
        //title = $(target.target).attr("title");
        //$(target.target).attr("title", "");
        //$(target.target).unbind("mouseout").bind("mouseout", function(target){
            //$(target.target).attr("title", title);
        //});
        vcIcon.die("mouseover");
        //vcIcon.live("mouseover", bindMouseover);
        vcIcon.live("mouseover", function(target){
            bindMouseover(target, vcs, doc);
        });
        var lineNum = $(target.target).html();
        updateAndEmit(lineNum, "vc", vcs, session.doc);
        //$.each(vcs,
            //function(){
                //var vcLineNum = this.row + 1;
                //if(vcLineNum.toString() == lineNum){
                    //this.type = "vc";
            //}
        //});
        //session.doc._emit("annotate", vcs);
    });
    vcCloseIcon.die();
    vcCloseIcon.live("click", function(target){
        //event.preventDefault();
        hideVcBox(vcs, doc);
        vcIcon.die("mouseover");
        vcIcon.live("mouseover", function(target){
            bindMouseover(target, vcs, doc);
        });
        return false;
    });*/
}

function addWaitGif(div){
    var smallWaitGif = "public/images/wait20trans.gif";
    var waitGif = $("<img>").attr({src:smallWaitGif, alt:"WaitGif"});
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
