$(document).ready(function() {
	var width = $(window).width();
	var height = $(window).height();
	$('#canvas')[0].width = width;
	$('#canvas')[0].height = height;
	var context = $('#canvas')[0].getContext('2d');
	var mandelbrot = new Mandelbrot(256);
	var graphics = new Graphics(context);

	context.fillStyle = '#EFEFEF';
	context.fillRect(0,0,width,height);
	graphics.drawPixel(50,50,255,0,0);
	var pixelDistance = mandelbrot.calculatePixelDistance(8);
	console.log('GENERATING');
	var centerX = -0.5, centerY = 0;
	var x, y = centerY-((height/2)*pixelDistance);
	for (var r = 0; r < height; r++) {
		x = centerX-((width/2)*pixelDistance);
		for (var c = 0; c < width; c++) {
			var iterations = mandelbrot.calculateIterations(x,y);
			if (iterations == mandelbrot.maxIterations) {
				graphics.drawPixel(c,r,0,0,0);
			} else {
				graphics.drawPixel(c,r,iterations,0,0);
			}
			x += pixelDistance;
		}
		y += pixelDistance;
	}

});