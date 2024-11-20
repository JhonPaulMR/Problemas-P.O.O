"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Relogio {
    constructor(horas, minutos, angulo) {
        this.horas = 0;
        this.minutos = 0;
        this.angulo = 0;
        this.horas = horas;
        this.minutos = minutos;
        this.angulo = angulo;
    }
    getHoras() {
        return this.horas;
    }
    setHoras(horas) {
        this.horas = horas;
    }
    getMinutos() {
        return this.minutos;
    }
    setMinutos(minutos) {
        this.minutos = minutos;
    }
    getAngulo() {
        return this.angulo;
    }
    setAngulo(angulo) {
        this.angulo = angulo;
    }
    getAngulacaoH() {
        this.angulo = ((this.horas % 12) + (this.minutos / 60)) * 30;
        return "Angulo do Ponteiro das Horas: " + (this.angulo).toFixed(2) + "°";
    }
    getAngulacaoM() {
        this.angulo = this.minutos * 6;
        return "Angulo do Ponteiro dos Minutos: " + (this.angulo).toFixed(2) + "°";
    }
}
exports.default = Relogio;
