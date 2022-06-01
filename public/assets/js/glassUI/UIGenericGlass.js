import GenericGlass from './../Glass/GenericGlass.js';

export default class UIGenericGlass {
  	constructor(structure, filterID) {
    	//
    	this.filterID = filterID;
    	this.structure = structure;

    	this.objects = [];
    	this.ui = document.querySelector(filterID);

        var defaultOption = document.createElement("option");
        defaultOption.value = 0;
        defaultOption.text = '-';
        this.ui.add(defaultOption);

        this.to_display = [];


        this.ui.addEventListener('change', ((event) => {
            this.selection_callback(this.objects[event.currentTarget.value - 1]);
        }).bind(this));
	}

    selection_callback(element) {
        console.warn('please overwrite')
    }
    
    get_objects() {
        return this.to_display;
    }

	clear() {
    	this.to_display = [];

    	this.objects.forEach((aGlass)=>{
    	  aGlass.to_display = true;
          this.ui.remove(1);
    	  this.to_display.push(aGlass);
    	})
	}

	set(index) {
    	if (this.ui.options[index]) {
    	    this.ui.options[index].selected = true;
            this.selection_callback(this.objects[this.ui.options[index].value - 1]);
    	    return true;
    	} else {
    		return false;
    	}
	}

	recreate(failCallback) {
		this.to_display.forEach(((aGlass) => {
    	  if (aGlass.to_display) {
    	    this.ui.add(aGlass.option);
    	  }
    	}).bind(this));
        if (this.ui.options.length === 1) {
            failCallback();
        }
	}

    add(data, glassType = GenericGlass){
        let aMiddleGlass = new glassType(...data);
        var option = document.createElement("option");
        option.value = this.objects.length + 1;
        option.text = aMiddleGlass.glasstype;
        aMiddleGlass.option = option;
        this.objects.push(aMiddleGlass);
    }

}
