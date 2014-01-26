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
            var elem = "#"+current;
            var title ="#"+current+" .title";
            console.log("stop hover"+elem+title);
            $(elem).css('background-color', '');
            $(title).css('color', '');

            if(current==="linkedin"){
                $('#linked').css('color', ''); 
                $('#in').css('color', ''); 
            }   

   
            }

            function startHover(current){
           //  console.log("in startHover " + current);
           //  var elem = "#"+current;
           // $(elem).removeAttr('background-color');   
            var elem = "#"+current;
            var title ="#"+current+" .title";
            $(elem).css('background-color', 'white');

            $(title).css('color', 'black'); 

            if(current==="linkedin"){
                $('#linked').css('color', 'black'); 
                $('#in').css('color', 'black'); 
            }


            }

            return {
                init: init
            };
        })();
        return Hover;
    });