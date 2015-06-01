define(['angular', 'angular-scroll','angular-highlight'], function (ng) {
	'use strict';

	var module = ng.module('app.docs', ['duScroll', 'hljs']);

	module.config(function ($stateProvider) {
		$stateProvider
			.state('app.docs', {
				url: '/docs',
				views: {
					content: {
						templateUrl: 'app/docs/views/docs.html'
					}
				}
			});
	});

	module.run(function ($log) {
		$log.debug('Initialized module');
	});

	return module;
});
