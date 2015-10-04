// Copies remaining files to places other tasks can use
module.exports = {
	default: {
		files: [{
			expand: true,
			dot: true,
			cwd: '<%= paths.dev %>',
			dest: '<%= paths.dist %>',
			src: [
				'favicon.ico',
				'robots.txt',
				'.htaccess',
				'index.html',
				'assets/fonts/**/*',
				'assets/img/**/*',
				'app/start/code/**/*'
			]
		}]
	}
};
