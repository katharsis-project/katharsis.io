define(['angular', 'angular-scroll','angular-highlight'], function (ng) {
	'use strict';

	var module = ng.module('app.docs', ['duScroll', 'hljs']);

	module.config(function ($stateProvider) {
		$stateProvider
			.state('app.docs', {
				url: '/docs'
			})

			.state('app.docs.general', {
				url: '/general',
				views: {
					'content@app': {
						templateUrl: 'app/docs/views/general.html'
					}
				}
			})

			.state('app.docs.apiModelling', {
				url: '/general',
				views: {
					'content@app': {
						templateUrl: 'app/docs/views/apiModelling.html'
					}
				}
			})

			.state('app.docs.requestHandling', {
				url: '/general',
				views: {
					'content@app': {
						templateUrl: 'app/docs/views/requestHandling.html'
					}
				}
			});
	});

	module.run(function ($log) {
		$log.debug('Initialized module');
	});

	return module;
});
