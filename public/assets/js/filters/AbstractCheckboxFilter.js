import AbstractFilter from './AbstractFilter.js'

export default class AbstractCheckboxFilter extends AbstractFilter{
  constructor(filterHandler, filterID) {
    super(filterHandler, filterID);
    this.option_names = {
    	'checked' : this.isCheckedFilter,
    	'unchecked' : this.isUncheckedFilter
    }

    this.filterName = "unchecked";

  }

  isUncheckedFilter() {
    return {};
  }

  prepare_ui () {
    const select_name = document.querySelector(this.filterID);

    document.querySelector(this.filterID).addEventListener('change', ((event) => {
    	this.apply(event.currentTarget.checked? 'checked' : 'unchecked');
      this.filterHandler.takeSnapshot();
    }).bind(this));
  }

  select_dropdown_option(mode, filters_already_sets) {

    document.querySelector(this.filterID).checked = mode === 'checked'? true : false;

    this.apply(mode, filters_already_sets);
  }
}
