define([
	'angular',
	'angular-ui-router'
], function (ng) {
	'use strict';

	var module = ng.module('app.layout', ['ui.router']);

	module.constant('layoutModuleConf', {
		MODULE_PATH: 'app/layout'
	});

	module.config(function ($stateProvider, $urlRouterProvider) {
		$stateProvider.state('app', {
			abstract: true,
			views: {
				layout: {
					templateUrl: 'app/layout/views/layout.html'
				}
			}
		});

		$urlRouterProvider.otherwise(function ($injector) {
			var $state = $injector.get('$state');
			$state.go('app.home');
		});
	});


	module.run(function ($log) {
		$log.debug('Initialized module');
	});

	return module;
});
