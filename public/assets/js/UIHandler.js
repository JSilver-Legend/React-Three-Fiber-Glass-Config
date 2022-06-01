import FireResistentGlass from './Glass/FireResistentGlass.js'
import GenericGlass from './Glass/GenericGlass.js'
import FilterHandler from './FilterHandler.js';
import GlassStructure from './Glass/GlassStructure.js';
import UIFireResistant from './glassUI/UIFireResistant.js';
import UIMiddleGlass from './glassUI/UIMiddleGlass.js';
import UIOutsideGlass from './glassUI/UIOutsideGlass.js';

export default class UIHandler {
  constructor(filterHandler, webglComponent, onLoad) {


  	const context = this;

    this.structure = new GlassStructure(webglComponent);

    filterHandler.uiHandler = this;

    this.filterHandler = filterHandler;
    this.webglComponent = webglComponent;

    this.uIFireResistant = new UIFireResistant(this.structure, '.fire-resistant');
    this.uIMiddleGlass = new UIMiddleGlass(this.structure, '.middle-glass');
    this.uIOutsideGlass = new UIOutsideGlass(this.structure, '.outside-glass');

    this.ui_warning = document.querySelector('.warning');

    //
    let onLoadCounter = 3;
    let onLoadCallback = () => {
      onLoadCounter--;
      if (onLoadCounter == 0) {
        onLoad();
        this.filterHandler.takeSnapshot();
      }
    }
  	Papa.parse("./assets/data/frg.csv", {

		  download: true,
		  step: function(row) {
        context.uIFireResistant.add(row.data);
		  },
		  complete: function() {
		  	console.log("frg All done!");
        onLoadCallback();
		  }
	  });

    Papa.parse("./assets/data/Outside-Glass.csv", {
      download: true,
      step: function(row) {
        context.uIOutsideGlass.add(row.data);
      },
      complete: function() {
        console.log("og All done!");
        onLoadCallback();
      }
    });

    Papa.parse("./assets/data/Middle-Glass.csv", {
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
    this.uIMiddleGlass.set(selected);
  }

  select_dropdown_option_og(selected) {
    this.uIOutsideGlass.set(selected);
  }

  select_dropdown_option_frg(selected) {
    this.uIFireResistant.set(selected);
  }

  set_s1_s2(s1, s2, g1, g2) {
    this.structure.setSpacers(s1, s2, g1, g2);
  }

  set_uv(uv) {
    this.structure.setUV(uv);
  }

  set_warning () {
    this.ui_warning.classList.remove('hidden');
  }

  run_filter() {
    this.ui_warning.classList.add('hidden');
    // se to display to true and remove from dropdown

    this.uIFireResistant.clear();
    this.uIMiddleGlass.clear();
    this.uIOutsideGlass.clear();

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
}