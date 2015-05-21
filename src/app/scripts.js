(function ($) {
	'use strict';

	//var detect_mobile = function () {
	//	if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
	//		return true;
	//	} else {
	//		return false;
	//	}
	//};
    //
	//// Fixing white screen on touch device
	//if (detect_mobile()) {
	//	var cstyle = '<style type="text/css"> \
     //                   section, footer{ -webkit-overflow-scrolling: touch; } \
     //                   section *, footer *{ position: relative; -webkit-transform: translate3d(0,0,0); } \
     //                   .affix{ position: static !important; } \
     //                 </style>';
	//	$('head').append(cstyle);
	//}

	$(document).ready(function () {

		//if (detect_mobile())
		//	$(window).off('.affix');

		// Fixed menu
		//if ($('body').hasClass('header-fixed-top')) {
		//	$(window).scroll(function () {
		//		if ($(window).scrollTop() > 200) {
		//			$('header').addClass('sticky animated fadeInDown');
		//		}
		//		else {
		//			$('header').removeClass('sticky animated fadeInDown');
		//		}
		//	});
		//}


		// Show submenu when click on parent menu on touch device
		//$('ul.main-menu li a').click(function () {
		//	var $this = $(this);
		//	if (detect_mobile()) {
		//		if ($this.parent().find('ul').length > 0 && $this.parent().find('> ul').css('display') == 'none') {
		//			$this.parent().find('> ul').slideDown();
		//			return false;
		//		}
		//	}
		//});


		// Check exists retina logo
		//if (window.devicePixelRatio > 1) {
		//	$('header .navbar-header').each(function () {
		//		if ($(this).find('a.navbar-brand.retina').length < 1)
		//			$(this).find('.navbar-brand').addClass('retina');
		//	});
		//}


		// Set class and attributes on menu and dropdown menu
		//$('body:not(.header-left-side) ul.navbar-nav li').each(function () {
		//	if ($(this).children("ul").length) {
		//		$(this).addClass('dropdown');
		//		$(this).find('>a').addClass('dropdown-toggle');//.attr('data-toggle', 'dropdown');
		//		$(this).find('>ul').addClass('dropdown-menu');
		//	}
		//});


		//// Affix navigation sliding
		//$('#affix_nav a').click(function () {
		//	var $target = $($(this).attr('href'));
		//	$('html,body').animate({scrollTop: $target.offset().top}, 'slow');
		//	return false;
		//});

		//spacer
		//$('.space').each(function () {
		//	$(this).height($(this).data('height'));
		//});


		//$('.gallery:not(.no-lightbox), .grid-gallery:not(.no-lightbox)').each(function () {
		//	var $this = $(this);
		//	$this.magnificPopup({
		//		delegate: 'a',
		//		type: 'image',
		//		gallery: {
		//			enabled: true
		//		}
		//	});
		//});
		//

		//$('a.lightbox').each(function () {
		//	var $this = $(this);
		//	var type = 'iframe';
		//	var exts = $this.attr('href').split('.');
		//	var ext = exts[exts.length - 1].toLowerCase();
		//	if (ext == 'png' || ext == 'jpg' || ext == 'jpeg' || ext == 'gif' || ext == 'bmp')
		//		type = 'image';
		//	$this.magnificPopup({
		//		type: type
		//	});
		//});

	});

})(jQuery);
