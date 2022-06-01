import AbstractFilter from './AbstractFilter.js'

export default class ResistanceFilter extends AbstractFilter{
  	constructor(filterHandler, filterID) {
  		super(filterHandler, filterID);

  		this.option_names = {
  			"RC 2 (WK 2) / P4A" : this.isRC2Filter,
  			"RC 3 (WK 3) / P5A" : this.isRC3Filter,
  			"RC 4 (WK 4) / P6B" : this.isRC4Filter,
  			"RC 5 (WK 5) / P7B" : this.isRC5Filter,
  			"RC 6 (WK 6) / P8B" : this.isRC6Filter,
  		};

  		this.prepare_ui();
  	}


  	isRC2Filter() {
      if (this.filterHandler.get("StructureFilter").activeFilterName() == "1-glazed (mono)") {
        // mono
        return {
          frg : (aGlass)=>{ return aGlass.resistance === "RC 2 (WK 2) / P4A"}
        }
      } else {
        // iso
        return {
          outsideglass : (aGlass)=>{ return aGlass.resistance === "RC 2 (WK 2) / P4A"}
        }
      }
  	}

  	isRC3Filter() {
      if (this.filterHandler.get("StructureFilter").activeFilterName() == "1-glazed (mono)") {
        // mono
        return {
          frg : (aGlass)=>{ return aGlass.resistance.includes("RC 3 (WK 3) / P5A")}
        }
      } else {
        // iso
        return {
          outsideglass : (aGlass)=>{ 
            return aGlass.resistance.includes("RC 3 (WK 3) / P5A")
          }
        }
      }
    }

  	isRC4Filter() {
      if (this.filterHandler.get("StructureFilter").activeFilterName() == "1-glazed (mono)") {
        // mono
        return {
          on_set : (already_run) => {
            this.filterHandler.get("StructureFilter").select_dropdown_option("2-glazed-ISO", already_run);
          },
        }
      } else {
        // iso
        return {
          outsideglass : (aGlass)=>{ return aGlass.glasstype.includes("VSG P6B") && aGlass.resistance.includes("RC 4 (WK 4) / P6B")}
        }
      }
    }

  	isRC5Filter() {
      if (this.filterHandler.get("StructureFilter").activeFilterName() == "1-glazed (mono)") {
        // mono
        return {
          on_set : (already_run) => {
              this.filterHandler.get("StructureFilter").select_dropdown_option("2-glazed-ISO", already_run);
          },
        }
      } else {
        // iso
        return {
          outsideglass : (aGlass)=>{ return aGlass.glasstype.includes("VSG P7B") && aGlass.resistance.includes("RC 5 (WK 5) / P7B")}
        }
      }
    }
  	
  	isRC6Filter() {
      if (this.filterHandler.get("StructureFilter").activeFilterName() == "1-glazed (mono)") {
        // mono
        return {
          on_set : (already_run) => {
            this.filterHandler.get("StructureFilter").select_dropdown_option("2-glazed-ISO", already_run);
          },
        }
      } else {
        // iso
        return {
          outsideglass : (aGlass)=>{
            return aGlass.glasstype.includes("VSG P8B") && aGlass.resistance.includes("RC 6 (WK 6) / P8B")
          }
        }
      }
    }
}

