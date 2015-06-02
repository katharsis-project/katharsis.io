// jshint unused: false
requirejs.config({
	paths: {
		// jQuery dependencies
		'jquery': 'assets/js/jquery/jquery',
		'jquery-easing': 'assets/js/masterslider/jquery.easing.min',
		'masterslider': 'assets/js/masterslider/masterslider',
		'highlight': 'assets/js/highlight/highlight',

		// Angular dependencies
		'angular': 'assets/js/angular/angular',
		'angular-bootstrap': 'assets/js/angular-bootstrap/ui-bootstrap-tpls',
		'angular-ui-router': 'assets/js/angular-ui-router/angular-ui-router',
		'angular-scroll': 'assets/js/angular-scroll/angular-scroll',
		'angular-highlight': 'assets/js/angular-highlight/angular-highlight',

		// Require
		'domReady': 'assets/js/requirejs-domready/requirejs-domready',

		// Bootstrap dependencies
		'bootstrap': 'assets/js/bootstrap/bootstrap'
	},

	shim: {
		// Angular dependencies
		'angular': {
			'exports': 'angular', deps: ['jquery']
		},
		'angular-bootstrap': ['angular', 'bootstrap'],
		'angular-ui-router': ['angular'],
		'angular-scroll': ['angular'],
		'angular-highlight': ['angular', 'highlight'],

		// Bootstrap dependencies
		'bootstrap': ['jquery'],

		'jquery-easing': ['jquery'],
		'masterslider': ['jquery', 'jquery-easing'],
		'grid': ['jquery']
	},

	priority: [
		'jquery',
		'bootstrap',
		'angular'
	]
});
