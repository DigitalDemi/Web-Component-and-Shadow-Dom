# UI Libaray 
This project is designed to enhance my understanding of front-end development and the various interactions that can occur and that I can create. It is primarily for learning purposes rather than something I intend to release.

# Documentation 

## create_element function 

### Without
```javascript
connectedCallback() {
     const list = document.createElement('ul');
     list.className = 'item-list';
     this.shadowRoot.appendChild(list);

     for (let i = 0; i < 4; i++) {
         const listItem = document.createElement('li');
         listItem.className = `item item${i + 1}`;

         const input = document.createElement('input');
         input.type = 'radio';
         input.name = 'point';
         input.id = `slide${i + 1}`;
         if (i === 0) {
             input.checked = true;
         }

         const label = document.createElement('label');
         label.htmlFor = `slide${i + 1}`;
         label.className = 'label';

         const heading = document.createElement('h4');
         heading.innerHTML = this.getRandomQuote();

         const span = document.createElement('span');
         span.className = 'control';

         const sliderDiv = document.createElement('div');
         sliderDiv.className = 'slider';

         label.appendChild(heading);
         label.appendChild(span);
         label.appendChild(sliderDiv);
         listItem.appendChild(input);
         listItem.appendChild(label);
         list.appendChild(listItem);


         console.log("Accordion added to page.");

     }
```

### With
```typescript
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
```
