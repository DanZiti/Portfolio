(function() {
	
	// Controls parallax image in the top-right
	//
	drz.parallax = function() {
		var scrolled = $(window).scrollTop();
		$("#parallax").css("top", (scrolled * 0.18) - 70 + "px");
	};
	
	var isMobile = navigator.userAgent.match(/Android|webOS|iPad|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i) !== null;
	
	if (!isMobile) {
		
		$(window).scroll(function() {
			
			if (window.innerWidth >= 1000) {
				drz.parallax();
			}
			
			else {
				$("#parallax").css("top", "0");
			}
			
		});
		
	}
	
})();