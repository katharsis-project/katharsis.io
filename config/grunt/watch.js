// Watches files for changes and runs tasks based on the changed files
module.exports = {
	options: {
		livereload: true
	},
	js: {
		files: '<%= paths.dev %>/**/*.js'
		//tasks: 'newer:jshint:app'
	},
	html: {
		files: '<%= paths.dev %>/**/*.html',
		tasks: 'templates'
	},
	less: {
		files: '<%= paths.dev %>/assets/less/**/*.less',
		tasks: 'less'
	},
	gruntfile: {
		files: ['Gruntfile.js', 'grunt/*.js'],
		options: {
			reload: true
		}
	}
};
