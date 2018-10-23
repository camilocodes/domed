/*
DOMED - The stubborn DOM sprite game engine.
Core Stylesheet
by Camilo Villamizar
est. 2018
*/

/* Sprite Class */
class DSprite {

	constructor(parentElement) {
		this.parent = parentElement;
	}

	get parent() {
		return this._parent;
	}

	set parent(value) {
		this._parent =  value;
	}
}
