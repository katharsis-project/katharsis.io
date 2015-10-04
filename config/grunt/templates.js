module.exports = {
	default: {
		files: [{
			src: 'app/**/*.html',
			cwd: '<%= paths.dev %>',
			dest: '<%= paths.dev %>/app/templates/module.js'
		}],
		options: {
			source: function (code) {
				'use strict';
				// Remove all whitespaces
				code = String(code).replace(/\t+|\n+|\r+/g, '');
				return code;
			},
			bootstrap: function (module, script) {
				'use strict';
				script = script.replace('\'use strict\';', '');
				return 'define([\'angular\'], function(angular) { /*jshint quotmark: false*/ "use strict"; return angular.module("app.templates",[]).run(function ($templateCache) {' + script + ' });});';
			},
			htmlmin: {
				removeCommentsFromCDATA: true,
				removeComments: true,
				collapseBooleanAttributes: true,
				collapseWhitespace: true,
				removeAttributeQuotes: true,
				removeEmptyAttributes: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true
			}
		}
	}
}
;
