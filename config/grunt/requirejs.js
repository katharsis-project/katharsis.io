module.exports = function () {
	return {
		default: {
			options: {
				baseUrl: '<%= paths.dev %>/',
				optimize: 'uglify2',
				generateSourceMaps: true,
				preserveLicenseComments: false,
				useStrict: true,
				out: '<%= paths.dist %>/assets/js/main.min.js',
				mainConfigFile: '<%= paths.dev %>/require.conf.js',
				findNestedDependencies: true,
				removeCombined: true,
				optimizeAllPluginResources: true,
				replaceRequireScript: [{
					files: ['<%= paths.dist %>/index.html'],
					module: 'main'
				}],
				name: 'assets/js/almond/almond',
				uglify2: {
					mangle: false
				},
				include: ['main'],
				wrap: true
			}
		}
	};
};
