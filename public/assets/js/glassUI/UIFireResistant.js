
import FireResistentGlass from './../Glass/FireResistentGlass.js';
import UIGenericGlass from './UIGenericGlass.js';

export default class UIFireResistant extends UIGenericGlass{
  	constructor(structure, filterID) {
    	super(structure, filterID);
	}


	add(data){
        super.add(data, FireResistentGlass)
	}

    selection_callback(element) {
        this.structure.setFireResistentGlass(element);
    }
}
