module.exports = function (grunt) {
	'use strict';

	var path = require('path');
	var pkg = require('./package.json');

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Load grunt config automatically
	require('load-grunt-config')(grunt, {
		// Path to task.js files, defaults to grunt dir
		configPath: path.join(process.cwd(), 'config/grunt'),

		data: {
			pkg: pkg,
			app: 'src',
			dist: 'dist',
			tmp: '.tmp'
		},
		// Pass config to load-grunt-tasks.
		loadGruntTasks: {
			config: pkg
		}
	});

	grunt.task.renameTask('bowercopy', 'bower');
	grunt.task.renameTask('ngtemplates', 'templates');
};
