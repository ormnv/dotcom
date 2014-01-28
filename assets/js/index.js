/*global require, requirejs, define, Modernizr, BASEPATH */
// sk: http://requirejs.org/docs/api.html#config
// sk: main js file for index (there are fewer modules on that
// page so we only include the ones that we need)
requirejs.config(
	{
		baseUrl: 'assets/js/',
		waitSeconds: 5,
		urlArgs:'',
		paths: {
			'jquery': 'lib/jquery-1.10.2.min',
			'signals': 'lib/signals',
			'fittext' : 'lib/jquery.fittext'
			// 'underscore': 'lib/underscore-min',
			// 'backbone': 'lib/backbone-min'
		},
		shim: {
			// underscore: { exports: '_'},
	        fittext: {
	            deps: ['jquery'],
	  //           exports: 'backbone'
	        }
		}
	}
);

require(
	[
		'signals'
		,'jquery'
		,'app'
		// ,'validate'
		,'fittext'
		,'resize'
		// ,'backbone'
		,'hover'
		// ,'layout'

	],
	function(
		Signal
		,$
		,app
		// ,validate
		,fitext
		// ,backbone
		,resize
		,hover
		,layout
	)
	{
		$( document ).ready( init );

		function init()
		{
			// sk: shared object that all modules can access
			// the signals are used for communication between
			// all modules
			var shared = {
				signals: {
					'openContact'       : new Signal(),
					'closeContact'       : new Signal(),
					'hoverStart'       : new Signal(),
					'hoverStop'        : new Signal(),
					'setSizeMobile'        : new Signal(),
					'setSize40'        : new Signal(),
					'resizeMobile'        : new Signal(),
					'resize40'        : new Signal(),
					'click'             : new Signal()
				}
			};
		app.init(shared);
		hover.init(shared);
		resize.init(shared);
		}
	}
);
