define(['app/layout/module'], function (module) {
	'use strict';

	function hrefVoid($log) {
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			link: function (scope, element) {
				element
					.attr('href', '#')
					.on('click', function (e) {
						e.preventDefault();
						e.stopPropagation();
					});

				$log.debug('Initiated linking function');
			}
		};
	}

	module.directive('hrefVoid', hrefVoid);
});
