import { create_element as config } from "./create_element.interface";

const create_element = (config: config): HTMLElement => {
    const {element_name, text, id, classes, attributes} = config
    const element = document.createElement(element_name);
    if (text){
        const text_node = document.createTextNode(text);
        element.appendChild(text_node);
    }
    if (id) config.id = id;
    if (classes) config.classes.join(' ');
    if(attributes){
        for (const [key, value] of Object.entries(attributes)){
            element.setAttribute(key, value);
        }
    }
    return element;
};

export default create_element;
