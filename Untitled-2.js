import Calculadora from './calculadora.js';

const calculadora = new Calculadora();

const resultadoMultiplicacion = calculadora.multiplicar(6, 4);
const resultadoDivision = calculadora.dividir(8, 2);

console.log(`Multiplicación: ${resultadoMultiplicacion}`);
console.log(`División: ${resultadoDivision}`);