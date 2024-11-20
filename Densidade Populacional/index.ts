import Populacao from "./Populacao";

const teclado = require("readline-sync");
let nome: string = "";
let habitantes: number = 0;
let area: number = 0;

console.log("Informe o nome da Cidade ou País: ");
nome = teclado.question();
console.log("Qual o número de habitantes?");
habitantes = teclado.questionInt();
console.log("Qual a área em km² de(o) " + nome + "?");
area = teclado.questionFloat();
let populacao: Populacao = new Populacao(habitantes, area, nome);
console.log(populacao.getDensidade(0));
