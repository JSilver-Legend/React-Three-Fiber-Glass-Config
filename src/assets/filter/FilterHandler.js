import InsulationFilter from './filters/InsulationFilter.js';
import ClassFilter from './filters/ClassFilter.js';
//import SoundFilter from './filters/SoundFilter.js';
import WhiteGlassFilter from './filters/WhiteGlassFilter.js';
import ButtJointsFilter from './filters/ButtJointsFilter.js';
import ManufacturerFilter from './filters/ManufacturerFilter.js';
import StructureFilter from './filters/StructureFilter.js';
import ApplicationFilter from './filters/ApplicationFilter.js';
import ResistanceFilter from './filters/ResistanceFilter.js';

export default class FilterHandler {
  constructor() {
    this.filters = {}
    this.snapshots = [];  

    // we instantiate all the filters
    this.classFilter = new ClassFilter(this, ".class");
    //this.soundFilter = new SoundFilter(this, ".sound");
    this.whiteGlassFilter = new WhiteGlassFilter(this, ".white-glass");
    this.buttJointsFilter = new ButtJointsFilter(this, ".butt-joints");
    this.manufacturerFilter = new ManufacturerFilter(this, ".manufacturer");
    this.applicationFilter = new ApplicationFilter(this, ".application");
    this.resistanceFilter = new ResistanceFilter(this, ".resistance");
      
    this.structureFilter = new StructureFilter(this,".structure");
    this.insulationFilter = new InsulationFilter(this,".insulation");
	}

  setup(){
    this.insulationFilter.select_dropdown_option("U-Value 5.4");
    this.structureFilter.select_dropdown_option("1-glazed (mono)");
    this.classFilter.select_dropdown_option("EI30");
    this.applicationFilter.select_dropdown_option("Inside");
  }

  run_filter() {
    this.uiHandler.run_filter();
  }

  select_dropdown_option_mg (id) {
    this.uiHandler.select_dropdown_option_mg(id)
  }
  select_dropdown_option_og (id) {
    this.uiHandler.select_dropdown_option_og(id)
  }
  set_s1_s2 (s1,s2,g1,g2) {
    this.uiHandler.set_s1_s2(s1,s2,g1,g2)
  }
  set_uv (uv) {
    this.uiHandler.set_uv(uv)
  }

  add(filter, name) {
    this.filters[name] = filter;
  }

  get(name) {
    if(this.filters[name]) {
      return this.filters[name];
    } else {
      console.error('filter has not been created just yet')
    }
  }

  run(frg, middglass, outsideglass) {
    const ctx = this;
    Object.keys(this.filters).forEach((key,index) => {
      ctx.filters[key].run(
          frg,
          middglass,
          outsideglass
        );
    });
  }

  getSnapshop() {
    let snapshop = {}
    Object.keys(this.filters).forEach(((key,index) => {
      snapshop[key] = this.filters[key].activeFilterName();
    }))
    return snapshop;
  }

  takeSnapshot () {
    this.snapshots.push(this.getSnapshop());

    let snap_length = this.snapshots.length;
    if (snap_length > 1) {
      const previous = this.snapshots[snap_length - 2];
      const current = this.snapshots[snap_length - 1];

      const difference = [];

      Object.keys(this.filters).forEach(((key,index) => {
        if (current[key] !== previous[key]) {
          difference.push(key)
        }
      }));
      console.log(difference)
      if(difference.length > 1) {
        alert("more than one filter was modified :" + difference)
      }
    }
  }

  update_filter(name, option) {
    this[name + 'Filter'].select_dropdown_option(option);
    return this.getSnapshop();
  }

  callback() {
    const ctx = this;
    Object.keys(this.filters).forEach((key,index) => {
      ctx.filters[key].callback();
    });
  }

}

