// Copies remaining files to places other tasks can use
module.exports = {
	default: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= yeoman.app %>',
			dest: '<%= yeoman.dist %>',
			src: [
				'*.{ico,png,txt}',
				'app/require.js',
				'.htaccess',
				'index.html',
				'404.html',
				'images/**/*',
				'styles/fonts/**/*',
				'styles/img/**/*',
				'styles/sounds/**/*'
			]
		}, {
			expand: true,
			cwd: '.tmp/images',
			dest: '<%= yeoman.dist %>/images',
			src: ['generated/*']
		}]
	}
};
