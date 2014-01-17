define([
    'jquery'
    ,'signals'
    ], function(){
        var Hover = (function(){
            function init(shared){
                console.log("in hover");
                this.shared = shared;
                shared.signals.hoverStop.add(stopHover);
                shared.signals.hoverStart.add(startHover);        
            }

            function stopHover(current){
                console.log("in stophover "+ current);    
            }

            function startHover(current){
                console.log("in startHover " + current);
            }

            return {
                init: init
            };
        })();
        return Hover;
    });