export default class AbstractUIElement {
  constructor(uiHandler, elementID, name) {
    //
    this.elementID = elementID;
    this.uiHandler = uiHandler;
    this.htmlElement = document.querySelector(this.elementID);

    this.name = name;
    //this.uiHandler.add(this, this.name);
    this.current = "";
  }

  apply(filterName, filters_already_sets = []) {
    // to define specific filterings for each filter name
    this.filterName = filterName;
    this.active_filter = this.option_names[filterName];
    if(!filters_already_sets.includes(this.name)) {
      filters_already_sets.push(this.name)

      if (this.active_filter().on_set) {
        // some filters might change another filters
        this.active_filter().on_set(filters_already_sets);
      }
    }
    
    this.filterHandler.run_filter();
  }
  
  set() {
    console.error("please redefine");
  }

  currentString() {
    return this.current;
  }
}