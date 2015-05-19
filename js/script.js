(function() {
	
	// Generic functionality used throughout the site
	
	// Primary page navigation
	//
	$(".nav-about").on(drz.interaction, function() {
		drz.navigate("about");
	});
	
	$(".nav-work").on(drz.interaction, function() {
		drz.navigate("work");
	});
	
	$(".nav-contact").on(drz.interaction, function() {
		drz.navigate("contact");
	});
	
	// Jump back to the top of the page
	//
	$("#scroll-top").on(drz.interaction, function() {
		$(window).scrollTop(0);
	});
	
	// Submit the contact form
	//
	var _form = document.getElementById("contact-form");
	
	_form.onsubmit = function() {
		alert("Hey there, thanks for submitting: I'll be in touch soon!");
	};
	
	// Create mouseable states
	//
	$(window).load(function() {
		$("header a, footer a, #specialties .icon > div, #scroll-top, #about-content a, .social span, .submit-btn").mouseable();
	});
	
})();