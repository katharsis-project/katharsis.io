define([
	'app/docs/module'
], function (module) {
	'use strict';

	/**
	 * Directive fixes column layout when floating scroll is applied
	 * Only works when applied with uiScrollfix directive.
	 * @class scrollfixColumn
	 * @memberOf app.docs.templates.fields
	 *
	 * @example
	 * <article class="col-sm-6">
	 *   <div scrollfix-column ui-scrollfix="+100"></div>
	 * </article>
	 *
	 * @param $log {Object} Logging service
	 * @return {{restrict: string, link: Function}}
	 */
	function scrollfixColumn($log) {
		$log.debug('Initiated directive');

		return {
			restrict: 'A',
			link: function (scope, element) {
				element.width(element.parent().width());

				$log.debug('Called linking function');
			}
		};
	}

	module.directive('scrollfixColumn', scrollfixColumn);
});
