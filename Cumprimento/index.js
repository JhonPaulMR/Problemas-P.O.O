"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("./Pessoa"));
const teclado = require("readline-sync");
let nome = "";
let pessoa = new Pessoa_1.default("Júlio");
let pessoa1 = new Pessoa_1.default(nome);
console.log(pessoa.conheceName());
console.log("Parece que você trouxe um amigo");
console.log(pessoa1.desconheceName());
console.log("Qual seu Nome?");
nome = teclado.question();
pessoa1.setNome(nome);
console.log(pessoa1.conheceName());
