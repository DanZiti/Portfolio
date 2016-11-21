var services = (function(w, d, $, pub) {
	
	pub.interaction = function() {
		return 'ontouchend' in d ? 'touchend' : 'click';
	};
	
	pub.isMobile = function() {
		return navigator.userAgent.match(/Android|webOS|iPad|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i) !== null;
	};
		
	pub.navigate = function(anchor) {
		var anchor = $('#' + anchor + '-content').offset('top');
		$(w).scrollTop(anchor);
		return this;
	};
	
	pub.activate = function(element) {
		$(element).addClass('ACTIVE');
		return this;
	};
	
	pub.deactivate = function(element) {
		$(element).removeClass('ACTIVE');
		return this;
	};
	
	pub.show = function(elem, toggle) {
		$(elem).addClass('SHOW');
		return this;
	};
	
	pub.hide = function(elem) {
		$(elem).removeClass('SHOW');
		return this;
	};
	
	pub.select = function(element, toggle) {
		$(element)[toggle ? 'toggleClass' : 'addClass']('SELECTED');
		return this;
	};
	
	pub.deselect = function(element) {
		$(element).removeClass('SELECTED');
		return this;
	};
	
	pub.parallax = function() {
		var scrolled = $(w).scrollTop();
		return $('#parallax').css('top', (scrolled * 0.18) - 70 + 'px');
	};
	
	pub.scrollToTop = function() {
		var isIE = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;
		if (isIE) {
			$(w).scrollTop(0); // The animation here causes headaches in IE (of course), so let's just skip it...
		} else {
			var scrollHeight = w.scrollY;
			var scrollStep = Math.PI / (420 / 15); // Duration = 420ms... Setting the duration at 400ms caused strange repeating-animation errors
			var cosParameter = scrollHeight / 2;
			var scrollCount = 0;
			var scrollMargin;
			var step = function() {
				setTimeout(function() {
					if (w.scrollY !== 0) {
						requestAnimationFrame(step);
						scrollCount = scrollCount + 1;
						scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
						$(w).scrollTop(scrollHeight - scrollMargin);
					}
				}, 15);
			};
			requestAnimationFrame(step);
		}
	};
	
	return pub;
	
})(window, document, Grindstone, {});