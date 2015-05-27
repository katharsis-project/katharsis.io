define(['angular', 'angular-scroll'], function (ng) {
	'use strict';

	var module = ng.module('app.start', ['duScroll']);

	module.config(function ($stateProvider) {
		$stateProvider
			.state('app.start', {
				url: '/start',
				views: {
					content: {
						templateUrl: 'app/start/views/start.html'
					}
				}
			});
	});

	module.run(function ($log) {
		$log.debug('Initialized module');
	});

	return module;
});
