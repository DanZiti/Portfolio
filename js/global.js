
	// Define project namespace and reusable methods
	//
	var drz = {
		
		interaction: ("createTouch" in document) ? "touchend" : "click", // Basic interaction event
		
		navigate: function(_anchor) {
			
			var anchor = $("#" + _anchor + "-content").offset("top");
			$(window).scrollTop(anchor);
			
			return this;
		},
		
		activate: function(_element) {
			$(_element).addClass("ACTIVE");
			return this;
		},
		
		deactivate: function(_element) {
			$(_element).removeClass("ACTIVE");
			return this;
		},
		
		select: function(_element, _toggle) {
			$(_element)[_toggle ? "toggleClass" : "addClass"]("SELECTED");
			return this;
		},
		
		deselect: function(_element) {
			$(_element).removeClass("SELECTED");
			return this;
		}
		
	};