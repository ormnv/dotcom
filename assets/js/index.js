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
			'signals': 'lib/signals'
		},
		shim: {
		}
	}
);

require(
	[
		'signals'
		,'jquery'
		,'app'
		,'resize'
		,'hover'

	],
	function(
		Signal
		,$
		,app
		,resize
		,hover
		,layout
	)
	{
		$( document ).ready( init );

		function init()
		{

			var shared = {
				signals: {
					'hoverStart'       : new Signal(),
					'hoverStop'        : new Signal(),
					'setSizeMobile'        : new Signal(),
					'setSize40'        : new Signal(),
					'resizeMobile'        : new Signal(),
					'resize40'        : new Signal(),
				}
			};
		app.init(shared);
		hover.init(shared);
		resize.init(shared);
		}
	}
);
