"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tanque_1 = __importDefault(require("./Tanque"));
const teclado = require("readline-sync");
let capacidadeTanque = 0, combustivelAtual = 0;
console.log("Informe a capacidade do tanque: ");
capacidadeTanque = teclado.questionFloat();
console.log("Informe a quantidade de combustível atual: ");
combustivelAtual = teclado.questionFloat();
let tanque = new Tanque_1.default(capacidadeTanque, combustivelAtual);
console.log(tanque.getTanque());
