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
	
	// Submit the contact form
	//
	var _form = document.getElementById("contact-form");
	
	_form.onsubmit = function() {
		alert("Hey there, thanks for submitting: I'll be in touch soon!");
	};
	
	// Create mouseable states
	//
	$(window).load(function() {
		$("header a, footer a, #specialties .icon > div, #scroll-top, #about-content a, .social span, .submit-btn, .work-block .sample .links a").mouseable();
	});
	
	// Scroll back to the top of the page
	//
	function scrollToTop() {
		
		var scrollHeight = window.scrollY;
		var scrollStep = Math.PI / (400 / 15); // Duration = 400ms
		var cosParameter = scrollHeight / 2;
		
		var scrollCount = 0;
		var scrollMargin;
		
		requestAnimationFrame(step);
		
		function step() {
			
			setTimeout(function() {
				
				if (window.scrollY != 0) {
					
					requestAnimationFrame(step);
					
					scrollCount = scrollCount + 1;
					scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
					
					$(window).scrollTop(scrollHeight - scrollMargin);
				}
				
			}, 15);
			
		};
	};
	
	$("#scroll-top").on(drz.interaction, function() {
		scrollToTop();
	});
	
})();