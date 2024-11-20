"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = __importDefault(require("./Produto"));
const teclado = require("readline-sync");
let peso = 0, preco = 0, descricao = "";
console.log("Digite a descrição do produto: ");
descricao = teclado.question();
console.log("Digite o peso do produto: ");
peso = teclado.questionFloat();
console.log("Digite o preço do produto: ");
preco = teclado.questionFloat();
let produto = new Produto_1.default(peso, descricao, preco);
console.log(produto.getEtiqueta());
