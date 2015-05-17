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


		// active menu
		var split_pathname = window.location.pathname.split('/');
		var pathname = split_pathname[split_pathname.length - 1];
		$('ul.main-menu li a').each(function () {
			var $this = $(this);
			$this.parent().removeClass('active');
		});
		$('ul.main-menu').each(function () {
			var $menu = $(this);
			$menu.find('li a').each(function () {
				var $this = $(this);
				if ($this.attr('href').indexOf(pathname) > -1 && $menu.find('li.active').length < 1) {
					$this.parents('li').addClass('active');
				}
			});
		});


		// Background video on ipad
		if (detect_mobile()) {
			$('.background > video').each(function () {
				$(this).remove();
			});
		}


		// Contact form
		$('form[data-toggle="validator"]').each(function () {
			$(this).validate({
				submitHandler: function (form) {
					$(form).submit(function (e) {
						$(form).find('.alert').remove();
						$(this).find('button').before('<div class="alert alert-info" role="alert" style="display:none;">Sending...</div>');
						$(this).find('.alert').slideDown();

						$.post($(this).attr('action'), $(this).serialize(), function (data) {
							$(form).find('.alert').html(data);
							var timer = setTimeout(function () {
								clearTimeout(timer);
								$(form).find('.alert').slideUp();
							}, 2000);
						});
						e.preventDefault();
					});
				}
			});
		});


		// Fullscreen menu
		$('header').find('a.nav-main-trigger').on('click', function () {
			var $nav_trigger = $(this);
			$(this).find('span').toggleClass('is-clicked');

			if ($(this).find('span').hasClass('is-clicked')) {
				$('#fullscreen-overlay').remove();
				$('body').append('<div id="fullscreen-overlay"></div>');
				var $inner_table = $('<span class="inner-table"><span class="inner-row"></span></span>');
				$inner_table.find('.inner-row').html($nav_trigger.parents('header').find('ul.main-menu').clone().attr('class', ''));

				$('#fullscreen-overlay')
					.html($inner_table)
					.addClass('visible')
					.fadeIn('fast');


				$('#fullscreen-overlay').find('.inner-row > ul > li').each(function () {
					var $li = $(this);

					$li.find('> a').on('click', function () {
						$li.siblings().find('>ul').each(function () {
							$(this).slideUp();
						});
						if ($li.find('> ul').length > 0 && $li.find('> ul').css('display') == 'none') {
							$li.find('> ul').slideToggle();
							return false;
						}
					});

					$li.find('ul li a').on('click', function () {
						if ($(this).parent().find('> ul').length > 0 && $(this).parent().find('> ul').css('display') == 'none') {
							$(this).parent().find('> ul').slideDown();
							return false;
						}
					});
				});


				$('body').addClass('fullscreen-overlay');

				$(window).resize(function () {
					if ($(window).width() > 767 && $('body').hasClass('fullscreen-overlay')) {
						$('header').find('a.nav-main-trigger').trigger('click');
					}
				});
			}
			else {
				$('body').removeClass('fullscreen-overlay');
				$('#fullscreen-overlay').fadeOut('fast');
			}
		});


		// search
		$('.header-search-form a').each(function () {
			$(this).on('click', function () {
				var $this = $(this);
				var $header = $this.parents('header');
				var search_form = window.template('tpl-header-search');

				$header.addClass('on-search');
				$header.append(search_form);

				$header.find('.search-field').focus();

				$header.find('.close-search').on('click', function () {
					$(this).parents('.search-template').remove();
					$header.removeClass('on-search');
				});

			});
		});


		// Set class and attributes on menu and dropdown menu
		$('body:not(.header-left-side) ul.navbar-nav li').each(function () {
			if ($(this).children("ul").length) {
				$(this).addClass('dropdown');
				$(this).find('>a').addClass('dropdown-toggle');//.attr('data-toggle', 'dropdown');
				$(this).find('>ul').addClass('dropdown-menu');
			}
		});


		// left side menu
		if ($('body').hasClass('header-left-side')) {
			$('#header nav').attr('class', 'left-side-nav');
			$('#header .left-side-nav').find('ul.main-menu').attr('class', 'left-side-menu');

			$('body.header-left-side ul.left-side-menu li').each(function () {
				if ($(this).find('ul').length > 0)
					$(this).addClass('has-children');

				$(this).hover(
					function () {
						$(this).find('>ul').stop().slideDown('fast');
					},
					function () {
						$(this).find('>ul').stop().slideUp('fast');
					}
				);
			});

			$('.navbar-header').append($('.nav-main-trigger').clone());
			$('.navbar-header .nav-main-trigger').click(function () {
				$('header').toggleClass('opened');
				$('.navbar-header .nav-main-trigger span').toggleClass('is-clicked');
			});
		}


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

		// Allowing fixed nav active section identifier
		$('body').scrollspy({target: '#affix_nav'});

		// background image
		$('[data-image]').each(function () {
			$(this).css('background-image', 'url(' + $(this).data('image') + ')');
		});

		// background color
		$('[data-background]').each(function () {
			$(this).css('background-color', $(this).data('background'));
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


		// testimonials slider
		$(".testimonials-slider").owlCarousel({
			items: 1,
			singleItem: true,
			pagination: true
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
			var ms_layout = 'fillwidth';

			ms_layout = $('.top-slider').hasClass('fullscreen') ? 'fullscreen' : ms_layout;
			if ($('body').hasClass('header-left-side') && $('.top-slider').hasClass('fullscreen')) {
				ms_layout = 'fillwidth';
				ms_width = $('.top-slider').width();
				ms_height = $(window).height();
			}

			$('.top-slider').find('> .master-slider').masterslider({
				width: ms_width,
				height: ms_height,
				space: 0,
				loop: true,
				view: 'basic',
				layout: ms_layout,
				fullscreenMargin: 0,
				speed: 20,
				overPause: true,
				autoplay: true,
				controls: {
					arrows: {autohide: false},
					bullets: {}
				}
			});
		}


	});

})(jQuery);
