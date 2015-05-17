// Empties folders to start fresh
module.exports = {
	dist: {
		files: [{
			dot: true,
			src: [
				'.tmp',
				'doc',
				'<%= paths.dist %>/*',
				'!<%= paths.dist %>/.git*'
			]
		}]
	},
	bower: {
		files: [{
			src: [
				'bower_components',
				'<%= paths.dev %>/vendor/libs',
				'<%= paths.dev %>/styles/libs'
			]
		}]
	}
};
