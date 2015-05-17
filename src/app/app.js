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
		'app.home'
	]);


	app.run(function ($rootScope, $state, $log) {
		$rootScope.appReady = true;

		$log.debug('Started application');
	});

	return app;
});
