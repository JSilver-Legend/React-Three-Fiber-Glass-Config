import AbstractFilter from './AbstractFilter.js'

export default class StructureFilter extends AbstractFilter{
  	constructor(filterHandler, filterID) {
  		super(filterHandler, filterID, "StructureFilter");

  		this.option_names = {
  			"1-glazed (mono)" : this.is1glazedmonoFilter,
  			"2-glazed-ISO" : this.is2glazedISOFilter,
  			"3-glazed-ISO" : this.is3glazedISOFilter
  		};

  		this.prepare_ui(true);
  	}

  	is1glazedmonoFilter() {

      return {
        on_set : (already_run) => {
          this.filterHandler.get("InsulationFilter").select_dropdown_option("U-Value 5.4", already_run);

          if (this.filterHandler.get("ApplicationFilter").isActive() && this.filterHandler.get("ApplicationFilter").activeFilterName() !== "Inside") {
            this.filterHandler.get("ApplicationFilter").select_dropdown_option("Inside", already_run);
          }

          if (this.filterHandler.get("ResistanceFilter").isActive()) {
            switch (this.filterHandler.get("ResistanceFilter").activeFilterName()) {
              case "RC 4 (WK 4) / P6B":
                this.filterHandler.get("ResistanceFilter").select_dropdown_option("RC 3 (WK 3) / P5A", already_run);
              break;
              case "RC 5 (WK 5) / P7B":
                this.filterHandler.get("ResistanceFilter").select_dropdown_option("RC 3 (WK 3) / P5A", already_run);
              break;
              case "RC 6 (WK 6) / P8B":
                this.filterHandler.get("ResistanceFilter").select_dropdown_option("RC 3 (WK 3) / P5A", already_run);
              break;
              default:
                console.warn(':shrug:', '🤷');
            }
          }
        },

        callback : () => {
          this.filterHandler.select_dropdown_option_mg(0);
          this.filterHandler.select_dropdown_option_og(0);
          this.filterHandler.set_s1_s2(0,0,0,0);
          this.filterHandler.set_uv("5,4");
        }
      };
  	}


  	is2glazedISOFilter() {

      return {

        on_set : (already_run) => {
          this.filterHandler.get("InsulationFilter").select_dropdown_option("U-Value 1.2", already_run);
          this.filterHandler.get("ButtJointsFilter").select_dropdown_option("unchecked", already_run);
        },
        callback : () => {
          this.filterHandler.select_dropdown_option_mg(0);
          this.filterHandler.select_dropdown_option_og(1);
          this.filterHandler.set_s1_s2(14,0,"Argon",0);
          this.filterHandler.set_uv("1.2");
        }
      };
  	}

  	is3glazedISOFilter() {

      return {

        on_set : (already_run) => {
          this.filterHandler.get("InsulationFilter").select_dropdown_option("U-Value 0.6", already_run);
          this.filterHandler.get("ButtJointsFilter").select_dropdown_option("unchecked", already_run);
        },
        callback : () => {
          this.filterHandler.select_dropdown_option_mg(1);
          this.filterHandler.select_dropdown_option_og(1);
          this.filterHandler.set_s1_s2(14,14,"Argon","Argon");
          this.filterHandler.set_uv("0.6");
        }
      };
  	}

}

