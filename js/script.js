(function() {
	
	// Generic functionality used throughout the site
	
	// Jump back to the top of the page
	//
	$("#scroll-top").on(drz.interaction, function() {
		window.location.href = "index.php";
	});
	
	// Create mouseable states
	//
	$(window).load(function() {
		$("header a, footer a, #specialties .icon > div, #scroll-top").mouseable();
	});
	
})();