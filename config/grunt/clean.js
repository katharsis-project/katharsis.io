// Empties folders to start fresh
module.exports = {
	dist: {
		files: [{
			dot: true,
			src: [
				'.tmp',
				'<%= paths.dist %>/*'
			]
		}]
	},
	bower: {
		files: [{
			src: [
				'bower_components',
				'<%= paths.dev %>/assets/ja'
			]
		}]
	}
};
