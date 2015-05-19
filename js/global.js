
	// Define project namespace and reusable methods
	//
	var drz = {
		
		interaction: ("createTouch" in document) ? "touchend" : "click", // Basic interaction event
		
		navigate: function(_anchor) {
			var anchor = $("#" + _anchor + "-content").offset("top");
			$(window).scrollTop(anchor);
		}
		
	};