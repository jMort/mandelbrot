var Mandelbrot = function(maxIterations) {
	// maxIterations will either be a number or object containing it
	// otherwise it defaults to 256
	if (typeof maxIterations === 'number') {
		this.maxIterations = maxIterations;
	} else if (typeof maxIterations === 'object' && 'maxIterations' in maxIterations) {
		this.maxIterations = maxIterations.maxIterations;
	} else {
		this.maxIterations = 256;
	}

	// Calculates how many iterations before a point escapes the mandelbrot set
	this.calculateIterations = function(initialX, initialY) {
		var radius = 2;
		var x = 0, y = 0;

		var i = 0;
		while (i < this.maxIterations && (x*x)+(y*y) < radius*radius) {
			var temp = (x*x)-(y*y) + initialX;
			y = (2*x*y) + initialY;
			x = temp;
			i++;
		}

		return i;
	};

	this.calculatePixelDistance = function(n) {
		// Pixel distance is 2^-n or 2 to the minus n
		var twoToTheN = 1;

		for (var i = 0; i < n; i++) {
			twoToTheN *= 2;
		}

		distance = 1/twoToTheN;

		return distance;
	};
};