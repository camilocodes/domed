/*
DOMED - The stubborn DOM sprite game engine.
Main JavaScript
by Camilo Villamizar
est. 2018
*/

/* Sprite Class */
class DSprite {

	constructor(parentElement) {
		this.parent = parentElement;
		// Create DOM sprite.
		this.element = document.createElement("div");
		this.element.className = 'sprite';
		// Optimized pointer to style.
		this.style = this.element.style;
	}
}

window.onload = function() {
	let mySprite = new DSprite(document.getElementById('viewport'));
	alert(mySprite.parent);
};
