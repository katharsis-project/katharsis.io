module.exports = {
	minify: {
		files: [{
			expand: true,
			cwd: '<%= paths.tmp %>/assets/css/',
			src: '**/*.css',
			dest: '<%= paths.dist %>/assets/css/',
			ext: '.min.css',
			extDot: 'last'
		}]
	}
};
