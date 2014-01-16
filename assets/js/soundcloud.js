define([
    'lib/jquery'
    ], function(){
        var Soundcloud = (function()
        {

            function init(shared){
            this.shared = shared;
            shared.signals.stopCarousel.add(stopHandler);
            shared.signals.startCarousel.add(startHandler);
            }    
                 // construct
	        // $(function()
	        // {

	        // });
        })();
        return Soundcloud;
    });