/*global require, requirejs, define, Modernizr, BASEPATH */
// sk: http://requirejs.org/docs/api.html#config
// sk: main js file for index (there are fewer modules on that
// page so we only include the ones that we need)
requirejs.config(
	{
		baseUrl: 'js/',
		waitSeconds: 5,
		urlArgs:"",
		paths: {
			'jquery': 'lib/jquery',
			'signals': 'lib/signals',
		},
		shim: {
			// 'prettyphoto': { deps: [ 'jquery' ] }
		}
	}
);

require(
	[
		'lib/signals',
		'lib/jquery'
	],
	function(
		Signal,
		$
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
					'open'             : new Signal(),
				}
			};

			
			// carousel.init(shared);
			// Modal.init(shared);
			// tracking.init(shared);
	  //   	videojs.options.flash.swf = "scripts/lib/video-js.swf";
			// var videosrc = $('#currentVideo').attr('data-src');
			// var currentVideo = videojs("currentVideo", {"width":420 , "height":420, "controls":false});
			// contentSwapper.init(shared, currentVideo);
			// videoModule.init(shared, currentVideo);
			// videoControl.init(shared, currentVideo);
			// currentVideo.src(videosrc);

			// sk: initialize all main modules. add shared object.
			// mycomponent.init( shared );
		}
	}
);
