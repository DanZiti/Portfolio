(function() {
	
	// Validate the contact form in browsers that don't yet support web form validation attributes
	//
	var _form = document.forms["contact-form"];
	var _name = document.forms["contact-form"]["name"];
	var _email = document.forms["contact-form"]["email"];
	
	_form.onsubmit = function() {
		
		if (_name.value === null || _name.value === "") {
			alert("I'd like to know who I'm speaking with - please fill out your name :)");
			_name.className = "invalid";
			return false;
		}
		
		else {
			_name.className = "";
		}
		
		if (!_email.value.match("@")) {
			alert("Please provide a valid email address, e.g. you@somecompany.com");
			_email.className = "invalid";
			return false;
		}
		
		else {
			_email.className = "";
		}
		
		alert("Hey there, thanks for submitting: I'll be in touch soon!");
	};
	
})();