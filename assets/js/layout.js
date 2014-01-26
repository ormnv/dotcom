define([
    'jquery'
    ,'signals'
    ], function () {

        var layout = (function(){

    // function init(shared){
    //     // this.shared = shared;
    //     // shared.signals.stopHover.add(stopHandler);
    //     // shared.signals.startHover.add(startHandler);

    //     signals = shared.signals;
    //     signals['hover-on'].add( hoveredOn );
    // } 

    // function hoveredOn{

    // }   

    // return function () {
        // var boo = 1;
        // var foo = 2;
    // };


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
        // jQuery('#romanova').fitText();
        // $("#contact-submit").click(
        //   function() {
        //     // var form = $( this ).attr("id");
        //     shared.signals.validateForm.dispatch();
        // });
            // , function() {
            // $( this ).find( "span:last" ).remove();
            // }
        }


        return {
            init: init
        };
    })();
    return layout;
});