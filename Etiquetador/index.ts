import Produto from "./Produto";

const teclado = require("readline-sync");

let peso: number = 0, preco: number = 0, descricao: string = "";

console.log("Digite a descrição do produto: ");
descricao = teclado.question();

console.log("Digite o peso do produto: ");
peso = teclado.questionFloat();

console.log("Digite o preço do produto: ");
preco = teclado.questionFloat();

let produto: Produto = new Produto(peso,descricao,preco);

console.log(produto.getEtiqueta());