(function() {
	
	// Generic functionality used throughout the site
	
	// Interaction instruction for "work" section
	//
	var _instruction = ("createTouch" in document) ? "Tap on" : "Hover over";
	$("#instruction").html(_instruction);
	
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
		$("header a, footer a, #specialties .icon > div, #scroll-top, #about-content a, .social span, .submit-btn, .work-block .sample, .work-block .sample .links a").mouseable();
	});
	
})();