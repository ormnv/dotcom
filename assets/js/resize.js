define([
    'jquery'
    ,'signals'
    ], function(){
        var Resize = (function(){
            function init(shared){
                console.log("in resize");
                this.shared = shared;
                shared.signals.setSize40.add(sizeText40);
                shared.signals.setSizeMobile.add(sizeTextMobile);

                shared.signals.resize40.add(resizeText40);
                shared.signals.resizeMobile.add(resizeTextMobile);
            }

            //get initial size for text
            function sizeText40(){
                console.log("size 40");
                $('#olga ').css('font-size',($('#olga').width()*0.3)+'px');
                $('#romanova ').css('font-size',($('#romanova').width()*0.145)+'px');
                // console.log("in resize size is" + $('#github span.title').css('font-size') + " height is "+($('#content').height()*0.5));

                $('#github span.title').css('font-size',($('#content').height()*0.25)+'px');    
                $('#twitter span.title').css('font-size',($('#content').height()*0.25)+'px');    
                $('#soundcloud span.title').css('font-size',($('#content').height()*0.15)+'px');
                $('#linkedin span.title #linked').css('font-size',($('#content').height()*0.22)+'px');    
                $('#linkedin span.title #in').css('font-size',($('#content').height()*0.22)+'px');    
                $('#blog span.title').css('font-size',($('#blog').width()*0.25)+'px');    
                $('#year span.title').css('font-size',($('#year').width()*0.25)+'px');    
                $('#description p').css('font-size',($('#description').width()*0.05675)+'px');    

                $('#email span.title').css('font-size',($('#email').width()*0.1)+'px');    

            }

            //on window resize
            function resizeText40(){
                console.log("resize 40");

                // console.log("in resize ");
                // console.log("in resize size is" + $('#github span.title').css('font-size') + " width is "+($('#content').width()*0.5));
                $('#olga ').css('font-size',($('#olga').width()*0.3)+'px');
                $('#romanova ').css('font-size',($('#romanova').width()*0.145)+'px');    
                $('#github span.title').css('font-size',($('#content').height()*0.25)+'px');    
                $('#twitter span.title').css('font-size',($('#content').height()*0.25)+'px');    
                $('#soundcloud span.title').css('font-size',($('#content').height()*0.15)+'px');    
                $('#linkedin span.title #linked').css('font-size',($('#content').height()*0.22)+'px');    
                $('#linkedin span.title #in').css('font-size',($('#content').height()*0.22)+'px');                 $('#email span.title').css('font-size',($('#content').width()*0.1)+'px');    
                $('#blog span.title').css('font-size',($('#blog').width()*0.25)+'px');    
                $('#year span.title').css('font-size',($('#year').width()*0.25)+'px');    
                $('#description p').css('font-size',($('#description').width()*0.05675)+'px');    

                $('#email span.title').css('font-size',($('#email').width()*0.1)+'px');  
            }

            //get initial size for text
            function sizeTextMobile(){
                console.log("size mobile");

                $('#olga ').css('font-size',($('#olga').width()*0.3)+'px');
                $('#romanova ').css('font-size',($('#romanova').width()*0.14)+'px');
                // console.log("in resize size is" + $('#github span.title').css('font-size') + " height is "+($('#content').height()*0.5));

                $('#github span.title').css('font-size',($('#content').width()*0.2)+'px');    
                $('#twitter span.title').css('font-size',($('#content').width()*0.25)+'px');    
                $('#soundcloud span.title').css('font-size',($('#content').width()*0.1)+'px');
                $('#linkedin span.title #linked').css('font-size',($('#content').width()*0.15)+'px');    
                $('#linkedin span.title #in').css('font-size',($('#content').width()*0.15)+'px');    
                $('#blog span.title').css('font-size',($('#blog').width()*0.2)+'px');    
                $('#year span.title').css('font-size',($('#year').width()*0.2)+'px');    
                $('#description p').css('font-size',($('#description').width()*0.05675)+'px');    

                $('#email span.title').css('font-size',($('#email').width()*0.1)+'px');    

            }

            //on window resize
            function resizeTextMobile(){
                console.log("size mobile");

                // console.log("in resize ");
                // console.log("in resize size is" + $('#github span.title').css('font-size') + " width is "+($('#content').width()*0.5));
                $('#olga ').css('font-size',($('#olga').width()*0.3)+'px');
                $('#romanova ').css('font-size',($('#romanova').width()*0.14)+'px');    
                $('#github span.title').css('font-size',($('#content').width()*0.2)+'px');    
                $('#twitter span.title').css('font-size',($('#content').width()*0.25)+'px');    
                $('#soundcloud span.title').css('font-size',($('#content').width()*0.1)+'px');    
                $('#linkedin span.title #linked').css('font-size',($('#content').width()*0.15)+'px');    
                $('#linkedin span.title #in').css('font-size',($('#content').width()*0.15)+'px');                 
                $('#email span.title').css('font-size',($('#content').width()*0.1)+'px');    
                $('#blog span.title').css('font-size',($('#blog').width()*0.2)+'px');    
                $('#year span.title').css('font-size',($('#year').width()*0.2)+'px');    
                $('#description p').css('font-size',($('#description').width()*0.05675)+'px');    

                $('#email span.title').css('font-size',($('#email').width()*0.1)+'px');  
            }

            return {
                init: init
            };
        })();
        return Resize;
    });