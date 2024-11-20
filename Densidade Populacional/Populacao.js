"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Populacao {
    constructor(habitantes, area, nome) {
        this.habitantes = 0;
        this.area = 0;
        this.nome = "";
        this.habitantes = habitantes;
        this.area = area;
        this.nome = nome;
    }
    getHab() {
        return this.habitantes;
    }
    setHab(habitantes) {
        this.habitantes = habitantes;
    }
    getArea() {
        return this.area;
    }
    setArea(area) {
        this.area = area;
    }
    getPeso() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getDensidade(densidade) {
        densidade = (this.habitantes / this.area);
        return "A Densidade populacional de(o) " + this.nome + " é de: " + densidade.toFixed(1) + " habitantes por km²";
    }
}
exports.default = Populacao;
