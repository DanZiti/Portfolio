(function() {
	
	// Controls parallax image scrolling for "Philly banner"
	//
	drz.parallax = function() {
		var scrolled = $(window).scrollTop();
		$("#philly").css("top", (scrolled * 0.18) - 70 + "px");
	};
	
	var isiPad = navigator.userAgent.match(/iPad/i) != null;
	
	if (!isiPad) {
		
		$(window).scroll(function() {
			drz.parallax();
		});
		
	} // End isiPad check
	
})();