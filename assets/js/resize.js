define([
    'jquery'
    ,'signals'
    ], function(){
        var Resize = (function(){
            function init(shared){
                console.log("in resize");
                this.shared = shared;
                shared.signals.setSize.add(sizeText);
                shared.signals.resize.add(resizeText);
            }

            //get initial size for text
            function sizeText(){
                $('#olga span.title').css('font-size',($('#olga').width()*0.3)+'px');
                $('#romanova span.title').css('font-size',($('#romanova').width()*0.145)+'px');
                console.log("in resize size is" + $('#github span.title').css('font-size') + " height is "+($('#content').height()*0.5));

                $('#github span.title').css('font-size',($('#content').height()*0.25)+'px');    
 
            }

            //on window resize
            function resizeText(){
                console.log("in resize ");
                console.log("in resize size is" + $('#github span.title').css('font-size') + " width is "+($('#content').width()*0.5));
                $('#olga span.title').css('font-size',($('#olga').width()*0.3)+'px');
                $('#romanova span.title').css('font-size',($('#romanova').width()*0.145)+'px');    
                $('#github span.title').css('font-size',($('#content').height()*0.25)+'px');    

            }

            return {
                init: init
            };
        })();
        return Resize;
    });