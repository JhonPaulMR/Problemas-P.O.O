export default class Produto {
    private peso: number = 0;
    private descricao: string = "";
    private preco: number = 0;

    public constructor (peso: number, descricao: string, preco: number){
        this.peso = peso
        this.descricao = descricao
        this.preco = preco
    }

    public getPeso(): number {
        return this.peso;
      }
    public setPeso(peso: number): void {
        this.peso = peso;
      }
    public getDescricao(): string {
        return this.descricao;
      }
    public setDescricao(descricao: string): void {
        this.descricao = descricao;
      }
    public getPreco(): number {
        return this.preco;
      }   
    public setPreco(preco: number): void {
        this.preco = preco;
      }
    
    public getEtiqueta(): string{
        return "-----\n" + 
               this.descricao + "\n" +
               "Peso: " + (this.peso).toFixed(3) + " Kg\n" +
               "Preço: R$ " + (this.preco).toFixed(2) + "\n" +
               "Preço do quilo: R$ " + (this.preco/this.peso).toFixed(2) + "\n" +
               "-----"         
    }

}
