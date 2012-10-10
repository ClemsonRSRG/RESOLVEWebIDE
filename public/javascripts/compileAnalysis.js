
function analyzeJavaResults(component, result){
    var javaCode = "";
    var compilerOutput = "";
    var success = "";
    var code = "";
    var lsRegExp = /\%20/g;
    
    $(result).find("genCodeResults").each(function(){
        javaCode = unescape($(this).find("code").text());
        javaCode = String(javaCode).replace(lsRegExp, " ");
        compilerOutput = $(this).find("compilerOutput").text();
        compilerOutput = String(compilerOutput).replace(lsRegExp, " ");
        success = $(this).find("translateSuccess").text();
    });
    if(success == "true") {
        var EditSession = require("ace/edit_session").EditSession;
        var javaSession = new EditSession(javaCode);
        var JavaMode = require("ace/mode/java").Mode;
        component.set("java", javaSession);
        editor.setReadOnly(true);
        editor.setSession(javaSession);
        editor.getSession().setMode(new JavaMode());
        myUserControlView.render();
        myUserControlView._javaCheckbox.attr({checked: "checked"});
        var commandButtons = $(".controls_commands").find("button");
        commandButtons.attr({disable: "diabled"});
        commandButtons.removeClass("active");
        //code = "<pre class=\"brush: java\">" + java + "</pre>";
        //var buttonDiv = $("<div>").addClass("javaDownloadButtonDiv");
        //var downloadButton = $("<button>").val("download").text("Download Java");
        //downloadButton.click(function(event){
            //event.preventDefault();
            //doFileDownload(name, encode(java), "java");

        //});
        //buttonDiv.html(downloadButton);
        //translateDiv.html(buttonDiv);
        //clearFileError(selectedFile, "Compiler");
    }
    else {
        //translator error
        //compilerOutput = replaceRemoteFileNames(serverFileNames, compilerOutput)
        var resultJSON = jQuery.parseJSON(compilerOutput);
        var jsonResults = resultJSON.results;
        var errors = getErrorArray(jsonResults);
        var bugs = getBugArray(jsonResults);
        if(bugs != null){
            code = getBugMsgs(bugs);
        }
        else{
            code = "Please see the editor for errors.";
        }
        code = "<pre class=\"bugTrace\">" + code + "</pre>";
        if(errors != null){
            var msg = "Compiler";
            addErrors(errors, component.get("componentModel"), msg);
            //var parent = $("#"+resultDiv).parent().parent();
            //parent.tabs("select", 0);
        }
        $("#output_tabs").tabs("select", 1);
        log(code);
    }
    //var javaCode = unescape($(result).find("code").text())
    //javaCode = String(javaCode).replace(lsRegExp, " ");

    //log("<pre>"+output+"</pre>");
}

function analyzeVcResults(component, result){
    var three_spaces = "&nbsp;&nbsp;&nbsp;";
    var compilerOutput, savedVCs, success, vcArray, i;
    var vcResultDiv = $("<div>");
    $(result).find("genVcResults").each(function(){
        compilerOutput = $(this).find("compilerOutput").text();
        savedVCs = $(this).find("vcFile");
        success = $(this).find("vcSuccess").text();
    });
    if(success == "true") {
        vcArray = new Array();
        var vcJSON = jQuery.parseJSON(savedVCs.text());
        var jsonVCs = vcJSON.vcs;
        $.each(jsonVCs, function(index, obj){
            var newVC = null;
            var vcID = obj.vc;
            if(typeof vcID !== "undefined"){
                var sf = obj.sourceFile;
                var vcLine = obj.lineNum;
                var vcCase = obj.vcInfo;
                var vcGoal = htmlEncodeGTLT(decode(obj.vcGoal));
                var vcGiven = htmlEncodeGTLT(decode(obj.vcGivens));
                var vcReasons;
                if(typeof obj.vcReasons === "undefined"){
                    vcReasons = "";
                }
                else{
                    vcReasons = htmlEncodeGTLT(decode(obj.vcReasons));
                }
                var content = vcGoal + vcGiven + vcReasons;
                //vcCase = replaceRemoteFileNames(serverFileNames, vcCase);
                //sf = replaceRemoteFileNames(serverFileNames, sf);
                var temp = vcCase.split(":");
                var i, vcStep = "";
                for(i = 2; i < temp.length; i++){
                    vcStep += temp[i] + ":";
                }
                newVC = new VC(vcID, content, vcCase, vcGoal, vcGiven, vcLine, sf);
                var thisName = newVC.sourceFile;
                thisName = thisName.substring(0, thisName.indexOf("."));
                if(thisName != component.get("name")){
                    var editorLength = component.get("editorSession").doc.getValue().split(/\n/).length;
                    newVC.line = editorLength;
                }
            }
            else{
                newVC = obj;
            }
            vcArray.push(newVC);
        });
        //$("#output_tabs").tabs("select", 2);
        //$("#tabs-vc").html(mainDiv.html());
        log("VCs complete");
        //selectedFile.vcArray = vcArray;
        addVcs(component, vcArray);
        //clearFileError(selectedFile, "Compiler");
    }
    else {
        //mainDiv = $("<div>");
        //mainDiv.attr({"data-error":"true"});
        var err = "";
        //compilerOutput = replaceRemoteFileNames(serverFileNames, compilerOutput)
        var resultJSON = jQuery.parseJSON(compilerOutput);
        var jsonResults = resultJSON.results;
        var errors = getErrorArray(jsonResults);
        var bugs = getBugArray(jsonResults);
        if(bugs != null){
            err = getBugMsgs(bugs);
        }
        else{
            err = "Please see the editor for errors.";
        }
        var errorPre = $("<pre>").addClass("bugTrace").html(err);
        //var parent = $("#"+resultDiv).parent().parent();
        if(errors != null){
            var msg = "Compiler";
            addErrors(errors, component.get("componentModel"), msg);
            //addErrors(errors, selectedFile, msg);
        }
        if(errors == null && bugs != null){
            $( "#output_tabs" ).tabs("select", 1);
        }
        $("#output_tabs").tabs("select", 1);
        log(err);
        /*if(selectedFile.fileType == "facility"){
            var checkbox = parent.find("input[data-type=javaCheckbox]");
            if(checkbox.attr("checked")){
                selectedFile.editor.setSession(selectedFile.editorSession);
                checkbox.attr("checked","");
            }
        }*/
    }
    //mainDiv.appendTo(vcResultDiv);
    return vcResultDiv;
}

function analyzeVerifyResults(component, result){
    var three_spaces = "&nbsp;&nbsp;&nbsp;";
    var compilerOutput, verifySuccess, success, proofs, i;
    var vcResultDiv = $("<div>");
    $(result).find("verifyResults").each(function(){
        compilerOutput = $(this).find("compilerOutput").text();
        verifySuccess = $(this).find("result").text();
        success = $(this).find("verifySuccess").text();
        proofs = $(this).find("proofs").text();
    });
    if(success == "true") {
        
        //$("#output_tabs").tabs("select", 2);
        //$("#tabs-vc").html(mainDiv.html());
        log("verify complete");
        log(verifySuccess+":<br/>");
        log("<pre>"+proofs+"</pre>");
        //clearFileError(selectedFile, "Compiler");
    }
    else {
        //mainDiv = $("<div>");
        //mainDiv.attr({"data-error":"true"});
        var err = "";
        //compilerOutput = replaceRemoteFileNames(serverFileNames, compilerOutput)
        var resultJSON = jQuery.parseJSON(compilerOutput);
        var jsonResults = resultJSON.results;
        var errors = getErrorArray(jsonResults);
        var bugs = getBugArray(jsonResults);
        if(bugs != null){
            err = getBugMsgs(bugs);
        }
        else{
            err = "Please see the editor for errors.";
        }
        var errorPre = $("<pre>").addClass("bugTrace").html(err);
        //var parent = $("#"+resultDiv).parent().parent();
        if(errors != null){
            var msg = "Compiler";
            addErrors(errors, component.get("componentModel"), msg);
            //addErrors(errors, selectedFile, msg);
        }
        if(errors == null && bugs != null){
            $( "#output_tabs" ).tabs("select", 1);
        }
        $("#output_tabs").tabs("select", 1);
        log(err);
        /*if(selectedFile.fileType == "facility"){
            var checkbox = parent.find("input[data-type=javaCheckbox]");
            if(checkbox.attr("checked")){
                selectedFile.editor.setSession(selectedFile.editorSession);
                checkbox.attr("checked","");
            }
        }*/
    }
    //mainDiv.appendTo(vcResultDiv);
    return vcResultDiv;
}

function getVcSteps(rawVCs){
    var vcs = "";
    rawVCs = rawVCs.substr(0, rawVCs.lastIndexOf("@"));
    var vcArray = rawVCs.split("@");
    $.each(vcArray, function(){
        //var vcDiv = $("<div>").addClass("vc");
        var jsonStr = this.toString();
        jsonStr = jsonStr.substr(jsonStr.indexOf("{"));
        var vcJSON = jQuery.parseJSON(jsonStr);
        if(vcJSON != null){
            var vcID = vcJSON.vc;
            var step = decode(vcJSON.step);
            //var goal = vcJSON.goal;
            //var given = vcJSON.given;
            vcs += vcID+": "+step+"\n";
        }
    });
    return vcs;
}

// this is direct from the old version
function formatVCs(rawVCs){
    var vcsDiv = $("<div>").addClass("vcContainer selectedVC").html("");
    rawVCs = rawVCs.substr(0, rawVCs.lastIndexOf("@"));
    var vcArray = rawVCs.split("@");
    $.each(vcArray, function(){
        var vcDiv = $("<div>").addClass("vc");
        var jsonStr = this.toString();
        jsonStr = jsonStr.substr(jsonStr.indexOf("{"));
        var vcJSON = jQuery.parseJSON(jsonStr);
        if(vcJSON != null){
            var vcID = vcJSON.vc;
            var step = decode(vcJSON.step);
            var goal = vcJSON.goal;
            var given = vcJSON.given;
            vcDiv.html(vcID+"<br/><br/>");
            vcDiv.append(step+"<br/><br/>");
            vcDiv.append("Goal:");
            goal = goal.substr(goal.indexOf(":")+1);
            var goalDiv = $("<div>").addClass("vcIndent").html("<p>"+goal.replace(/&nbsp;/g, " ")+"</p>");
            vcDiv.append(goalDiv);
            vcDiv.append("Given:");
            given = given.substr(given.indexOf(":")+1);
            //var givensDiv = $("<div>").addClass("vcIndent").html("");
            var givensList = $("<ol>");
            //var givenRegExp = /[\d]+:/g;
            var givenRegExp = /\<br\/\>[\d]+:/g;
            var givens = given.split(givenRegExp);
            $.each(givens, function(index, given){
                if(index != 0){
                    //var givenID = $("<div>").addClass("vcGivenID").html(index + ":");
                    //var givenDiv = $("<div>").addClass("vcGiven").html(given);
                    var givenItem = $("<li>").html("<p>"+given.replace(/&nbsp;/g, " ")+"</p>");
                    //givensDiv.append(givenID);
                    givensList.append(givenItem);
                }
            });
            vcDiv.append(givensList);
            vcsDiv.append(vcDiv);
        }
    });
    return vcsDiv;
}

function reformatVCs(vc){
    var vcsDiv = $("<div>").addClass("vcContainer selectedVC").html("");
    var vcDiv = $("<div>");
    var vcID = vc.vcID;
    if(typeof vcID !== "undefined"){
        vcDiv.addClass("vc");
        var step = decode(vc.step);
        //var step = decode(vcJSON.step);
        var goal = vc.goal;
        var given = vc.given;
        vcDiv.html("VC "+vcID+"<br/><br/>");
        vcDiv.append(step+"<br/><br/>");
        vcDiv.append("Goal:");
        goal = goal.substr(goal.indexOf(":")+1);
        var goalDiv = $("<div>").addClass("vcIndent").html("<p>"+goal.replace(/&nbsp;/g, " ")+"</p>");
        vcDiv.append(goalDiv);
        vcDiv.append("Given:");
        //given = given.substr(given.indexOf(":")+1);
        //var givensDiv = $("<div>").addClass("vcIndent").html("");
        var givensList = $("<ol>");
        var givenRegExp = /[\d]+:/g;
        //var givenRegExp = /\<br\/\>[\d]+:/g;
        var givens = given.split(givenRegExp);
        $.each(givens, function(index, given){
            if(index != 0){
                //var givenID = $("<div>").addClass("vcGivenID").html(index + ":");
                //var givenDiv = $("<div>").addClass("vcGiven").html(given);
                var givenItem = $("<li>").html("<p>"+given.replace(/&nbsp;/g, " ")+"</p>");
                //givensDiv.append(givenID);
                givensList.append(givenItem);
            }
        });
        vcDiv.append(givensList);
        vcsDiv.append(vcDiv);
    }
    else{
        vcDiv.addClass("freeVars");
        vcDiv.append(decode(vc.freeVars));
    }
    //$.each(vcArray, function(){
        
    //});
    return vcsDiv;
}

function getErrorArray(jsonResults){
    var errors = null;
    if(jsonResults.length == 2){
        errors = jsonResults[0].errors;
    }
    else{
        if(typeof jsonResults[0].errors !== "undefined"){
            errors = jsonResults[0].errors;
        }
    }
    return errors;
}

function getBugArray(jsonResults){
    var bugs = null;
    if(jsonResults.length == 2){
        bugs = jsonResults[1].bugs;
    }
    else{
        if(typeof jsonResults[0].bugs !== "undefined"){
            bugs = jsonResults[0].bugs;
        }
    }
    return bugs;
}

function getBugMsgs(bugs){
    var msg = "";
    $.each(bugs, function(index, data){
       msg += decode(data.bug) + "\n"; 
    });
    return msg;
}

function htmlEncodeGTLT(content){
    var lsRegExpLT = /\</g;
    var lsRegExpGT = /\>/g;
    var cont = content.replace(lsRegExpLT,"&lt;");
    cont = cont.replace(lsRegExpGT,"&gt;");
    return cont;
}

function encodeVcContent(content){
    var regExp = /\<[^\>]\>/g;
    var lsRegExpLT = /\</g;
    var lsRegExpGT = /\>/g;
    var lsRegExpSpace = new RegExp(" ","gim");
    var cont = content.replace(lsRegExpLT,"&lt;");
    cont = cont.replace(lsRegExpGT,"&gt;");
    //cont = cont.replace(lsRegExpSpace,"&nbsp;");
    cont = cont.replace(/\n/g, "<br/>") + "<br/><br/>";
    return cont;
}

function logVCs(vcs){
    vcs.sort(sortByIdAndLine);
    $( "#output_tabs" ).tabs("select", 2);
    var vcDiv = $("#vcs");
    var vcInfo = $("<div>");
    var firstVC;
    for(var i = 0; i < vcs.length; i++){
        if(typeof vcs[i].vcID !== "undefined"){
            firstVC = vcs[i];
            break;
        }
    }
    
    var vcLine = $("<div>").attr({id: "vc_line_"+(firstVC.line)}).addClass("vcContainer selectedVC");
    var currLine = firstVC.line;
    jQuery.each(vcs, function(){
        var vc = this;
        if(typeof vc.vcID !== "undefined"){
            if(vc.line > currLine){
                vcDiv.append(vcLine);
                vcLine = $("<div>").attr({id: "vc_line_"+(vc.line)}).addClass("vcContainer selectedVC");
            }
            //vcLine.append(reformatVCs(encodeVcContent(this.text)).html());
            vcLine.append(reformatVCs(vc).html());
            currLine = vc.line;
        }
        else{
            vcLine.append(reformatVCs(vc).html());
        }
            
    });
    //var openVCs = vcDiv.find(".vcContainer.selectedVC");
    //openVCs.removeClass("selectedVC");
    vcDiv.append(vcLine);
    //vcDiv.animate({scrollTop: vcDiv.prop("scrollHeight")}, 1000);
    //vcDiv[0].scrollTop = vcDiv[0].scrollHeight;
    //var consoleDiv = document.getElementById("console");
    //consoleDiv.innerHTML += msg+"<br/>";
    //consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

function selectVC(lineNum){
    $( "#output_tabs" ).tabs("select", 2);
    var vcsDiv = $("#vcs");
    var vcDiv = $("#vc_line_"+lineNum);
    var openVCs = vcsDiv.find(".vcContainer.selectedVC");
    openVCs.removeClass("selectedVC");
    vcDiv.addClass("selectedVC");
    //vcDiv.append(vc);
    var firstVcPosition = vcsDiv.find(":first").position();
    var selectedVcPosition = vcDiv.position();
    vcsDiv.animate({scrollTop: selectedVcPosition.top - firstVcPosition.top}, 'fast');
    //vcsDiv.attr({scrollTop: vcDiv.position().top});
    //vcDiv[0].scrollTop = vcDiv[0].scrollHeight;
    //var consoleDiv = document.getElementById("console");
    //consoleDiv.innerHTML += msg+"<br/>";
    //consoleDiv.scrollTop = consoleDiv.scrollHeight;
}

function sortByIdAndLine(a, b){
    var line1 = a.line;
    var line2 = b.line;
    
    var id1 = a.vcID;
    var id2 = b.vcID;
    
    return (((typeof line1 === "undefined") || (typeof line2 === "undefined"))? 1 : (
        (line1 != line2) ? (
            (line1 < line2) ? -1 : ((line1 > line2) ? 1 : 0)
        ) : (
            (id1 < id2) ? -1 : ((id1 > id2) ? 1 : 0)
        )
        
    ));
    //return ((typeof line1 === "undefined") ? 1 : ((line1 < line2) ? -1 : ((line1 > line2) ? 1 : 0)));
}

