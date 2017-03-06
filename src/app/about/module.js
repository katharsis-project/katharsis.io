define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('app.about', []);

	module.config(function ($stateProvider) {
		$stateProvider
			.state('app.about', {
				url: '/about',
				views: {
					content: {
						templateUrl: 'app/about/views/about.html'
					}
				}
			});
	});

	module.run(function ($log) {
		$log.debug('Initialized module');
	});

	return module;
});
