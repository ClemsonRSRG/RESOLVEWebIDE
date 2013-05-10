//var localDiv, fileDiv, storeDiv, type, editor;
//var myEditor;
//var hasError = false;
var errorArray = new Array();

var facInit = false;
var facFinal = false;

RLexer.prototype.emitErrorMessage = function(msg){handleLexerError(msg, this);}
RParser.prototype.emitErrorMessage = function(msg){handleSyntaxError(msg, this);}

function localSyntaxCheck(editor, selectedFile) {
    var ed = selectedFile.editor;
    var doc = selectedFile.editorSession.doc;
   check(selectedFile, doc);
   
   ed.getSession().on("change", function() {
      check(selectedFile, editor.getSession().doc);
   });
}

function syntaxCheck(openComponent) {
    var hasError = false;
    var editorSession = openComponent.get("editorSession");
    var code = editorSession.doc.getValue();

    // @todo this tempBody var is what is used when simpe translating and generating
    // parameters to send to the compiler. I don't think we need to use this, we
    // can get it from the editor session
    //selectedFile.tempBody = code;
    openComponent.unset("java");
    errorArray = new Array();
    // YS: Commented out until we can regenerate the new parser javascript
    // antlrParse(openComponent);
    editorSession.doc._emit("annotate", errorArray);
    /*var gutters = $(".ace_error");
    gutters.die("mouseover");
    gutters.live("mouseover", function(event){
        event.stopPropagation();
        var el = $(event.currentTarget);
        var errorMsg = el.attr("title");
        //var that = $(this);
        if(errorMsg != ""){
            var errorLine = el.html();
            var errorCol = null;
            jQuery.each(errorArray, function(index, item){
                if(item.row + 1 == errorLine){
                    errorCol = item.column;
                }
            });
            addQtip(el, errorMsg);
        }
    });*/
    openComponent.set("syntaxErrors", errorArray);
    myUserControlView.render();
    //selectedFile.editor.resize();
return hasError;
}

function antlrParse(openComponent) {
    var msg = "Parsing errors detected on lines: ";
    var input = openComponent.get("editorSession").doc.getValue();
    var cstream = new org.antlr.runtime.ANTLRStringStream(input);
    var lexer = new RLexer(cstream);
    if(errorArray.length == 0){
        var tstream = new org.antlr.runtime.CommonTokenStream(lexer);

        var parser = new RParser(tstream);
        var r = parser.module();
    }
    if(errorArray.length == 0){
        //hasError = false;
        //clearFileError(selectedFile, "Parser");
    }
    else{
        for(var i = 0; i < errorArray.length; i++){
            msg += errorArray[i].row+1;
            if(i < errorArray.length-1){
                msg += ", ";
            }
        }        
        //addFileError(selectedFile, msg, "Parser");
    }
       
   facInit = false;
   facFinal = false;
   return true;
}

function parseError(error) {
   //var regexp = /[a-zA-Z0-9_|<>=)(;/'?]+/g;
   var regexp = /[\S]+/g;
   var tokens = error.match(regexp);
   
   return tokens;
}

function handleLexerError(error) {
    //hasError = true;
    var errors = parseError(error);
    var errorMsg = "";
    for(var i=2; i < errors.length; i++) {
       errorMsg += errors[i] + " ";
    }
    errorMsg += "\n";
    var lineInfo = errors[1].split(":");
    
    errorArray.push({row: lineInfo[0] - 1, column: lineInfo[1], text: errorMsg, 
                 type: "error"});
}

function handleSyntaxError(error, parser) {
    //hasError = true;
    
    var errors = parseError(error);
    var errorMsg = "";
    for(var i=2; i < errors.length; i++) {
       errorMsg += errors[i] + " ";
    }
    errorMsg += "\n";
    var lineInfo = errors[1].split(":");
    
    errorArray.push({row: lineInfo[0] - 1, column: lineInfo[1], text: errorMsg, 
                 type: "error"});
}

var otherwise = false;

function formatError(lineNum, colNum, msg) {
   return "line " + lineNum + ":" + colNum + " " + msg;
}

function checkIndexedIdent(ast) {
   if(ast.getText() != "i" && ast.getText() != "ii") {
        var msg = "Expecting i or ii, found " + ast.getText();
        handleSyntaxError(formatError(ast.getLine(), 
               ast.getCharPositionInLine(), msg));
    }

}

function matchModuleIdent(id2, id1) {
    if(id1.getText() != id2.getText()) {
        var msg = "End name " + id2.getText() + " does not match module name " 
           + id1.getText();
     
        handleSyntaxError(formatError(id2.getLine(), 
               id2.getCharPositionInLine(), msg));
    }
}

function matchOperationIdent(id2, id1) {
   if(id1.getText() != id2.getText()) {
      var msg = "End name " + id2.getText() + " does not match operation name " 
         + id1.getText();
      
      handleSyntaxError(formatError(id2.getLine(), id2.getCharPositionInLine(), msg));
    }
}

function checkOtherwiseItem(ast) {
    if(otherwise) {
       var msg = "Cannot add an alternative after " + "an \"otherwise\" clause.";
       handleSyntaxError(formatError(ast.getLine(), ast.getCharPositionInLine(), msg));
    }
}

function checkTimesIdent(ast) {
    if(ast.getText() != "x") {
        var msg = "Expecting x or times, found " + ast.getText();
        handleSyntaxError(formatError(ast.getLine(), ast.getCharPositionInLine(), msg));
    }
}

function checkIteratedIdent(ast) {
    if(ast.getText() != "Sum" && 
       ast.getText() != "Product" &&
       ast.getText() != "Concatenation" &&
       ast.getText() != "Intersection" &&
       ast.getText() != "Union")
    {
        var msg = "Expecting iteration identifier " 
                + "(Sum, Product, Concatenation, Intersection, Union),"
                + "but found " + ast.getText();
             
        handleSyntaxError(formatError(ast.getLine(), ast.getCharPositionInLine(), msg));
    }
}

function checkFacInit(ast) {
    if(facInit) {
       var msg = "Cannot redefine facility initialization.";
        handleSyntaxError(formatError(ast.getLine(), ast.getCharPositionInLine(), msg));
    } else {
        facInit = true;
    }
}

function checkFacFinal(ast) {
    if(facFinal) {
        var msg = "Cannot redefine facility finalization.";
        handleSyntaxError(formatError(ast.getLine(), ast.getCharPositionInLine(), msg));        
    } else {
        facFinal = true;
    }
}

function matchMathItemIdent(id2, id1) {
    if(id1.getText() != id2.getText()) {
        var msg = "End name " + id2.getText() + " does not match proof name " 
           + id1.getText();
        handleSyntaxError(formatError(ast.getLine(), ast.getCharPositionInLine(), msg)); 
    }
}

function isDeductionToken(testStr) {
    if(testStr == "deduction" || testStr == "Deduction") {
       return true;
    }

    return false;
}