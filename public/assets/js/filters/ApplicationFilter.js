import AbstractFilter from './AbstractFilter.js'

export default class ApplicationFilter extends AbstractFilter{
  	constructor(filterHandler, filterName) {
  		super(filterHandler, filterName);

  		this.option_names = {
  			"Inside" : this.isInsideFilter,
  			"Inside/Outside" : this.isInsideOutsideFilter,
        "Outside/Outside" : this.isOutsideOutsideFilter,
  		};

  		this.prepare_ui();
  	}

  	isInsideFilter() {
      switch (this.filterHandler.get("StructureFilter").activeFilterName()) {
        case '1-glazed (mono)':
          return {
          }
          break;
        case '2-glazed-ISO':
          return {
          }
          break;
        case '3-glazed-ISO':
          return {
          }
          break;
        default:
          return {};
      }
    }

  	isInsideOutsideFilter() {
      switch (this.filterHandler.get("StructureFilter").activeFilterName()) {
        case '1-glazed (mono)':
          return {
            frg : (aGlass)=>{ return aGlass.application === "Inside/Outside"}
          }
          break;
        case '2-glazed-ISO':
          return {
            outsideglass : (aGlass)=>{ return aGlass.application === "Inside/Outside"}
          }
          break;
        case '3-glazed-ISO':
          return {
            outsideglass : (aGlass)=>{ return aGlass.application === "Inside/Outside"}
          }
          break;
        default:
          return {};
      }
  	}

    isOutsideOutsideFilter() {
      switch (this.filterHandler.get("StructureFilter").activeFilterName()) {
        case '1-glazed (mono)':
          return {
            on_set : (already_run) => {
              this.filterHandler.get("StructureFilter").select_dropdown_option("2-glazed-ISO", already_run);
            },
            frg : (aGlass)=>{ return aGlass.application === "Inside/Outside"},
            outsideglass : (aGlass)=>{ return aGlass.application === "Inside/Outside"}
          }
          break;
        case '2-glazed-ISO':
          return {
            frg : (aGlass)=>{ return aGlass.application === "Inside/Outside"},
            outsideglass : (aGlass)=>{ return aGlass.application === "Inside/Outside"}
          }
          break;
        case '3-glazed-ISO':
          return {
            frg : (aGlass)=>{ return aGlass.application === "Inside/Outside"},
            outsideglass : (aGlass)=>{ return aGlass.application === "Inside/Outside"}
          }
          break;
        default:
          return {};
      }
    }
}

