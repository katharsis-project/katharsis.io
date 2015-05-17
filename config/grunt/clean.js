// Empties folders to start fresh
module.exports = {
	dist: {
		files: [{
			dot: true,
			src: [
				'.tmp',
				'doc',
				'<%= yeoman.dist %>/*',
				'!<%= yeoman.dist %>/.git*'
			]
		}]
	},
	bower: {
		files: [{
			src: [
				'bower_components',
				'<%= yeoman.app %>/vendor/libs',
				'<%= yeoman.app %>/styles/libs'
			]
		}]
	}
};
