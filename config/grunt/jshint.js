// Make sure code styles are up to par and there are no obvious mistakes
module.exports = {
	options: {
		reporters: [require('jshint-stylish')]
	},
	app: {
		options: {
			jshintrc: '.jshintrc',
			ignores: [
				'<%= paths.dev %>/require.js'
			]
		},
		src: [
			'Gruntfile.js',
			'<%= paths.dev %>/app'
		]
	}
};
