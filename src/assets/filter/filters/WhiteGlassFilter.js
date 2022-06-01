import AbstractCheckboxFilter from './AbstractCheckboxFilter.js'

export default class WhiteGlassFilter extends AbstractCheckboxFilter{
  	constructor(filterHandler, filterID) {
  		super(filterHandler, filterID, "WhiteGlassFilter");

  		this.prepare_ui();      
  	}

    isCheckedFilter() {

      return {
        frg : (aGlass) => { return aGlass.white_glass === "Yes" },
        outsideglass : (aGlass) => { return aGlass.white_glass === "Yes" },
        middglass : (aGlass) => { return aGlass.white_glass === "Yes" },
      };
    }
}
