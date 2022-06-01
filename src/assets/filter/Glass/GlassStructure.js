
export default class GlassStructure {

  constructor(webGlComponent, uiHandler) {
	  this.webGlComponent = webGlComponent;
		this.fireResistentGlass = undefined;
		this.middleGlass = undefined;
		this.outerGlass = undefined;
		this.spacerMiddle = {};
		this.spacerOutside = {};
		this.uValue = "5,4";
		this.gasMiddle = 0;
		this.gasOutside = 0;
		this.uiHandler = uiHandler;
  }

	setSpacers(spacerOutside, spacerMiddle, gasOutside, gasMiddle) {
  		this.spacerOutside.thickness = spacerOutside; 
  		this.spacerMiddle.thickness = spacerMiddle;
  		
  		this.gasOutside = gasOutside; 
  		this.gasMiddle = gasMiddle;
  		this.calculate_width();
	}

	setSO(spacerOutside) {
  		this.spacerOutside.thickness = spacerOutside; 
  		this.calculate_width();
	}

	setSM(spacerMiddle) {
  		this.spacerMiddle.thickness = spacerMiddle; 
  		this.calculate_width();
	}

	setGO(gasOutside) {
  		this.gasOutside = gasOutside; 
  		this.calculate_width();
	}

	setGM(gasMiddle) {
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
    	this.webGlComponent.updateLabels(
    	  	this.fireResistentGlass,
    	  	this.outerGlass,
    	  	this.middleGlass,
    	  	this.spacerOutside,
    	  	this.spacerMiddle,
    	  	this.uValue,
    	  	this.gasOutside,
    	  	this.gasMiddle,
    	);
    	if(this.fireResistentGlass)
    	this.uiHandler.set(this.fireResistentGlass.sound, this.outerGlass);
	}
}
