define(['angular'], function (ng) {
	'use strict';

	var module = ng.module('app.docs', []);

	module.config(function ($stateProvider) {
		$stateProvider
			.state('app.docs', {
				url: '/docs',
				views: {
					'content@app': {
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
