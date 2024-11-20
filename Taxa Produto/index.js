"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Produto_1 = __importDefault(require("./Produto"));
const teclado = require("readline-sync");
let nome = "";
let preco = 0;
let taxa = 0;
console.log("Informe o nome do produto: ");
nome = teclado.question();
console.log("Informe o preço pretendido para o produto: ");
preco = teclado.questionFloat();
console.log("Informe a taxa de de divulgação em pórcentagem: ");
taxa = teclado.questionFloat();
let produto1 = new Produto_1.default(preco, taxa, nome);
console.log(produto1.getPrecoFinal());
