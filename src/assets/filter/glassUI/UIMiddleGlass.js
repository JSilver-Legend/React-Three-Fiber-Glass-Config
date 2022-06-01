import UIGenericGlass from './UIGenericGlass.js';

export default class UIMiddleGlass extends UIGenericGlass{
  	constructor(structure, filterID, filterHandler, uiHandler) {
    	super(structure, filterID, filterHandler, uiHandler);
	}

	//selection_callback(element) {
	//	this.structure.setMiddleGlass(element);
	//}

	selection_callback(element, non_ui_call) {
		// this function can be called several times
		// but only the first one should affect the dropdown and the value to be displayed
		// the rest should be ignored
		let entry_number = !this.no_update? 1 : this.no_update++;
		let index = 0;
		// 
		if (!this.no_update) {
			this.no_update = entry_number;
		}

		if (!non_ui_call) {

			if (element && this.filterHandler.structureFilter.activeFilterName() !== "3-glazed-ISO") {
				index = this.uiHandler.uIOutsideGlass.index;
      			this.filterHandler.structureFilter.select_dropdown_option("3-glazed-ISO");
      		}
      		
      		if(!element && this.filterHandler.structureFilter.activeFilterName() === "3-glazed-ISO") {
				index = this.uiHandler.uIOutsideGlass.index;
      			this.filterHandler.structureFilter.select_dropdown_option("2-glazed-ISO");
      		}
		}

		if (this.no_update === entry_number) {
			this.structure.setMiddleGlass(element);
			this.no_update = undefined;

			// it could be "0" or 0 :shrug:
			if(index !== 0 && index !== "0") {
      			this.uiHandler.uIOutsideGlass.set(index, true);
			}
		}


	}
}
