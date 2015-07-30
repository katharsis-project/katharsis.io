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
				var ms_width = element.find('.container').width() + 100;

				element.masterslider({
					width: ms_width,
					height: 550,
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
