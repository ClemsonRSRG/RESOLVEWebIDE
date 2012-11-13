function genHelp() {
    var el = $("#dialog_new");    
    var loc = window.location;
    var url = "http://" + getUrl(loc) + "public/help/help.txt";
    $.ajax({
        type: "get",
        url: url,
        success: function(data){
            var div = $("<div>").html(data).css({height:"560px","overflow-y":"scroll"});
            var d = el.dialog({
                width: 800,
                height: 600,
                resizable:false,
                draggable:false,
                modal: true
            });
            el.html(div);
        }
    });
}