import AbstractFilter from './AbstractFilter.js'

export default class ManufacturerFilter extends AbstractFilter{
  	constructor(filterHandler, filterID) {
  		super(filterHandler, filterID, "manufacturerFilter");

  		this.option_names = {
  			"Glas Trösch" : this.isGlasTröschFilter,
  			"AGC" : this.isAGCFilter
  		};


  		this.prepare_ui();
  	}

  	isGlasTröschFilter() {
      return {
        frg : (aGlass) => { return aGlass.manufacturer.includes("Glas Trösch") },
      };
  	}

  	isAGCFilter() {
      return {
        frg : (aGlass) => { return aGlass.manufacturer.includes("AGC") },
      };
  	}
}

