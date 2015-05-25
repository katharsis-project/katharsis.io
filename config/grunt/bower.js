// Automatically inject Bower components into the app
module.exports = {
	js: {
		options: {
			destPrefix: 'src/assets/js/'
		},
		files: {
			'waypoints/waypoints.js': 'waypoints/lib/jquery.waypoints.js',
			'angular-scroll/angular-scroll.js': 'angular-scroll/angular-scroll.js',
			'owl-carousel/owl-carousel.js': 'owl-carusel/owl-carousel/owl.carousel.js',
			'almond/almond.js': 'almond/almond.js',
			'angular/angular.js': 'angular/angular.js',
			'angular-bootstrap/ui-bootstrap.js': 'angular-bootstrap/ui-bootstrap.js',
			'angular-bootstrap/ui-bootstrap-tpls.js': 'angular-bootstrap/ui-bootstrap-tpls.js',
			'angular-ui-router/angular-ui-router.js': 'angular-ui-router/release/angular-ui-router.js',
			'bootstrap/bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
			'prettify/prettify.js': 'google-code-prettify/bin/prettify.min.js',
			'prettify/run-prettify.js': 'google-code-prettify/bin/run_prettify.min.js',
			'magnific-popup/magnific-popup.js': 'magnific-popup/dist/jquery.magnific-popup.js',
			'jquery/jquery.js': 'jquery/dist/jquery.js',
			'requirejs-domready/requirejs-domready.js': 'requirejs-domready/domReady.js'
		}
	},
	require: {
		options: {
			destPrefix: 'src'
		},
		files: {
			'require.js': 'requirejs/require.js'
		}
	},

	css: {
		options: {
			destPrefix: 'src/assets/css/'
		},
		files: {
			'owl-carousel/owl-carousel.css': 'owl-carusel/owl-carousel/owl.carousel.css',
			'magnific-popup/magnific-popup.css': 'magnific-popup/dist/magnific-popup.css',
			'animate.css/animate.css': 'animate.css/animate.css',
			'prettify/prettify.css': 'google-code-prettify/bin/prettify.min.css'
		}
	},
	less: {
		options: {
			destPrefix: 'src/assets/less/'
		},
		files: {
			'bootstrap': 'bootstrap/less'
		}
	},
	fonts: {
		options: {
			destPrefix: 'src/assets/fonts/'
		},
		files: {
			'glyphicons': 'bootstrap/fonts/'
		}
	}
};
