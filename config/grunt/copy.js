// Copies remaining files to places other tasks can use
module.exports = {
	default: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= paths.dev %>',
			dest: '<%= paths.dist %>',
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
			dest: '<%= paths.dist %>/images',
			src: ['generated/*']
		}]
	}
};
