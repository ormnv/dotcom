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

        $( document ).ready(function(){

            $('#ready').fadeIn(400);

            //get viewport size
            var width = $(window).width();
            var widthEms = width/16;
            console.log("ready width is " +widthEms );
            //45-60em
            if(widthEms>=40){
                shared.signals.setSize40.dispatch();
            }
            //mobile under 40em
            if(widthEms<40){
                shared.signals.setSizeMobile.dispatch();
            }
        });
        $(".section").hover(
          function() {
            var current = $( this ).attr("id");   
            shared.signals.hoverStart.dispatch(current);
        });
        $(".section-container").hover(
          function() {
            var current = $(this).parent().attr('id');  
            shared.signals.hoverStart.dispatch(current);
        });
        $(".section-container-blog").hover(
          function() {
            var current = $(this).parent().attr('id');  
            shared.signals.hoverStart.dispatch(current);
        });
        $("a").hover(
          function() {
            var current = $(this).parent().parent().attr('id');  
            shared.signals.hoverStart.dispatch(current);
        });
        $(".section").mouseout(
          function() {
            var current = $( this ).attr("id");
            shared.signals.hoverStop.dispatch(current);
        });
        $(".section-container").mouseout(
          function() {
            var current = $(this).parent().attr('id');  
            shared.signals.hoverStop.dispatch(current);
        });
        $(".section-container-blog").mouseout(
          function() {
            var current = $(this).parent().attr('id');
            shared.signals.hoverStop.dispatch(current);
        });
        $("a").mouseout(
          function() {
            var current = $(this).parent().parent().attr('id');  
            shared.signals.hoverStart.dispatch(current);
        });
        $(window).resize(function(){
            var width = $(window).width();
            var widthEms = width/16;

            console.log("ready width is " +widthEms);
            //45em+
            if(widthEms>=40){
                shared.signals.resize40.dispatch();
            }
            //mobile under 40em
            if(widthEms<40){
                shared.signals.resizeMobile.dispatch();
            }
        });

        }

        return {
            init: init
        };
    })();
    return app;
});