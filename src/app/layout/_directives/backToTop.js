define([
	'app/layout/module'
], function (module) {
	'use strict';

	function backToTop($log) {

		$log.debug('Initiated directive');
		return {
			restrict: 'EA',
			template: '<span class="back-to-top"></span>',
			link: function (scope, element) {
				$(element).click(function () {
					$('html,body').animate({scrollTop: 0}, 'slow');
					return false;
				});

				$(window).scroll(function () {
					if ($(window).scrollTop() > 1000) {
						$(element).addClass('visible');
					}
					else {
						$(element).removeClass('visible');
					}
				});

				$log.debug('Initiated linking function');
			}
		};
	}

	module.directive('backToTop', backToTop);
});
