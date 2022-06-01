import UIGenericGlass from './UIGenericGlass.js';

export default class UIMiddleGlass extends UIGenericGlass{
  	constructor(structure, filterID) {
    	super(structure, filterID);
	}

	selection_callback(element) {
		this.structure.setMiddleGlass(element);
	}
}
