export default class MyInput extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = "I'm customer el";
    console.log("Custom element added to page.");
  }

  disconnectedCallback() {
    console.log("Custom element removed from page.");
  }
}
