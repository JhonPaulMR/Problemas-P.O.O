"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(peso, descricao, preco) {
        this.peso = 0;
        this.descricao = "";
        this.preco = 0;
        this.peso = peso;
        this.descricao = descricao;
        this.preco = preco;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        this.peso = peso;
    }
    getDescricao() {
        return this.descricao;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    getEtiqueta() {
        return "-----\n" +
            this.descricao + "\n" +
            "Peso: " + (this.peso).toFixed(3) + " Kg\n" +
            "Preço: R$ " + (this.preco).toFixed(2) + "\n" +
            "Preço do quilo: R$ " + (this.preco / this.peso).toFixed(2) + "\n" +
            "-----";
    }
}
exports.default = Produto;
