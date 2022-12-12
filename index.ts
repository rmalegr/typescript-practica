// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const multiplicar = (
  numero1: number,
  numero2: number,
  textImprimir: string
) => {
  console.log(textImprimir, numero1 * numero2);
};
console.log(multiplicar(5, 7, 'Producto'));
let tuplas: [string, Number] = ['rodrigo', 36];

let arregloNumeros: string[] = ['Peres'];

console.log(arregloNumeros);
