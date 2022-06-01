

const glassFilter = {
    fireResistant: {
        selected: 'Brandschutzglas EI30',
        options: ['Brandschutzglas EI30']
    },
    spacer1: {
        selected: '15MM',
        options: ['15MM','16MM','17MM']
    },
    gas1: {
        selected: 'krypton',
        options: ['krypton']
    },
    middleGlass: {
        selected: 'ESG Extraweiss 5mm',
        options: ['ESG Extraweiss 5mm']
    },
    spacer2: {
        selected: '16MM',
        options: ['16MM']
    },
    gas2: {
        selected: 'krypton',
        options: ['krypton']
    },
    outsideGlass: {
        selected: 'vsg 16-2 klarfolie',
        options: ['vsg 16-2 klarfolie']
    },
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
    whiteGlass: {
        selected: 'checked',
        options: [
            'checked',
            'unchecked'
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
    buttJoints: {
        selected: 'unchecked',
        options: [
            'checked',
            'unchecked'
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

    function toLowerFirstLetter(string) {
      return string.charAt(0).toLowerCase() + string.slice(1);
    }

    function update_filters(filteringResult) {

    for (const filter in filteringResult) {
        let keyword = filter.split('Filter')[0];
        keyword = toLowerFirstLetter(keyword);
        glassFilter[keyword].selected = filteringResult[filter];
    }
  }

  export function updateFilter(toUpdate) {
    let filteringResult = window.filters_handler.updateFilter(toUpdate);
    glassFilter[toUpdate.name].selected = toUpdate.option;
    update_filters(filteringResult);
    return glassFilter;
  }
  
  export function updateStructure(toUpdate) {
    window.filters_handler.updateStructure(toUpdate);
    glassFilter[toUpdate.name].selected = toUpdate.option
    return glassFilter;
  }