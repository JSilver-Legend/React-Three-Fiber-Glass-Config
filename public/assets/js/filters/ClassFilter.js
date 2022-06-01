import AbstractFilter from './AbstractFilter.js'

export default class ClassFilter extends AbstractFilter{
  	constructor(filterHandler, filterID) {
  		super(filterHandler, filterID);

  		this.option_names = {
  			"EI30" : this.isEI30Filter,
  			"EI60" : this.isEI60Filter,
  			"EI90" : this.isEI90Filter
  		};

  		this.prepare_ui();
  	}


  	isEI30Filter() {
      return {
        frg : (aGlass) => { return aGlass.klasse.includes("EI30") },
      };
  	}

  	isEI60Filter() {
      return {
        frg : (aGlass) => { return aGlass.klasse.includes("EI60") },
      };
  	}

  	isEI90Filter() {
      return {
        frg : (aGlass) => { return aGlass.klasse.includes("EI90") },
      };
  	}
}
