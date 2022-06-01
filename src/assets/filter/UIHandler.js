import FireResistentGlass from './Glass/FireResistentGlass.js'
import GenericGlass from './Glass/GenericGlass.js'
import FilterHandler from './FilterHandler.js';
import GlassStructure from './Glass/GlassStructure.js';
import UIFireResistant from './glassUI/UIFireResistant.js';
import UIMiddleGlass from './glassUI/UIMiddleGlass.js';
import UIOutsideGlass from './glassUI/UIOutsideGlass.js';
import SoundUIElement from './elementsUI/SoundUIElement.js';

import Papa from 'papaparse';

export default class UIHandler {
  constructor(filterHandler, webglComponent, onLoad) {


  	const context = this;


    this.soundUIElement = new SoundUIElement(this, ".sound");

    this.structure = new GlassStructure(webglComponent, this.soundUIElement);

    filterHandler.uiHandler = this;

    this.filterHandler = filterHandler;
    this.webglComponent = webglComponent;

    this.uIFireResistant = new UIFireResistant(this.structure, '.fire-resistant', this.filterHandler, this);
    this.uIMiddleGlass = new UIMiddleGlass(this.structure, '.middle-glass', this.filterHandler, this);
    this.uIOutsideGlass = new UIOutsideGlass(this.structure, '.outside-glass', this.filterHandler, this);
    // ui elements

    //this.ui_warning = document.querySelector('.warning');

    //
    let onLoadCounter = 3;
    let onLoadCallback = () => {
      onLoadCounter--;
      if (onLoadCounter === 0) {
        onLoad();
        this.filterHandler.takeSnapshot();
      }
    }
  	Papa.parse("./data/frg.csv", {

		  download: true,
		  step: function(row) {
        context.uIFireResistant.add(row.data);
		  },
		  complete: function() {
		  	console.log("frg All done!");
        onLoadCallback();
		  }
	  });

    Papa.parse("./data/Outside-Glass.csv", {
      download: true,
      step: function(row) {
        context.uIOutsideGlass.add(row.data);
      },
      complete: function() {
        console.log("og All done!");
        onLoadCallback();
      }
    });

    Papa.parse("./data/Middle-Glass.csv", {
      download: true,
      step: function(row) {
        context.uIMiddleGlass.add(row.data);
      },
      complete: function() {
        console.log("mg All done!");
        onLoadCallback();
      }
    });

  }

  select_dropdown_option_mg(selected) {
    this.uIMiddleGlass.set(selected, true);
  }

  select_dropdown_option_og(selected) {
    this.uIOutsideGlass.set(selected, true);
  }

  select_dropdown_option_frg(selected) {
    this.uIFireResistant.set(selected, true);
  }

  select_option_og(selected) {
    this.uIOutsideGlass.set_by_name(selected, true);
  }

  select_option_mg(selected) {
    this.uIMiddleGlass.set_by_name(selected, true);
  }

  select_option_frg(selected) {
    this.uIFireResistant.set_by_name(selected, true);
  }

  set_s1_s2(s1, s2, g1, g2) {
    this.structure.setSpacers(s1, s2, g1, g2);
  }

  set_uv(uv) {
    this.structure.setUV(uv);
  }

  set_warning () {
    //this.ui_warning.classList.remove('hidden');
  }

  run_filter() {
    //this.ui_warning.classList.add('hidden');
    // se to display to true and remove from dropdown

    this.uIFireResistant.clear();
    this.uIMiddleGlass.clear();
    this.uIOutsideGlass.clear();
    //ui elements
    // running the filter
    this.filterHandler.run(
      this.uIFireResistant.get_objects(),
      this.uIMiddleGlass.get_objects(),
      this.uIOutsideGlass.get_objects()
    );

  	// redraw dropdowns
    this.uIFireResistant.recreate(this.set_warning.bind(this));
    this.uIMiddleGlass.recreate(this.set_warning.bind(this));
    this.uIOutsideGlass.recreate(this.set_warning.bind(this));

    this.uIFireResistant.set(1);
    // filter callbacks
    this.filterHandler.callback();
  }

  update_structure() {

  }
}