import AbstractCheckboxFilter from './AbstractCheckboxFilter.js'

export default class ClearGlassFilter extends AbstractCheckboxFilter{
  	constructor(filterHandler, filterID) {
  		super(filterHandler, filterID);

  		this.prepare_ui();      
  	}

    isCheckedFilter() {

      return {
        frg : (aGlass) => { return aGlass.clear_glass === "Yes" },
        outsideglass : (aGlass) => { return aGlass.clear_glass === "Yes" },
        middglass : (aGlass) => { return aGlass.clear_glass === "Yes" },
      };
    }
}
