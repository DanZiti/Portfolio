(function() {
	
	// Control the ".work-block .sample" animations... Including specific functionality for desktop and mobile
	//
	var _samples = document.querySelectorAll(".work-block .sample");
	
	$(".work-block .sample").on("touchend", function() {
		drz.deactivate(".work-block .sample");
	});
	
	for (var i = 0; i < _samples.length; i++) {
		
		// Desktop
		//
		_samples[i].onmouseover = function() {
			drz.activate(this);
		};
		
		_samples[i].onmouseleave = function() {
			drz.deactivate(this);
		};
		
		// Mobile
		//
		_samples[i].ontouchend = function() {
			
			var self = this;
			
			drz.activate(self);
			
			setTimeout(function() {
				drz.deactivate(self);
			}, 8000);
		};
		
	}
	
})();