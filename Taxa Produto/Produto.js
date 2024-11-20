"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Produto {
    constructor(preco, taxa, nome) {
        this.preco = 0;
        this.taxa = 0;
        this.nome = "";
        this.preco = preco;
        this.taxa = taxa;
        this.nome = nome;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    getTax() {
        return this.taxa;
    }
    setTax(taxa) {
        this.taxa = taxa;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPrecoFinal() {
        let precoF = (this.preco * ((this.taxa / 100) + 1));
        return "O Preço final do produto: " + this.nome + "\nSerá de: R$" + precoF.toFixed(2);
    }
}
exports.default = Produto;
