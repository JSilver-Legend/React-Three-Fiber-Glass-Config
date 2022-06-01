// main logic
import UIHandler from './UIHandler.js';
// filters
import FilterHandler from './FilterHandler.js';

class Filters {

    constructor() {

    this.filterHandler = new FilterHandler();

    this.ui = new UIHandler(this.filterHandler, window.viewApi,
      (()=>{
        console.log('Data ready');
        this.filterHandler.setup();
    }));  
  }

  updateFilter(toUpdate) {

    return this.filterHandler.update_filter(toUpdate.name, toUpdate.option)
  
  }
  
  updateStructure(toUpdate) {

    let new_filter_state;

    switch (toUpdate.name) {
      case 'gas1': {
        new_filter_state = this.ui.structure.setGO(toUpdate.option);
      }
      break;
      case 'gas2': {
        new_filter_state = this.ui.structure.setGM(toUpdate.option);
      }
      break;
      case 'spacer1': {
        new_filter_state = this.ui.structure.setSM(toUpdate.option.split('M')[0]);
      }
      break;
      case 'spacer2': {
        new_filter_state = this.ui.structure.setSO(toUpdate.option.split('M')[0]);
      }
      break;
      case 'outsideGlass': {
        new_filter_state = this.ui.select_option_og(toUpdate.option);
      }
      break;
      case 'middleGlass': {
        new_filter_state = this.ui.select_option_mg(toUpdate.option);
      }
      break;
      case 'fireResistant': {
        new_filter_state = this.ui.select_option_frg(toUpdate.option);
      }
      break;
    }

    return new_filter_state;
  }

};

export { Filters };
