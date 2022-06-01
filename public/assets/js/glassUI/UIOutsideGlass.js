import UIGenericGlass from './UIGenericGlass.js';

export default class UIOutsideGlass extends UIGenericGlass{
  	constructor(structure, filterID) {
    	super(structure, filterID);
	}

	selection_callback(element) {
		this.structure.setOuterGlass(element);
	}
}
