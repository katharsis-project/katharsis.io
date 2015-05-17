module.exports = {
	'serve': [
		'templates',
		'connect:server',
		'watch'
	],

	'dist': [
		'clean:dist',
		'config:production',
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
		'bower'
	]
};

