module.exports = {
	dist: {
		files: {
			src: [
				'<%= paths.dist %>/app/{,*/}*.js',
				'<%= paths.dist %>/styles/{,*/}*.css'
			]
		}
	}
};
