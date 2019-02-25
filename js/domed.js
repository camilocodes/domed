/*
DOMED - The stubborn DOM sprite game engine.
Main JavaScript
by Camilo Villamizar
est. 2018
*/

// Sprite class
class DSprite {

	constructor() {
		// Create and configure DOM sprite container.
		this.element = document.createElement('div');
		this.element.className = 'sprite';
		// Optimized pointer to style.
		this.style = this.element.style;

		// Load sprite sheet.
		this.loadSheet = function(imageLocation) {
			this.style.backgroundImage = `url(${imageLocation})`;
		};

		// Set sprite dimensions (in pixels).
		this.setDimensions = function(width, height) {
			this.style.width =  `${width}px`;
			this.style.height =  `${height}px`;
		};
	}
}

// Game object class
class DGob {

	constructor() {
		// Position (pixels, 0 = origin)
		this.posX = 0;
		this.posY = 0;

		// Velocity
		this.velX = 0;
		this.velY = 0;

		// Acceleration
		this.accelX = 0;
		this.accelY = 0;

		// Angular position/orientation (degrees, 0 = default/north)
		this.posA = 0;

		// Angular velocity
		this.velA = 0;

		// Angular acceleration
		this.accelA = 0;

		// Sprite
		this.sprite = new DSprite();
	}

	update() {
		// Position
		this.posX += this.velX;
		this.posY += this.velY;

		// Velocity
		this.velX += this.accelX;
		this.velY += this.accelY;

		// Angular position
		this.posA += this.velA;

		// Angular velocity
		this.velA += this.accelA;

		// Sprite
		// Position
		this.sprite.style.left = this.posX 	+ "px";
		this.sprite.style.top = this.posY 	+ "px";

		// Angular position
		// Reset when full-circle
		if (this.posA >= 360) this.posA -= 360;

		var deg = this.posA;
		this.sprite.style.webkitTransform = 'rotate('+deg+'deg)';
		this.sprite.style.mozTransform    = 'rotate('+deg+'deg)';
		this.sprite.style.msTransform     = 'rotate('+deg+'deg)';
		this.sprite.style.oTransform      = 'rotate('+deg+'deg)';
		this.sprite.style.transform       = 'rotate('+deg+'deg)';
	}
}

// Game class
class DGame {

}

// On load !!!!!!!!!!
window.onload = function() {
	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = (function()
		{
			return window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function(callback,element)
			{
				window.setTimeout(callback, 1000 / 60);
			};
		})();
	}

	main();
};

function main() {
	myGob = new DGob();
	myGob.sprite.loadSheet('./gfx/game/triangle16.png');
	myGob.sprite.setDimensions(16, 16);
	document.getElementById('viewport').appendChild(myGob.sprite.element);
	myGob.velX = 1;
	myGob.velY = 1;
	myGob.velA = -1;
	animate();
}

function animate() {
	myGob.update();
	// Call this function again asap
	window.requestAnimationFrame(animate);
}
