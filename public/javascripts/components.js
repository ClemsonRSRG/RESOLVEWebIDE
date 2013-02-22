
// myOpenComponentList id the Collection we store all of the RESOLVE components
// currently visible in the menu
var myComponentList = null;
var myConceptList = null;
var myFacilityList = null;
var myTheoryList = null;
var myUserComponentList = null;
var myImportedUserComponentList = null;
var myConceptListView = null;
var myFacilityListView = null;
var myTheoryListView = null;
var myUserComponentListView = null;

// myOpenComponentList is where we stor the Collection of components currently
// open in the editor
var myOpenComponentList = null;
var selectedProject;
var userType = null;
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
        var content = this.get("content");
        // we need to escape quotes so that we have valid JSON going to the server
        content = content.replace(/%22/g, "\\%22");
        content = content.replace(/\"/g, "\\\"");
        var json = "{name:\"" + this.get("name") + "\"," +
            "pkg:\"" + this.get("pkg") + "\"," +
            "project:\"" + selectedProject + "\"," +
            "content:\"" + content + "\"," +
            "parent:\"" + this.get("parent") + "\"," +
            "type:\"" + this.get("type") + "\"}";
            //JSON.stringify(this.get("component")) +
            //Backbone.Model.prototype.toJSON.call(this.get("component")) +
            //", ws: \"" +
            //this.get("ws") +
            //"\"}";
        return json;
    },
    url : function() {
        var loc = window.location;
        //var pathname = loc.pathname;
        //pathname = pathname.substring(0,pathname.lastIndexOf("/"));
        //var url = "http://" + loc.host + (loc.pathname.length>1?loc.pathname+"/":loc.pathname) + "Components";
        var url = "http://" + getUrl(loc) + "Components";
        return url;
        //return this.collection.url() + '/Components';
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
    },
    url : function() {
         //return $(this.document).url() + '/Components';
    },
    comparator : function(model) {
        return model.get("name");
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
        //myComponentList = this.collection;
        this.render();
        this.collection.bind('add', this.render, this);
        this.collection.bind('remove', this.render, this);
    },
    // we render each ComponentView separately and add it to the appropriate list
    render: function(){
        var element = $(this.el);
        var parentDiv = $(this.el).closest("div");
        var list = $("<ul>");
        element.html(list);
        //setMenuHandlers(componentmenu);
        var that = this;
        this._componentViews = [];
        this.collection.each(function(component){
            that._componentViews.push(new ComponentNameView({model:component}));
        });
        _(this._componentViews).each(function(cv){
            if(parentDiv.attr("id") !== "user_component_list"){
                list.append(cv.render(true).el);
            }
            else{
                list.append(cv.render(false).el);
            }
            
        });
        var neHeight = element.outerHeight();
        var finderHeight = $("#finder").outerHeight();
        if(neHeight > finderHeight){
            element.addClass("scrollable");
        }
        else{
            element.addClass("non-scrollable");
        }
        
        //var listParent = element.parent();
        //element.append($("<div>").addClass("finder-cell").html(""));
        //var newElement = listParent.children().last()
        //newElement.html("");
        //$("#component_list").addClass("hidden");
        //$("#component_list").find("li").addClass("hidden");
    },
    events: {
        "click a" : "renderComponents",
        "click .creater" : "createComponent",
        "click .loader" : "loadComponent"
    },
    renderComponents: function(){
        //alert(this);
    },
    createComponent: function(){
        //$("#dialog_new").dialog();
    },
    loadComponent: function(){
        $("#dialog_load").dialog();
    }
});

var ComponentNameView = Backbone.View.extend({
    tagName: "li",
    initialize: function(){
        this.render = _.bind(this.render, this);
        this.model.bind('change:name', this.render);
        this.model.bind('change:index', this.render);
    },
    render: function(subMenuStatus){
        var component = this.model;
        var parentDiv = $(this.el).closest("div");
        var li = $(this.el);
        var id = component.get("pkg") + "." + component.get("name");
        var link = $("<a>").attr({"data-cid":this.model.cid,"data-id":id}).html(component.get("name"));
        if(typeof subMenuStatus === "undefined" || subMenuStatus){
            if(component.get("type") === "er" || component.get("type") === "r"){
                link.addClass("component_title");
            }
            else if(component.get("type") === "f" || component.get("type") === "t"){
                link.addClass("component_title");
            }
            else{
                link.addClass("component dir context");
            }
        }
        else{
            link.addClass("component_title");
        }
            
        //var html = "<a data-cid=\"" + this.model.cid + "\" data-id=\"" + id + "\" class=\"component\">";
        //html += component.get("name") + "</a>";
        li.html(link);
        //var listParent = $(this.el).closest("div");
        //var parentId = listParent.attr("id");
        //link.attr({"data-linkId":(parentId !== "finder-main")?(parentId+"."+component.get("name")):component.get("name")});
        return this;
    },
    events: {
        //"dblclick a.component" : "openComponent",
        "click a.component_title" : "openComponent",
        "click a.component" : "selectComponent"//,
        /*"contextmenu" : "showContext"*/
    },
    selectComponent: function(event){
        event.stopPropagation();
        var component = this.model
        var componentView = new ComponentView(({model:component}));
        var newElement = prepMenu($(event.currentTarget), component.get("name"));
        newElement.html(componentView.render().el);
        var neHeight = newElement.outerHeight();
        var finderHeight = $("#finder").outerHeight();
        if(neHeight > finderHeight){
            newElement.addClass("scrollable");
        }
        else{
            newElement.addClass("non-scrollable");
        }
        setFinderWidth(newElement);
        var li = $(event.currentTarget).parent();
        var prevSel = li.parent().find(".selected-component");
        prevSel.removeClass("selected-component");
        prevSel.children("a").addClass("component dir");
        li.addClass("selected-component");
        li.children("a").removeClass("component dir");
        //updateFinderTitle(component.get("name"));
        //$(event.currentTarget).trigger("mouseout");
        //$("#component_list").css({display:"none"});
    },
    openComponent: function(event){
        event.stopPropagation();
        var model = this.model
        displayComponent(model);
        var userEvent = new UserEvent({
            eventType: "selectComponent",
            project: selectedProject,
            name: model.get("name"),
            pkg: model.get("pkg"),
            content: model.get("content")
        });
        userEvent.save();
        //$(event.currentTarget).trigger("mouseout");
        //$("#component_list").css({display:"none"});
    },
    showContext: function(event){
        /*var curr = $(event.currentTarget).selector;
        var items = getCreateMenuItems(this.model);
        var contextMenu = $.contextMenu({ 
            selector: curr,
            callback: function(key, options) {
                var m = "clicked: " + key;
                window.console && console.log(m) || alert(m); 
            },
            items: {
                "fold1": {
                    "name": "New",
                    "items": items
                }
            }

        });*/
    }
});


/*
 * This View is for individually rendering each Component in the collection
 */
var ComponentView = Backbone.View.extend({
    tagName: "ul",
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
           //that._realizationViews.push(new ComponentView({model:component}));
        });
        var enhancements = this.model.get("enhancements").models;
        _(enhancements).each(function(component){
           //that._enhancementViews.push(new ComponentView({model:component}));
        });
        var component = this.model;
        var componentNameView = new ComponentNameView({model:component});
        //var html = componentView.render().el;
        //var id = component.get("pkg") + "." + component.get("name");
        //var html = "<li><a data-cid=\"" + this.model.cid + "\" data-id=\"" + id + "\" class=\"component\">";
        //html += component.get("name") + "</a><li>";
        $(this.el).html(componentNameView.render().el)
        $(componentNameView.el).children("a").addClass("component_title").removeClass("component dir");
        var item;
        if(this.model.get("realizations").models.length > 0){
            item = $("<li>").html($("<a class=\"dir context\">").html("Realizations"));
            item.appendTo($(this.el));
        }
        if(this.model.get("enhancements").models.length > 0){
            item = $("<li>").html($("<a  class=\"dir context\">").html("Enhancements"));
            item.appendTo($(this.el));
        }
        //$(this.el).html(html).append(list);
        return this;
    },
    events: {
        //"dblclick a.component" : "openComponent",
        "click a.component" : "openComponent",
        "click a.dir" : "selectComponents"
    },
    openComponent: function(event){
        event.stopPropagation();
        var model = this.model
        displayComponent(model);
        //$(event.currentTarget).trigger("mouseout");
        //$("#component_list").css({display:"none"});
    },
    selectComponents: function(event){
        var listType = $(event.currentTarget).html();
        var list, view;
        if(listType === "Realizations"){
            list = this.model.get("realizations");
        }
        else if(listType === "Enhancements"){
            list = this.model.get("enhancements");
        }
        if(list !== undefined){
            view = new ComponentMenuView({collection: list});
            //var listParent = $(event.currentTarget).parent().parent().parent();
            var newElement = prepMenu($(event.currentTarget), this.model.get("name")+"."+listType);
            view.setElement(newElement).render();
            setFinderWidth(newElement);
        }
        var li = $(event.currentTarget).parent();
        var prevSel = li.parent().find(".selected-component");
        prevSel.removeClass("selected-component");
        prevSel.children("a").addClass("component dir");
        li.addClass("selected-component");
        li.children("a").removeClass("component dir");
    }
});

function updateFinderTitle(title){
    var currTitle = $("#componentTitle");
    if(currTitle.html() === ""){
        currTitle.html(title);
    }
    else{
        currTitle.append(" >> " + title);
    }
}

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
            var model = getModelById(myComponentList, component.id);
            //var model = getModelByCid(myComponentList, component.get("cid"));
            if(model != null){ // null check in case a user created component was open
                if(model.get("name") == component.get("name") &&
                        model.get("pkg") == component.get("pkg")){
                    component.set("componentModel", model);
                    that._openComponents.push(component);
                    component.get("componentModel").bind("change:name", component.changeName, component);
                }
            }
            else{
                myOpenComponentList.remove(component);
                log("couldn't find open component: "+component.get("name"));
            }
        });
        updateOpenComponents(null);
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
        var itemWidth = item.width();
        var itemRightSide = menuLeft + itemPos.left + itemWidth;
        var listLeft = list.position().left;
        if(itemRightSide > menuRightSide){
            var excess = "-" + (itemRightSide - menuRightSide + 10);
            //list.css("left", excess);
            list.animate({"left": excess}, "fast");
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
                model = myOpenComponentList.at(newSelected).get("componentModel");
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
            list.animate({"left": listLeft + 100}, "fast");
            //myOpenComponent_view.scanLeft();
        }
    }
    else if(direction == "right"){
        if(menuRightSide + 10 < listRightSide){
            list.animate({"left": listLeft - 100}, "fast");
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
        $(this.el).html(link).append(getInfoBlock()).append(getCloseDiv()).addClass("component_tab");
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
        var hasUnsavedChanges = true;
        var link = $(event.currentTarget).parent().find("a");
        var name = link.html();
        var edited = name.match(/^<b>\*<\/b>(.)+/g);
        var res = false;
        if(edited == null){
            hasUnsavedChanges = false;
        }
        if(hasUnsavedChanges){
            res = confirm(this.model.get("name")+" has unsaved changes. Click OK to close without saving");
        }
        else{
            res = true;
        }
        if(res){
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
        myOpenComponent_view.render();
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
    $("#open_component_list>li.selected").removeClass("selected");
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
    var search = "a[data-id=\"" + componentId + "\"]";
    var link = $("#open_component_list").find(search);
    var item = $(link).parent();
    item.addClass("selected");
    //localStorage.set(component.get("project") + "_selected_id", componentPkg + "." + componentName);
    //displayComponentInfo(component);
    syntaxCheck(openComponent);
    session.on("change", function() {
      syntaxCheck(openComponent);
      if(openComponent.get("componentModel").get("custom") === "true"){
          var saveButton = $("#control_bar .save");
          saveButton.removeAttr("disabled").addClass("active");
          var name = link.html();
          var edited = name.match(/^<b>\*<\/b>(.)+/g);
          if(edited == null){
              link.prepend("<b>*</b>");
          }
        }
     });
     //$("#component_list").removeClass("visible").addClass("hidden");
     //hideOpenComponents($("#open_menu"), $("#ocv_dropdown"));
     //$("#open_component_dropdown").removeClass("visible").addClass("hidden");
     scanToSelected(item);
     clearConsole();
     
    var userEvent = new UserEvent({
        eventType: "displayComponent",
        project: selectedProject,
        name: component.get("name"),
        pkg: component.get("pkg"),
        content: component.get("content")
    });
    userEvent.save();
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

function initializeComponents(json, selectedProjectName){
    selectedProject = selectedProjectName;
    myComponentList = new ComponentList(json["components"]);
    /*myComponentList.comparator = function(model) {
        return model.get("name");
    };
    myComponentList.sort();*/
    myConceptList = new ComponentList();
    myFacilityList = new ComponentList();
    myTheoryList = new ComponentList();
    myUserComponentList = new ComponentList();
    myComponentList.each(function(component){
        // if the component is a concept, facility, or theory
        // we add it to the View list to render
        if(component.get("type") == "c"){
            myConceptList.add(component);
        }
        else if(component.get("type") == "f"){
            myFacilityList.add(component);
        }
        else if(component.get("type") == "t"){
            myTheoryList.add(component);
        }
    });
    myConceptListView = new ComponentMenuView({collection: myConceptList});
    myFacilityListView = new ComponentMenuView({collection: myFacilityList});
    myTheoryListView = new ComponentMenuView({collection: myTheoryList});
}

function initializeComponentMenu(){

    //myComponent_view = new ComponentMenuView({el: $("#component_list"), collection: myComponentList});
    //$("#component_list").parent().trigger('mouseenter');
    $("#component-selector").bind("click", function(){
        var componentDialog = $("#component-finder").dialog({
            width:700,
            height:350,
            resizable:false,
            draggable:false,
            //dialogClass: "menu",
            modal: true
        });
        //$("#component_list").css({display:""});
    });
    var componentList = $("#component_list");
    componentList.find("a").click(function(){
        var li = $(this).parent();
        var prevSel = li.parent().find(".selected-component");
        prevSel.removeClass("selected-component");
        prevSel.children("a").addClass("component dir");
        li.addClass("selected-component");
        li.children("a").removeClass("component dir");        
        var id = li.attr("id");
        var view = null;
        if(id === "concepts_list"){
            view = myConceptListView;
        }
        else if(id === "facilities_list"){
            view = myFacilityListView;
        }
        else if(id === "theories_list"){
            view = myTheoryListView;
        }
        else if(id === "user_component_list"){
            view = myUserComponentListView;
        }
        var viewElement = prepMenu($(this), id);
        view.setElement(viewElement).render();
        setFinderWidth(viewElement);
        /*var createButton = $("#createButton");
        if(createButton.attr("disabled") === "disabled"){
            createButton.removeAttr("disabled");
        }*/
    });
    /*var createButton = $("#createButton");
    createButton.click(function(event){
        var currentList = $("#finder").children().last().attr("id");
        currentList = currentList.split(".");
        var code = genCreateForm(currentList);    
        var el = $("#dialog_new");
        el.dialog({
            width:300,
            height:500,
            resizable:false,
            draggable:false,
            //dialogClass: "menu",
            modal: true
        });
        el.html(code);
    });*/
    
    //Backbone.emulateJSON = true;
    //createButton.contextMenu(true);
}

function initializeContextMenu(user){
    var contextMenu = $.contextMenu({ 
        selector: '.context',
        build: function($trigger, e){
            
            var items = getSubmenuItems($trigger, user);
            
            return {
                callback: function(key, options) {
                    var m = "clicked: " + key;
                    //window.console && console.log(m) || alert(m); 
                },
                items: items
                /*items: {
                    "fold1": {
                        "name": "New",
                        "items": items
                    }
                }*/
            }
        }
                
    });
}

function initializeUserComponents(userComponents){
    var ucs = userComponents.components;
    jQuery.each(ucs, function(index, uc){
        if(uc.type === "c"){
            var newComponent = new Component({
                content: uc.content,
                custom: "true",
                //enhancements: null,
                id: uc.name+"."+uc.name,
                name: uc.name,
                pkg: uc.pkg,
                //realizations: null,
                standard: "false",
                type: uc.type
            });
            myComponentList.add(newComponent);
            myConceptList.add(newComponent);
            myUserComponentList.add(newComponent);
            //newComponent.set("id", uc.id);
            newComponent.id = uc.name+"."+uc.name;
        }
        else if(uc.type === "f"){
            newComponent = new Component({
                content: uc.content,
                custom: "true",
                //enhancements: null,
                //id: newName+"."+newName,
                id: "facilities."+uc.name,
                name: uc.name,
                pkg: uc.pkg,
                //realizations: null,
                standard: "false",
                type: uc.type
            });
            myComponentList.add(newComponent);
            myFacilityList.add(newComponent);
            myUserComponentList.add(newComponent)
            //newComponent.set("id", uc.id);
            newComponent.id = "facilities."+uc.name;
        }
        else if(uc.type === "t"){
            var newComponent = new Component({
                content: uc.content,
                custom: "true",
                //enhancements: null,
                id: "theories."+uc.name,
                name: uc.name,
                pkg: uc.pkg,
                //realizations: null,
                standard: "false",
                type: uc.type
            });
            myComponentList.add(newComponent);
            myTheoryList.add(newComponent);
            myUserComponentList.add(newComponent);
            //newComponent.set("id", uc.id);
            newComponent.id = "theories."+uc.name;
        }
    });
    jQuery.each(ucs, function(index, uc){
        if(uc.type === "e"){
            var parent = myComponentList.where({"name":uc.pkg})[0];
            var newComponent = new Component({
                content: uc.content,
                custom: "true",
                //enhancements: null,
                id: uc.pkg+"."+uc.name,
                name: uc.name,
                pkg: uc.pkg,
                //realizations: null,
                standard: "false",
                type: uc.type
            });
            parent.get("enhancements").add(newComponent);
            myUserComponentList.add(newComponent)
            //newComponent.set("id", uc.id);
            newComponent.id = uc.pkg+"."+uc.name;
        }
    });
    jQuery.each(ucs, function(index, uc){
        var newComponent = new Component({
            content: uc.content,
            custom: "true",
            //enhancements: null,
            id: uc.pkg+"."+uc.name,
            name: uc.name,
            pkg: uc.pkg,
            //realizations: null,
            standard: "false",
            type: uc.type
        });
        //newComponent.set("id", uc.pkg+"."+uc.name);
        newComponent.id = uc.pkg+"."+uc.name;
        if(uc.type === "r"){
            var parent = myComponentList.where({"name":uc.parent})[0];
            parent.get("realizations").add(newComponent);
            myUserComponentList.add(newComponent)
        }
        else if(uc.type === "er"){
            var concept = myComponentList.where({"name":uc.pkg})[0];
            parent = concept.get("enhancements").where({"name":uc.parent})[0];
            parent.get("realizations").add(newComponent);
            myUserComponentList.add(newComponent)
        }
    });
    
    myUserComponentListView = new ComponentMenuView({collection: myUserComponentList});
    /*var componentList = $("#component_list");
    componentList.find("a").click(function(){
        var li = $(this).parent();
        li.parent().find(".selected-component").removeClass("selected-component");
        li.addClass("selected-component");
        var id = li.attr("id");
        var view = null;
        if(id === "user_component_list"){
            view = myConceptListView;
            var viewElement = prepMenu($(this), id);
            view.setElement(viewElement).render();
            setFinderWidth(viewElement);
        }
    });*/
    
    var exportButton = $("#control_export");
    exportButton.click(function(event){
        event.preventDefault();
        var loc = window.location;
        //var pathname = loc.pathname;
        //pathname = pathname.substring(0,pathname.lastIndexOf("/"));
        //var url = "http://" + loc.host + (loc.pathname.length>1?loc.pathname+"/":loc.pathname) + "Components";
        var url = "http://" + getUrl(loc) + "export?project=" + selectedProject;
        window.location.href = url;
    });
    
    var importButton = $("#control_import");
    importButton.click(function(event){
        var text = "Please select a file to import:<br/>";
        var importInput = $("<input type=\"file\" id=\"importFile\" size=\"36\">");
        var el = $("#dialog_new");
        el.html(text);
        el.append(importInput);
        var d = el.dialog({
            width:400,
            height:500,
            resizable:false,
            draggable:false,
            //dialogClass: "menu",
            modal: true
        });
        importInput.on("change", function(evt){
            parseImportFile(evt, d);
        });
        //document.getElementById("importFile").addEventListener("change", parseFile, false);
    });
}

function parseImportFile(evt, d){
    var files = evt.target.files;
    var file = files[0];
    var filename = file.name;
    var reader = new FileReader();
    if(filename.match(/^.+(\.json|\.JSON)$/)){
        reader.readAsText(file);
        reader.onloadend = function(event){
            handleJsonImport(event, filename, d);
        }
    }
    else{
        alert("Please select a valid JSON file");
    }
}

function handleJsonImport(evt, fileName, d){
    var textData = evt.target.result;
    var success = false;
    try{
        var json = jQuery.parseJSON(textData);
        importUserComponents(json, d);
        
    } catch(err) {
        alert("Unable to process JSON file\n"+err);
    }
}

function importUserComponents(userComponents, d){
    myImportedUserComponentList = new ComponentList();
    var project = userComponents.project;
    if(project === selectedProject){
        var ucs = userComponents.components;
        jQuery.each(ucs, function(index, uc){
            if(uc.type === "c"){
                var newComponent = new Component({
                    content: uc.content,
                    custom: "true",
                    //enhancements: null,
                    id: uc.name+"."+uc.name,
                    name: uc.name,
                    pkg: uc.pkg,
                    //realizations: null,
                    standard: "false",
                    type: uc.type
                });
                myImportedUserComponentList.add(newComponent);
                //newComponent.set("id", uc.id);
                newComponent.id = uc.name+"."+uc.name;
            }
            else if(uc.type === "f"){
                newComponent = new Component({
                    content: uc.content,
                    custom: "true",
                    //enhancements: null,
                    //id: newName+"."+newName,
                    id: "facilities."+uc.name,
                    name: uc.name,
                    pkg: uc.pkg,
                    //realizations: null,
                    standard: "false",
                    type: uc.type
                });
                myImportedUserComponentList.add(newComponent)
                //newComponent.set("id", uc.id);
                newComponent.id = "facilities."+uc.name;
            }
        });
        jQuery.each(ucs, function(index, uc){
            if(uc.type === "e"){
                var parent = myComponentList.where({"name":uc.parent})[0];
                if(parent == null){
                    parent = myImportedUserComponentList.where({"name":uc.parent})[0];
                }
                var newComponent = new Component({
                    content: uc.content,
                    custom: "true",
                    //enhancements: null,
                    id: uc.pkg+"."+uc.name,
                    name: uc.name,
                    pkg: uc.pkg,
                    //realizations: null,
                    standard: "false",
                    parent: uc.parent,
                    type: uc.type
                });
                if(parent != null){
                    myImportedUserComponentList.add(newComponent);
                }
                //newComponent.set("id", uc.id);
                newComponent.id = uc.pkg+"."+uc.name;
            }
        });
        jQuery.each(ucs, function(index, uc){
            var newComponent = new Component({
                content: uc.content,
                custom: "true",
                //enhancements: null,
                id: uc.pkg+"."+uc.name,
                name: uc.name,
                pkg: uc.pkg,
                //realizations: null,
                standard: "false",
                parent: uc.parent,
                type: uc.type
            });
            //newComponent.set("id", uc.pkg+"."+uc.name);
            newComponent.id = uc.pkg+"."+uc.name;
            if(uc.type === "r"){
                var parent = myComponentList.where({"name":uc.parent})[0];
                if(parent == null){
                    parent = myImportedUserComponentList.where({"name":uc.parent})[0];
                }
                if(parent != null){
                    myImportedUserComponentList.add(newComponent);
                } 
            }
            else if(uc.type === "er"){
                var concept = myComponentList.where({"name":uc.pkg})[0];
                if(concept == null){
                    concept = myImportedUserComponentList.where({"name":uc.pkg})[0];
                }
                parent = concept.get("enhancements").where({"name":uc.parent})[0];
                if(parent == null){
                    parent = myImportedUserComponentList.where({"name":uc.parent})[0];
                }
                if(parent != null){
                    myImportedUserComponentList.add(newComponent);
                }
            }
        });
        var importDialog = createImportDialog(project);
        //var importPrompt = getEnvImportPrompt(fileName, selectedWsName, importArray);
        var el = $("#dialog_new")
        el.html(importDialog);
        var importButton = $("<button>").val("import").text("Import");
        el.append(importButton);
        importButton.click(function(event){
            event.preventDefault();
            var success = false;
            var selectedFiles = new Array();
            $("input[@name=userFileSelect]:checked").each(function(){
                selectedFiles.push($(this).val());
            });
            var json = genImportJson(project, selectedFiles);
            importUserFiles(json, d);
            //importFiles(importArray, selectedFiles);
        });
        //d.dialog("destroy");
    }
    else{
        alert("Please open the project: "+project+" and try again");
    } 
}

function createImportDialog(project){
    var prompt = "Import File Analysis:<br/><br/>" +
                "Target Project: " + project + "<br/><br/>" +
                "Please select components to import:<br/><br/>";
    //if(userArray.length != 0){
        // @todo move this formatting to the css file
        //prompt += "<span style=\"color:red\">** NOTE: Duplicate components are not supported and will be disabled **</span><br/><br/>"
    //}
    prompt += selectUserFileInfo(true);
    var overrideDup = $("<input type=\"checkbox\">").attr({id:"overrideDup"});
    overrideDup.click(function(event){
        event.preventDefault();
        var importCheckboxes = $("#dialog_new input[disabled]");
        importCheckboxes.removeAttr("disabled");
        $(event.currentTarget).attr({disabled:"disabled"});
        
    });
    var overrideLabel = $("<label>").html("Allow duplicate overwrite").attr({"for":"overrideDup"});
    var div = $("<div>").html(prompt+"<br/><br/>");
    div.append(overrideDup);
    div.append(overrideLabel);
    return div;
}

function selectUserFileInfo(amImporting){
    var info = "";
    myImportedUserComponentList.each(function(model, index){
        info += "<input type=\"checkbox\" name=\"userFileSelect\" value=\"" + index + 
            "\" ";
        
            // add a check to see if the file is a duplicate of someting already in the env
            // and disable if so
            var isDup = false;
            if(amImporting){
                var selectedFile = this;
                isDup = myUserComponentList.where({id:model.id})[0];
                if(isDup != null){
                    info += "disabled=\"disabled\"";
                }
                else{
                    info += "checked=\"checked\"";
                }
            }
            else{
                info += "checked=\"checked\"";
            }
        info += ">" + model.get("name");
        if(isDup){
            info += " <span class=\"inputError\">(duplicate)</span>"
        }
        info += "<br/>";
    });
    return info;
}

function genImportJson(project, selectedFiles){
    var json = "{\"project\":\"" + project + "\",\"importComponents\":[";
    for(var i = 0; i < selectedFiles.length; i++){
        var model = myImportedUserComponentList.at(selectedFiles[i]);
        json += model.toJSON();
        if(i < selectedFiles.length - 1){
            json += ",";
        }
    }
    json += "]}";
    return json;
}

function importUserFiles(json, d){
    var loc = window.location;
    //var pathname = loc.pathname;
    //pathname = pathname.substring(0,pathname.lastIndexOf("/"));
    //var url = "http://" + loc.host + (loc.pathname.length>1?loc.pathname+"/":loc.pathname) + "Components";
    var url = "http://" + getUrl(loc) + "import";
    $.ajax({
        type: "POST",
        url: url,
        data: json,
        success: function(data){
            var json = jQuery.parseJSON(data);
            displayImportReport(json, d);
        },
        error: function(){
            alert("Import Server Error!");
        }
    });
}

function displayImportReport(json, d){
    var report = $("<div>").html("Import Report:<br/><br/>");
    var actions = json.actions;
    $.each(actions, function(index, event){
        var success = (event.success)?"Success":"Fail";
        var info = event.action + " " + event.name + ": " + success + "<br/>";
        report.append(info);
    });
    report.append("<br/>");
    var msg = "Please reload the environment to load any newly imported components.<br/>"
    report.append("<br/>");
    var refreshButton = $("<button>").val("reload").text("Reload");
    refreshButton.click(function(event){
        event.preventDefault();
        location.reload(true);
    });
    var el = $("#dialog_new")
    el.html(report);
    el.append(msg);
    el.append(refreshButton);
}

function getCreateMenuItems(model){
    var items = {};
    var type = model.get("type");
    if(type === "c"){
        items = {
            "fold1-key1":{"name": "realization"},
            "fold1-key2":{"name": "enhancement"}
        }
    }
    else{
        items = {"k1": {"name":"test"}};
    }
    return items;
}

function getSubmenuItems($trigger, user){
    var id = $trigger.closest("div").attr("id");
    var items = {"fold1-key":{"name":"register for advanced functionality"}};
    if(id === "finder-main"){
        if(user !== ""){
            items = {
                "fold1-key1":{
                    "name": "new concept",
                    callback: function(key, opt){
                        genCreateForm("c", model);
                    }
                },
                "fold1-key2":{
                    "name": "new facility",
                    callback: function(key, opt){
                        genCreateForm("f", model);
                    }
                },
                "fold1-key3":{
                    "name": "new theory",
                    callback: function(key, opt){
                        genCreateForm("t", model);
                    }
                }
            }
        }
    }
    else{
        //var currentList = $("#finder").children().last().attr("id");
        var linkText = $trigger.html();
        if(linkText === "Realizations"){
            if(user !== ""){
                var listParent = $trigger.closest("div");
                var parentId = listParent.attr("id");
                var currentList = parentId.split(".");
                var parent = getNewModelParent(currentList, myComponentList);
                items = {"fold1-key1":{
                            "name": " new realization",
                            callback: function(key, opt){
                                genCreateForm("r", parent);
                            }
                        }};
            }
        }
        else if(linkText === "Enhancements"){
            if(user !== ""){
                listParent = $trigger.closest("div");
                parentId = listParent.attr("id");
                currentList = parentId.split(".");
                parent = getNewModelParent(currentList, myComponentList);
                items = {"fold1-key1":{
                            "name": "new enhancement",
                            callback: function(key, opt){
                                genCreateForm("e", parent);
                            }
                        }};
            }
        }
        else{
            var cid = $trigger.attr("data-cid");
            var model = getModelByCid(myComponentList, cid);
            var type = model.get("type");
            if(type === "c"){
                if(user !== ""){
                    items = {
                        "fold1-key1":{
                            "name": "edit " + model.get("name"),
                            callback: function(key, opt){
                                displayComponent(model);
                            }
                        },
                        "fold1-key2":{
                            "name": "new realization",
                            callback: function(key, opt){
                                genCreateForm("r", model);
                            }
                        },
                        "fold1-key3":{
                            "name": "new enhancement",
                            callback: function(key, opt){
                                genCreateForm("e", model);
                            }
                        }
                    }
                }
                else{
                    items = {
                        "fold1-key1":{
                            "name": "edit " + model.get("name"),
                            callback: function(key, opt){
                                displayComponent(model);
                            }
                        }
                    }
                }
                    
            }
            else if(type === "e"){
                if(user !== ""){
                    items = {
                        "fold1-key1":{
                            "name": "edit " + model.get("name"),
                            callback: function(key, opt){
                                displayComponent(model);
                            }
                        },
                        "fold1-key2":{
                            "name": "new realization",
                            callback: function(key, opt){
                                genCreateForm("r", model);
                            }
                        }
                    }
                }
                else{
                    items = {
                        "fold1-key1":{
                            "name": "edit " + model.get("name"),
                            callback: function(key, opt){
                                displayComponent(model);
                            }
                        }
                    }
                }    
            }
        }
            
    }
    var item = {
        "fold1": {
            "name": "New",
            "items": items
        }
    };
    return items;
}

function genCreateForm(type, parent){
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
    if(parent != null){
        code = "creating new file associated with: " + parent.get("name");
    }
    else{
        code = "creating new component";
    }
    if(type === "c"){
        code = genNewConceptForm(parent, d);
    }
    else if(type === "e"){
        code = genNewEForm(parent, d);
    }
    else if(type === "r"){
        if(parent.get("type") === "c"){
            code = genNewCrForm(parent, d);
        }
        else if(parent.get("type") === "e"){
            code = genNewErForm(parent, d);
        }
    }
    else if(type === "f"){
        code = genNewFacilityForm(parent, d);
    }
    else if(type === "t"){
        code = genNewTheoryForm(parent, d);
    }
    el.html(code);
    
    /*if(currentName === "concepts"){
        code = genNewConceptForm();
    }
    else if(currentName === "facilities"){
        code = genNewFacilityForm();
    }
    else if(currentName === "theories"){
        code = genNewTheoryForm();
    }
    else{
        code = genNewErForm();
    }*/
    return code;
}

function genNewConceptForm(parent, d){
    var form = $("<div>");
    form.html("Please enter a name for the concept:<br/>");
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
        var newName = name.attr("value");
        var body = "Concept " + newName + ";\n\nend " + newName + ";";
        var foundNames = myConceptList.where({"name":newName});
        if(foundNames.length == 0){
            var newComponent = new Component({
                content: body,
                custom: "true",
                enhancements: null,
                //id: newName+"."+newName,
                name: newName,
                pkg: newName,
                realizations: null,
                standard: "false",
                type: "c"
            });
            myComponentList.add(newComponent);
            myConceptList.add(newComponent);
            myUserComponentList.add(newComponent)
            //newComponent.save();
            var id = newName+"."+newName;
            newComponent.save(null, {success:function(){
                    saveSuccess(newComponent, id, d);
            }});
            //newComponent.set("id", newName+"."+newName);
            //displayComponent(newComponent);
            //d.dialod.dg("destroy");
        }
        else{
            error.html("A component with this name already exists!");
        }
        //var name = $(event.currentTarget).attr("name");
    });
    return form;
}

function genNewEForm(parent, d){
    var form = $("<div>");
    var text = "Please enter a name for the enhancement for " + parent.get("name") + ":<br/>";
    form.html(text);
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
        var newName = name.attr("value");
        var body = "Enhancement " + newName + " for " + parent.get("name") +
                ";\n\nend " + newName + ";";
        var foundNames = parent.get("enhancements").where({"name":newName});
        if(foundNames.length == 0){
            var newComponent = new Component({
                content: body,
                custom: "true",
                enhancements: null,
                //id: newName+"."+newName,
                name: newName,
                pkg: parent.get("pkg"),
                parent: parent.get("name"),
                realizations: null,
                standard: "false",
                type: "e"
            });
            parent.get("enhancements").add(newComponent);
            myUserComponentList.add(newComponent);
            var id = parent.get("pkg")+"."+newName;
            newComponent.save(null, {success:function(){
                    saveSuccess(newComponent, id, d);
            }});
            //newComponent.save();
            //newComponent.set("id", parent.get("pkg")+"."+newName);
            //displayComponent(newComponent);
            //d.dialog("destroy");
        }
        else{
            error.html("A component with this name already exists!");
        }
        //var name = $(event.currentTarget).attr("name");
    });
    return form;
}

function genNewCrForm(parent, d){
    var form = $("<div>");
    var text = "Please enter a name for the realization for " + parent.get("name") + ":<br/>";
    form.html(text);
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
        var newName = name.attr("value");
        var body = "Realization " + newName + " for " + parent.get("name") +
                ";\n\nend " + newName + ";";
        var foundNames = parent.get("realizations").where({"name":newName});
        if(foundNames.length == 0){
            var newComponent = new Component({
                content: body,
                custom: "true",
                enhancements: null,
                //id: newName+"."+newName,
                name: newName,
                pkg: parent.get("pkg"),
                parent: parent.get("name"),
                realizations: null,
                standard: "false",
                type: "r"
            });
            parent.get("realizations").add(newComponent);
            myUserComponentList.add(newComponent);
            var id = parent.get("pkg")+"."+newName;
            newComponent.save(null, {success:function(){
                    saveSuccess(newComponent, id, d);
            }});
        }
        else{
            error.html("A component with this name already exists!");
        }
        //var name = $(event.currentTarget).attr("name");
    });
    return form;
}

function genNewErForm(parent, d){
    var form = $("<div>");
    var text = "Please enter a name for the realization for " + parent.get("name") + " of " +
                myConceptList.where({"name":parent.get("pkg")})[0].get("name") + ":<br/>"
    form.html(text);
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
        var newName = name.attr("value");
        var body = "Realization " + newName + " for " + parent.get("name") + " of " +
                myConceptList.where({"name":parent.get("pkg")})[0].get("name") + ";\n\nend " + newName + ";";
        var foundNames = parent.get("realizations").where({"name":newName});
        if(foundNames.length == 0){
            var newComponent = new Component({
                content: body,
                custom: "true",
                enhancements: null,
                //id: newName+"."+newName,
                name: newName,
                pkg: parent.get("pkg"),
                parent: parent.get("name"),
                realizations: null,
                standard: "false",
                type: "er"
            });
            parent.get("realizations").add(newComponent);
            myUserComponentList.add(newComponent);
            var id = parent.get("pkg")+"."+newName;
            newComponent.save(null, {success:function(){
                    saveSuccess(newComponent, id, d);
            }});
            //newComponent.save();
            //newComponent.set("id", parent.get("pkg")+"."+newName);
            //displayComponent(newComponent);
            //d.dialog("destroy");
        }
        else{
            error.html("A component with this name already exists!");
        }
        //var name = $(event.currentTarget).attr("name");
    });
    return form;
}

function genNewFacilityForm(parent, d){
    var form = $("<div>");
    form.html("Please enter a name for the facility:<br/>");
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
        var newName = name.attr("value");
        var body = "Facility " + newName + ";\n\nend " + newName + ";";
        var foundNames = myFacilityList.where({"name":newName});
        if(foundNames.length == 0){
            var newComponent = new Component({
                content: body,
                custom: "true",
                enhancements: null,
                //id: newName+"."+newName,
                name: newName,
                pkg: "facilities",
                realizations: null,
                standard: "false",
                type: "f"
            });
            myComponentList.add(newComponent);
            myFacilityList.add(newComponent);
            myUserComponentList.add(newComponent);
            var id = "facilities."+newName;
            newComponent.save(null, {success:function(){
                    saveSuccess(newComponent, id, d);
            }});
            //newComponent.save();
            //newComponent.set("id", "facilities."+newName);
            //displayComponent(newComponent);
            //d.dialog("destroy");
        }
        else{
            error.html("A component with this name already exists!");
        }
        //var name = $(event.currentTarget).attr("name");
    });
    return form;
}

function genNewTheoryForm(parent, d){
    var form = $("<div>");
    form.html("Please enter a name for the theory:<br/>");
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
        var newName = name.attr("value");
        var body = "Precis " + newName + ";\n\nend " + newName + ";";
        var foundNames = myTheoryList.where({"name":newName});
        if(foundNames.length == 0){
            var newComponent = new Component({
                content: body,
                custom: "true",
                enhancements: null,
                //id: newName+"."+newName,
                name: newName,
                pkg: newName,
                realizations: null,
                standard: "false",
                type: "t"
            });
            myComponentList.add(newComponent);
            myTheoryList.add(newComponent);
            myUserComponentList.add(newComponent)
            //newComponent.save();
            var id = newName+"."+newName;
            newComponent.save(null, {success:function(){
                    saveSuccess(newComponent, id, d);
            }});
            //newComponent.set("id", newName+"."+newName);
            //displayComponent(newComponent);
            //d.dialod.dg("destroy");
        }
        else{
            error.html("A component with this name already exists!");
        }
        //var name = $(event.currentTarget).attr("name");
    });
    return form;
}

function saveSuccess(newComponent, id, d){
    /*var userEvent = new UserEvent({
        eventType: "createComponent",
        project: selectedProject,
        name: newComponent.get("name"),
        pkg: newComponent.get("pkg"),
        content: newComponent.get("content")
    });
    userEvent.save();*/
    newComponent.set("id", id);
    displayComponent(newComponent);
    d.dialog("destroy");
}

function prepMenu(link, newId){
    var li = link.parent();
    var listParent = li.closest("div");
    var parentId = listParent.attr("id");
    var listSiblings = listParent.parent().children();
    var finderWidth = 0;
    var foundMyself = false;
    _(listSiblings).each(function(child){
        if(foundMyself){
            $(child).remove();
        }
        else{
            finderWidth += $(child).outerWidth();
        }
        if($(child).is(listParent)){
            foundMyself = true;
        }
    });
    var updatedId = (parentId !== "finder-main")?(parentId+"."+newId):newId;
    var viewElement = $("<div>").addClass("finder-cell").attr({id:updatedId});
    //var clearElement = $("<div style=\"clear:left\">");//.addClass("clear");
    listParent.parent().append(viewElement);
    //listParent.parent().append(clearElement);
    //$("#finder").outerWidth(finderWidth + 400);
    return viewElement;
}

function setFinderWidth(newElement){
    var finder = $("#finder");
    var parentWidth = finder.parent().outerWidth();
    var listSiblings = finder.children();
    var newFinderWidth = 0;
    _(listSiblings).each(function(child){
        newFinderWidth += $(child).outerWidth();
    });
    var zoom = DetectZoom.zoom();
    finder.outerWidth(newFinderWidth * zoom);
    if(newFinderWidth > parentWidth){
        finder.parent().animate({scrollLeft: (newFinderWidth - parentWidth)}, 'fast');
    }
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
                var model = getModelById(myComponentList, openModel[0].id);
                //var model = getModelByCid(myComponentList, openModel[0].get("cid"));
                openComponent = model;
            }
        }
        else{
            openComponent = myOpenComponentList.at(0);
        }
        if(openComponent != null){
            displayComponent(openComponent);
        }
        else if(myOpenComponentList.length > 0){
            displayComponent(myOpenComponentList.at(0).get("componentModel"));
        }
        var item = $("#open_component_list>li.selected");
        //scanToSelected(item);
    }
}

function scanToSelected(item){
    var itemPos = item.position();
    /*if(itemPos == null){
        itemPos = {top:0,left:0};
    }*/
    var openMenuDiv = $("#open_components")
    var list = $("#open_component_list");
    var menuLeft = openMenuDiv.position().left;
    var menuRightSide = openMenuDiv.width();
    var listLeft = list.position().left;
    var itemRightSide = itemPos.left + item.outerWidth(true);
    if(itemRightSide > menuRightSide){
        var excess = "-" + (itemRightSide - menuRightSide);
        list.animate({"left": excess}, "fast");
        //list.css("left", listLeft - (itemRightSide - menuRightSide));
    }
    else if(itemPos.left + listLeft < menuLeft){
        list.animate({"left": -(itemPos.left - 5)}, "fast");
        //list.css("left", 0);
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

function getModelById(collection, id){
    var comp = collection.where({"id":id})[0];
    if(comp == null){
        var i = 0;
        while(i < collection.models.length){
            var realizations = collection.models[i].get("realizations");
            comp = realizations.where({"id":id})[0];
            if(comp == null){
                var enhancements = collection.models[i].get("enhancements");
                comp = enhancements.where({"id":id})[0];
                if(comp == null){
                    comp = getModelById(enhancements, id);
                    if(comp == null){
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
    return null;
}

function getTheoryOrFacilityByName(name, type){
    var comp = myComponentList.where({"name":name, "type":type})[0];
    return comp;
}

function getNewModelParent(currentList, list){
    var model = null;
    if(currentList.length > 1){
        var thisList = currentList[0];
        if(thisList === "concepts_list"){
            if(currentList.length == 2){
                var id = currentList[1] + "." + currentList[1];
                model = list.where({"id":id})[0];
            }
            else{
                id = currentList[1] + "." + currentList[2];
                model = list.where({"id":id})[0];
                if(currentList.length > 4){
                    var subList = currentList[3].toLowerCase();
                    id = currentList[1] + "." + currentList[4];
                    model = model.get(subList).where({"id":id})[0];
                }
            }
                
        }
            
    }
    else{
        //var parentModel = getNewModelParent(, )
        //model = getModelParent()
    }
    return model;
}

function sortComponents(collection){
    
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
