import Tanque from "./Tanque";

const teclado = require("readline-sync");

let capacidadeTanque: number = 0, combustivelAtual: number = 0;

console.log("Informe a capacidade do tanque: ");
capacidadeTanque = teclado.questionFloat();

console.log("Informe a quantidade de combustível atual: ");
combustivelAtual = teclado.questionFloat();

let tanque: Tanque = new Tanque(capacidadeTanque,combustivelAtual);

console.log(tanque.getTanque());