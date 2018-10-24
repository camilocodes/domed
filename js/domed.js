/*
DOMED - The stubborn DOM sprite game engine.
Main JavaScript
by Camilo Villamizar
est. 2018
*/

// Sprite Class
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

window.onload = function() {
	let mySprite = new DSprite();
	mySprite.loadSheet('./gfx/game/ball.png');
	mySprite.setDimensions(8, 8);
	document.getElementById('viewport').appendChild(mySprite.element);
};
