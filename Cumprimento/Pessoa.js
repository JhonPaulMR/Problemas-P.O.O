"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    constructor(nome) {
        this.nome = "";
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    desconheceName() {
        return "Olá";
    }
    conheceName() {
        return "Olá, " + this.nome + "!";
    }
}
exports.default = Pessoa;
