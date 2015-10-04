// jshint unused: false
requirejs.config({
	paths: {
		// jQuery dependencies
		'jquery': 'assets/js/jquery/jquery',
		'highlight': 'assets/js/highlight/highlight',
		'waypoints': 'assets/js/waypoints/waypoints',

		// Angular dependencies
		'angular': 'assets/js/angular/angular',
		'angular-bootstrap': 'assets/js/angular-bootstrap/ui-bootstrap-tpls',
		'angular-ui-router': 'assets/js/angular-ui-router/angular-ui-router',
		'angular-scroll': 'assets/js/angular-scroll/angular-scroll',
		'angular-highlight': 'assets/js/angular-highlight/angular-highlight',
		'angulartics': 'assets/js/angulartics/',

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
		'angulartics/angulartics': ['angular'],
		'angulartics/angulartics-ga': ['angulartics/angulartics'],
		'angulartics/angulartics-scroll': ['angulartics/angulartics','waypoints'],

		'bootstrap': ['jquery'],
		'waypoints': ['jquery']
	},

	priority: [
		'jquery',
		'bootstrap',
		'angular'
	]
});
