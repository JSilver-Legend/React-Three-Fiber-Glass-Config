// // main logic
// import UIHandler from './UIHandler.js';
// // filters
// import FilterHandler from './FilterHandler.js';
// // webgl
// import WebGlComponent from './WebGlComponent.js';

// function onReady() {

//   let webGlComponent = new WebGlComponent(document.getElementsByClassName( 'webgl-canvas' )[0]);

//   let filterHandler = new FilterHandler();

//   let uiHandler = new UIHandler(filterHandler, webGlComponent,
//     ()=>{
//       console.log('Data ready');
//       filterHandler.setup();
//   });
  
// };

// // on ready calll
// if (document.readyState !== "loading") {
//   onReady(); // Or setTimeout(onReady, 0); if you want it consistently async
// } else {
//   document.addEventListener("DOMContentLoaded", onReady);
// }

const glassFilter = {
  structure: {
      selected: '2-glazed',
      options: ['1-glazed (mono)','2-glazed-ISO','3-glazed-ISO']
  },
  manufacturer: {
      selected: 'AGC',
      options: ['Glas Trösch','AGC']
  },
  class: {
      selected: 'EI30',
      options: ['EI30','EI60','EI90'] 
  },
  insulation: {
      selected: 'U-Value 1.7',
      options: [
          "U-Value 5.4",
          "U-Value 1.7",
          "U-Value 1.4",
          "U-Value 1.3",
          "U-Value 1.2",
          "U-Value 1.1",
          "U-Value 1.0",
          "U-Value 0.9",
          "U-Value 0.8",
          "U-Value 0.7",
          "U-Value 0.6",
          "U-Value 0.5"
      ]
  },
  application: {
      selected: 'Inside',
      options: [
          "Inside",
          "Inside/Outside",
          "Outside/Outside"
      ]
  },
  clear: {
      selected: 'yes',
      options: [
          'yes',
          'no'
      ]
  },
  resistance: {
      selected: 'RC 2 (WK 2) / P4A',
      options: [
          "RC 2 (WK 2) / P4A",
      "RC 3 (WK 3) / P5A",
      "RC 4 (WK 4) / P6B",
      "RC 5 (WK 5) / P7B",
      "RC 6 (WK 6) / P8B"
      ]
  },
  joints: {
      selected: 'yes',
      options: [
          'yes',
          'no'
      ]
  },
  sound: {
      selected: 'wert',
      options: ['wert']
  }
}

export function getInitialFilter() {
  return glassFilter;
}
