import { create_element as config } from "./utils/create_element.interface";
import create_element from "./utils/create_element";

class Accordion extends HTMLElement {
    static observedAttributes = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        const elements: config[] = [
            { element_name: 'div' },
            { element_name: 'button' },
            { element_name: 'p', text: 'Hello world' }
        ]

        const para = document.createElement('p');
        para.textContent = 'This is a paragraph inside the Accordion';
        this.shadowRoot?.appendChild(para);

        elements.forEach(config => {
            console.log('Creating element:', config.element_name);
            const element = create_element(config); 
            this.shadowRoot?.appendChild(element);
            console.log('Element appended:', element);
        });

        console.log("Accordion added to page.");
    }

    disconnectedCallback() {
        console.log("Accordion removed from page.");
    }

    adoptedCallback() {
        console.log("Accordion moved to new page.");
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        console.log(`Attribute ${name} has changed.`);
    }
}

customElements.define("ui-accordion", Accordion);

export default Accordion;


