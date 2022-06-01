import * as THREE from './../../libs/three.module.js';
import Label from './Label.js';

export default class ValueWithLabel extends THREE.Object3D{

	constructor(text, size, color, unit) {
		super();
		this.label = new Label(text, size, color);
		this.label.text = text;
		this.value = new Label("0", size, color);
		this.label.position.y = 5;
		this.add(this.value);
		this.add(this.label);
		this.text = '0';
		this.unit = unit;

	}

	set text(text) {
		if(text == "0") {
			this.visible = false;
		} else {
			this.visible = true;
		}
		this.value.text = text + (this.unit? " " + this.unit : "");
	}
}