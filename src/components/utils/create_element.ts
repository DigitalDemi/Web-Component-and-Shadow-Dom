import { create_element as config } from "./create_element.interface";

const create_element = (config: config): HTMLElement => {
    const {element_name, text, id, classes} = config
    const element = document.createElement(element_name);
    const text_node = document.createTextNode(text);
    element.appendChild(text_node);
    if (text){
        const text_node = document.createElement(text);
        element.appendChild(text_node);
    }
    if (id) config.id = id;
    if (classes) config.classes.join(' ');
    return element;
};

export default create_element;
