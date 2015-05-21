define([
	'app/layout/module',
	'masterslider'
], function (module) {
	'use strict';

	function masterSlider($log) {
		$log.debug('Initiated directive');

		return {
			restrict: 'C',
			link: function (scope, element) {
				var ms_width = element.find('.container').width();

				element.masterslider({
					width: ms_width,
					height: 600,
					loop: false,
					mouse: false,
					swipe: false,
					view: 'parallaxMask',
					layout: 'fullwidth',
					speed: 20,
					keyboard: true
				});

				$log.debug('Initiated linking function');
			}
		};
	}

	module.directive('masterSlider', masterSlider);
});
