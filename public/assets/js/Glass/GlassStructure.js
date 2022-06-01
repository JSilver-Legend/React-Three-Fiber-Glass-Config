
export default class GlassStructure {

  constructor(webGlComponent) {
	  this.webGlComponent = webGlComponent;
		this.fireResistentGlass = undefined;
		this.middleGlass = undefined;
		this.outerGlass = undefined;
		this.spacerMiddle = 0;
		this.spacerOutside = 0;
		this.uValue = "5,4";
		this.gasMiddle = 0;
		this.gasOutside = 0;
  }

	setSpacers(spacerOutside, spacerMiddle, gasOutside, gasMiddle) {
  		this.spacerOutside = spacerOutside; 
  		this.spacerMiddle = spacerMiddle;
  		this.gasOutside = gasOutside; 
  		this.gasMiddle = gasMiddle;
  		this.calculate_width();
	}

	setOuterGlass(outerGlass) {
		this.outerGlass = outerGlass;
    this.calculate_width();
	}

	setMiddleGlass(middleGlass) {
		this.middleGlass = middleGlass;
    this.calculate_width();
	}

	setFireResistentGlass(fireResistentGlass) {
		this.fireResistentGlass = fireResistentGlass;
    this.calculate_width();
	}

  setUV(uv) {
  	this.uValue = uv;
    this.calculate_width();
  }

  calculate_width() {
		let width = this.fireResistentGlass ? parseFloat(this.fireResistentGlass.thickness) : 0;

		width += this.middleGlass ? parseFloat(this.middleGlass.thickness) : 0;

		width += this.outerGlass ? parseFloat(this.outerGlass.thickness) : 0;

		width += this.spacerMiddle ? parseFloat(this.spacerMiddle) : 0;
    	
		width += this.spacerOutside ? parseFloat(this.spacerOutside) : 0;

    	this.webGlComponent.updateLabels(
    	  	this.fireResistentGlass ? parseFloat(this.fireResistentGlass.thickness) : 0,
    	  	this.outerGlass ? parseFloat(this.outerGlass.thickness) : 0,
    	  	this.middleGlass ? parseFloat(this.middleGlass.thickness) : 0,
    	  	this.spacerOutside ? parseFloat(this.spacerOutside) : 0,
    	  	this.spacerMiddle ? parseFloat(this.spacerMiddle) : 0,
    	  	this.uValue ? this.uValue : "5,4",
    	  	width,
    	  	this.gasOutside ? this.gasOutside : 0,
    	  	this.gasMiddle ? this.gasMiddle : 0,
    	);
	}
}
