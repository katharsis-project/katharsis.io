module.exports = {
	minify: {
		files: [{
			expand: true,
			cwd: '<%= paths.dev %>/styles/css/',
			src: '**/*.css',
			dest: '<%= paths.dist %>/styles/css/',
			ext: '.min.css',
			extDot: 'last'
		}]
	}
};
