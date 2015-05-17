define([
	'angular',
	'angular-ui-router',
	'angular-bootstrap',
	'angular-templates'
], function (ng) {
	'use strict';

	var app = ng.module('app', [
		'ui.bootstrap',
		'ui.router',

		// App modules
		'app.templates'
	]);


	app.run(function ($rootScope, $state, $log) {
		$rootScope.appReady = true;

		$log.debug('Starting application');
	});

	return app;
});
