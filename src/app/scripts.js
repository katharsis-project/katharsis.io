(function ($) {
	'use strict';

	var detect_mobile = function () {
		if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
			return true;
		} else {
			return false;
		}
	};

	// Fixing white screen on touch device
	if (detect_mobile()) {
		var cstyle = '<style type="text/css"> \
                        section, footer{ -webkit-overflow-scrolling: touch; } \
                        section *, footer *{ position: relative; -webkit-transform: translate3d(0,0,0); } \
                        .affix{ position: static !important; } \
                      </style>';
		$('head').append(cstyle);
	}

	$(document).ready(function () {

		if (detect_mobile())
			$(window).off('.affix');

		// Fixed menu
		if ($('body').hasClass('header-fixed-top')) {
			$(window).scroll(function () {
				if ($(window).scrollTop() > 200) {
					$('header').addClass('sticky animated fadeInDown');
				}
				else {
					$('header').removeClass('sticky animated fadeInDown');
				}
			});
		}


		// Show submenu when click on parent menu on touch device
		$('ul.main-menu li a').click(function () {
			var $this = $(this);
			if (detect_mobile()) {
				if ($this.parent().find('ul').length > 0 && $this.parent().find('> ul').css('display') == 'none') {
					$this.parent().find('> ul').slideDown();
					return false;
				}
			}
		});


		// Check exists retina logo
		if (window.devicePixelRatio > 1) {
			$('header .navbar-header').each(function () {
				if ($(this).find('a.navbar-brand.retina').length < 1)
					$(this).find('.navbar-brand').addClass('retina');
			});
		}


		// Set class and attributes on menu and dropdown menu
		$('body:not(.header-left-side) ul.navbar-nav li').each(function () {
			if ($(this).children("ul").length) {
				$(this).addClass('dropdown');
				$(this).find('>a').addClass('dropdown-toggle');//.attr('data-toggle', 'dropdown');
				$(this).find('>ul').addClass('dropdown-menu');
			}
		});


		// Back to top button execution
		$('.back-to-top,.gototop').click(function () {
			$('html,body').animate({scrollTop: 0}, 'slow');
			return false;
		});
		$(window).scroll(function () {
			if ($(window).scrollTop() > 1000) {
				$('.back-to-top').addClass('visible');
			}
			else {
				$('.back-to-top').removeClass('visible');
			}
		});

		// Affix navigation sliding
		$('#affix_nav a').click(function () {
			var $target = $($(this).attr('href'));
			$('html,body').animate({scrollTop: $target.offset().top}, 'slow');
			return false;
		});

		//spacer
		$('.space').each(function () {
			$(this).height($(this).data('height'));
		});


		// Fullwidth section
		var fullscreen_func = function () {
			$('.fullwidth-section, .fullscreen-section').each(function () {
				var $this = $(this);
				var $wrapper = $('body > .wrapper');

				$this.css('margin-left', '0px');

				var margin_left = $this.offset().left - $wrapper.offset().left;
				var _width = $wrapper.width();

				if ($('body').hasClass('header-left-side')) {
					_width = $(window).width() - 260;
					margin_left = $this.offset().left - $('section.content').offset().left;

					if ($(window).width() < 992)
						_width = $(window).width() - 50;
				}

				$this.css({
					'margin-left': -margin_left,
					'width': _width + 'px'
				});

				if ($this.hasClass('fullscreen-section'))
					$this.height($(window).height());
			});
		};
		fullscreen_func();
		$(window).resize(function () {
			fullscreen_func();
		});


		/*  Animation with Waypoints
		 ================================================== */
		var animate_start = function ($this) {
			$this.find('[data-animate]').each(function (i) {
				var $item = $(this);
				var animation = $item.data("animate");
				$item.addClass('animate');

				$item.waypoint(function () {
						if ($(this.element).hasClass('animate')) {
							$item.css({
								'-webkit-animation-delay': (i * 0.1) + "s",
								'-moz-animation-delay': (i * 0.1) + "s",
								'-ms-animation-delay': (i * 0.1) + "s",
								'-o-animation-delay': (i * 0.1) + "s",
								'animation-delay': (i * 0.1) + "s"
							});
							$item.removeClass('animate').addClass('animated ' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
								$(this).removeClass(animation + ' animated');
							});
						}
					},
					{
						// offset: '88%',
						offset: 'bottom-in-view',
						triggerOnce: true
					});
			});
		};
		var timer = setTimeout(function () {
			clearTimeout(timer);

			$('.content, .fullwidth-section, .fullscreen-section, .page-title').each(function () {
				var $this = $(this);
				animate_start($this);
			});
		}, 1000);


		$('.gallery:not(.no-lightbox), .grid-gallery:not(.no-lightbox)').each(function () {
			var $this = $(this);
			$this.magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery: {
					enabled: true
				}
			});
		});
		$('a.lightbox').each(function () {
			var $this = $(this);
			var type = 'iframe';
			var exts = $this.attr('href').split('.');
			var ext = exts[exts.length - 1].toLowerCase();
			if (ext == 'png' || ext == 'jpg' || ext == 'jpeg' || ext == 'gif' || ext == 'bmp')
				type = 'image';
			$this.magnificPopup({
				type: type
			});
		});


		// top slider
		if ($('.top-slider').length > 0) {
			var ms_width = $('section.content > .container').width();
			var ms_height = typeof ($('.top-slider').data('height')) !== 'undefined' && parseInt($('.top-slider').data('height'), 10) > 100 ? parseInt($('.top-slider').data('height'), 10) : 500;

			$('.top-slider').find('> .master-slider').masterslider({
				width: ms_width,
				height: ms_height,
				space: 0,
				loop: true,
				view: 'parallaxMask',
				layout: 'fillwidth',
				fullscreenMargin: 0,
				speed: 20,
				overPause: true,
				autoplay: true
			});
		}


	});

})(jQuery);
