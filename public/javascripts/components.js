
// myOpenComponentList id the Collection we store all of the RESOLVE components
// currently visible in the menu
var myComponentList = null;

// myOpenComponentList is where we stor the Collection of components currently
// open in the editor
var myOpenComponentList = null;
var selectedProject;
/*
 * The Component is the model where we will store all the data necessary to process
 * the RESOLVE components (regardless of the ModuleKind)
 */
var Component = Backbone.RelationalModel.extend({
    defaults: {
        /*index: null, // the Collection index for this component 
        type: null, // f, c, cr, e, er, t
        project: null, // the project the component in associated with
        pkg: null, // the workspace folder, must be the same name as the associated concept
        parent: null, // the parent component, null if concept
        name: null, // component name
        content: null, // RESOLVE code in the component
        realizations: null, // null for realizations and facilities
        enhancements: null, // null for realizations, enhancements, and facilities
        userCustom: false,
        
        editorSession: null // we store the editor session here if the file is opened*/
    },
    initialize: function(){
      
        this.ws = selectedProject;
    },
    relations: [{
        type: Backbone.HasMany,
        key: "realizations",
        relatedModel: "Component",
        collectionType: 'ComponentList'
    },
    {
        type: Backbone.HasMany,
        key: "enhancements",
        relatedModel: "Component",
        collectionType: 'ComponentList'
    }],
    toJSON: function(){
        var json = "{name:\"" + this.get("name") + "\"," +
            "pkg:\"" + this.get("pkg") + "\"," +
            "project:\"" + selectedProject + "\"," +
            "content:\"" + this.get("content") + "\"," +
            "type:\"" + this.get("type") + "\"}";
            //JSON.stringify(this.get("component")) +
            //Backbone.Model.prototype.toJSON.call(this.get("component")) +
            //", ws: \"" +
            //this.get("ws") +
            //"\"}";
        return json;
    }
});

var OpenComponent = Backbone.RelationalModel.extend({
    defaults: {
        componentModel: null,
        id: null,
        name: null,
        pkg: null, // the concept folder, must be the same name as the associated concept
        java: null,
        vcs: null
    },
    changeName: function(){
        var model = this.get("componentModel");
        this.set("name", model.get("name"));
        this.set("id", model.get("pkg")+"."+model.get("name"));
        updateOpenComponents(model);
        //localStorage.set(localOpenComponentList, JSON.stringify(myOpenComponentList.toJSON()));
    },
    toJSON: function(){
        var tempModel = this.get("componentModel");
        this.unset("componentModel");
        var tempSession = this.get("editorSession");
        this.unset("editorSession");
        var tempJava = this.get("java");
        this.unset("java");
        var tempVcs = this.get("vcs");
        this.unset("vcs");
        this.unset("syntaxErrors");
        var json = Backbone.Model.prototype.toJSON.call(this);
        this.set("componentModel", tempModel);
        this.set("editorSession", tempSession);
        this.set("java", tempJava);
        this.set("vcs", tempVcs);
        return json;
    }
});

var UserComponent = Backbone.RelationalModel.extend({
    defaults: {
        component: null,
        //id: null,
        //name: null,
        //pkg: null, // the concept folder, must be the same name as the associated concept
        ws: null
    },
    toJSON: function(){
        var json = "{" +
            "component: " +
            JSON.stringify(this.get("component")) +
            //Backbone.Model.prototype.toJSON.call(this.get("component")) +
            ", ws: \"" +
            this.get("ws") +
            "\"}";
        return json;
    }
});

// Collections for storing components
var ComponentList = Backbone.Collection.extend({
    model: Component,
    initialize: function(){        
    }
});

var OpenComponentList = Backbone.Collection.extend({
    model: OpenComponent,
    initialize: function(){        
    }
});

/*
 * This is the View for rendering the list of concepts as the top level in the
 * hierarchy
 */
var ComponentMenuView = Backbone.View.extend({
    initialize: function(){
        myComponentList = this.collection;
        this.render();
        this.collection.bind('add', this.render, this);
        this.collection.bind('remove', this.render, this);
    },
    // we render each ComponentView separately and add it to the appropriate list
    render: function(){
        var componentmenu = $("#component_menu li:first");
        setMenuHandlers(componentmenu);
        var that = this;
        this._componentViews = [];
        this.collection.each(function(component){
            // if the component is a concept, facility, or theory
            // we add it to the View list to render
            if(component.get("type") == "c" ||
                component.get("type") == "f" ||
                component.get("type") == "t"){
                that._componentViews.push(new ComponentView({model:component}));
            }
        });
        var concepts = $("#concepts");
        var conceptList = concepts.children("ul");
        setMenuHandlers(concepts);
        var facilities = $("#facilities");
        var facilityList = facilities.children("ul");
        setMenuHandlers(facilities);
        var theories = $("#theories");
        if(theories != null){
            var theoryList = theories.children("ul");//.empty();
            setMenuHandlers(theories);
        }
        _(this._componentViews).each(function(cv){
            if(cv.model.get("type") == "c"){
                conceptList.append(cv.render().el);
            }
            else if(cv.model.get("type") == "f"){
                facilityList.append(cv.render().el);
            }
            else if(cv.model.get("type") == "t"){
                if(theories != null){
                    theoryList.append(cv.render().el);
                }
            }
        });
        $("#component_list").addClass("hidden");
        $("#component_list").find("li").addClass("hidden");
    },
    events: {
        "click .creater" : "createComponent",
        "click .loader" : "loadComponent"
    },
    createComponent: function(){
        $("#dialog_new").dialog();
    },
    loadComponent: function(){
        $("#dialog_load").dialog();
    }
});


/*
 * This View is for individually rendering each Component in the collection
 */
var ComponentView = Backbone.View.extend({
    tagName: "li",
    initialize: function(){
        this.render = _.bind(this.render, this);
        // if the name or index changes, we re-render the View
        this.model.bind('change:name', this.render);
        this.model.bind('change:index', this.render);
        this.model.bind('add:realizations', this.render, this);
        this.model.bind('add:enhancements', this.render, this);
        this.model.bind('remove:realizations', this.render, this);
        this.model.bind('remove:enhancements', this.render, this);
    },
    render: function(){
        var that = this;
        this._realizationViews = [];
        this._enhancementViews = [];
        var realizations = this.model.get("realizations").models;
        _(realizations).each(function(component){
           that._realizationViews.push(new ComponentView({model:component}));
        });
        var enhancements = this.model.get("enhancements").models;
        _(enhancements).each(function(component){
           that._enhancementViews.push(new ComponentView({model:component}));
        });
        var component = this.model;
        var id = component.get("pkg") + "." + component.get("name");
        var html = "<a data-cid=\"" + this.model.cid + "\" data-id=\"" + id + "\" class=\"component\">";
        html += component.get("name") + "</a>";
        if(this._realizationViews.length > 0 || this._enhancementViews.length > 0){
            var list = $("<ul>");
            var item = null;
            var ul = null;
            /*if(this._enhancementViews.length > 0){
                item = $("<li>").html("<a>enhancements</a>").addClass("sub_menu");
                ul = $("<ul>");
                _(this._enhancementViews).each(function(cv){
                    ul.append(cv.render().el);
                });
                ul.appendTo(item);
                item.appendTo(list);
                setMenuHandlers(item);
            }*/
            if(this._realizationViews.length > 0){
                item = $("<li>").html("<h2>realizations</h2>").addClass("component_title");
                item.appendTo(list);
                _(this._realizationViews).each(function(cv){
                    list.append(cv.render().el);
                });    
            }
            if(this._enhancementViews.length > 0){
                item = $("<li>").html("<h2>enhancements</h2>").addClass("component_title");
                item.appendTo(list);
                _(this._enhancementViews).each(function(cv){
                    list.append(cv.render().el);
                });
            }
        }
        $(this.el).html(html).append(list);
        setMenuHandlers($(this.el));
        return this;
    },
    events: {
        "click a.component" : "selectComponent"
    },
    selectComponent: function(event){
        event.stopPropagation();
        var model = this.model
        log(model.get("name")+"<br/>test");
        displayComponent(model);
        $(event.currentTarget).trigger("mouseout");
        $("#component_list").css({display:"none"});
    }
});

var OpenComponentListView = Backbone.View.extend({
    
    initialize: function(){
        myOpenComponentList = this.collection;
        this._selectedComponent = 0;
        this._openComponents = [];
        this._openComponentStartIndex = 0;
        this._openComponentEndIndex = 0;
        this._openComponentCount = 0;
        var that = this;
        this.collection.each(function(component){
            var model = getModelByCid(myComponentList, component.get("cid"));
            if(model.get("name") == component.get("name") &&
                    model.get("pkg") == component.get("pkg")){
                component.set("componentModel", model);
                that._openComponents.push(component);
                component.get("componentModel").bind("change:name", component.changeName, component);
            }
            else{
                log("couldn't find open component: "+component.get("name"));
            }
        });
        this.collection.bind( 'add', this.added, this );
        this.collection.bind( 'remove', this.removed, this );
        this.render();
    },
    render: function(shift_type){
        var that = this;
        $(this.el).empty();
        this._openComponentCount = 0;
        var list = $("<ul>").attr({id:"open_component_list"});
        var listWidth = list.width();
        var scanLeft = $("<button>").attr({id:"scan_left"}).html("&#x25C0;").addClass("scanButton");
        var scanRight = $("<button>").attr({id:"scan_right"}).html("&#x25B6;").addClass("scanButton");
        var dropDown = $("<button>").attr({id:"ocv_dropdown"}).html("|").addClass("scanButton active shadow");
        dropDown.click(function(event){
            event.preventDefault();
            var open_components = $("#open_menu");
            showOpenComponents(open_components, $(this));
        });
        $(this.el).html(scanLeft);
        var openMenuDiv = $("<div>").attr({id:"open_components"}).html(list);
        $(this.el).append(openMenuDiv);
        var done = false;
        var dropDownComponentViews =  new Array();
        _(this._openComponents).each(function(component, index){
            var ocv = new OpenComponentView({model:component});
            var ocv2 = new OpenComponentView({model:component});
            var el = ocv.render().el;
            list.append(el);
            dropDownComponentViews.push(ocv2);
        });
        dropDownComponentViews.sort(sortOpenByName);
        var dropDownList = $("<ul>").attr({id:"open_component_dropdown"});
        dropDownList.addClass("hidden");
        _(dropDownComponentViews).each(function(view, index){
            var item = view.render().el;
            dropDownList.append(item);
           //console.log(view.model.get("name")) ;
        });
        $(this.el).append(scanRight);
        $(this.el).append(dropDown);
        $(this.el).append(dropDownList);
        if(true){
            scanLeft.addClass("active shadow");
        }
        if(true){
            scanRight.addClass("active shadow");
        }
    },
    added: function(component){
        this._openComponents.push(component);
        this.render();
        var search = "a[data-id=\"" + component.get("pkg") + "." + component.get("name") + "\"]";
        var link = $("#open_menu").find(search);
        var item = $(link).parent();
        $("#open_component_list>li.selected").removeClass("selected");
        item.addClass("selected");
        var openMenuDiv = $("#open_components")
        var list = $("#open_component_list");
        var menuLeft = openMenuDiv.position().left;
        var menuRightSide = menuLeft + openMenuDiv.width();
        var itemPos = item.position();
        var itemRightSide = menuLeft + itemPos.left + item.width();
        var listLeft = list.position().left;
        if(itemRightSide > menuRightSide){
            list.css("left", listLeft - (itemRightSide - menuRightSide + 10));
        }
        updateOpenComponents(component);
        //localStorage.localOpenComponentList = JSON.stringify(myOpenComponentList.toJSON());
    },
    removed: function(component){
        var that = this;
        var currentOpenComponents = myOpenComponentList;
        this._openComponents = [];
        currentOpenComponents.each(function(currentComponent, index){
            that._openComponents.push(currentComponent);
        });
        this.render();
        if(currentOpenComponents.length != 0){
            var newSelected = 0;
            var model = null;
            if(component.get("id") != this._selectedComponent){
                var currentSelectedModel = myOpenComponentList.where({id:this._selectedComponent})[0];
                newSelected = _.indexOf(component.collection.models, currentSelectedModel);
                model = getModelByCid(myComponentList, currentSelectedModel.get("cid"));
            }
            else{
                this._selectedComponent = myOpenComponentList.at(newSelected).get("id");
                model = myOpenComponentList.at(newSelected);
            }
            displayComponent(model);
        }
        else{
            this._currentComponent = null;
            var EditSession = require("ace/edit_session").EditSession;
            var ResolveMode = require("ace/mode/resolve").Mode;
            editor.setSession(new EditSession("", new ResolveMode));
            myUserControlView.model = new OpenComponent();
            myUserControlView.render();
        }
        updateOpenComponents(component);
        //localStorage.localOpenComponentList = JSON.stringify(myOpenComponentList.toJSON());
    },
    scanLeft: function(event){
        openComponentScan("left", this);
        //this._scanTImer = setTimeout(openComponentScan("left"), 500);
        /*var openMenuDiv = $("#open_components")
        var list = $("#open_component_list");
        var menuLeft = openMenuDiv.position().left;
        var menuRightSide = menuLeft + openMenuDiv.width();
        var listLeft = list.position().left;
        var listRightSide = listLeft + list.width();
        if(menuLeft > listLeft + menuLeft){
            list.css("left", listLeft + 5);
        }*/
    },
    scanRight: function(){
        openComponentScan("right", this);
        //this._scanTImer = setTimeout(openComponentScan("left"), 500);
        /*var openMenuDiv = $("#open_components")
        var list = $("#open_component_list");
        var menuLeft = openMenuDiv.position().left;
        var menuRightSide = menuLeft + openMenuDiv.width();
        var listLeft = list.position().left;
        var listRightSide = menuLeft + listLeft + list.width();
        if(menuRightSide < listRightSide){
            list.css("left", listLeft - 5);
        }*/
    },
    stopScan: function(){
        clearTimeout(this._scanTimer);
    },
    events: {
        "mousedown #scan_left.active" : "scanLeft",
        "mousedown #scan_right.active" : "scanRight",
        "mouseup #scan_left.active" : "stopScan",
        "mouseup #scan_right.active" : "stopScan"
    }
});

function openComponentScan(direction, view){
    var openMenuDiv = $("#open_components");
    var list = $("#open_component_list");
    var menuLeft = openMenuDiv.position().left;
    var menuRightSide = menuLeft + openMenuDiv.width();
    var listLeft = list.position().left;
    var listRightSide = menuLeft + listLeft + list.width();
        
    if(direction == "left"){
        if(menuLeft > listLeft + menuLeft + 10){
            list.animate({"left": listLeft + 15}, "fast");
            //myOpenComponent_view.scanLeft();
        }
    }
    else if(direction == "right"){
        if(menuRightSide + 10 < listRightSide){
            list.animate({"left": listLeft - 15}, "fast");
            //myOpenComponent_view.scanRight();
        }
    }
    //view._scanTImer = setTimeout(openComponentScan(direction, view), 5);
}

function sortOpenByName(a, b){
    var lhs = a.model.get("name").toLowerCase();
    var rhs = b.model.get("name").toLowerCase();
    if(lhs.charAt(0) > rhs.charAt(0)){
        return 1;
    }
    if(lhs.charAt(0) < rhs.charAt(0)){
        return -1;
    }
    return (lhs > rhs);
}

var OpenComponentView = Backbone.View.extend({
    tagName: "li",
    initialize: function(){
        this.render = _.bind(this.render, this);
        this.model.bind('change:index', this.render);
        this.model.bind('change:name', this.render);
        this.model.get("componentModel").bind('change:name', this.render);
    },
    render: function(){
        var component = this.model;
        var index = myOpenComponentList.indexOf(component);
        var id = component.get("componentModel").get("pkg") + "." + component.get("componentModel").get("name");
        var name = component.get("componentModel").get("name");
        var link = $("<a>").attr({
            "data-index": index,
            "data-cid": component.cid,
            "data-id": id,
            "title": component.get("name")
        }).html(name).addClass("component");
        //var html = "<a data-index= \"" + index + "\" data-cid=\"" + component.cid + "\" data-id=\"" + id + "\" class=\"component\" ";
        //html += "title=\"" + component.get("name") + "\">";
        //html += component.get("componentModel").get("name") + "</a>";
        //$(this.el).html(html).append(getInfoBlock()).append(getCloseDiv()).addClass("component_tab");
        $(this.el).append(link).append(getInfoBlock()).append(getCloseDiv()).addClass("component_tab");
        return this;
    },
    events: {
        "click #open_component_list a.component" : "selectComponent",
        "click #open_component_dropdown a.component" : "selectDropdownComponent",
        "click #open_menu button.close_img" : "closeComponent"
    },
    selectComponent: function(event){
        event.stopPropagation();
        var cid = this.model.get("cid");
        //var model = getModelByCid(myComponentList, cid);
        displayComponent(this.model.get("componentModel"));
        var item = $(event.currentTarget).parent();
        $("#open_component_list>li.selected").removeClass("selected");
        item.addClass("selected");
    },
    selectDropdownComponent: function(event){
        event.stopPropagation();
        var cid = this.model.cid;
        //var model = getModelByCid(myComponentList, cid);
        displayComponent(this.model.get("componentModel"));
        //var item = $("#open_component_list[data-cid=\""+cid+"\"]")
        //$("#open_component_list>li.selected").removeClass("selected");
        //$(item[0]).addClass("selected");
    },
    closeComponent: function(event){
        event.stopPropagation();
        var openModel = this.model;
        //var model = getModelByCid(myComponentList, openModel.get("cid"));
        var prevIndex = _.indexOf(myOpenComponentList.models, openModel) - 1;
        //if(prevIndex >= 0){
            //var prevComponent = myOpenComponentList.at(prevIndex);;
            //myOpenComponent_view._selectedComponent = prevComponent.get("pkg") + "." + prevComponent.get("name");
        //}
        openModel.unset("editorSession");
        myOpenComponentList.remove(openModel);
    }
});


/*
 * This function creates the code for the X div to close something
 */
function getCloseDiv(){
    var closeImg = $("<button>").addClass("close_img");
    return closeImg;
}

function getInfoBlock(){
    var infoDiv = $("<span>").addClass("componentInfo");
    return infoDiv;
}

function displayComponent(component){
    //myUserControlView.model.set("component", component);
    //myUserControlView.model.trigger("change");
    var code = component.get("content");
    code = decode(code);
    var session = null;
    var openComponent = null;
    
    // we check to see if it is already in the open collection
    var componentName = component.get("name");
    var componentPkg = component.get("pkg");
    var componentId = componentPkg + "." + componentName;
    var modelWithIndex = myOpenComponentList.where({"id": componentId});
    if(modelWithIndex.length != 0){
        openComponent = modelWithIndex[0];
        session = openComponent.get("editorSession");
    }
    else{
        openComponent = new OpenComponent({
            componentModel: component,
            id: componentId,
            name: componentName,
            pkg: componentPkg,
            cid: component.cid,
            editorSession: session
        });
        myOpenComponentList.add(openComponent);
    }
    if(session == null){
        var EditSession = require("ace/edit_session").EditSession;
        var UndoManager = require("ace/undomanager").UndoManager;
        var ResolveMode = require("ace/mode/resolve").Mode;
        session = new EditSession(code, new ResolveMode);
        session.setUndoManager(new UndoManager());
        openComponent.set({"editorSession":session});
    }
    var dataIndex = component.get("index");
    var search = "a[data-id=\"" + componentId + "\"]";
    var link = $("#open_component_list").find(search);
    var item = $(link).parent();
    $("#open_component_list>li.selected").removeClass("selected");
    item.addClass("selected");
    if(component.get("type") == 't'){
        // readonly for theory files
        editor.setReadOnly(true);
    }
    else{
        editor.setReadOnly(false);
    }
    editor.setSession(session);
    myOpenComponent_view._selectedComponent = componentPkg + "." + componentName;
    myUserControlView.model = openComponent;
    myUserControlView.render();
    updateSelectedComponent(component);
    updateOpenComponents(component);
    //localStorage.set(component.get("project") + "_selected_id", componentPkg + "." + componentName);
    displayComponentInfo(component);
    syntaxCheck(openComponent);
    session.on("change", function() {
      syntaxCheck(openComponent);
   });
   $("#component_list").removeClass("visible").addClass("hidden");
   hideOpenComponents($("#open_menu"), $("#ocv_dropdown"));
   //$("#open_component_dropdown").removeClass("visible").addClass("hidden");
   scanToSelected(item);
   clearConsole();
   //clearVcInfo();
}

function displayComponentInfo(component){
    $( "#output_tabs" ).tabs("select", 0);
    var infoTab = $("#tabs_info");
    var name = component.get("name");
    var parent = getParentById(null, myComponentList, component.id);
    infoTab.html("name: " + name);
    while(parent != null){
        infoTab.append("<br/>parent: " + parent.get("name"));
        parent = getParentById(null, myComponentList, parent.id);
    }
    //var json = component.toJSON();
    //infoTab.append("<br/>json: " + JSON.stringify(json));
}

function clearVcInfo(){
    $("#vcs").html("");
}

function initializeComponentMenu(json, selectedProjectName){
    selectedProject = selectedProjectName;
    myComponentList = new ComponentList(json["components"]);
    myComponent_view = new ComponentMenuView({el: $("#component_list"), collection: myComponentList});
    //$("#component_list").parent().trigger('mouseenter');
    $("#component_list").bind("hover", function(){
        $("#component_list").css({display:""});
    });
    /*var pathname = window.location.pathname;
    if(pathname.length > 1){
        pathname += "/";
    }
    $.ajax({
        url: pathname+"public/data.json",
        dataType: "json",
        async: false,
        success: function(json){
            myComponentList = new ComponentList(json["components"]);
            myComponent_view = new ComponentMenuView({el: $("#component_list"), collection: myComponentList});
            //$("#component_list").parent().trigger('mouseenter');
            $("#component_list").bind("hover", function(){
                $("#component_list").css({display:""});
            });
            //localStorage.components = JSON.stringify(myComponentList);
        },
        error: function(err) {
            alert(err.status + " - " + err.statusText);
            log(err.status + " - " + err.statusText);
        }
    }); */
}

function initializeOpenComponentList(selectedProjectName){
    selectedProject = selectedProjectName;
    myOpenComponentList = new OpenComponentList();
    var localOpenComponentList = localStorage.getItem(selectedProjectName + "_open_components");
    if(localOpenComponentList != null){
        myOpenComponentList.reset(JSON.parse(localOpenComponentList));
    }
    myOpenComponent_view = new OpenComponentListView({el: $("#open_menu"), collection: myOpenComponentList});
    if(myOpenComponentList.length != 0){
        var selectedComponentId = localStorage.getItem(selectedProjectName + "_selected_id");
        var openComponentIndex = 0;
        var openComponent = null;
        if(selectedComponentId != null){
            var name = selectedComponentId.substring(0, selectedComponentId.indexOf("."));
            var pkg = selectedComponentId.substring(selectedComponentId.indexOf(".")+1, selectedComponentId.length);
            var openModel = myOpenComponentList.where({"id": selectedComponentId});
            if(openModel.length != 0){
                var model = getModelByCid(myComponentList, openModel[0].get("cid"));
                openComponent = model;
            }
        }
        else{
            openComponent = myOpenComponentList.at(0);
        }
        displayComponent(openComponent);
        var item = $("#open_component_list>li.selected");
        //scanToSelected(item);
    }
}

function scanToSelected(item){
    var openMenuDiv = $("#open_components")
    var list = $("#open_component_list");
    var menuLeft = openMenuDiv.position().left;
    var menuRightSide = openMenuDiv.width();
    var itemPos = item.position();
    var listLeft = list.position().left;
    var itemRightSide = itemPos.left + item.outerWidth(true);
    if(itemRightSide > menuRightSide){
        list.css("left", listLeft - (itemRightSide - menuRightSide));
    }
    else if(itemPos.left + listLeft < menuLeft){
        list.css("left", 0);
    }
}

function updateOpenComponents(component){
    localStorage.setItem(selectedProject + "_open_components", JSON.stringify(myOpenComponentList.toJSON()));
    //localStorage.setItem(component.get("componentModel").ws + "_open_components", JSON.stringify(myOpenComponentList.toJSON()));
}

function updateSelectedComponent(component){
    localStorage.setItem(selectedProject + "_selected_id", component.get("pkg") + "." + component.get("name"));
    //localStorage.setItem(component.ws + "_selected_id", component.get("pkg") + "." + component.get("name"));
}

function openComponent(targetComponent){
    var component;
    if(targetComponent.type == "f"){
        component = myComponentList.where({name:targetComponent.name})[0];
    }
    else if(targetComponent.type == "er"){
        var concept = myComponentList.where({name:targetComponent.concept})[0];
        component = concept.get("realizations").where({name:targetComponent.name})[0];
        if(component == null){
            var enhancements = concept.get('enhancements');
            component = enhancements.where({name:targetComponent.name})[0];
            if(component == null){
                var foundComponent = null;
                $.each(enhancements.models, function(index, enhancement){
                    foundComponent = enhancement.get("realizations").where({name:targetComponent.name})[0];
                    if(foundComponent != null){
                        component = foundComponent;
                    }
                });
            }
        }
    }
    else if(targetComponent.type == "c"){
        component = myComponentList.where({name:targetComponent.name})[0];
    }
    displayComponent(component);
}

/*
 * This recursive function takes an id as input, and recursively searches the components 
 * within the input collection for the parent component of the input id. Returns the
 * parent or null if the id is not found
 */
function getParentById(parentModel, collection, id){
    if(collection.where({"id": id}).length == 0){
        for(var i = 0; i < collection.models.length; i++){
            var model = collection.models[i];
            var realizations = model.get("realizations");
            parentModel = getParentById(model, realizations, id);
            if(parentModel == null){
                var enhancements = model.get("enhancements");
                parentModel = getParentById(model, enhancements, id);
            }
            if(parentModel != null){
                return parentModel;
            }
        }
        return null;
    }
    else{
        return parentModel;
    }
    
}

/*
 * This function takes in a collection and cid and returns the model with the
 * given cid, or null if not found
 */
function getModelByCid(collection, cid){
    var comp = collection.getByCid(cid);
    if(comp === undefined){
        var i = 0;
        while(i < collection.models.length){
            var realizations = collection.models[i].get("realizations");
            comp = realizations.getByCid(cid);
            if(comp === undefined){
                var enhancements = collection.models[i].get("enhancements");
                comp = enhancements.getByCid(cid);
                if(comp === undefined){
                    comp = getModelByCid(enhancements, cid);
                    if(comp === undefined){
                        //return null;
                    }
                    else{
                        return comp;
                    }
                }
                else{
                    return comp;
                }
            }
            else{
                return comp;
            }
            i++
        }
    }
    else{
        return comp;
    }
    return undefined;
}

/*
 * See the descirption of decode below, this does the opposite
 */
function encode(content){
    var lsRegExp = new RegExp(" ","gim");
    var lsRegExp2 = /\+/g;
    var cont = String(escape(content)).replace(lsRegExp, "%20");
    cont = cont.replace(lsRegExp2, "%2B")
    return cont;
}

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

function setMenuHandlers(menu){
    var timeOut = null;
    menu.mouseenter(function(event){
        if(timeOut != null){
            clearTimeout(timeOut);
        }
        showMenu(menu.children("ul"));
    }).mouseleave(function(event){
        timeOut = setTimeout(function(){
            hideMenu(menu.children("ul"));
        }, 300);
    });
}

function showMenu(parent){
    var list = parent.removeClass("hidden").addClass("visable");
    var children = list.children("li");
    children.removeClass("hidden").addClass("visable");
}

function hideMenu(parent){
    var list = parent.removeClass("visable").addClass("hidden");
    var children = list.children("li");
    children.removeClass("visable").addClass("hidden");
}

function showOpenComponents(menu, button){
    var items = menu.find('.hidden');
    items.removeClass("hidden").addClass("visable");
    button.unbind("click").click(function(event){
        hideOpenComponents(menu, button);
    });
}

function hideOpenComponents(menu, button){
    var items = menu.find('.visable');
    items.removeClass("visable").addClass("hidden");
    button.unbind("click").click(function(event){
        showOpenComponents(menu, button);
    });
}
