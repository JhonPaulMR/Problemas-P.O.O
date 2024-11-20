"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Relogio_1 = __importDefault(require("./Relogio"));
const teclado = require("readline-sync");
let horas = 0;
let minutos = 0;
console.log("Informe as Horas: ");
horas = teclado.questionInt();
console.log("Informe Os Minutos: ");
minutos = teclado.questionInt();
let relogio = new Relogio_1.default(horas, minutos, 0);
console.log(relogio.getAngulacaoH());
console.log(relogio.getAngulacaoM());
