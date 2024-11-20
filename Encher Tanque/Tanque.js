"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tanque {
    constructor(capacidadeTanque, combustivelAtual) {
        this.capacidadeTanque = 0;
        this.combustivelAtual = 0;
        this.capacidadeTanque = capacidadeTanque;
        this.combustivelAtual = combustivelAtual;
    }
    getCombustivel() {
        return this.combustivelAtual;
    }
    setCombustivel(combustivelAtual) {
        this.combustivelAtual = this.combustivelAtual;
    }
    getCapacidade() {
        return this.capacidadeTanque;
    }
    setCapacidade(capacidadeTanque) {
        this.capacidadeTanque = capacidadeTanque;
    }
    encherTanque() {
        this.combustivelAtual = this.capacidadeTanque;
    }
    abastecerTanque(litros) {
        Math.min(this.combustivelAtual + litros, this.capacidadeTanque);
    }
    getTanque() {
        const porcentagem = ((this.combustivelAtual / this.capacidadeTanque) * 100).toFixed(2);
        return "Combustível Atual: " + (this.combustivelAtual).toFixed(2) + " L | Capacidade: " + (this.capacidadeTanque).toFixed(2) + " L" + "\n" + porcentagem + "% Cheio";
    }
}
exports.default = Tanque;
