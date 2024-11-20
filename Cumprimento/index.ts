import Pessoa from "./Pessoa";

const teclado = require("readline-sync");

let nome: string = "";
let pessoa: Pessoa = new Pessoa("Júlio");
let pessoa1: Pessoa = new Pessoa(nome);

console.log(pessoa.conheceName());
console.log("Parece que você trouxe um amigo");
console.log(pessoa1.desconheceName());
console.log("Qual seu Nome?");
nome = teclado.question();
pessoa1.setNome(nome)
console.log(pessoa1.conheceName());
