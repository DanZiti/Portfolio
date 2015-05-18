(function() {
	
	// Generic functionality used throughout the site
	
	// Jump back to the top of the page
	//
	$("#scroll-top").on(drz.interaction, function() {
		window.location.href = "index.php";
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