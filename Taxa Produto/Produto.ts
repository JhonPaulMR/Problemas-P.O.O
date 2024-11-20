export default class Produto {
    private preco: number = 0;
    private taxa: number = 0;
    private nome: string = "";

    public constructor (preco: number, taxa: number, nome: string){
        this.preco = preco;
        this.taxa = taxa;
        this.nome = nome;
    }

    public getPreco(): number {
      return this.preco;
    }
  
    public setPreco(preco: number): void {
      this.preco = preco;
    }
    public getTax(): number {
      return this.taxa;
    }
  
    public setTax(taxa: number): void {
      this.taxa = taxa;
    }
    public getNome(): string {
      return this.nome;
    }
  
    public setNome(nome: string): void {
      this.nome = nome;
    }
    public getPrecoFinal(): string {
      let precoF = (this.preco*((this.taxa/100)+1));
      return "O Preço final do produto: " + this.nome + "\nSerá de: R$" + precoF.toFixed(2)  
    }
 
  }
