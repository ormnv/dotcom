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

        $( ".section" ).hover(
          function() {
            var current = $( this ).attr("id");
            shared.signals.hoverStart.dispatch(current);
            console.log("in hover");
            console.log(current);
        });
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