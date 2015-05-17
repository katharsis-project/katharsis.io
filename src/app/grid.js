(function ($) {
	"use strict";

	// Namespace Grid X = GX
	window.GX = {
		Models: {},
		Views: {},
		Collections: {},
		Router: {}
	};

	// Get Template
	window.template = function (id) {
		if ($('#' + id).length > 0)
			return _.template($('#' + id).html());
		return false;
	};

	// Post Model
	GX.Models.Post = Backbone.Model.extend({
		defaults: {
			id: 0,
			post_type: 'post',
			title: '',
			date: '',
			format: '',
			thumb: '',
			grid_size: 'normal',
			link: '',
			categories: [],
			excerpt: '',
			content: '',
		}
	});

	// List of Post
	GX.Collections.Posts = Backbone.Collection.extend({
		model: GX.Models.Post
	});


	var img_size16x9 = '<img class="size-img s16x9" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAJCAYAAAA7KqwyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRkM1ODU3OTg4MDUxMUU0QTZBOUI2MDUzQ0NENjVBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRkM1ODU3QTg4MDUxMUU0QTZBOUI2MDUzQ0NENjVBOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGQzU4NTc3ODgwNTExRTRBNkE5QjYwNTNDQ0Q2NUE4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGQzU4NTc4ODgwNTExRTRBNkE5QjYwNTNDQ0Q2NUE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+60b9TQAAABhJREFUeNpi/P//PwMlgHHUgFEDgAAgwAD+lBrvy+NcxAAAAABJRU5ErkJggg==">';
	var img_size1x1 = '<img class="size-img s1x1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMkFBNDU3Qzg4MDUxMUU0QTZBOUI2MDUzQ0NENjVBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMkFBNDU3RDg4MDUxMUU0QTZBOUI2MDUzQ0NENjVBOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUyQUE0NTdBODgwNTExRTRBNkE5QjYwNTNDQ0Q2NUE4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUyQUE0NTdCODgwNTExRTRBNkE5QjYwNTNDQ0Q2NUE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WrsRWwAAABBJREFUeNpi+P//PwNAgAEACPwC/tuiTRYAAAAASUVORK5CYII="/>';
	var img_size3x4 = '<img class="size-img s3x4" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAECAYAAABLLYUHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMkFBNDU3ODg4MDUxMUU0QTZBOUI2MDUzQ0NENjVBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMkFBNDU3OTg4MDUxMUU0QTZBOUI2MDUzQ0NENjVBOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGQzU4NTdGODgwNTExRTRBNkE5QjYwNTNDQ0Q2NUE4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGQzU4NTgwODgwNTExRTRBNkE5QjYwNTNDQ0Q2NUE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+AvlK9QAAABdJREFUeNpi/P//PwMMMDEgAdwcgAADAJZuAwXJYZOzAAAAAElFTkSuQmCC"/>';
	var img_size4x3 = '<img class="size-img s4x3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRkM1ODU3RDg4MDUxMUU0QTZBOUI2MDUzQ0NENjVBOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRkM1ODU3RTg4MDUxMUU0QTZBOUI2MDUzQ0NENjVBOCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGQzU4NTdCODgwNTExRTRBNkE5QjYwNTNDQ0Q2NUE4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGQzU4NTdDODgwNTExRTRBNkE5QjYwNTNDQ0Q2NUE4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+H8XvdQAAABdJREFUeNpi/P//PwMyYGJAAxgCAAEGAJM5AwMMWSorAAAAAElFTkSuQmCC"/>';


	// The view of Post
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	GX.Views.Post = Backbone.View.extend({
		initialize: function (options) {
			if (typeof options.tpl !== 'undefined' && template(options.tpl))
				this.template = template(options.tpl);
			else
				this.template = template('tpl-item-style1');

			if (typeof this.model.get('tpl_style') !== 'undefined') {
				if (typeof options.mix !== 'undefined' && options.mix)
					this.template = template(this.model.get('tpl_style'));
			}
		},
		render: function () {
			this.setElement(this.template(this.model.toJSON()));
			return this;
		}
	});


	/* Single Mode */
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	// The view of Post Open State
	GX.Views.SingleView = Backbone.View.extend({
		item: false,
		initialize: function (options) {
			if (typeof options.item !== 'undefined')
				this.item = options.item;
		},
		render: function () {
			var self = this;
			var _model = this.collection.get(this.item.data('id'));
			self.success(_model);
		},
		success: function (_model) {
		},
		render_after: function ($item) {
			$item.find('video').each(function () {
				if (!$(this).parent().hasClass('mejs-mediaelement')) {
					$(this).attr("width", $(this).parent().width())
						.attr("height", parseInt($(this).parent().width() * 270 / 480, 10));

					$(this).mediaelementplayer({
						enableAutosize: true
					});
				}
			});


			$item.find('audio').each(function () {
				if (!$(this).parent().hasClass('mejs-mediaelement')) {
					$(this).mediaelementplayer();
				}
			});


			$item.find('.post-gallery').each(function () {
				var $this = $(this);

				$this.find('.gallery-item').each(function () {
					$(this).append(img_size16x9);
				});
				$this.owlCarousel({
					navigation: true,
					singleItem: true,
					slideSpeed: 300,
					paginationSpeed: 400,
					autoPlay: false
				});
			});
		}
	});

	GX.Views.SingleModal = GX.Views.SingleView.extend({
		template: template('tpl-single-modal'),
		success: function (_model) {
			var self = this;
			var $item = self.item;
			$('#gx-single-modal').remove();

			var singleView = new GX.Views.OpenState({model: _model});

			self.setElement(self.template());
			self.$el.find('.modal-content').html(singleView.render().el);
			self.$el.modal('show');
			var timer = setTimeout(function () {
				clearTimeout(timer);
				self.render_after(self.$el.find('.modal-content'));
			}, 400);


			self.$el.on('hidden.bs.modal', function () {
				$('#gx-single-modal').remove();
			});

			self.$el.find('a.close').on('click', function () {
				self.$el.modal('hide');
			});

			self.$el.find('a.prev').on('click', function () {
				if ($item.prev().hasClass('grid-item')) {
					self.$el.modal('hide');
					$item.prev().trigger('click');
				}
			});

			self.$el.find('a.next').on('click', function () {
				if ($item.next().hasClass('grid-item')) {
					self.$el.modal('hide');
					$item.next().trigger('click');
				}
			});
		}
	});

	GX.Views.SingleOpenGI = GX.Views.SingleView.extend({
		success: function (_model) {
			var self = this;
			var $item = self.item;
			var $parent = self.item.parent();
			$parent.find('.gi-viewport').remove();
			$parent.find('.grid-item').removeClass('open-gi');

			var $fitem = $parent.find('.grid-item').eq(0);

			var $next = $item;
			var $last = $next;
			var item_exist = false;
			for (var i = 0; i < 10; i++) {
				$next = $next.next();
				if ($next.hasClass('grid-item')) {
					$last = $next
					if ($next.offset().left == $fitem.offset().left) {
						item_exist = true;
						break;
					}
				}
			}

			var $cur_elem = $('<div class="gi-viewport"></div>');
			if (item_exist) {
				$next.before($cur_elem);
			}
			else {
				$last.after($cur_elem);
			}

			var singleView = new GX.Views.OpenGI({model: _model});
			$parent.find('.gi-viewport').html(singleView.render().el);
			if ($parent.find('.gi-viewport .entry-media .post-gallery').length > 0)
				$parent.find('.gi-viewport .entry-media').prepend(img_size16x9);
			$parent.find('.gi-viewport').show();
			self.render_after($parent.find('.gi-viewport'));


			// close
			$parent.find('a.close-viewport').on('click', function () {
				$item.removeClass('open-gi');
				$parent.find('.gi-viewport').remove();
			});
			// prev
			$parent.find('a.item-action.prev').on('click', function () {
				var $prev = $item.prev();
				if ($prev.hasClass('grid-item')) {
					$prev.trigger('click');
				}
			});
			// next
			$parent.find('a.item-action.next').on('click', function () {
				var $next = $item.next();
				$next = $next.hasClass('gi-viewport') ? $item.next().next() : $next;
				if ($next.hasClass('grid-item')) {
					$next.trigger('click');
				}
			});

			$item.addClass('open-gi');

			var viewport_top = $parent.find('.gi-viewport').offset().top - 200;
			$('html,body').animate({scrollTop: viewport_top}, 'slow');
		}
	});

	GX.Views.SingleOpenPS = GX.Views.SingleView.extend({
		success: function (_model) {
			var self = this;
			var $item = self.item;
			if ($item.hasClass('opened'))
				return;

			if ($item.find('.expanded').length < 1)
				$item.append('<div class="expanded"></div>');

			var singleView = new GX.Views.OpenState({model: _model});
			$item.find('.expanded').html(singleView.render().el);

			$item.find('.post-action a.prev').on('click', function () {
				if ($item.prev().hasClass('grid-item')) {
					$item.prev().trigger('click');
				}
			});
			$item.find('.post-action a.next').on('click', function () {
				if ($item.next().hasClass('grid-item')) {
					$item.next().trigger('click');
				}
			});
			$item.find('.post-action a.close').on('click', function () {
				$item.removeClass('opened');
				$item.find('.expanded').remove();
				$item.parent().isotope().isotope('layout');
				return false;
			});

			if ($item.find('.expanded img').length > 0) {
				$item.find('.expanded img').load(function () {
					self.pushState();
				});
			}
			else {
				self.pushState();
			}
		},
		pushState: function () {
			var $item = this.item;
			$item.parent().find('.grid-item').each(function () {
				$(this).removeClass('opened');
			});
			$item.addClass('opened');
			$item.parent().find('.grid-item:not(.opened)').each(function () {
				$(this).find('.expanded').html('');
			});
			this.render_after($item.find('.expanded'));
			$item.parent().isotope().isotope('layout');

			if (typeof ($item.offset()) !== 'undefined' && $item.offset().top < $(window).scrollTop()) {
				$('html,body').animate({
					scrollTop: $item.offset().top - 20
				}, 500);
			}
			else if (typeof ($item.offset()) !== 'undefined' && $item.offset().top + $item.height() > $(window).scrollTop() + $(window).height()) {
				var item_bottom = $item.offset().top + $item.height();
				var window_bottom = $(window).scrollTop() + $(window).height();
				if ($item.height() > $(window).height()) {
					$('html,body').animate({
						scrollTop: $item.offset().top
					}, 500);
				}
				else {
					$('html,body').animate({
						scrollTop: $(window).scrollTop() + (item_bottom - window_bottom) + 10
					}, 500);
				}
			}
		}
	});

	GX.Views.OpenGI = Backbone.View.extend({
		template: template('tpl-single-open-gi'),
		render: function () {
			this.setElement(this.template(this.model.toJSON()));
			return this;
		}
	});

	GX.Views.OpenState = Backbone.View.extend({
		template: template('tpl-single-open-state'),
		render: function () {
			this.setElement(this.template(this.model.toJSON()));
			return this;
		}
	});

	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */


	// View of Grid Posts
	/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
	// The main view of Grid view
	GX.Views.GridView = Backbone.View.extend({
		constructor: function () {
			this.currentURL = window.location.href;
			this.item_style = '';
			this.open_state = '';
			this.firstLoad = true;

			Backbone.View.apply(this, arguments);
		},
		initialize: function (options) {
			this.item_style = typeof options.item_style !== 'undefined' ? options.item_style : '';
			this.open_state = typeof options.open_state !== 'undefined' ? options.open_state : '';

			if (this.$el.parent().hasClass('infinite'))
				$(window).scroll({currentTarget: this}, this.checkScroll);

			if (this.$el.parent().hasClass('auto-flip'))
				this.auto_flip(false);
		},
		render_before: function () {
		},
		render_after: function () {
		},
		render: function () {
			var self = this;

			this.render_before();

			this.loadItems();

			this.render_after();

			return this;
		},
		loadItems: function () {
			var self = this;
			var mix_styles = self.$el.parent().hasClass('mixing') ? true : false;
			var index = 0;
			this.collection.each(function (model) {
				var postView = new GX.Views.Post({model: model, tpl: self.item_style, mix: mix_styles});
				index++;

				if (this.firstLoad) {
					this.$el.append(postView.render().el);
				}
				else {
					var $el = postView.render().$el;
					$el.css({
						'-webkit-animation-delay': (index * 0.07) + "s",
						'-moz-animation-delay': (index * 0.07) + "s",
						'-ms-animation-delay': (index * 0.07) + "s",
						'-o-animation-delay': (index * 0.07) + "s",
						'animation-delay': (index * 0.07) + "s"
					});

					$el.addClass('animated fadeInUp');
					this.$el.append($el);
					this.$el.isotope('appended', $el);
				}

			}, this);
			this.firstLoad = false;

			this.loadItems_after();
		},
		loadItems_after: function () {
		},
		checkScroll: function (event) {
			var self = event.data.currentTarget;

			if (self.$el.parent().offset().top + self.$el.parent().height() < $(window).scrollTop() + $(window).height() - 50) {
				if (self.collection.hasNextPage()) {
					self.collection.nextPage();
					self.loadItems();
				}
			}
		},
		events: {
			'click a.popup': 'onClickPopup',
			'click a.post-permalink': 'onPermalink',
			'click div.grid-item': 'onItemClick',
		},
		onItemClick: function (event) {

		},
		onPermalink: function (event) {
			var $item = $(event.currentTarget).parents('.grid-item');
			if (this.open_state == 'open-gi')
				this.openGI($item);
			else if (this.open_state == 'push-state')
				this.openPS($item);
			else if (this.open_state == 'modal')
				this.openModal($item);
			else
				return true;
			return false;
		},
		openGI: function ($item) {
			var openGIView = new GX.Views.SingleOpenGI({item: $item, collection: this.collection});
			openGIView.render();
		},
		openPS: function ($item) {
			var pushStateView = new GX.Views.SingleOpenPS({item: $item, collection: this.collection});
			pushStateView.render();
		},
		openModal: function ($item) {
			var modalView = new GX.Views.SingleModal({item: $item, collection: this.collection});
			modalView.render();
		},
		onClickPopup: function (event) {
			var self = this;
			var $item = $(event.currentTarget).parents('.grid-item');
			var _model = self.collection.get($item.data('id'));
			var $tmp = $('<div class="entry-media white-popup" />').append(_model.get('media'));

			if ($tmp.find('img').length > 0) {
				$.magnificPopup.open({
					items: {
						src: $tmp.find('img').attr('src')
					},
					type: 'image',
					mainClass: 'mfp-zoom-in'
				});
			}
			else {
				$.magnificPopup.open({
					items: {
						src: $tmp,
						type: 'inline'
					},
					mainClass: 'mfp-zoom-in'
				});

				var $item = $('.entry-media.white-popup');
				$item.find('video').each(function () {
					if (!$(this).parent().hasClass('mejs-mediaelement')) {
						$(this).attr("width", $(this).parent().width())
							.attr("height", parseInt($(this).parent().width() * 270 / 480, 10));

						$(this).mediaelementplayer({
							enableAutosize: true
						});
					}
				});


				$item.find('audio').each(function () {
					if (!$(this).parent().hasClass('mejs-mediaelement')) {
						$(this).mediaelementplayer();
					}
				});


				$item.find('.post-gallery').each(function () {
					var $this = $(this);

					$this.find('.gallery-item').each(function () {
						$(this).append(img_size16x9);
					});
					$this.owlCarousel({
						navigation: true,
						singleItem: true,
						slideSpeed: 300,
						paginationSpeed: 400,
						autoPlay: false
					});
				});
			}

			return false;
		},
		isMobile: function () {
			if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
				return true;
			} else {
				return false;
			}
		},
		auto_flip: function (start) {
			var self = this;

			if (start) {
				var _model = self.collection.at(0);

				var flip_index = self.$el.parent().attr('data-flip-index');
				if (typeof flip_index !== 'undefined') {
					var ci = parseInt(self.$el.parent().attr('data-flip-index'), 10);
					if (ci + 1 > _model.get('auto_flip').items.length - 1) {
						ci = 0;
					}
					else {
						ci = ci + 1;
					}
					self.$el.parent().attr('data-flip-index', ci);
				}
				else {
					self.$el.parent().attr('data-flip-index', '0');
				}

				var ci = parseInt(self.$el.parent().attr('data-flip-index'), 10);

				var uri = _model.get('auto_flip').items[ci];
				var lnk = _model.get('auto_flip').links[ci];

				self.$el.find('.grid-item').each(function (index) {
					var $item = $(this);
					if ($item.hasClass('flipped')) {
						$item.find('.front').css('background-image', 'url(' + uri.replace('*', index + 1) + ')');
						$item.find('.front a').attr('href', lnk);
					}
					else {
						$item.find('.back').css('background-image', 'url(' + uri.replace('*', index + 1) + ')');
						$item.find('.back a').attr('href', lnk);
					}

					var timer = setTimeout(function () {
						clearTimeout(timer);
						$item.toggleClass('flipped');
					}, index * 80);
				});
			}

			var timer = setTimeout(function () {
				clearTimeout(timer);
				self.auto_flip(true);
			}, 6000);
		},
	});


	// Grid X
	GX.Views.GridX = GX.Views.GridView.extend({
		initialize: function (options) {
			var self = this;
			GX.Views.GridView.prototype.initialize.call(this, options);
			$(window).on("resize", function () {
				self.onResize(self);
			});
		},
		render_after: function () {
			var self = this;
			this.$el.isotope({
				itemSelector: '.grid-item',
				masonry: {
					columnWidth: 1
				}
			});


			this.$el.parent().find('.grid-pager').on('click', 'button', function () {
				var filterValue = $(this).attr('data-filter');
				self.$el.isotope({filter: filterValue});

				self.$el.parent().find('.grid-pager button').removeClass('active');
				$(this).addClass('active');
			});
		},
		onItemClick: function (event) {
			$(event.currentTarget).find('.post-permalink').trigger('click');
		},
		onResize: function (self) {
			var $grid = self.$el.parent();
			var s_w = parseInt($grid.data('size-width'), 10);
			var s_h = parseInt($grid.data('size-height'), 10);
			var s_g = parseInt($grid.data('size-gutter'), 10);
			s_g = s_g % 2 == 0 ? s_g : parseInt(s_g / 2, 10) * 2;

			if (s_w > 0 && s_h > 0 && s_g > -1) {
				var g_cols = parseInt($grid.width() / (s_w + s_g), 10);
				$grid.find('.grid-viewport').width(g_cols * (s_w + s_g));
				$grid.find('.grid-viewport').css({
					'margin-left': 'auto',
					'margin-right': 'auto'
				});

			}
			self.$el.isotope('layout');
		}
	});


	// Grid Fit Row
	GX.Views.GridStyle = GX.Views.GridView.extend({
		initialize: function (options) {
			GX.Views.GridView.prototype.initialize.call(this, options);
		},
		render_after: function () {
			var self = this;

			var self = this;
			// this.$el.isotope({
			//     itemSelector: '.grid-item',
			//     masonry: {
			//         columnWidth: self.$el.find('.grid-item')[0]
			//     }
			// });

			this.$el.parent().find('.grid-pager').on('click', 'button', function () {
				var filterValue = $(this).attr('data-filter');
				self.$el.isotope({filter: filterValue});

				self.$el.parent().find('.grid-pager button').removeClass('active');
				$(this).addClass('active');
			});

		},
		loadItems: function () {
			var self = this;
			var mix_styles = self.$el.parent().hasClass('mixing') ? true : false;
			var index = 0;

			this.collection.each(function (model) {
				index++;

				var postView = new GX.Views.Post({model: model, tpl: self.item_style, mix: mix_styles});
				var $item = postView.render().$el;

				var item_size_img = img_size1x1;
				switch (self.$el.parent().data('item-size')) {
					case '16x9':
						item_size_img = img_size16x9;
						break;
					case '3x4':
						item_size_img = img_size3x4;
						break;
					case '4x3':
						item_size_img = img_size4x3;
						break;
					default:
						break;
				}
				item_size_img = '<div class="item-size">' + item_size_img + '</div>';
				$item.find('div.item-size').remove();
				$item.find('.grid-item-entry').prepend(item_size_img);

				if (this.firstLoad) {
					this.$el.append($item);
				}
				else {
					var $el = $item;
					$el.css({
						'-webkit-animation-delay': (index * 0.07) + "s",
						'-moz-animation-delay': (index * 0.07) + "s",
						'-ms-animation-delay': (index * 0.07) + "s",
						'-o-animation-delay': (index * 0.07) + "s",
						'animation-delay': (index * 0.07) + "s"
					});
					$el.addClass('animated fadeInUp');
					this.$el.append($el);
				}

			}, this);

			this.firstLoad = false;

		},
		onItemClick: function (event) {
			$(event.currentTarget).find('.post-permalink').trigger('click');
		}
	});


	// Masonry Grid
	GX.Views.GridMasonry = GX.Views.GridView.extend({
		initialize: function (options) {
			GX.Views.GridView.prototype.initialize.call(this, options);
		},
		render_after: function () {
			var self = this;
			self.$el.imagesLoaded(function () {
				self.$el.isotope({
					itemSelector: '.grid-item',
					masonry: {
						columnWidth: self.$el.find('.grid-item')[0]
					}
				});
			});

			this.$el.parent().find('.grid-pager').on('click', 'button', function () {
				var filterValue = $(this).attr('data-filter');
				self.$el.isotope({filter: filterValue});

				self.$el.parent().find('.grid-pager button').removeClass('active');
				$(this).addClass('active');
			});
		},
		loadItems: function () {
			var self = this;
			var index = 0;
			this.collection.each(function (model) {
				var postView = new GX.Views.Post({model: model, tpl: self.item_style});
				index++;

				var $el = postView.render().$el;
				var col = parseInt(self.$el.parent().data('column'), 10);
				$el.addClass('col-xs-12 col-sm-6 col-md-' + parseInt(12 / col, 10));

				if (this.firstLoad) {
					this.$el.append($el);
				}
				else {
					$el.css({
						'-webkit-animation-delay': (index * 0.07) + "s",
						'-moz-animation-delay': (index * 0.07) + "s",
						'-ms-animation-delay': (index * 0.07) + "s",
						'-o-animation-delay': (index * 0.07) + "s",
						'animation-delay': (index * 0.07) + "s"
					});

					$el.addClass('animated fadeInUp');
					$el.imagesLoaded(function () {
						self.$el.append($el);
						self.$el.isotope('appended', $el);
					});
				}

			}, this);
			this.firstLoad = false;

			this.loadItems_after();
		},
		loadItems_after: function () {
			var self = this;
			var $grid = this.$el;

			$grid.find('video').each(function () {
				if (!$(this).parent().hasClass('mejs-mediaelement')) {
					$(this).attr("width", $(this).parent().width())
						.attr("height", parseInt($(this).parent().width() * 270 / 480, 10));

					$(this).mediaelementplayer({
						enableAutosize: true
					});
				}
			});


			$grid.find('audio').each(function () {
				if (!$(this).parent().hasClass('mejs-mediaelement')) {
					$(this).mediaelementplayer();
				}
			});


			$grid.find('.entry-format-gallery').each(function () {
				var $this = $(this);

				if ($this.find('.owl-item').length < 1) {
					$this.find('.post-gallery .gallery-item').each(function () {
						$(this).append(img_size16x9);
					});
					$this.find('.post-gallery').owlCarousel({
						navigation: true,
						singleItem: true,
						slideSpeed: 300,
						paginationSpeed: 400,
						autoPlay: false
					});
				}
			});

		}
	});


	$(window).load(function () {

		var fix_autoflip_size = function () {
			$('.grid-container.auto-flip > div').css('width', '100%');
			$('.grid-container.auto-flip > div').width(parseInt($('.grid-container.auto-flip').outerWidth() / parseInt($('.grid-container.auto-flip').data('column'), 10), 10) * parseInt($('.grid-container.auto-flip').data('column'), 10));
		};

		fix_autoflip_size();
		$(window).resize(function () {
			fix_autoflip_size();
		});

		$('.grid-container').each(function () {
			var $grid = $(this);
			var gid = $grid.attr('id');
			var data = $grid.find('.grid-data').text();
			var json = $.parseJSON(data);
			var per_page = typeof ($grid.data('pager')) !== 'undefined' && parseInt($grid.data('pager'), 10) > 0 ? parseInt($grid.data('pager'), 10) : 20;

			var item_style = $grid.data('item-style');
			var open_state = $grid.data('open-state');

			if ($grid.hasClass('grid-x')) {
				var s_w = parseInt($grid.data('size-width'), 10);
				var s_h = parseInt($grid.data('size-height'), 10);
				var s_g = parseInt($grid.data('size-gutter'), 10);
				s_g = s_g % 2 == 0 ? s_g : parseInt(s_g / 2, 10) * 2;

				if (s_w > 0 && s_h > 0 && s_g > -1) {
					var g_cols = parseInt($grid.width() / (s_w + s_g), 10);
					$grid.find('.grid-viewport').width(g_cols * (s_w + s_g));
					var g_vml = ($grid.width() - $grid.find('.grid-viewport').width()) / 2 - s_g / 2;
					$grid.find('.grid-viewport').css('margin-left', g_vml + 'px');
					var gstyle = '<style type="text/css"> \
                                    #' + gid + ' { padding-left:' + (s_g / 2) + 'px; padding-right:' + (s_g / 2) + 'px; } \
                                    #' + gid + ' .grid-viewport{ margin-left: -' + (s_g / 2) + 'px; margin-right: -' + (s_g / 2) + 'px;} \
                                    #' + gid + ' .grid-item{ width:' + s_w + 'px; margin-left:' + (s_g / 2) + 'px; margin-right:' + (s_g / 2) + 'px; margin-bottom:' + s_g + 'px; } \
                                    #' + gid + ' .grid-item.horizontal{ width:' + (s_w * 2 + s_g) + 'px; } \
                                    #' + gid + ' .grid-item.vertical{ width:' + s_w + 'px; } \
                                    #' + gid + ' .grid-item.large{ width:' + (s_w * 2 + s_g) + 'px; } \
                                    #' + gid + ' .grid-item:not(.opened){ height:' + s_h + 'px; } \
                                    #' + gid + ' .grid-item.horizontal:not(.opened){ height:' + s_h + 'px; } \
                                    #' + gid + ' .grid-item.vertical:not(.opened){ height:' + (s_h * 2 + s_g) + 'px; } \
                                    #' + gid + ' .grid-item.large:not(.opened){ height:' + (s_h * 2 + s_g) + 'px; } \
                                    #' + gid + ' .grid-item.opened{ width:' + (s_w * 3 + s_g * 2) + 'px; min-height:' + (s_h * 2 + s_g) + 'px; } \
                                    #' + gid + ' .grid-item.opened .expanded{ min-height:' + (s_h * 2 + s_g) + 'px; } \
                                  </style>';
					$('head').append(gstyle);
				}
			}
			else if ($grid.hasClass('grid-masonry')) {
				$grid.addClass('container-fluid');

				var col = parseInt($grid.data('column'), 10);
				var gut = parseInt($grid.data('size-gutter'), 10);
				gut = gut % 2 == 0 ? gut : parseInt(gut / 2, 10) * 2;

				if (col > 0 && gut > -1) {
					var w_p = (100 / col).toFixed(4);
					var row_margin = gut / 2;
					var gstyle = '<style type="text/css"> \
                                    #' + gid + ' { padding-left:' + gut + 'px; padding-right:' + gut + 'px; } \
                                    #' + gid + ' .grid-viewport{ margin-left: -' + row_margin + 'px; margin-right: -' + row_margin + 'px;} \
                                    #' + gid + ' .grid-item{ padding-left:' + gut / 2 + 'px; padding-right:' + gut / 2 + 'px; margin-bottom:' + gut + 'px; } \
                                  </style>';
					$('head').append(gstyle);
				}
			}
			else if ($grid.hasClass('grid-style')) {
				$grid.addClass('container-fluid');

				var col = parseInt($grid.data('column'), 10);
				var gut = parseInt($grid.data('size-gutter'), 10);
				gut = gut % 2 == 0 ? gut : parseInt(gut / 2, 10) * 2;

				if (col > 0 && gut > -1) {
					var w_p = (100 / col).toFixed(4);
					var row_margin = gut / 2 == 0 ? 1 : gut / 2;
					var gstyle = '<style type="text/css"> \
                                    #' + gid + ' { padding-left:' + gut + 'px; padding-right:' + gut + 'px; } \
                                    #' + gid + ' .grid-viewport{ margin-left:-' + row_margin + 'px; margin-right:-' + row_margin + 'px; } \
                                    #' + gid + ' .grid-item{ width:' + w_p + '%; padding-left:' + gut / 2 + 'px; padding-right:' + gut / 2 + 'px; margin-bottom:' + gut + 'px; } \
                                  </style>';
					$('head').append(gstyle);
				}
			}

			if (typeof json.posts !== 'undefined') {
				var postsCollection = new GX.Collections.Posts(json.posts);
				var paginated = new PaginatedCollection(postsCollection, {perPage: per_page});
				var args = {
					collection: paginated,
					el: $grid.find('.grid-viewport'),
					open_state: open_state,
					item_style: item_style
				};

				var postsView = null;
				if ($grid.hasClass('grid-masonry')) {
					postsView = new GX.Views.GridMasonry(args);
				}
				else if ($grid.hasClass('grid-style')) {
					postsView = new GX.Views.GridStyle(args);
				}
				else {
					postsView = new GX.Views.GridX(args);
				}

				$grid.find('.grid-viewport').replaceWith(postsView.render().el);
				$grid.append('<div class="clearfix"></div>');
			}
		});

	});


})(jQuery);
