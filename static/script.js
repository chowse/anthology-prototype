

(function($) {
	$.fn.showLightbox = function() {
		var self = this;
		self.addClass('entering');
		setTimeout(function() {
			self.addClass('on').removeClass('entering');
		}, 100);
		return this;
	};
	$.fn.hideLightbox = function() {
		var self = this;
		self.addClass('leaving').removeClass('on');
		setTimeout(function() {
			self.removeClass('leaving');
		}, 400);
		return this;
	};
	
	$.fn.popup = function(popupElem) {
		this.removeAttr('title');
		
		return this.hover(
			function onIn() {
				var self = $(this),
				    offs = self.offset(),
				    w = self.outerWidth(),
				    h = self.outerHeight();
				$(popupElem)
					.offset( { left: (offs.left + w/2), top: (offs.top + h/2) })
					.addClass('visible');
			},
			function onOut() {
				$(popupElem).removeClass('visible');
			}
		);
	};
	
	$(function() {
		$('.tag.html5').popup('#html5-popup');
		$('.tag.css3').popup('#css3-popup');
	});
})(jQuery);
