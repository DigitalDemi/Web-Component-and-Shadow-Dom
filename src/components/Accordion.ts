import { create_element as config } from "./utils/create_element.interface";
import create_element from "./utils/create_element";
import load_syles from "./utils/loadcss";

class Accordion extends HTMLElement {
    static observedAttributes = [];

    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
        // This cannot work due to vite dev enviorment
        // TODO : Need to check this when built
        // load_syles("./src/styles/accordion.css", this.shadowRoot).then(css => {
        //     console.log("Styles loaded");
        // }).catch(error => {
        //     console.error('Error loading styles:', error);
        // });
        this.shadowRoot.innerHTML = `
            <style>
                @import url("https://fonts.googleapis.com/css2?family=BIZ+UDGothic&display=swap");

                :root {
                    --text-color: white;
                    --slide-duration: 0.9s;
                    --text-duration: 0.9s;
                    --text-l-height: 1.5em;
                }

                body {
                    font-family: "BIZ UDGothic", sans-serif;
                    color: var(--text-color);
                    background-color: #140f22;
                }

                ul {
                    padding: 0;
                    list-style: none;
                }

                input {
                    display: none;
                }

                label {
                    display: block;
                    cursor: pointer;
                    margin-bottom: 1em;
                    background-color: #FA7070;
                    transition: all 0.35s ease-in-out;
                    padding: 0.5em;
                    border-radius: 0.5em;
                }

                label > h4 {
                    height: 0;
                    overflow: hidden;
                    transition: height var(--text-duration) ease-in-out;
                }

                .slider {
                    overflow: hidden;
                    transition: height var(--slide-duration) ease-in-out;
                    height: 0;
                }

                input:checked + label > .slider,
                input:checked + label > h4 {
                    height: calc(var(--text-l-height) * 3);
                }

                @media (hover: hover) {
                    label:hover {
                        background-color: #63339c; /* Lighter shade when hovered */
                    }

                    input:not(:checked) + label:hover > .slider,
                    input:not(:checked) + label:hover > h4 {
                        height: calc(var(--text-l-height) * 3);
                    }
                }

            </style>
        `;

    }

    getRandomQuote() {

        let quotes = [
            "I'm not a hero because I want your approval. I do it because I want to. — Izuku Midoriya, My Hero Academia",
            "To know sorrow is not terrifying. What is terrifying is to know you can't go back to happiness you could have. — Matsumoto Rangiku, Bleach",
            "Whatever you lose, you'll find it again. But what you throw away you’ll never get back. — Kenshin Himura, Rurouni Kenshin",
            "People’s lives don’t end when they die, it ends when they lose faith. — Itachi Uchiha, Naruto"
        ];
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }
    connectedCallback() {
        const list = create_element({
            element_name: 'ul',
            classes: ['item-list']
        });
        this.shadowRoot.appendChild(list);

        for (let i = 0; i < 4; i++) {
            const listItem = create_element({
                element_name: 'li',
                classes: [`item item${i + 1}`]
            });

            const input = create_element({
                element_name: 'input',
                attributes: {
                    type: 'radio',
                    name: 'point',
                    id: `slide${i + 1}`,
                    checked: i === 0 ? 'true' : undefined  
                }
            });

            const label = create_element({
                element_name: 'label',
                attributes: {
                    for: `slide${i + 1}`,
                    class: 'label'
                }
            });

            const heading = create_element({
                element_name: 'h4',
                text: this.getRandomQuote()
            });

            const span = create_element({
                element_name: 'span',
                classes: ['control']
            });

            const sliderDiv = create_element({
                element_name: 'div',
                classes: ['slider']
            });

            label.appendChild(heading);
            label.appendChild(span);
            label.appendChild(sliderDiv);
            listItem.appendChild(input);
            listItem.appendChild(label);
            list.appendChild(listItem);
        }

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


