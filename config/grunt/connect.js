module.exports = function () {
	'use strict';

	var modRewrite = require('connect-modrewrite'),
		middleware = function (connect, options) {

			var middlewares = [];

			middlewares.push(modRewrite([
				'^[^\\.]*$ /index.html [L]'
			]));

			if (!Array.isArray(options.base)) {
				options.base = [options.base];
			}

			var directory = options.directory || options.base[options.base.length - 1];

			options.base.forEach(function (base) {
				// Serve static files.
				middlewares.push(connect.static(base));
			});

			// Make directory browse-able.
			middlewares.push(connect.directory(directory));

			return middlewares;
		};

	return {
		server: {
			options: {
				hostname: 'localhost',
				port: 9000,
				base: '<%= paths.dev %>',
				open: true,
				livereload: true,
				useAvailablePort: true,
				middleware: middleware
			}
		},
		dist: {
			options: {
				hostname: 'localhost',
				port: 9040,
				base: '<%= paths.dist %>',
				open: true,
				keepalive: true,
				middleware: middleware
			}
		}
	};
};
