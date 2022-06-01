import GenericGlass from './../Glass/GenericGlass.js';

export default class UIGenericGlass{
  	constructor(structure, filterID, filterHandler, uiHandler) {
    	//
    	this.filterID = filterID;
    	this.structure = structure;
        this.filterHandler = filterHandler;
        this.uiHandler = uiHandler;

    	this.objects = [];
    	this.ui = [];

        var defaultOption = {};
        defaultOption.value = 0;
        defaultOption.text = '-';
        this.ui.push(defaultOption);

        this.to_display = [];

        //this.ui.addEventListener('change', ((event) => {
        //    this.index = event.currentTarget.value;
        //    this.selection_callback(this.objects[event.currentTarget.value - 1]);
        //}));
	}

    set(name) {
        console.log(name, this.objects)
    }

    change(index) {
        this.index = index
        this.selection_callback(this.objects[index - 1]);
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
          //this.ui.remove(1);
    	  this.to_display.push(aGlass);
    	})
	}

	set(index, non_ui_call) {       
    	if (this.ui[index] && !this.no_update ) {
            this.index = index;
    	    this.ui[index].selected = true;
            this.selection_callback(this.objects[this.ui[index].value - 1], non_ui_call);
    	    return true;
    	} else {
    		return false;
    	}
	}

    set_by_name(name, non_ui_call) {       
        for (let index = 0; index < this.ui.length; index++) {

            if (name === this.ui[index].text) {
                this.index = index;
                this.ui[index].selected = true;
                break;
            }
            
        }

        this.selection_callback(this.objects[this.ui[this.index].value - 1], non_ui_call);

        return true;
    }

	recreate(failCallback) {
		this.to_display.forEach(((aGlass) => {
    	  if (aGlass.to_display) {
    	    this.ui.push(aGlass.option);
    	  }
    	}));
        if (this.ui.length === 1) {
            failCallback();
        }
	}

    add(data, glassType = GenericGlass){
        let aMiddleGlass = new glassType(...data);
        var option = {};
        option.value = this.objects.length + 1;
        option.text = aMiddleGlass.glasstype;
        aMiddleGlass.option = option;
        this.objects.push(aMiddleGlass);
    }

}
