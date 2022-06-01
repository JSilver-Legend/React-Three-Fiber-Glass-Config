import AbstractUIElement from './AbstractUIElement.js'

export default class SoundUIElement extends AbstractUIElement {
  constructor(uiHandler, elementID) {
    //
    super(uiHandler, elementID, "SoundUIElement");

  }

  set(value, at_least) {
    let string = at_least ? "at least " : "";
    string += value + " dB";
    //this.htmlElement.innerHTML = string;
  }

  currentString() {
    return this.current;
  }
}