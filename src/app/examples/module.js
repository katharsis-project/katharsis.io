define(['angular', 'angular-scroll', 'angular-highlight'], function (ng) {
	'use strict';

	var module = ng.module('app.examples', ['duScroll', 'hljs']);

	module.config(function ($stateProvider) {
		$stateProvider
			.state('app.examples', {
				url: '/examples',
				views: {
					content: {
						templateUrl: 'app/examples/views/examples.html'
					}
				}
			});
	});

	module.run(function ($log) {
		$log.debug('Initialized module examples');
	});

	return module;
});
