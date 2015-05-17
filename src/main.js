// Defer AngularJS bootstrap
window.name = 'NG_DEFER_BOOTSTRAP!';

requirejs(['require.conf'], function () {
	'use strict';

	requirejs([
		'require',
		'angular',
		'domReady',
		'bootstrap',
		'_includes',
		'app'
	], function (require, ng, domReady) {
		domReady(function () {
			ng.resumeBootstrap();
		});
	});
});
