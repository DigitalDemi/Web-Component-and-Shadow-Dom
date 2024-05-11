import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import './components/Accordion.ts'
import create_element from './components/utils/create_element.ts'
import { create_element as config } from './components/utils/create_element.interface.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML
 = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

const accordion = document.createElement('ui-accordion');  

console.log(accordion)

const appContainer = document.querySelector<HTMLDivElement>('#app');
if (appContainer) {
    appContainer.appendChild(accordion);
} else {
    console.error("The #app container doesn't exist in the DOM.");
}

