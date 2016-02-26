define([
	'angular',
	'angulartics/angulartics',
	'angulartics/angulartics-ga',
	'angulartics/angulartics-scroll',
	'waypoints',
	'angular-ui-router',
	'angular-bootstrap'
], function (ng) {
	'use strict';

	var app = ng.module('app', [
		// Google Analytics
		'angulartics',
		'angulartics.google.analytics',
		'angulartics.scroll',

		// Angular UI
		'ui.bootstrap',
		'ui.router',

		// Modules
		'app.templates',
		'app.layout',
		'app.home',
		'app.docs',
		'app.start',
		'app.about',
		'app.examples'
	]);

	app.config(function ($locationProvider, hljsServiceProvider, $logProvider) {
		$logProvider.debugEnabled(false);
		$locationProvider.html5Mode(true);
		hljsServiceProvider.setOptions({
			tabReplace: '  '
		});
	});

	app.run(function ($rootScope, $state, $log) {
		$rootScope.appReady = true;

		$log.debug('Started application');
	});

	return app;
});
