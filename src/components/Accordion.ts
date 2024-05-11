import { create_element as config} from "./utils/create_element.interface";
import create_element from "./utils/create_element";

class Accordion extends HTMLElement {
  static observedAttributes = [];

  constructor() {
    super();
    this.attachShadow({mode: 'open'})
    
    const config:config = {
        element_name: 'div'
    }

    const accordion = create_element(config);

    this.shadowRoot?.appendChild(accordion);
  }

  connectedCallback() {
    console.log("Accordion added to page.");
  }

  disconnectedCallback() {
    console.log("Accordion removed from page.");
  }

  adoptedCallback() {
    console.log("Accordion moved to new page.");
  }

  attributeChangedCallback(name:string, oldValue:string, newValue:string) {
    console.log(`Attribute ${name} has changed.`);
  }
}

customElements.define("accordion", Accordion);

export default Accordion;


