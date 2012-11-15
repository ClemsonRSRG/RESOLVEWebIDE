var TRANSLATE = "translateJava";
var VCS = "genVCs";
var BUILD = "buildJar";
var VERIFY = "verify";
var VCVERIFY = "vcVerify";
var PRETTYJAVA = "prettyJavaTranslate"
var PRETTYC = "prettyCTranslate";
/* 
 * This file contains code for creating and using the ACE editor
 */

var editor = null;
var FONTSIZE = 12;
myUserControlView = null;

var UserEvent = Backbone.Model.extend({
    initialize: function(){
        this.project = selectedProject;
        this.eventType = "";
        this.component = null;
    },
    toJSON: function(){
        //var content = this.get("content");
        // we need to escape quotes so that we have valid JSON going to the server
        //content = content.replace(/%22/g, "\\%22");
        //content = content.replace(/\"/g, "\\\"");
        var json = "{\"project\":\"" + this.get("project") + "\"," +
            "\"eventType\":\"" + this.get("eventType") + "\"," +
            "\"name\":\"" + this.get("name") + "\"," +
            "\"pkg\":\"" + this.get("pkg") + "\"," +
            "\"content\":\"" + this.get("content") + "\"}";
        return json;
    },
    url : function() {
        var loc = window.location;
        //var pathname = loc.pathname;
        //pathname = pathname.substring(0,pathname.lastIndexOf("/"));
        //var url = "http://" + loc.host + (loc.pathname.length>1?loc.pathname+"/":loc.pathname) + "Components";
        var url = "http://" + getUrl(loc) + "events";
        return url;
        //return this.collection.url() + '/Components';
    }
});

/* 
 * This will hold all of our keywords information such as the hashmap that
 * holds the keywords with their tool-tip values in it. 
 */

function KeywordsHashTable(obj){
    this.length = 0;
    this.items = new Object();
    for (var k in obj){
        if(obj.hasOwnProperty(k)){
            this.items[k] = obj[k];
            this.length++;
        }
    }
    this.getTip = function(word){
        return this.items[word];
    }
    this.hasKeyword = function(word){
        return this.items.hasOwnProperty(word);
    }
}

 /* Important keywords that need explanation with a tool-tip.
  * Only some of the keywords are displayed here because only some are used
  * and some are self-explanatory.
  */

var keywordsTable = new KeywordsHashTable({
    "abs" : "" ,
    "ad" : "" ,
    "absurdum" : "" ,
    "all" : "" ,
    "alters" : "The implementer may leave an arbitrary value of the same type at the end of the operation. This provides the most flexibility to the implementers.",
    "alt" : "The implementer may leave an arbitrary value of the same type at the end of the operation. This provides the most flexibility to the implementers." ,
    "alternative" : "" ,
    "and" : "" ,
    "Array" : "" ,
    "Aux_Code" : "" ,
    "Aux_Var" : "" ,
    "Aux_Vars" : "" ,
    "Aux" : "" ,
    "Auxiliary" : "" ,
    "Axiom" : "" ,
    "B" : "" ,
    "Base_Case" : "" ,
    "By" : "" ,
    "by" : "" ,
    "Cart_Prod" : "" ,
    "Categorical" : "" ,
    "Case" : "" ,
    "changing" : "This parameter will be changed throughout the clause.",
    "clears" : "The entry will be re-initialized to the initial value of the same type by the end of the operation." ,
    "clr" : "The entry will be re-initialized to the initial value of the same type by the end of the operation." , 
    "common" : "" ,
    "Commutativity" : "" ,
    "complement" : "" ,
    "Concatenation" : "This connects the first and second parameters into a chain of the same type. Parentheses are mandatory around Concatenation expressions" ,
    "concatenation" : "This connects the first and second parameters into a chain of the same type. Parentheses are mandatory around Concatenation expressions" ,
    "concept" : "This is similar to some object-oriented programing language's header file or class declaration. This file contains the data structure template that includes the mathematical model used to represent that type, the constraints, and a list of all operations along with their pre- and post-conditions." ,
    "Concept" : "This is similar to some object-oriented programing language's header file or class declaration. This file contains the data structure template that includes the mathematical model used to represent that type, the constraints, and a list of all operations along with their pre- and post-conditions." ,
    "conclusion" : "" ,
    "Confirm" : "" ,
    "conjunct" : "" ,
    "Constraint" : "" ,
    "Constraints" : "" ,
    "constraint" : "" ,
    "constraints" : "" ,
    "contradiction" : "" ,
    "convention" : "This clause contains constraints on the realization records in order to keep the implementations of all the various operations consistent. This can be singular or plural. It is also referred to as the representation invariant. " ,
    "conventions" : "This clause contains constraints on the realization records in order to keep the implementations of all the various operations consistent. This can be singular or plural. It is also referred to as the representation invariant. " ,
    "Convention" : "This clause contains constraints on the realization records in order to keep the implementations of all the various operations consistent. This can be singular or plural. It is also referred to as the representation invariant." ,
    "Corollary" : "" ,
    "Correspondence" : "This clause explains how to read the value in the Contents array as the string described in conceptualization. This clause is necessary to check that the code for the procedures satisfies their respective specifications. It is also referred to as the abstraction function or abstraction relation." ,
    "correspondence" : "This clause explains how to read the value in the Contents array as the string described in conceptualization. This clause is necessary to check that the code for the procedures satisfies their respective specifications. It is also referred to as the abstraction function or abstraction relation." ,
    "decreasing" : "This clause specifies a progress metric that is a natural number which reduces on each pass through the loop. This loop must eventually terminate because there is not an infinite strictly decreasing sequence of natural numbers. " ,
    "Deduction" : "" ,
    "Defines" : "" ,
    "defines" : "" ,
    "definition" : "Introducing a new mathematical function." ,
    "def" : "Introducing a new mathematical function." ,
    "Definition" : "Introducing a new mathematical function." ,
    "Def" : "Introducing a new mathematical function." ,
    "distribution" : "" ,
    "div" : "" ,
    "do" : "Perform these operations upon ensuring that the 'While' clause is true." ,
    "else" : "" ,
    "elimination" : "" ,
    "end" : "This finishes whatever operation it corresponds to. You must have this to stop every operation and begin another." ,
    "enhanced" : "" ,
    "enhancement" : "This means that the code below can use any of the information in the concept in the specification or realization of the enhancement. Also, enhancements are just a layout of different procedures that you might wish to add to a concept." ,
    "Enhancement" : "This means that the code below can use any of the information in the concept in the specification or realization of the enhancement. Also, enhancements are just a layout of different procedures that you might wish to add to a concept." ,
    "ensures" : "Post-conditions, or guarantees, that will happen if the requires clause is correct." ,
    "equality" : "" ,
    "evaluates" : "Any argument passed for that parameter must be a functional expression that will be evaluated when the operation is called." ,
    "eval" : "Any argument passed for that parameter must be a functional expression that will be evaluated when the operation is called." ,
    "excluded" : "" ,
    "exemplar" : "An identifier that stands for an arbitrary value which tells the client what is true of every variable that is of this class type." ,
    "existantial" : "" ,
    "exists" : "" ,
    "exit" : "" ,    
    "Facility" : "This is similar to Java in that every file is a class, and this facility's name should be the same as the name of the file that declares it. You need this statement at the beginning to declare the name of the class and to begin writing a file. To finish the class, write 'end Facility_Name;'" ,
    "Facility_Finalization" : "" ,
    "Facility_Initialization" : "" ,
    "false" : "" ,
    "Family" : "" ,
    "finalization" : "" ,
    "for all" : "For every circumstance like this, truth will be assumed." ,
    "from" : "" ,
    "for" : "" ,
    "For" : "" ,
    "Forget" : "" ,
    "generalization" : "" ,
    "iff" : "This is used like an 'If and only if' statement from other programming languages. " ,
    "if" : "An If-Then-Else statement is like most other programming languages in that we are testing a condition for truth and then moving into whichever statement sequence depending on the outcome of the if statement. " ,
    "If" : "An If-Then-Else statement is like most other programming languages in that we are testing a condition for truth and then moving into whichever statement sequence depending on the outcome of the if statement. " ,
    "Implicit" : "" ,
    "implies" : "" ,
    "Inductive" : "" ,
    "Inductive_case" : "" ,
    "initialization ensures" : "whenever something is declared, the client is guaranteed this statement as its initial value." ,
    "instantiation" : "" ,
    "intersection" : "" ,
    "introduces" : "" ,
    "is" : "" ,
    "is_in" : "" ,
    "Is_Initial" : "" ,
    "is_not_in" : "" ,
    "is_not_proper_subset_of" : "" ,
    "is_not_subet_of" : "" ,
    "is_not_substring_of" : "" ,
    "is_proper_subset_of" : "" ,
    "is_subset_of" : "" ,
    "is_substring_of" : "" ,
    "Iterate" : "" ,
    "lambda" : "The empty string." ,
    "Lemma" : "" ,
    "Local" : "" ,
    "maintaining" : "This clause describes essentially what makes the loop work. It must be true at the beginning and at the end of every iteration of the loop." ,
    "Math" : "" ,
    "middle" : "" ,
    "mod" : "" ,
    "modeled" : "" ,
    "modus" : "" ,
    "not" : "" ,
    "o" : "This connects the first and second parameters into a chain of the same type. Parentheses are mandatory around Concatenation expressions." ,
    "of" : "" ,
    "oper" : "The beginning of a function within a class. This statement needs to be concluded with an 'end Operation_Name;'. This is used to declare the facility." ,
    "Oper" : "The beginning of a function within a class. This statement needs to be concluded with an 'end Operation_Name;'. This is used to declare the facility." ,
    "operation" : "The beginning of a function within a class. This statement needs to be concluded with an 'end Operation_Name;'. This is used to declare the facility." ,
    "Operation" : "The beginning of a function within a class. This statement needs to be concluded with an 'end Operation_Name;'. This is used to declare the facility." ,
    "or" : "" ,
    "otherwise" : "" ,
    "ponens" : "" ,
    "Powerset" : "" ,
    "powerset" : "" ,
    "preserves" : "The value passed in will always be the same ending value,  and we are guaranteed that the value will not be changed throughout the operation." ,
    "pres" : "The value passed in will always be the same ending value,  and we are guaranteed that the value will not be changed throughout the operation." ,
    "Proc" : "This contains implementation statements within a facility." ,
    "Procedure" : "This contains implementation statements within a facility." ,
    "Proof" : "" ,
    "proof" : "" ,
    "Proofs_for" : "" ,
    "Property" : "" ,
    "Pty" : "" ,
    "QED" : "" ,
    "quantifier" : "" ,
    "realization" : "This will contain code for a procedure from the Enhancement." ,
    "Realization" : "This will contain code for a procedure from the Enhancement." ,
    "realized" : "" ,
    "reassigns" : "" ,
    "Record" : "" ,
    "Recursive" : "" ,
    "reductio" : "" ,
    "related" : "" ,
    "rem" : "" ,
    "Remember" : "" ,
    "repeat" : "" ,
    "replaces" : "The value passed in becomes irrelevant and will be replaced by the value specified in the ensures clause by the end of the operation.",
    "rpl" : "The value passed in becomes irrelevant and will be replaced by the value specified in the ensures clause by the end of the operation." ,
    "represented" : "" ,
    "requires" : "This clause is the pre-condition that the Client (or caller) is responsible for ensuring truth." ,
    "res" : "" ,
    "restores" : "The value passed in will always be the same ending value, but there is no guarantee that it will not be changed throughout the operation." ,
    "rest" : "The value passed in will always be the same ending value, but there is no guarantee that it will not be changed throughout the operation." ,
    "rules" : "" ,
    "SSet" : "" ,
    "Static" : "" ,
    "Subtype" : "" ,
    "such" : "" ,
    "Supposition" : "" ,
    "that" : "" ,
    "then" : "" ,
    "Theorem" : "" ,
    "Theory" : "" ,
    "Precis" : "" ,
    "There" : "" ,
    "there" : "" ,
    "times" : "" ,
    "true" : "" ,
    "Type" : "" ,
    "type" : "" ,
    "Type_Family" : "" ,
    "union" : "The set of elements that are in the two sets." ,
    "Unique" : "" ,
    "unique" : "" ,
    "Unit" : "" ,
    "unit" : "" ,
    "universal" : "" ,
    "updates" : "The value passed in will have a purposeful change at the end of the operation.",
    "upd" : "The value passed in will have a purposeful change at the end of the operation." ,
    "uses" : "This allows RESOLVE to handle specific data types which are defined through the concepts listed in these clauses. This is similar to header files from other programming languages." ,
    "Variable" : "The declaration of a variable always begins with this. The syntax is as follows: 'Var varname:   Vartype;'. The 'Vartype' is where you determine what kind of variable we are declaring." ,
    "Var" : "The declaration of a variable always begins with this. The syntax is as follows: 'Var varname:   Vartype;'. The 'Vartype' is where you determine what kind of variable we are declaring." ,
    "Variables" : "The declaration of a variable always begins with this. The syntax is as follows: 'Var varname:   Vartype;'. The 'Vartype' is where you determine what kind of variable we are declaring." ,
    "Vars" : "The declaration of a variable always begins with this. The syntax is as follows: 'Var varname:   Vartype;'. The 'Vartype' is where you determine what kind of variable we are declaring." ,
    "when" : "" ,
    "where" : "" ,
    "While" : "The beginning of a loop where the clause following this is what the loop will be ensuring is true to be able to continue on." ,
    "without" : "" 
    }); 

UserControlView = Backbone.View.extend({
    initialize: function(){
        //this.model.bind("change", this.render, this);
        this.bind("change:model", this.render, this);
        this.render();
    },
    
    render: function(){
        $(this.el).empty();
        var commands = $("<div>").html("").addClass("controls_commands");
        var zoomControls = $("<div>").addClass("controls_zoom");
        //var translate = $("<button>").html("translate").addClass("translateJava command active shadow");
        var build = $("<button>").html("Build").addClass("buildJar command active shadow");
        var vcs = $("<button>").html("VCs").addClass("vcs command active shadow");
        var verify = $("<button>").html("Verify").addClass("verify command active shadow");
        var renderSpan = $("<div>").attr({id:"render-controls"}).addClass("render command");
        var translateRenderbox = $("<input>").attr({type:"checkbox","id":"translateCheckbox","data-type":"translateCheckbox"});
        var translateRenderSpan = $("<label>").attr({"for":"translateCheckbox"}).html("Translate");
        var javaRenderbox = $("<input>").attr({type:"checkbox","id":"javaCheckbox","data-type":"javaCheckbox"});
        var javaRenderSpan = $("<label>").attr({"for":"javaCheckbox"}).html("Java Rendering");
        var cRenderbox = $("<input>").attr({type:"checkbox","id":"cCheckbox","data-type":"cCheckbox"});
        var cRenderSpan = $("<label>").attr({"for":"cCheckbox"}).html("C Rendering");
        //var showJava = $("<div>").addClass("java");
        //var inputID = "showJava";
        //this._javaCheckbox = $("<input>").attr({type:"checkbox", id: inputID});
        //this._javaCheckbox.appendTo(showJava);
        //var javaLabel = $("<label>").html("Java").attr({"for":inputID});
        //showJava.append(javaLabel);
        var plus = $("<button>").addClass("plus zoom shadow active");
        var minus = $("<button>").addClass("minus zoom shadow active");
        var component = this.model.get("componentModel");
        if(component != null){
            if(component.get("type") == "c"){
                //translate.appendTo(commands);
                translateRenderbox.appendTo(renderSpan);
                translateRenderSpan.appendTo(renderSpan);
                //renderSpan.appendTo(commands);
            }
            else if(component.get("type") == "r"){
                //translate.appendTo(commands);
                vcs.appendTo(commands);
                //verify.appendTo(commands);
                translateRenderbox.appendTo(renderSpan);
                translateRenderSpan.appendTo(renderSpan);
                //renderSpan.appendTo(commands);
            }
            else if(component.get("type") == "e"){
                //translate.appendTo(commands);
                translateRenderbox.appendTo(renderSpan);
                translateRenderSpan.appendTo(renderSpan);
                //renderSpan.appendTo(commands);
            }
            else if(component.get("type") == "er"){
                //translate.appendTo(commands);
                vcs.appendTo(commands);
                verify.appendTo(commands);
                translateRenderbox.appendTo(renderSpan);
                translateRenderSpan.appendTo(renderSpan);
                //renderSpan.appendTo(commands);
            }
            else if(component.get("type") == "f"){
                build.appendTo(commands);
                //translate.appendTo(commands);
                vcs.appendTo(commands);
                verify.appendTo(commands);
                translateRenderbox.appendTo(renderSpan);
                translateRenderSpan.appendTo(renderSpan);
                javaRenderbox.appendTo(renderSpan);
                javaRenderSpan.appendTo(renderSpan);
                cRenderbox.appendTo(renderSpan);
                cRenderSpan.appendTo(renderSpan);
                //renderSpan.appendTo(commands);
            }
            else if(component.get("type") == "t"){
                
            }
            if(component.get("custom") === "true"){
                var divider = $("<span>").html(" | ").addClass("divider");
                var save = $("<button>").html("Save").addClass("save command shadow");
                var rename = $("<button>").html("Rename").addClass("rename command active shadow");
                var del = $("<button>").html("Delete").addClass("del command active shadow");
                divider.appendTo(commands);
                save.appendTo(commands);
                rename.appendTo(commands);
                save.attr({disable: "disabled"});
                del.appendTo(commands);
            }
            if(this.model.has("syntaxErrors") && this.model.get("syntaxErrors").length > 0){
                var buttons = commands.find("button");
                buttons.attr({disable: "disabled"});
                buttons.removeClass("active");
                var renderers = commands.find(".render input");
                renderers.attr({disabled: true});
                var delButton = $("#control_bar.del");
                if(delButton != null){
                    delButton.removeAttr("disabled").addClass("active");
                }
            }
        }
        else{
            commands.append("Please select a component");
        }
        plus.appendTo(zoomControls);
        minus.appendTo(zoomControls);
        $(this.el).html(commands);
        $(this.el).append(zoomControls);
        $(this.el).append(renderSpan);
        $(".plus").qtip({
            content: 'Click here to zoom in',
            show: 'mouseover',
            hide: 'mouseout'
        });
        
        minus.qtip({
            content: 'Click here to zoom out',
            show: 'mouseover',
            hide: 'mouseout'
        });
        
        $(".ace_keyword").qtip({
            content: 'keyword',
            show: 'click'//,
            //hide: 'mouseout'
        });
    },
    events: {
        "click .active.translateJava" : "compile",
        "click .active.buildJar" : "compile",
        "click .active.vcs" : "compile",
        "click .active.verify" : "verify",
        "click #translateCheckbox" : "translateJava",
        "click #javaCheckbox" : "translatePrettyJava",
        "click #cCheckbox" : "translatePrettyC",
        "click .active.rename" : "rename",
        "click .active.save" : "save",
        "click .active.del" : "del",
        "click #showJava" : "showJava",
        "click .plus" : "increaseFontSize",
        "click .minus" : "decreaseFontSize"
    },
    compile: function(event){
        var openComponentTab = $("#open_menu").find(".component_tab.selected");
        var infoBlock = openComponentTab.find(".componentInfo");
        var waitGif = addWaitGif(infoBlock);
        var targetJob = null;
        var targetButton = $(event.currentTarget);
        // these classes must match what is assigned in the render function above
        // for the sevlet backend to understand what to do. That means the servlet
        // must also match when it checks for the job parameter
        if(targetButton.hasClass("translateJava")){
            targetJob = TRANSLATE;
        }
        else if(targetButton.hasClass("buildJar")){
            targetJob = BUILD;
        }
        else if(targetButton.hasClass("vcs")){
            targetJob = VCS;
        }
        else if(targetButton.hasClass("verify")){
            targetJob = VCVERIFY;
        }
        var model = this.model;
        var component = model.get("componentModel").clone();
        component.set("content", encode(editor.getSession().getValue()));
        var targetJSON = component.toJSON();
        wsCompile(targetJob, targetJSON, waitGif, model);
    },
    verify: function(event){
        var openComponentTab = $("#open_menu").find(".component_tab.selected");
        var infoBlock = openComponentTab.find(".componentInfo");
        var waitGif = addWaitGif(infoBlock);
        var targetJob = null;
        var targetButton = $(event.currentTarget);
        // these classes must match what is assigned in the render function above
        // for the sevlet backend to understand what to do. That means the servlet
        // must also match when it checks for the job parameter
        if(targetButton.hasClass("translateJava")){
            targetJob = TRANSLATE;
        }
        else if(targetButton.hasClass("buildJar")){
            targetJob = BUILD;
        }
        else if(targetButton.hasClass("vcs")){
            targetJob = VCS;
        }
        else if(targetButton.hasClass("verify")){
            targetJob = VCVERIFY;
        }
        var model = this.model;
        var component = model.get("componentModel").clone();
        component.set("content", encode(editor.getSession().getValue()));
        var targetJSON = component.toJSON();
        wsCompile(targetJob, targetJSON, waitGif, model);
    },
    translate : function(targetJob, model, thisCheckbox, thatCheckbox1, thatCheckbox2){
        /*var checkbox = $(event.currentTarget);
        var translateCheckbox = $("#translateCheckbox");
        var javaCheckbox = $("#javaCheckbox");
        var cCheckbox = $("#cCheckbox");
        var thisCheckbox = translateCheckbox;
        var thatCheckbox1 = javaCheckbox;
        var thatCheckbox2 = cCheckbox;*/
        if(thisCheckbox.attr("checked")){
            var openComponentTab = $("#open_menu").find(".component_tab.selected");
            var infoBlock = openComponentTab.find(".componentInfo");
            var waitGif = addWaitGif(infoBlock);
            thatCheckbox1.attr({"disabled":true});
            thatCheckbox2.attr({"disabled":true});
            var component = model.get("componentModel").clone();
            component.set("content", encode(editor.getSession().getValue()));
            var targetJSON = component.toJSON();
            wsCompile(targetJob, targetJSON, waitGif, model);
        }
        else{
            thatCheckbox1.attr({"disabled":false});
            thatCheckbox2.attr({"disabled":false});
            var resolveEditorSession = this.model.get("editorSession");
            var commandButtons = $(".controls_commands").find("button");
            commandButtons.attr({disable: ""});
            commandButtons.addClass("active");
            editor.setSession(resolveEditorSession);
            editor.setReadOnly(false);
            editor.setHighlightActiveLine(true);
        }  
    },
    translateJava : function(event){
        var checkbox = $(event.currentTarget);
        var translateCheckbox = $("#translateCheckbox");
        var javaCheckbox = $("#javaCheckbox");
        var cCheckbox = $("#cCheckbox");
        var thisCheckbox = translateCheckbox;
        var thatCheckbox1 = javaCheckbox;
        var thatCheckbox2 = cCheckbox;
        var targetJob = TRANSLATE;
        this.translate(targetJob, this.model, thisCheckbox, thatCheckbox1, thatCheckbox2);
        /*if(thisCheckbox.attr("checked")){
            var openComponentTab = $("#open_menu").find(".component_tab.selected");
            var infoBlock = openComponentTab.find(".componentInfo");
            var waitGif = addWaitGif(infoBlock);
            //var waitGif = addWaitGif(thisCheckbox.next());
            //doPrettyJavaTranslate(selectedFile, checkbox, waitGif, targetContent);
            thatCheckbox1.attr({"disabled":true});
            var model = this.model;
            var component = model.get("componentModel").clone();
            component.set("content", encode(editor.getSession().getValue()));
            var targetJSON = component.toJSON();
            var targetJob = "";
            if(checkbox.attr("id") === javaCheckbox.attr("id")){
                targetJob = PRETTYJAVA;
            }
            else if(checkbox.attr("id") === cCheckbox.attr("id")){
                targetJob = PRETTYC;
            }
            else{
                targetJob = TRANSLATE;
            }
            wsCompile(targetJob, targetJSON, waitGif, model);
        }
        else{
            thatCheckbox1.attr({"disabled":false});
            var resolveEditorSession = this.model.get("editorSession");
            var commandButtons = $(".controls_commands").find("button");
            commandButtons.attr({disable: ""});
            commandButtons.addClass("active");
            editor.setSession(resolveEditorSession);
            editor.setReadOnly(false);
            editor.setHighlightActiveLine(true);
        }*/  
    },
    translatePrettyJava : function(event){
        var checkbox = $(event.currentTarget);
        var translateCheckbox = $("#translateCheckbox");
        var javaCheckbox = $("#javaCheckbox");
        var cCheckbox = $("#cCheckbox");
        var thisCheckbox = javaCheckbox;
        var thatCheckbox1 = translateCheckbox;
        var thatCheckbox2 = cCheckbox;
        var targetJob = PRETTYJAVA;
        this.translate(targetJob, this.model, thisCheckbox, thatCheckbox1, thatCheckbox2);
        /*if(thisCheckbox.attr("checked")){
            var openComponentTab = $("#open_menu").find(".component_tab.selected");
            var infoBlock = openComponentTab.find(".componentInfo");
            var waitGif = addWaitGif(infoBlock);
            //var waitGif = addWaitGif(thisCheckbox.next());
            //doPrettyJavaTranslate(selectedFile, checkbox, waitGif, targetContent);
            thatCheckbox1.attr({"disabled":true});
            var model = this.model;
            var component = model.get("componentModel").clone();
            component.set("content", encode(editor.getSession().getValue()));
            var targetJSON = component.toJSON();
            var targetJob = "";
            if(checkbox.attr("id") === javaCheckbox.attr("id")){
                targetJob = PRETTYJAVA;
            }
            else if(checkbox.attr("id") === cCheckbox.attr("id")){
                targetJob = PRETTYC;
            }
            else{
                targetJob = TRANSLATE;
            }
            wsCompile(targetJob, targetJSON, waitGif, model);
        }
        else{
            thatCheckbox1.attr({"disabled":false});
            var resolveEditorSession = this.model.get("editorSession");
            var commandButtons = $(".controls_commands").find("button");
            commandButtons.attr({disable: ""});
            commandButtons.addClass("active");
            editor.setSession(resolveEditorSession);
            editor.setReadOnly(false);
            editor.setHighlightActiveLine(true);
        }*/
    },
    translatePrettyC : function(event){
        var checkbox = $(event.currentTarget);
        var translateCheckbox = $("#translateCheckbox");
        var javaCheckbox = $("#javaCheckbox");
        var cCheckbox = $("#cCheckbox");
        var thisCheckbox = cCheckbox;
        var thatCheckbox1 = javaCheckbox;
        var thatCheckbox2 = translateCheckbox;
        var targetJob = PRETTYC;
        this.translate(targetJob, this.model, thisCheckbox, thatCheckbox1, thatCheckbox2);
        /*if(thisCheckbox.attr("checked")){
            var openComponentTab = $("#open_menu").find(".component_tab.selected");
            var infoBlock = openComponentTab.find(".componentInfo");
            var waitGif = addWaitGif(infoBlock);
            //var waitGif = addWaitGif(thisCheckbox.next());
            //doPrettyJavaTranslate(selectedFile, checkbox, waitGif, targetContent);
            thatCheckbox1.attr({"disabled":true});
            var model = this.model;
            var component = model.get("componentModel").clone();
            component.set("content", encode(editor.getSession().getValue()));
            var targetJSON = component.toJSON();
            var targetJob = "";
            if(checkbox.attr("id") === javaCheckbox.attr("id")){
                targetJob = PRETTYJAVA;
            }
            else if(checkbox.attr("id") === cCheckbox.attr("id")){
                targetJob = PRETTYC;
            }
            else{
                targetJob = TRANSLATE;
            }
            wsCompile(targetJob, targetJSON, waitGif, model);
        }
        else{
            thatCheckbox1.attr({"disabled":false});
            var resolveEditorSession = this.model.get("editorSession");
            var commandButtons = $(".controls_commands").find("button");
            commandButtons.attr({disable: ""});
            commandButtons.addClass("active");
            editor.setSession(resolveEditorSession);
            editor.setReadOnly(false);
            editor.setHighlightActiveLine(true);
        }*/  
    },
    rename : function(event){
        //var editorSession = this.model.get("editorSession");
        //var code = editorSession.doc.getValue();
        renameUserComponent(this.model);
        /*var userEvent = new UserEvent({
            eventType: "renameComponent",
            project: selectedProject,
            name: this.model.get("name"),
            pkg: this.model.get("pkg"),
            content: this.model.get("content")
        });
        userEvent.save();*/
    },
    save : function(event){
        var editorSession = this.model.get("editorSession");
        var code = editorSession.doc.getValue();
        var model = this.model.get("componentModel");
        model.set("content", code);
        model.save();
        $(event.currentTarget).attr({disable: "diabled"}).removeClass("active");
        var openComponentTab = $("#open_menu").find(".component_tab.selected");
        var editedIcon = openComponentTab.find("b");
        editedIcon.remove();
        
        /*var userEvent = new UserEvent({
            eventType: "saveComponent",
            project: selectedProject,
            name: model.get("name"),
            pkg: model.get("pkg"),
            content: model.get("content")
        });
        userEvent.save();*/
    },
    del : function(event){
        var model = this.model;
        var ans = confirm("Are you sure you want to delete " + model.get("name") + "?");
        if(ans){
            deleteUserComponent(model);
            
            /*var userEvent = new UserEvent({
                eventType: "deleteComponent",
                project: selectedProject,
                name: model.get("name"),
                pkg: model.get("pkg"),
                content: model.get("content")
            });
            userEvent.save();*/
        }
    },
    showJava : function(event){
        var checked = $(event.currentTarget).attr("checked");
        var resolveEditorSession = this.model.get("editorSession"); 
        var javaEditorSession = this.model.get("java");
        var commandButtons = $(".controls_commands").find("button");
        if(checked == "checked"){
            editor.setSession(javaEditorSession);
            editor.setReadOnly(true);
            commandButtons.attr({disable: "diabled"});
            commandButtons.removeClass("active");
            //var ResolveMode = require("ace/mode/resolve").Mode;
        }
        else{
            editor.setSession(resolveEditorSession);
            editor.setReadOnly(false);
            commandButtons.attr({disable: ""});
            commandButtons.addClass("active");
            //var JavaMode = require("ace/mode/java").Mode;
        }
        log($(event.currentTarget).attr("checked"));
    },
    createComponent: function(){
        var component = this.model.get("componentModel").clone();
        //component.set("content", encode(editor.getSession().getValue()));
        //var tc = new UserComponent({component: component, ws: "default"});
        //var targetJSON = tc.toJSON();
        var targetJSON = component.toJSON();
        updateComponent("create", targetJSON);
    },
    increaseFontSize: function(){
        var oldFontSize = FONTSIZE;
        this.changeFontSize(oldFontSize+1);
    },
    decreaseFontSize: function(){
        var oldFontSize = FONTSIZE;
        this.changeFontSize(oldFontSize-1);
    },
    changeFontSize: function(fontSize){
        FONTSIZE = fontSize;
        document.getElementById("code_editor").style.fontSize=FONTSIZE + "px";
    }
});

function renameUserComponent(openModel){
    var model = openModel.get("componentModel");
    var code = "";
    var el = $("#dialog_new");
    var d = el.dialog({
        width:400,
        height:200,
        resizable:false,
        draggable:false,
        //dialogClass: "menu",
        modal: true
    });
    var form = $("<div>");
    form.html("Please enter a new name for " + model.get("name") +":<br/>");
    var name = $("<input>").attr({id:"fileName",name:"name"});
    var submit = $("<input>").attr({"type":"button","value":"OK"});
    var error = $("<span>").addClass("namingError");
    form.append(name);
    form.append("<br/>");
    form.append(error);
    form.append("<br/>");
    form.append(submit);
    submit.click(function(event){
        event.preventDefault();
        error.html("");
        var oldName = model.get("name");
        var newName = name.attr("value");
        var newId = "";
        var type = model.get("type");
        if(type === "c"){
            newId = newName;
        }
        else if(type === "e"){
            newId = model.get("pkg");
        }
        else if(type === "r"){
            newId = model.get("pkg");
        }
        else if(type === "f"){
            newId = "facilities";
        }
        else if(type === "t"){
            newId = "theories";
        }
        newId += "." + newName;
        var existingModel = getModelById(myComponentList, newId);
        if(existingModel != null){
            error.html("A component with this name already exists!");
        }
        else{
            if(type === "f" || type === "t"){
                existingModel = getTheoryOrFacilityByName(newName, type);
            }
            if(existingModel != null){
                error.html("A component with this name already exists!");
            }
            else{
                // @todo ajax to update the component
                error.html("good to go");
                
                var loc = window.location;
                //var pathname = loc.pathname;
                //pathname = pathname.substring(0,pathname.lastIndexOf("/"));
                var url = "http://" + getUrl(loc) + "rename";
                $.ajax({
                    type: "POST",
                    url: url,
                    data: {
                        job: "rename",
                        newName: newName,
                        target: model.toJSON()
                    },
                    success: function(data){
                        model.set({"name": newName, "id":newId});
                        model.id = newId;
                        openModel.set({"name": newName, "id":newId});
                        openModel.id = newId;
                        updateOpenComponents(openModel);
                        d.dialog("destroy");
                    }
                });
            }    
        }
    });
    el.html(form);
    
}

function deleteUserComponent(openModel){
    var model = openModel.get("componentModel");
    var loc = window.location;
    //var pathname = loc.pathname;
    //pathname = pathname.substring(0,pathname.lastIndexOf("/"));
    var url = "http://" + getUrl(loc) + "delete";
    $.ajax({
        type: "POST",
        url: url,
        data: {
            target: model.toJSON()
        },
        success: function(data){
            model.id = null;
            model.destroy();
            openModel.id = null;
            openModel.destroy();
            updateOpenComponents(null);
        }
    });
}


function getRenameDialog(){
    
}

function ajaxCompile(targetJob, targetJSON, waitGif, model){
    $.ajax({
        url: "WebCompiler",
        type: "POST",
        //data: {"job": targetJob, "target":targetJSON, "userComponents": userJSON},
        data: {"job": targetJob, "target":targetJSON},
        success: function(result){

            waitGif.remove();
            if(targetJob == "translateJava"){
                $("#console-expander").trigger("click");
                $("#console-info").html(result);
                //analyzeJavaResults(model, result);
            }
            else if(targetJob == "build"){

            }
            else if(targetJob == "genVCs"){
                analyzeVcResults(model, result);
            }
            else if(targetJob == "verify"){
                analyzeVerifyResults(model, result);
            }

            //$(msg).find("genCodeResults").each(function(){
                //var java = unescape($(this).find("code").text());
                //log("result: "+java);
                //java = String(java).replace(lsRegExp, " ");
                //java = replaceRemoteFileNames(serverFileNames, java);
                //name = $(this).find("userName").text();
                //compilerOutput = $(this).find("compilerOutput").text();
                //compilerOutput = String(compilerOutput).replace(lsRegExp, " ");
                //success = $(this).find("translateSuccess").text();
            //});

        }
    });
}

var ws = null;

function wsCompile(targetJob, targetJSON, waitGif, model){
    var loc = window.location;
    var verify = false;
    if(targetJob == VCVERIFY){
        verify = true;
        targetJob = VCS;
    }
    var url = "ws://" + getUrl(loc) + "Compiler";
    var params = "?job=" + targetJob + "&target=" + targetJSON + "&project=" + selectedProject;
    var new_uri = url + params;
    if ('WebSocket' in window) {
        ws = new WebSocket(new_uri);
    } else if ('MozWebSocket' in window) {
        ws = new MozWebSocket(new_uri);
    } else {
        alert('WebSocket is not supported by this browser.');
        return;
    }
    ws.onmessage = function (event) {
        //waitGif.remove();
        var resultJSON = JSON.parse(event.data);
        var status = resultJSON.status;
        if(status == "info"){
            //$("#console-info").append(resultJSON.msg+"<br/>");
        }
        else if(status == "complete"){
            analyzeResults(resultJSON, model, waitGif);
            if(verify){
                var vcSpans = $("#console-info").find(".vc_status");
                vcSpans.each(function(){
                    addWaitGif($(this));
                })
                var vcsDetails = $("#console-info").find(".vc_details");
                vcsDetails.addClass("vc_details_hidden");
                targetJob = VERIFY;
                wsCompile(targetJob, targetJSON, waitGif, model);
            }
            else{
                var openComponentTab = $("#open_menu").find(".component_tab.selected");
                var infoBlock = openComponentTab.find(".componentInfo");
                infoBlock.html("");
            }  
        }
        else if(status == "processing"){
            analyzeVerifyResult(resultJSON);
        }
        else if(status == "error"){
            handleErrors(resultJSON, model);
        }
    };
    ws.onopen = function(event){
        ws.send("starting job"); // need to do this to make it work right with Trend Micro AV
    };
    
    ws.onclose = function (event) {
        //console.log(event);
    };
    
    var userEvent = new UserEvent({
        eventType: targetJob,
        project: selectedProject,
        name: model.get("name"),
        pkg: model.get("pkg"),
        content: model.get("componentModel").get("content")
    });
    userEvent.save();    
    //new Socket(new_uri+"?target="+targetJSON);
}

function getUrl(loc){
    var url = "";
    var pathname = loc.pathname;
    pathname = pathname.substring(0,pathname.lastIndexOf("/"));
    if(pathname.length == 0){
        url = loc.host + (loc.pathname.length>1?loc.pathname+"/":loc.pathname);
        
    }
    else{
        url = loc.host + (loc.pathname.length>1?pathname+"/":loc.pathname);
    }
    return url;
}

function analyzeResults(resultJSON, component, waitGif){
    /*if(resultJSON.job == TRANSLATE){
        var EditSession = require("ace/edit_session").EditSession;
        var javaCode = resultJSON.result;
        var javaSession = new EditSession(formatCode(decode(javaCode)));
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
        
        $("#console-info").append("complete<br/>");
    }*/
    if(resultJSON.job == VCS){
        var vcArray = new Array();
        //var result = decode(resultJSON.result);
        var result = decode(resultJSON.result);
        var savedVCs = $(result).text();
        var vcJSON = jQuery.parseJSON(savedVCs);
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
        //log("VCs complete");
        //selectedFile.vcArray = vcArray;
        addVcs(component, vcArray);
        component.set("vcs", vcArray);
        triggerConsole();
    }
    else if(resultJSON.job == BUILD){
        var buildResult = jQuery.parseJSON(decode(resultJSON.result));
        var facName = buildResult.jarName;
        var downloadDir = buildResult.downloadDir;
        var downloadButton = $("<button>").val("download").text("Download");
        downloadButton.click(function(event){
            event.preventDefault();
            var loc = window.location;
            //var pathname = loc.pathname;
            //pathname = pathname.substring(0,pathname.lastIndexOf("/"));
            //var url = "http://" + loc.host + (loc.pathname.length>1?loc.pathname+"/":loc.pathname) + "Components";
            var url = "http://" + getUrl(loc)
                    + "download?job=download&name=" + facName + "&dir=" + downloadDir;
            window.location.href = url;
            d.dialog("destroy");
        });
        var cancelButton = $("<button>").val("cancel").text("Cancel");
        cancelButton.click(function(event){
            event.preventDefault();
            cancelJarDownload(facName, downloadDir, d);
        });
        var content = $("<div>").html("Succesfully built jar program for: " + facName + "<br/><br/>");
        content.append(downloadButton);
        content.append(cancelButton);
        var el = $("#dialog_new");
        var d = el.dialog({
            width:400,
            height:200,
            resizable:false,
            draggable:false,
            //dialogClass: "menu",
            modal: true,
            close: function(event){
                event.preventDefault();
                cancelJarDownload(facName, downloadDir, d);
            }
        });
        el.html(content);
    }
    else if(resultJSON.job == VERIFY){
        
    }
    else if(resultJSON.job == TRANSLATE){
        var EditSession = require("ace/edit_session").EditSession;
        var javaCode = resultJSON.result;
        var javaSession = new EditSession(formatCode(decode(javaCode)));
        var JavaMode = require("ace/mode/java").Mode;
        component.set("java", javaSession);
        editor.setReadOnly(true);
        editor.setSession(javaSession);
        editor.getSession().setMode(new JavaMode());
        //myUserControlView.render();
        //myUserControlView._javaCheckbox.attr({checked: "checked"});
        var commandButtons = $(".controls_commands").find("button");
        commandButtons.attr({disable: "diabled"});
        commandButtons.removeClass("active");
        
        $("#console-info").append("complete<br/>");
    }
    else if(resultJSON.job == PRETTYJAVA){
        EditSession = require("ace/edit_session").EditSession;
        javaCode = resultJSON.result;
        javaSession = new EditSession(formatCode(decode(javaCode)));
        JavaMode = require("ace/mode/java").Mode;
        component.set("java", javaSession);
        editor.setReadOnly(true);
        editor.setSession(javaSession);
        editor.getSession().setMode(new JavaMode());
        //myUserControlView.render();
        //myUserControlView._javaCheckbox.attr({checked: "checked"});
        commandButtons = $(".controls_commands").find("button");
        commandButtons.attr({disable: "diabled"});
        commandButtons.removeClass("active");
        $("#console-info").append("complete<br/>");
        if(component.get("vcs") != null){
            addVcs(component, component.get("vcs"));
        }
    }
    else if(resultJSON.job == PRETTYC){
        EditSession = require("ace/edit_session").EditSession;
        var cCode = resultJSON.result;
        javaSession = new EditSession(formatCode(decode(cCode)));
        var CMode = require("ace/mode/c_cpp").Mode;
        component.set("java", javaSession);
        editor.setReadOnly(true);
        editor.setSession(javaSession);
        editor.getSession().setMode(new CMode());
        //myUserControlView.render();
        //myUserControlView._javaCheckbox.attr({checked: "checked"});
        commandButtons = $(".controls_commands").find("button");
        commandButtons.attr({disable: "diabled"});
        commandButtons.removeClass("active");
        $("#console-info").append("complete<br/>");
        if(component.get("vcs") != null){
            addVcs(component, component.get("vcs"));
        }
    }
    //waitGif.remove();
}

function analyzeVerifyResult(resultJSON){
    if(resultJSON.job == VERIFY){
        var vcResult = resultJSON.result;
        var vcID = "VC_" + vcResult.id;
        var result = vcResult.result;
        var vcDiv = $("#" + vcID);
        //var check_img = "&nbsp;&nbsp;&nbsp;<img class=\"verify_imgs\" src=\"images/check.png\" alt=\"Proved in\" />";
        //var x_img = "&nbsp;&nbsp;&nbsp;<img class=\"verify_imgs\" src=\"images/x.png\" alt=\"Skipped after\" />";
        var pRegExp = /Proved/i;
        var msRegExp = /[0-9]+/;
        var statusSpan = vcDiv.find(".vc_status");
        if(pRegExp.test(result)) {
            addProveSuccess(statusSpan);
            statusSpan.attr({
                title: "Proved after " + msRegExp.exec(result) + " ms"
            });
            //statusSpan.append("&nbsp;(" + msRegExp.exec(result) + " ms).");
            //result_string = check_img + "&nbsp;(" + msRegExp.exec(result) + " ms).";
        }
        else {
            addProveFail(statusSpan);
            statusSpan.attr({
                title: "Skipped after " + msRegExp.exec(result) + " ms"
            });
            //statusSpan.append("&nbsp;(" + msRegExp.exec(result) + " ms).");
            //result_string = x_img + "&nbsp;(" + msRegExp.exec(result) + " ms).";
        }
    }
}

function cancelJarDownload(facName, downloadDir, d){
    var loc = window.location;
    var pathname = loc.pathname;
    pathname = pathname.substring(0,pathname.lastIndexOf("/"));
    var url = "http://" + getUrl(loc)
            + "download?job=cancel&name=" + facName + "&dir=" + downloadDir;
    $.ajax({
        type: "GET",
        url : url,
        success: function(){
            d.dialog("destroy");
        }
    });
}

function handleErrors(resultJSON, component){
    var errorType = resultJSON.type;
    if(errorType == "error"){
        var errors = getErrorArray(resultJSON.errors);
        addErrors(errors, component.get("componentModel"), "compiler");
    }
    else if(errorType == "bug"){
        var bugs = getBugArray(resultJSON.bugs);
        var code = getBugMsgs(bugs);
        code = "<pre class=\"bugTrace\">" + code + "</pre>";
        triggerConsole();
        $("#console-info").html("").append(code+"<br/>");
    }
    var openComponentTab = $("#open_menu").find(".component_tab.selected");
    var infoBlock = openComponentTab.find(".componentInfo");
    infoBlock.html("");
}

function getErrorArray(jsonResults){
    return jsonResults[0].errors;
    /*var errors = null;
    if(jsonResults.length == 2){
        errors = jsonResults[0].errors;
    }
    else{
        if(typeof jsonResults[0].errors !== "undefined"){
            errors = jsonResults[0].errors;
        }
    }
    return errors*/
}

function getBugArray(jsonResults){
    return jsonResults[0].bugs;
    /*var bugs = null;
    if(jsonResults.length == 2){
        bugs = jsonResults[1].bugs;
    }
    else{
        if(typeof jsonResults[0].bugs !== "undefined"){
            bugs = jsonResults[0].bugs;
        }
    }
    return bugs;*/
}

function getBugMsgs(bugs){
    var msg = "";
    $.each(bugs, function(index, data){
       msg += decode(data.bug) + "\n"; 
    });
    return msg;
}

function initializeEditor(){
    var editorDiv = "code_editor";
    setEditorHeight();
    setConsolePosition();
    editor = ace.edit(editorDiv);
    editor.setTheme("ace/theme/textmate");
    var ResolveMode = require("ace/mode/resolve").Mode;
    editor.getSession().setMode(new ResolveMode());
    editor.getSession().setValue("");
    editor.renderer.setHScrollBarAlwaysVisible(false);
    document.getElementById(editorDiv).style.fontSize=FONTSIZE+"px";
    
    myUserControlView = new UserControlView({el: $("#control_bar"), model: new OpenComponent()});
    
    var consoleExpander = $("#console-expander");
    consoleExpander.click(function(event){
        showConsole(this);
    });
    document.onkeydown = keyHandler;
}

function setEditorHeight(){
    var lowerHeight = $("#content").outerHeight(true) - $("#user_bar").outerHeight(true) - 
        $("#menu_bar").outerHeight(true) - $("#control_bar").outerHeight(true) -
        $("#open_menu").outerHeight(true) - $("#footer").outerHeight(true);
    var editorHeight =  lowerHeight;// - $("#editor_container").outerHeight(true);
    $("#editor_container").outerHeight(lowerHeight + $("#control_bar").outerHeight(true));
    $("#code_editor").outerHeight(editorHeight);
}

function setConsolePosition(){
    var console = $("#console-container");
    var editorHeight = $("#editor_container").outerHeight(true);
    $("#console-expander").height($("#code_editor").outerHeight(true));
    $("#editor-console").outerHeight($("#code_editor").outerHeight(true));
    console.outerHeight($("#code_editor").outerHeight(true));
    var consoleHeight = console.outerHeight(true);
    console.css({top:editorHeight-consoleHeight});
}

function showConsole(button){
    var console = $(button).parent();
    //console.removeClass("console-hidden").addClass("console-visible");
    console.animate({
        right: 0
    }, 250);
    $(button).unbind("click").click(function(){
        hideConsole(this);
    });
}

function hideConsole(button){
    var console = $(button).parent();
    //console.removeClass("console-visible").addClass("console-hidden");
    console.animate({
        right: -385
    }, 250);
    $(button).unbind("click").click(function(){
        showConsole(this);
    });
}

function dismissConsole(){
    var infoShowing = ($("#editor-console").css("right")=="0px")?true:false;
    if(infoShowing){
        $("#console-expander").trigger("click");
    }
}

function triggerConsole(){
    var infoShowing = ($("#editor-console").css("right")=="0px")?true:false;
    if(!infoShowing){
        $("#console-expander").trigger("click");
    }
}

function clearConsole(){
    dismissConsole();
    $("#console-info").html("");
}

/*function connect(ws, socketPing, component, targetJSON, waitGif) {
    var target = "ws://localhost:8084/interface/WebProver";
    var loc = window.location;
    var pathname = loc.pathname;
    pathname = pathname.substring(0,pathname.lastIndexOf("/")+1);
    var new_uri = "ws://" + loc.host + pathname + "WebProver";
    if (target == '') {
        alert('Please select server side connection implementation.');
        return;
    }
    if ('WebSocket' in window) {
        ws = new WebSocket(new_uri);
    } else if ('MozWebSocket' in window) {
        ws = new MozWebSocket(new_uri);
    } else {
        alert('WebSocket is not supported by this browser.');
        return;
    }
    ws.onopen = function () {
        //setConnected(true);
        log('Info: WebSocket connection opened.');
        ws.send(targetJSON);
        socketPing = setTimeout(function(){
            ping(ws, socketPing);
        }, 15000);
    };
    ws.onmessage = function (event) {
        if(event.data != "ping"){
            //analyzeVerifyResults(component, event.data);
            //ws.close();
            if(event.data == "completed"){
                ws.close();
            }
            log(htmlEncodeGTLT(event.data));
        }
            
        //log('Received: ' + event.data);
    };
    ws.onclose = function () {
        //setConnected(false);
        waitGif.remove();
        log('Info: WebSocket connection closed.');
        clearTimeout(socketPing);
    };
}

function disconnect() {
    if (ws != null) {
        ws.close();
        ws = null;
    }
    setConnected(false);
}

function echo() {
    if (ws != null) {
        var message = document.getElementById('message').value;
        log('Sent: ' + message);
        ws.send(message);
    } else {
        alert('WebSocket connection not established, please connect.');
    }
}

function updateTarget(target) {
    document.getElementById('target').value = 'ws://' + window.location.host + target;
}

function ping(ws, socketPing){
    ws.send("ping");
    socketPing = setTimeout(function(){
        ping(ws, socketPing);
    }, 15000)
}*/

/*
 * This function decodes the UrlEncoded content from the server. It also
 * replaces the %20's with spaces (" "). We have to replace the spaces with
 * the HTML code before transmission because the Java UrlEncode replaces spaces
 * with pluss signs ("+"). If we don't do this replacement we will lose all
 * plus signs that are have spaces next to them.
 */
function decode(content){
    var lsRegExp = /\%20/g;
    var lsRegExp2 = /\%2B/g;
    var lsRegExpLT = /\&lt;/g;
    var lsRegExpGT = /\&gt;/g;
    var cont = String(unescape(content)).replace(lsRegExp, " ");
    cont = cont.replace(lsRegExp2, "+")
    return cont;
}

function htmlEncodeGTLT(content){
    var lsRegExpLT = /\</g;
    var lsRegExpGT = /\>/g;
    var cont = content.replace(lsRegExpLT,"&lt;");
    cont = cont.replace(lsRegExpGT,"&gt;");
    return cont;
}

function logVCs(vcs){
    vcs.sort(sortByIdAndLine);
    //$( "#output_tabs" ).tabs("select", 2);
    var vcDiv = $("#console-info");
    vcDiv.html("");
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
    //$( "#output_tabs" ).tabs("select", 2);
    var vcsDiv = $("#console-info");
    var vcDiv = $("#vc_line_"+lineNum);
    var hiddenVcDetails = vcDiv.find(".vc_details_hidden");
    if(hiddenVcDetails.length > 0){
        hiddenVcDetails.removeClass("vc_details_hidden")
    }
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
        vcDiv.attr({id:"VC_"+vcID});
        var infoSpan = $("<span>").addClass("componentInfo vc_status");
        vcDiv.html("VC "+vcID+" ");
        vcDiv.append(infoSpan);
        var vcDetails = $("<div>").addClass("vc_details");
        vcDetails.append("<br/>");
        vcDetails.append(step+"<br/><br/>");
        vcDetails.append("Goal:");
        goal = goal.substr(goal.indexOf(":")+1);
        var goalDiv = $("<div>").addClass("vcIndent").html("<p>"+goal.replace(/&nbsp;/g, " ")+"</p>");
        vcDetails.append(goalDiv);
        vcDetails.append("Given:");
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
                //var givenItem = $("<li>").html("<p>"+given.replace(/&nbsp;/g, " ")+"</p>");
                var givenItem = $("<li>").html(given.replace(/&nbsp;/g, " "));
                //givensDiv.append(givenID);
                givensList.append(givenItem);
            }
        });
        vcDetails.append(givensList);
        vcDetails.appendTo(vcDiv);
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

/*$.ui.plugin.add("resizable", "alsoResizeReverse", {

    start: function(event, ui) {

        var self = $(this).data("resizable"), o = self.options;

        var _store = function(exp) {
            $(exp).each(function() {
                $(this).data("resizable-alsoresize-reverse", {
                    width: parseInt($(this).width(), 10), height: parseInt($(this).height(), 10),
                    left: parseInt($(this).css('left'), 10), top: parseInt($(this).css('top'), 10)
                });
            });
        };

        if (typeof(o.alsoResizeReverse) == 'object' && !o.alsoResizeReverse.parentNode) {
            if (o.alsoResizeReverse.length) {o.alsoResize = o.alsoResizeReverse[0];_store(o.alsoResizeReverse);}
            else {$.each(o.alsoResizeReverse, function(exp, c) {_store(exp);});}
        }else{
            _store(o.alsoResizeReverse);
        }
    },

    resize: function(event, ui){
        var self = $(this).data("resizable"), o = self.options, os = self.originalSize, op = self.originalPosition;

        var delta = {
            height: (self.size.height - os.height) || 0, width: (self.size.width - os.width) || 0,
            top: (self.position.top - op.top) || 0, left: (self.position.left - op.left) || 0
        },

        _alsoResizeReverse = function(exp, c) {
            $(exp).each(function() {
                var el = $(this), start = $(this).data("resizable-alsoresize-reverse"), style = {}, css = c && c.length ? c : ['width', 'height', 'top', 'left'];

                $.each(css || ['width', 'height', 'top', 'left'], function(i, prop) {
                    var sum = (start[prop]||0) - (delta[prop]||0); // subtracting instead of adding
                    if (sum && sum >= 0)
                        style[prop] = sum || null;
                });

                //Opera fixing relative position
                if (/relative/.test(el.css('position')) && $.browser.opera) {
                    self._revertToRelativePosition = true;
                    el.css({position: 'absolute', top: 'auto', left: 'auto'});
                }

                el.css(style);
            });
        };

        if (typeof(o.alsoResizeReverse) == 'object' && !o.alsoResizeReverse.nodeType) {
            $.each(o.alsoResizeReverse, function(exp, c) {_alsoResizeReverse(exp, c);});
        }else{
            _alsoResizeReverse(o.alsoResizeReverse);
        }
    },

    stop: function(event, ui){
        var self = $(this).data("resizable");

        //Opera fixing relative position
        if (self._revertToRelativePosition && $.browser.opera) {
            self._revertToRelativePosition = false;
            el.css({position: 'relative'});
        }

        $(this).removeData("resizable-alsoresize-reverse");
    }
});*/

function checkResolveKeywords(value){
    if(keywordsTable.hasKeyword(value) > 0)
        return true;
    else
        return false;
}

function showKeywordTooltip(pos, editor, textRange){
    var selectedWord = editor.session.getTextRange(textRange);
 //   if(jQuery.inArray(selectedWord, keywordsTable.items) >= 0){
    if(keywordsTable.hasKeyword(selectedWord) && (keywordsTable.getTip(selectedWord) !== "")){    
        var keyword = $("#code_editor").find(".ace_keyword:contains("+selectedWord+")");
            
        var length = selectedWord.length;
        keyword.each(function(){
            var offset = $(this).offset();
            var keywordPos = editor.renderer.screenToTextCoordinates(offset.left+3, offset.top+3);
            if(keywordPos.row == pos.row){
                if(keywordPos.column <= pos.column && pos.column <= keywordPos.column + length){
                    $(this).qtip({
                        content: {
                            text: keywordsTable.getTip(selectedWord),
                            title: {
                                text: selectedWord,
                                button: true
                            }
                        }, 
                        show: {
                            event: false, // Only show when show() is called manually
                            ready: true // Also show on page load
                        },
                        hide: "unfocus",
                        style: {
                            classes: 'ui-tooltip-keywords ui-tooltip-rounded',
                            tip:{
                                corner: 'top left'
                            }
                        }
                    });
                }
            }
        });
    }
}

function formatCode(input)
{
    var myString = input.replace(/\t/g,"");
  var newline = new RegExp('\n', 'g');
  var tabline = new RegExp('\t', 'g');
  var braceLine = new RegExp("{\n\n", 'g');
  var count = 0;
  var loc = 0;
  var openLoc = new Array();
  var closeLoc = new Array();
  while(loc > -1)
  {
     loc = myString.indexOf("{", loc+1);
     if(loc > -1)
     {
       openLoc[count] = loc;
       count++;
     }
  }
  loc=0;
  count = 0;
  while(loc > -1)
  {
     loc = myString.indexOf("}", loc+1);
     if(loc > -1)
     {
       closeLoc[count] = loc;
       count++;
     }
  }
  var curopen = 0;
  var curclose = 0;
  count = 0;
  myString = myString.replace("{\n\n", "\n{\n");
  myString = myString.replace("}\n\n", "\n}\n");
  var fin = myString.substring(0, openLoc[curopen]);
  var tempD;
  var start;
  var updown;
  var finish;
  var tabApp = "";
  //if(!(closeLoc[4] == undefined)){
  //document.write("sucess");}
 while(openLoc[curopen] != undefined || closeLoc[curclose] != undefined){
     if(openLoc[curopen] != undefined){
         if(openLoc[curopen] < closeLoc[curclose]){
             start = openLoc[curopen];
             if(openLoc[curopen+1] !=undefined && openLoc[curopen+1] < closeLoc[curclose]){
                 finish = openLoc[curopen+1];
             }
             else {
                 finish = closeLoc[curclose];
             }
             count++;
             curopen++;
         } else {
             start = closeLoc[curclose];
             if(openLoc[curopen] < closeLoc[curclose+1]){
                 finish = openLoc[curopen];
             }
             else{
                 finish = closeLoc[curclose+1];
             }
             count--;
             curclose++;
         }
     }
     else{
         start = closeLoc[curclose];
         if(closeLoc[curclose+1] != undefined){
             finish = closeLoc[curclose+1];
         }
         else{
             finish = undefined;
         }
         curclose++;
         count--;
     }
     if(finish != undefined){
         tempD = myString.substring(start, finish);
     } else{
         tempD = myString.substring(start);
     }
     var c = 0;
    tempD = tempD.replace("{\n\n", "\n{\n");
    tempD = tempD.replace("}\n\n", "\n}\n");
    while(c < count){
        tabApp = tabApp.concat("\t");
        c++;
    }
    tabApp = "\n" + tabApp;
     tempD = tempD.replace(newline, tabApp);
    tempD = tempD.replace("\t{", "{");
    fin = fin.concat(tempD);
    tempD="";
    tabApp = "";
  }


  myString = fin;
  return myString;
}

function keyHandler(e){
    var evtobj=window.event? event : e
    if (evtobj.keyCode == '192') {
        //showNewUserMsg();
    }
    else if(evtobj.keyCode == '8'){
        var focusedElement = $(":focus")[0];
        if(typeof focusedElement === "undefined"){
            var msg = "You are about to navigate away from the RESOLVE Web Interface. " +
                        "Click OK to continue or Cancel to remain."
            var ans = confirm(msg);
            if(!ans){
                return false;
            }
        }
        else if($(focusedElement).attr("id") == "fileName"){
            return true;
        }
        else{
            return false;
        }    
    }
    
    // these handle increasing/decreasing font size with ctrl+ and ctrl-
    // they have more than one keycode for cross-browser compatibility
    /*else if((evtobj.keyCode == '187' || evtobj.keyCode == '107'  || evtobj.keyCode == '61') && evtobj.ctrlKey){
        increaseFontSize();
        return false;
    }
    else if((evtobj.keyCode == '187' || evtobj.keyCode == '107') && evtobj.ctrlKey){
        decreaseFontSize();
        return false;
    }*/
}
