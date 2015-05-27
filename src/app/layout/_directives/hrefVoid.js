define(['app/layout/module'], function (module) {
	'use strict';

	function hrefVoid($log) {
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			link: function (scope, element) {
				element.attr('href','#');
				element
					.on('click', function (e) {
						e.stopPropagation();
					});

				$log.debug('Initiated linking function');
			}
		};
	}

	module.directive('hrefVoid', hrefVoid);
});
