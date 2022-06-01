import FireResistentGlass from './../Glass/FireResistentGlass.js'

export default class AbstractFilter {
  constructor(filterHandler, filterID) {
    //
    this.filterID = filterID;
    this.filterHandler = filterHandler;

    this.filterHandler.add(this, this.constructor.name);
    this.filterName = "-";

  	this.option_names = [];

    this.active_filter = () => { return {} }
  }

  apply(filterName, filters_already_sets = []) {
    // to define specific filterings for each filter name
    this.filterName = filterName;
    this.active_filter = this.option_names[filterName];
    if(!filters_already_sets.includes(this.constructor.name)) {
      filters_already_sets.push(this.constructor.name)

      if (this.active_filter().on_set) {
        // some filters might change another filters
        this.active_filter().on_set(filters_already_sets);
      }
    }
    
    this.filterHandler.run_filter();
  }

  filter (element) {
  	return this.active_filter(element);
  }

  select_dropdown_option(option, filters_already_sets = []) {
    if(!filters_already_sets.includes(this.constructor.name)) {
      for (let i = 0 ; i < document.querySelector(this.filterID).options.length; i++) {
        if (document.querySelector(this.filterID).options[i].name === option+"-option") {
          document.querySelector(this.filterID).options[i].selected = true;
          break;
        }
      }  
      this.apply(option, filters_already_sets);
    }
  }

  prepare_ui () {
    const select_name = document.querySelector(this.filterID);
    if (select_name === null) {
      return;
    }
    this.option_names["-"] = this.isFilter;

    Object.keys(this.option_names).forEach(function(key,index) {
      var option = document.createElement("option");
      option.text = key;
      option.value = key;
      option.name = (key + "-option");
      select_name.add(option);
      option.selected = true;
    })

    document.querySelector(this.filterID).addEventListener('change', ((event) => {
      this.apply(event.currentTarget.value);
      this.filterHandler.takeSnapshot();
    }));
  }

  isFilter() {
    return {};
  }
  
  activeFilterName() {
    return this.filterName;
  }

  isActive() {
    return this.filterName !== "-";
  }

  callback() {
    const filters = this.active_filter();

    if (filters.callback) {
      filters.callback.bind(this)();
    }
  }

  run(frg, middglass, outsideglass) {
    const filters = this.active_filter();

    if (filters.frg) {
      frg.filter((aGlass)=>{
        if (aGlass.to_display) {
          aGlass.to_display = filters.frg(aGlass);  
        }
        return aGlass.to_display;
      });
    }

    if (filters.middglass) {
      middglass.filter((aGlass)=>{
        if (aGlass.to_display) {
          aGlass.to_display = filters.middglass(aGlass);  
        }
        return aGlass.to_display;
      })
    }

    if (filters.outsideglass) {
      outsideglass.filter((aGlass)=>{
        if (aGlass.to_display) {
          aGlass.to_display = filters.outsideglass(aGlass);  
        }
        return aGlass.to_display;
      })
    }

  }
}