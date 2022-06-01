import AbstractCheckboxFilter from './AbstractCheckboxFilter.js'

export default class ButtJointsFilter extends AbstractCheckboxFilter{
  	constructor(filterHandler, filterID) {
  		super(filterHandler, filterID);
  		this.prepare_ui();
  	}

  	isCheckedFilter() {

      return {
      	on_set : (already_run) => {
			    this.filterHandler.get("StructureFilter").select_dropdown_option("1-glazed (mono)", already_run);
		    },
        frg : (aGlass) => { return aGlass.butt_joints === "Yes" },
      };
    }
}
