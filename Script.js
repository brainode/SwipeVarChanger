const qvDoc = Qv.GetCurrentDocument();

function loadLibraries() {
    Qva.LoadScript("/QvAJAXZfc/QvsViewClient.aspx?public=only&name=Extensions/SwipeVarChanger/jquery.min.js", init);
}

function init(){
    Qv.AddExtension("SwipeVarChanger",
        function() {
            $(".QvGraph").on("swipe",function (event) {
                console.log(event);
            });
        });
}

loadLibraries();
