module.exports = function () {
	return {
		default: {
			options: {
				baseUrl: 'src/app',
				optimize: 'uglify2',
				generateSourceMaps: true,
				preserveLicenseComments: false,
				useStrict: true,
				out: '<%= yeoman.dist %>/app/main.js',
				mainConfigFile: '<%= yeoman.app %>/app/require.conf.js',
				findNestedDependencies: true,
				removeCombined: true,
				optimizeAllPluginResources: true,
				replaceRequireScript: [{
					files: ['<%= yeoman.dist %>/index.html'],
					module: 'main'
				}],
				name: '../vendor/libs/almond/almond',
				uglify2: {
					mangle: false
				},
				include: ['main'],
				wrap: true
			}
		}
	};
};
