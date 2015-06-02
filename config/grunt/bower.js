// Automatically inject Bower components into the app
module.exports = {
	js: {
		options: {
			destPrefix: 'src/assets/js/'
		},
		files: {
			'waypoints/waypoints.js': 'waypoints/waypoints.js',
			'angular-scroll/angular-scroll.js': 'angular-scroll/angular-scroll.js',
			'owl-carousel/owl-carousel.js': 'owl-carusel/owl-carousel/owl.carousel.js',
			'almond/almond.js': 'almond/almond.js',
			'angular/angular.js': 'angular/angular.js',
			'angular-bootstrap/ui-bootstrap.js': 'angular-bootstrap/ui-bootstrap.js',
			'angular-bootstrap/ui-bootstrap-tpls.js': 'angular-bootstrap/ui-bootstrap-tpls.js',
			'angular-ui-router/angular-ui-router.js': 'angular-ui-router/release/angular-ui-router.js',
			'bootstrap/bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
			'magnific-popup/magnific-popup.js': 'magnific-popup/dist/jquery.magnific-popup.js',
			'jquery/jquery.js': 'jquery/dist/jquery.js',
			'highlight/highlight.js': 'highlightjs/highlight.pack.js',
			'angular-highlight/angular-highlight.js':'angular-highlightjs/angular-highlightjs.js',
			'requirejs-domready/requirejs-domready.js': 'requirejs-domready/domReady.js',
			'angulartics/angulartics-scroll.js': 'angulartics/src/angulartics-scroll.js',
			'angulartics/angulartics-ga.js': 'angulartics/src/angulartics-ga.js',
			'angulartics/angulartics.js': 'angulartics/src/angulartics.js'
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
			'highlight/darkula.css': 'highlightjs/styles/obsidian.css'
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
