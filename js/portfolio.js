(function(w, d, $, sv) {
	
	var state = {};
	state.dom = {};
	
	// gather elements
	var collectDOM = function() {
		state.dom.instruction = d.getElementById('instruction');
		state.dom.parallaxImage = d.getElementById('parallax');
		state.dom.responsiveMenuButton = d.getElementById('responsive-menu-button');
		state.dom.$headerNavList = $('header nav ul');
		state.dom.$headerNavListItems = $('header nav ul li');
		state.dom.headerNav = d.querySelector('header nav');
		state.dom.contactForm = d.forms['contact-form'];
		state.dom.contactFormErrorMessage = d.getElementById('contact-form-error-message');
		state.dom.formSubmissionOverlay = d.getElementById('successful-form-submission-overlay');
		state.dom.scrollTopButton = d.getElementById('scroll-top');
	};
	
	// control 'instruction' for samples section
	var updateInstruction = function() {
		var instruction = sv.interaction() === 'touchend' ? 'Tap on' : 'Hover over';
		return $(state.dom.instruction).html(instruction);
	};
	
	// control parallax image
	var controlParallax = function() {
		if (!sv.isMobile()) {
			$(w).scroll(function() {
				if (w.innerWidth >= 1000) {
					sv.parallax();
				} else if (w.innerWidth < 1000) {
					$(state.dom.parallaxImage).css('top', '0');
				}
			});
			
		}
	};
	
	// primary navigation
	var controlNavigation = function() {
		var navArray = ['about', 'work', 'contact'];
		navArray.forEach(function(item) {
			$('#nav-' + item).on(sv.interaction(), function() {
				sv.navigate(item);
			});
		});
	};
	
	// responsive/mobile navigation controls
	var mobileNavigation = function() {
		
		$(state.dom.responsiveMenuButton).on(sv.interaction(), function() {
			sv.select(this, true);
			if ($(state.dom.headerNav).height() === 0) {
				var newHeight = state.dom.$headerNavList.height();
				$(state.dom.headerNav).height(newHeight);
			} else {
				$(state.dom.headerNav).height(0);
			}
		});
		
		state.dom.$headerNavListItems.on(sv.interaction(), function() {
			sv.deselect(state.dom.responsiveMenuButton);
			$(state.dom.headerNav).height(0);
		});
		
		var debounceResponsiveMenuButton = $.debounce(function() {
			if (w.innerWidth > 420) {
				sv.deselect(state.dom.responsiveMenuButton);
				$(state.dom.headerNav).height(0);
			}
		}, 300);
		
		$(w).resize(debounceResponsiveMenuButton);
	};
	
	// work experience hovers
	var controlSamples = function() {
		
		var samples = $('.work-block .sample');
		
		samples.on('touchend', function() {
			sv.deactivate('.work-block .sample');
		});
		
		// desktop
		samples.on('mouseover', function() {
			sv.activate(this);
		});
		
		samples.on('mouseleave', function() {
			sv.deactivate(this);
		});
		
		// mobile
		samples.on('touchend', function() {
			var self = this;
			sv.activate(self);
			setTimeout(function() {
				sv.deactivate(self);
			}, 8000);
		});
	};
	
	// contact form validation
	var validateContactForm = function() {
		
		var hasErrors;
		var name = state.dom.contactForm['name'];
		var email = state.dom.contactForm['email'];
		var subject = state.dom.contactForm['subject'];
		var comments = state.dom.contactForm['comments'];
		
		function validate(selector, regx) {
			if (!selector.value.match(regx)) {
				if (!hasErrors) hasErrors = true;
				selector.className = 'invalid';
			} else {
				selector.className = '';
			}
		};
		
		$(state.dom.contactForm).on('submit', function(evt) {
			
			hasErrors = false;
			
			validate(name, /^\s*\S/);
			validate(email, /^\S+@\S+$/);
			validate(subject, /^\s*\S/);
			validate(comments, /^\s*\S/);
			
			if (hasErrors) {
				if (!$(state.dom.contactFormErrorMessage).hasClass('SHOW')) sv.show(state.dom.contactFormErrorMessage);
				evt.preventDefault();
			} else {
				if ($(state.dom.contactFormErrorMessage).hasClass('SHOW')) sv.hide(state.dom.contactFormErrorMessage);
			}
			
		});
	};
	
	// control successful form submission overlay
	var controlFormSubmissionOverlay = function() {
		if (state.dom.formSubmissionOverlay !== null) {
			$('#successful-form-submission-overlay .close-button').on(sv.interaction(), function() {
				return w.location.href = 'http://www.drzwebdev.com/';
			});
		}
	};
	
	// control 'scroll to top' button
	var scrollToTop = function() {
		$(state.dom.scrollTopButton).on(sv.interaction(), function() {
			sv.scrollToTop();
		});
	};
	
	// create 'mouseable' states
	var setMouseables = function() {
		return $('header a, footer a, #specialties .icon > div, #scroll-top, #about-content a, .social span, .submit-btn, .work-block .sample .links a, #responsive-menu-btn').mouseable();
	};
	
	// do all the things
	var init = function() {
		collectDOM();
		updateInstruction();
		controlParallax();
		controlNavigation();
		mobileNavigation();
		controlSamples();
		validateContactForm();
		controlFormSubmissionOverlay();
		scrollToTop();
		setMouseables();
	};
	
	$(d).ready(init);
	
})(window, document, Grindstone, services);