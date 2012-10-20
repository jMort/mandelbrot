/*
Basic functions to interact with the canvas
*/

var Graphics = function(context) {
	this.drawPixel = function(x, y, r, g, b) {
		context.fillStyle = 'rgb('+~~r+','+~~g+','+~~b+')';
		context.fillRect(x,y,1,1);
	}
};