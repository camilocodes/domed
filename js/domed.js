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
		// Position
		this.posX = 0;
		this.posY = 0;

		// Velocity
		this.velX = 0;
		this.velY = 0;

		// Acceleration
		this.accelX;
		this.accelY;

		// Sprite
		this.sprite = new DSprite();
	}

	update() {
		// Position
		// Attributes
		this.posX += this.velX;
		this.posY += this.velY;
		// Sprite
		this.sprite.style.left = this.posX + "px";
		this.sprite.style.top = this.posY + "px";
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

	myGob = new DGob();
	myGob.sprite.loadSheet('./gfx/game/ball.png');
	myGob.sprite.setDimensions(8, 8);
	document.getElementById('viewport').appendChild(myGob.sprite.element);
	myGob.velX = 1;
	myGob.velY = 1;
	animate();
};

function animate() {
	myGob.update();
	// Call this function again asap
	window.requestAnimationFrame(animate);
}
