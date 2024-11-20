"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dado {
    constructor(faces, jogadaAnt) {
        this.faces = 0;
        this.jogadaAnt = 0;
        this.faces = faces;
        this.jogadaAnt = jogadaAnt;
    }
    getFaces() {
        return this.faces;
    }
    getJogadaAnt() {
        return this.jogadaAnt;
    }
    setJogadaAnt(jogadaAnt) {
        this.jogadaAnt = jogadaAnt;
    }
    getUltimoRolar() {
        const jogadaU = this.jogadaAnt;
        return jogadaU;
    }
    getRolarDado() {
        this.jogadaAnt = Math.floor(Math.random() * this.faces) + 1;
        return this.jogadaAnt;
    }
}
exports.default = Dado;
