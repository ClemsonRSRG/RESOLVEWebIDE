
var myProjectList = null;
var Project = Backbone.Model.extend({
    defaults: {
        id: -1,
        pretty: ''
    },
    initialize: function(){
        
    }
});

var ProjectList = Backbone.Collection.extend({
    model: Project,
    initialize: function(){
        
    },
    updateList: function(projects){
        this.reset(projects.toJSON());
        this.trigger('updateList');
    }
});

var ProjectListView = Backbone.View.extend({
    initialize: function(project){
        var defaultProject = new Project({id:0,pretty:"none available"});
        myProjectList = new ProjectList(defaultProject);
        this.collection = myProjectList;
        this.collection.bind( 'add', this.updateView );
        this.collection.bind( 'remove', this.updateView );
        this.collection.bind( 'updateList', this.updateView );
        this.render();
    },
    render: function(){        
        // this uses the project_template script in index.html to generate
        // the Project menu based on the collection
        var template = _.template($("#project_template").html(), { projects: this.collection.toJSON() });
        $(this.el).html( template );
        setMenuHandlers($("#projects_container li"));
        $("#project_list").addClass("hidden");
        $("#project_list").find("li").addClass("hidden");
    },
    events: {
        "click a.project": "selectProject"
    },
    selectProject: function(event){
        var projectId = $(event.currentTarget).attr("id");
        alert("clicked on "+projectId);
    },
    updateView: function(){
        var template = _.template($("#project_template").html(), { projects: this.toJSON() });
        $("#projects_container").html( template );
    }
});

/*
 * This dynamically generates the Environment menu. 
 * This could be expanded to do this dynamically if we wanted to change
 * the available options easily (i.e. if someone is logged in or logged out)
 * based on a change to a Collection storing the menu options
 */
var EnvMenuBarView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        // this uses the env_template script in index.html to generate
        // the Envrionment menu based on the envItems array
        var template = _.template($("#env_template").html(), {options: envItems});
        this.$el.html( template );
        setMenuHandlers($("#env_menu li"));
        $("#env_list").addClass("hidden");
        $("#env_list").find("li").addClass("hidden");
    },
    events: {
        "click a#env_info": "showOverview",
        "click a#env_import": "doClick",
        "click a#env_export": "doClick",
        "click a#env_reset": "doClick",
        "click a#env_login": "doClick",
        "click a#env_logout": "doClick"
    },
    showOverview: function(event){
        var link = $(event.currentTarget).attr("id");
        alert("We would show the overview when this is clicked");
    },
    doClick: function(event){
        var link = $(event.currentTarget).attr("id");
        alert("clicked on "+link);
    }
});

/*
 * This dynamically generates the options in the Help menu
 */
var HelpMenuBarView = Backbone.View.extend({
    initialize: function(){
        this.render();
    },
    render: function(){
        var itemGen = "<% _.each(item, function(name, id) {\
                    %> <li><a id=\"<%= id %>\"><%= name %></a></li> <% \
                    }); %>";
        var helpItems = {item: {"help_overview":"IDE Overview",
                            "help_rvc":"Verifying Compiler",
                            "help_tutorials":"Tutorials",
                            "help_reportbug":"Report Bug"}};
        var template = _.template(itemGen, helpItems);
        var menu = "<ul><li><h2>Help</h2><ul id=\"help_list\">" + template + "</ul></ul>";
        this.$el.html( menu );
        setMenuHandlers($("#help_container li"));
        $("#help_list").addClass("hidden");
        $("#help_list").find("li").addClass("hidden");
    },
    events: {
        "click a#help_overview": "showOverview",
        "click a#help_rvc": "doClick",
        "click a#help_tutorials": "doClick",
        "click a#help_reportbug": "doClick"
    },
    showOverview: function(event){
        var link = $(event.currentTarget).attr("id");
        alert("We would show the overview when this is clicked");
    },
    doClick: function(event){
        var link = $(event.currentTarget).attr("id");
        alert("clicked on "+link);
    }
});

function initializeMenuBar(){
    // right now we create Views for the projects, environment, and help menus
    var menu_view = new ProjectListView({ el: $("#projects_container")});
    
    menu_view = new EnvMenuBarView({ el: $("#env_menu")});
    
    menu_view = new HelpMenuBarView({ el: $("#help_container")});
}
