// Performs rewrites based on rev and the useminPrepare configuration
module.exports = {
	html: ['<%= paths.dist %>/index.html'],
	css: ['<%= paths.dist %>/assets/css/*.css'],
	js: ['<%= paths.dist %>/assets/js/*.js'],
	options: {
		assetsDirs: ['<%= paths.dist %>/']
	}
};
