define([
	'app/examples/module'
], function (module) {
	'use strict';

	/**
	 * Directive fixes column layout when floating scroll is applied
	 * @class scrollfixColumn
	 * @memberOf app.examples.templates.fields
	 *
	 * @example
	 * <article class="col-sm-6">
	 *   <div scrollfix-column></div>
	 * </article>
	 *
	 * @param $log {Object} Logging service
	 * @param $document {Object} Document DOM reference
	 * @return {{restrict: string, link: Function}}
	 */
	function scrollfixColumn($log, $document) {
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			link: function (scope, element) {
				element.width(element.parent().width());

				$document.on('scroll', function () {
					if ($document.scrollTop() < 100) {
						$('.affix').css({'position': 'relative', 'top': '-65px'});
					} else {
						$('.affix').css({'position': 'fixed', 'top': '-25px'});
					}
				});
				$log.debug('Called linking function');
			}
		};
	}

	module.directive('scrollfixColumn', scrollfixColumn);
});
