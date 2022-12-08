// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const multiplicar = (numero1, numero2 , textImprimir) => {
  console.log(textImprimir, numero1 + numero2)
}

