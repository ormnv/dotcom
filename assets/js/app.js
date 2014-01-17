define([
    // ,'description'
    // ,'github'
    // ,'instagram'
    // ,'logo'
    // ,'name'
    // ,'soundcloud'
    'hover'
    ,'jquery'
    ,'signals'
    ], function (Layout, Hover) {
  var app = (function(){

    function init(shared){
        console.log("in layout");

        this.shared = shared;

        $(".section").hover(
          function() {
            var current = $( this ).attr("id");
            shared.signals.hoverStart.dispatch(current);
        });

        $(".section").mouseout(
          function() {
            var current = $( this ).attr("id");
            shared.signals.hoverStop.dispatch(current);
        });

        }

        return {
            init: init
        };
    })();
    return app;
});