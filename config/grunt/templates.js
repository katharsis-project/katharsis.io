module.exports = {
	default: {
		files: [{
			filter: 'isFile',
			src: ['app/**/*.html', 'assets/code/**/*'],
			cwd: '<%= paths.dev %>',
			dest: '<%= paths.dev %>/app/templates/module.js'
		}],
		options: {
			bootstrap: function (module, script) {
				'use strict';
				script = script.replace('\'use strict\';', '');
				return 'define([\'angular\'], function(angular) { /*jshint quotmark: false*/ "use strict"; return angular.module("app.templates",[]).run(function ($templateCache) {' + script + ' });});';
			}
		}
	}
}
;
