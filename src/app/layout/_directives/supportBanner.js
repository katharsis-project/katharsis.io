define([
	'app/layout/module'
], function (module) {
	'use strict';

	function supportBanner($log) {

		$log.debug('Initiated directive');
		return {
			restrict: 'E',
			templateUrl: 'app/layout/_directives/supportBanner.html',
			controllerAs: 'vm',
			controller: function ($element) {
				var vm = this;

				vm.close = function () {
					$element.hide();
				};
			}
		};
	}

	module.directive('supportBanner', supportBanner);
});
