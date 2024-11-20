import Relogio from "./Relogio";

const teclado = require("readline-sync");

let horas: number = 0;
let minutos: number = 0;

console.log("Informe as Horas: ");
horas = teclado.questionInt();
console.log("Informe Os Minutos: ");
minutos = teclado.questionInt();

let relogio: Relogio = new Relogio(horas, minutos, 0);

console.log(relogio.getAngulacaoH());
console.log(relogio.getAngulacaoM());
