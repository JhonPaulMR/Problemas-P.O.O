"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dado_1 = __importDefault(require("./Dado"));
const teclado = require("readline-sync");
const dado = new Dado_1.default(6, 0);
let resposta = "";
console.log("Quer Rolar o Dado?");
resposta = teclado.question();
console.log("O Dado Rolou: " + dado.getRolarDado() + "!");
console.log("Quer Rolar o Dado Novamente?");
resposta = teclado.question();
console.log("Última Jogada: " + dado.getUltimoRolar());
console.log("O Dado Rolou: " + dado.getRolarDado() + "!");
