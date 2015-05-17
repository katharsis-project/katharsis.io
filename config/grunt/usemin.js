// Performs rewrites based on rev and the useminPrepare configuration
module.exports = {
	html: ['<%= paths.dist %>/index.html'],
	css: ['<%= paths.dist %>/styles/{,*/}*.css'],
	options: {
		assetsDirs: ['<%= paths.dist %>', '<%= paths.dist %>/styles', '<%= paths.dist %>/images']
	}
};
