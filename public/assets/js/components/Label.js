import * as THREE from './../../libs/three.module.js';

export default class Label extends THREE.Mesh{

	constructor(text, size, color) {
		var canvas = document.createElement("canvas");
		var context = canvas.getContext("2d");

		context.font = size + "px Arial";

		var textWidth = context.measureText(text).width;
		var textHeight = context.measureText(text).actualBoundingBoxAscent - context.measureText(text).actualBoundingBoxDescent;
		var textDescend = context.measureText(text).actualBoundingBoxDescent;
		canvas.width = textWidth;
		canvas.height = textHeight * 1.3;

		context.textAlign = "center";
		context.textBaseline = "middle";
		context.fillStyle = "white";
		context.font = size + 'px Arial';
		context.textAlign = 'left';
		context.textBaseline = 'top'; // important!

		context.fillText(text, 0, -textDescend);

		var texture = new THREE.Texture(canvas);
		texture.needsUpdate = true;

		var material = new THREE.MeshBasicMaterial({
			map : texture,
			side : THREE.DoubleSide,
			//transparent: true
		});

		super(new THREE.PlaneGeometry(1, 1), material);
		this.scale.set(textWidth * 0.025, textHeight * 0.025, textHeight * 0.025);

		this.context = context;
		this.canvas = canvas;
		this.size = size;
	}

	set text(text) {

		this.context.font = this.size + "px Arial";

		var textWidth = this.context.measureText(text).width;
		var textHeight = this.context.measureText(text).actualBoundingBoxAscent + this.context.measureText(text).actualBoundingBoxDescent;
		var textDescend = this.context.measureText(text).actualBoundingBoxDescent;
		this.canvas.width = textWidth;
		this.canvas.height = textHeight;

		this.context.textAlign = "center";
		this.context.fillStyle = "white";
		this.context.font = this.size + 'px Arial';
		this.context.textAlign = 'left';
		this.context.textBaseline = 'top';

		this.context.fillText(text, 0, this.canvas.height - textDescend);

		var texture = new THREE.Texture(this.canvas);
		texture.needsUpdate = true;
		this.material.map = texture;
		this.material.needsUpdate = true;
		this.scale.set(textWidth * 0.025, textHeight * 0.025, textHeight * 0.025);
	}
}