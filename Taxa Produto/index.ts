import Produto from "./Produto";

const teclado = require("readline-sync");
let nome: string = "";
let preco: number = 0;
let taxa: number = 0;

console.log("Informe o nome do produto: ");
nome = teclado.question();
console.log("Informe o preço pretendido para o produto: ");
preco = teclado.questionFloat();
console.log("Informe a taxa de de divulgação em pórcentagem: ");
taxa = teclado.questionFloat();
let produto1: Produto = new Produto(preco, taxa, nome);
console.log(produto1.getPrecoFinal());
