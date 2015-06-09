module.exports = {
	'serve': [
		'templates',
		'connect:server',
		'watch'
	],

	'dist': [
		'clean:dist',
		'useminPrepare',
		'templates',
		'concat',
		'cssmin',
		'copy',
		'requirejs',
		'rev',
		'usemin',
		'clean:server'
	],

	'default': [
		'newer:jshint:app',
		'test',
		'dist'
	],

	install: [
		'clean:bower',
		'bower',
		'less'
	]
};

