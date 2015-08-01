define([
	'angular',
	'angular-ui-router'
], function (ng) {
	'use strict';

	var module = ng.module('app.home', ['ui.router']);

	module.config(function ($stateProvider) {
		$stateProvider.state('app.home', {
			url: '/',
			views: {
				content: {
					templateUrl: 'app/home/views/home.html',
					controller: function ($scope, $window) {
						ng.element($window).bind('scroll', function () {
							$scope.topOffset = $window.pageYOffset;
							$scope.$apply();
						});
					}
				}
			}
		});
	});

	module.run(function ($log) {
		$log.debug('Initialized module');
	});

	return module;
});
