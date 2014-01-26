define([
    // ,'description'
    // ,'github'
    // ,'instagram'
    // ,'logo'
    // ,'name'
    // ,'soundcloud'
    'hover'
    ,'jquery'
    ,'fittext'
    ,'signals'
    ], function (Layout, Hover) {
  var app = (function(){

    function init(shared){
        console.log("in layout");

        this.shared = shared;

        $( document ).ready(function(){
            console.log("ready");
            shared.signals.setSize.dispatch();
        });
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
        $(window).resize(function(){
            shared.signals.resize.dispatch();
        });
        // $('#olga').fitText();
        // $('#github-title').fitVert(0.9);
        // $("#contact-submit").click(
        //   function() {
        //         console.log("send clicked");
        //         shared.signals.validateForm.dispatch();
        // });

        }

        return {
            init: init
        };
    })();
    return app;
});