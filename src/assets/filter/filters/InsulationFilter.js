import AbstractFilter from './AbstractFilter.js'

export default class InsulationFilter extends AbstractFilter{
  constructor(filterHandler, filterName) {
  	super(filterHandler, filterName, "InsulationFilter");

  	this.option_names = {
		"U-Value 5.4" : this.isUValue5_4Filter,
		"U-Value 1.7" : this.isUValue1_7Filter,
		"U-Value 1.4" : this.isUValue1_4Filter,
		"U-Value 1.3" : this.isUValue1_3Filter,
		"U-Value 1.2" : this.isUValue1_2Filter,
		"U-Value 1.1" : this.isUValue1_1Filter,
		"U-Value 1.0" : this.isUValue1_0Filter,
		"U-Value 0.9" : this.isUValue0_9Filter,
		"U-Value 0.8" : this.isUValue0_8Filter,
		"U-Value 0.7" : this.isUValue0_7Filter,
		"U-Value 0.6" : this.isUValue0_6Filter,
		"U-Value 0.5" : this.isUValue0_5Filter
  	};

  	this.prepare_ui();
  	}

	isUValue5_4Filter(){

		return {
			on_set : (already_run) => {
				this.filterHandler.get("StructureFilter").select_dropdown_option("1-glazed (mono)", already_run);
			},
			callback : () => {
				this.filterHandler.select_dropdown_option_mg(0);
				this.filterHandler.select_dropdown_option_og(0);
  	  	this.filterHandler.set_s1_s2(0,0, 0, 0);
				this.filterHandler.set_uv("5,4");				
			}
		}
	}

	isUValue1_7Filter(){

		return {
			on_set : (already_run) => {
				this.filterHandler.get("StructureFilter").select_dropdown_option("2-glazed-ISO", already_run);
			},
			callback : () => {
				this.filterHandler.select_dropdown_option_mg(0);
				this.filterHandler.select_dropdown_option_og(1);
  	  			this.filterHandler.set_s1_s2(8,0, "Argon", 0);
				this.filterHandler.set_uv("1.7");				
			}
		}
	};

	isUValue1_4Filter(){

		return {
			on_set : (already_run) => {
				this.filterHandler.get("StructureFilter").select_dropdown_option("2-glazed-ISO", already_run);
			},
			callback : () =>{
				this.filterHandler.select_dropdown_option_mg(0);
				this.filterHandler.select_dropdown_option_og(1);
  	  			this.filterHandler.set_s1_s2(10,0, "Argon", 0);
				this.filterHandler.set_uv("1.4");			
			}
		}
	};

	isUValue1_3Filter(){

		return {
			on_set : (already_run) => {
				this.filterHandler.get("StructureFilter").select_dropdown_option("2-glazed-ISO", already_run);
			},
			callback : () =>{
  	  			this.filterHandler.select_dropdown_option_mg(0);
				this.filterHandler.select_dropdown_option_og(1);
  	  			this.filterHandler.set_s1_s2(12,0, "Argon", 0);
				this.filterHandler.set_uv("1.3");				
			}
		}
	};

	isUValue1_2Filter(){

		return {
			on_set : (already_run) => {
				this.filterHandler.get("StructureFilter").select_dropdown_option("2-glazed-ISO", already_run);
			},
			callback : () =>{
  	  			this.filterHandler.select_dropdown_option_mg(0);
				this.filterHandler.select_dropdown_option_og(1);
  	  			this.filterHandler.set_s1_s2(14,0, "Argon", 0);
				this.filterHandler.set_uv("1.2");				
			}
		}
	};

	isUValue1_1Filter(){

		return {
			on_set : (already_run) => {
				this.filterHandler.get("StructureFilter").select_dropdown_option("2-glazed-ISO", already_run);
			},
			callback : () => {
  	  			this.filterHandler.select_dropdown_option_mg(0);
				this.filterHandler.select_dropdown_option_og(1);
  	  			this.filterHandler.set_s1_s2(16,0, "Argon", 0);
				this.filterHandler.set_uv("1.1");
			}
		}
	};

	isUValue1_0Filter(){

		return {
			on_set : (already_run) => {
				this.filterHandler.get("StructureFilter").select_dropdown_option("2-glazed-ISO", already_run);
			},
			callback : () => {
  	  			this.filterHandler.select_dropdown_option_mg(0);
				this.filterHandler.select_dropdown_option_og(1);
  	  			this.filterHandler.set_s1_s2(10,0, "Krypton", 0);
				this.filterHandler.set_uv("1.0");
			}
		}
	};

	isUValue0_9Filter(){

		return {
			on_set : (already_run) => {
				this.filterHandler.get("StructureFilter").select_dropdown_option("3-glazed-ISO", already_run);
			},
			callback : () => {
				this.filterHandler.select_dropdown_option_mg(1);
				this.filterHandler.select_dropdown_option_og(1);
  	  			this.filterHandler.set_s1_s2(10,8,"Argon", "Argon");
				this.filterHandler.set_uv("0.9");
			}
		}
	};

	isUValue0_8Filter(){

		return {
			on_set : (already_run) => {
				this.filterHandler.get("StructureFilter").select_dropdown_option("3-glazed-ISO", already_run);
			},
			callback : () => {
  	  			this.filterHandler.select_dropdown_option_mg(1);
				this.filterHandler.select_dropdown_option_og(1);
  	  			this.filterHandler.set_s1_s2(10,10,"Argon", "Argon");
				this.filterHandler.set_uv("0.8");				
			}
		}
	};

	isUValue0_7Filter(){

		return {
			on_set : (already_run) => {
				this.filterHandler.get("StructureFilter").select_dropdown_option("3-glazed-ISO", already_run);
			},
			callback : () => {
  	  			this.filterHandler.select_dropdown_option_mg(1);
				this.filterHandler.select_dropdown_option_og(1);
  	  			this.filterHandler.set_s1_s2(12,12,"Argon", "Argon");
				this.filterHandler.set_uv("0.7");				
			}
		}
	};

	isUValue0_6Filter(){

		return {
			on_set : (already_run) => {				
				this.filterHandler.get("StructureFilter").select_dropdown_option("3-glazed-ISO", already_run);
			},
			callback : () => { 
			  	this.filterHandler.select_dropdown_option_mg(1);
				this.filterHandler.select_dropdown_option_og(1);
  	  			this.filterHandler.set_s1_s2(14,14,"Argon", "Argon");
				this.filterHandler.set_uv("0.6");
			}
		}
	};

	isUValue0_5Filter(){

		return {
			on_set : (already_run) => {
				this.filterHandler.get("StructureFilter").select_dropdown_option("3-glazed-ISO", already_run);
			},
			callback : () => {
  	  			this.filterHandler.select_dropdown_option_mg(1);
				this.filterHandler.select_dropdown_option_og(1);
  	  			this.filterHandler.set_s1_s2(16,16,"Argon", "Argon");
				this.filterHandler.set_uv("0.5");	
			}
		}
	};

}