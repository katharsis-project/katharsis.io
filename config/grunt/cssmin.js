module.exports = {
	minify: {
		files: [{
			expand: true,
			cwd: '<%= yeoman.tmp %>/styles/css/',
			src: '**/*.css',
			dest: '<%= yeoman.dist %>/styles/css/',
			ext: '.min.css',
			extDot: 'last'
		}]
	}
};
