$(document).ready(function() {
	var width = $(window).width();
	var height = $(window).height();
	$('#canvas').width(width);
	$('#canvas').height(height);
	var context = $('#canvas')[0].getContext('2d');
	var mandelbrot = new Mandelbrot(256);
	console.log(mandelbrot);

	context.fillStyle = '#EFEFEF';
	context.fillRect(0,0,width,height);


});