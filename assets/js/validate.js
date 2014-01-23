define([
    'jquery'
    ,'signals'
    ], function(){
        var Validate = (function(){
            function init(shared){
                console.log("in validate init");
                // this.shared = shared;
                // shared.signals.validateForm.add(validateForm);
            $("#contact-form").on("submit",function(e) {
            e.preventDefault();
            console.log("send clicked");
            validateForm();
            });
            }

			function validateForm()
			{
				console.log("in validate form");
				var numericExpression = /^[0-9]+$/;
				var name_check=document.forms[0].elements[0].value;
				var x=document.forms[0].elements[1].value;
				var y=document.forms[0].elements[2].value;
				var atpos=x.indexOf("@");
				var dotpos=x.lastIndexOf(".");
				if(name_check.match(numericExpression))
				        {
				            alert("Not a Valid Name");
				            name_check.focus();
				        }
				if (y===null || y==="")
				  {
				  alert("You can't send Blank Message");
				  return false;
				  }
				if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length)
				  {
				  alert("Not a valid e-mail address");
				  return false;
				  }

			}

            return {
                init: init
            };
        })();
        return Validate;
    });




