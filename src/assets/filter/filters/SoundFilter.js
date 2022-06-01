import AbstractCheckboxFilter from './AbstractCheckboxFilter.js'

export default class SoundFilter extends AbstractCheckboxFilter{
  	constructor(filterHandler, filterID) {
  		super(filterHandler, filterID, "SoundFilter");

  		this.prepare_ui();
  	}

  	isCheckedFilter() {
  		
      return {
        frg : (aGlass) => { return aGlass.sound !== 0 },
      };
  	}
}
