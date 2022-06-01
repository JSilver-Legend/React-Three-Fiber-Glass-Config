import UIGenericGlass from './UIGenericGlass.js';

export default class UIOutsideGlass extends UIGenericGlass{
  	constructor(structure, filterID, filterHandler, uiHandler) {
    	super(structure, filterID, filterHandler, uiHandler);
	}

	selection_callback(element, non_ui_call) {
		// this function can be called several times
		// but only the first one should affect the dropdown and the value to be displayed
		// the rest should be ignored
		let entry_number = !this.no_update? 1 : this.no_update++;
		// 
		if (!this.no_update) {
			this.no_update = entry_number;
		}

		if (!non_ui_call) {

			if (element && this.filterHandler.structureFilter.activeFilterName() === "1-glazed (mono)") {
      			this.filterHandler.structureFilter.select_dropdown_option("2-glazed-ISO");
      		}
      		
      		if(!element && this.filterHandler.structureFilter.activeFilterName() !== "1-glazed (mono)") {
      			this.filterHandler.structureFilter.select_dropdown_option("1-glazed (mono)");
      		}
		}

		if (this.no_update === entry_number) {
			this.structure.setOuterGlass(element);
			this.no_update = undefined;
		}
	}
//"2-glazed-ISO
//"3-glazed-ISO
}
 