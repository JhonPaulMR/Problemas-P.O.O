import Dado from "./Dado";

const teclado = require("readline-sync");
const dado = new Dado(6, 0);
let resposta: string = "";

console.log("Quer Rolar o Dado?");
resposta = teclado.question();
console.log("O Dado Rolou: " + dado.getRolarDado() + "!");
console.log("Quer Rolar o Dado Novamente?");
resposta = teclado.question();
console.log("Última Jogada: " + dado.getUltimoRolar());
console.log("O Dado Rolou: " + dado.getRolarDado() + "!");

