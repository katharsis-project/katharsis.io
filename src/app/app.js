define([
	'angular',
	'angular-ui-router',
	'angular-bootstrap'
], function (ng) {
	'use strict';

	var app = ng.module('app', [
		'ui.bootstrap',
		'ui.router',

		// Modules
		'app.templates',
		'app.layout',
		'app.home',
		'app.docs',
		'app.start'
	]);

	app.config(function ($locationProvider) {
		$locationProvider.html5Mode(true);
	});

	app.run(function ($rootScope, $state, $log) {
		$rootScope.appReady = true;

		$log.debug('Started application');
	});

	return app;
});
