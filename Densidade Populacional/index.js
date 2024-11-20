"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Populacao_1 = __importDefault(require("./Populacao"));
const teclado = require("readline-sync");
let nome = "";
let habitantes = 0;
let area = 0;
console.log("Informe o nome da Cidade ou País: ");
nome = teclado.question();
console.log("Qual o número de habitantes?");
habitantes = teclado.questionInt();
console.log("Qual a área em km² de(o) " + nome + "?");
area = teclado.questionFloat();
let populacao = new Populacao_1.default(habitantes, area, nome);
console.log(populacao.getDensidade(0));
