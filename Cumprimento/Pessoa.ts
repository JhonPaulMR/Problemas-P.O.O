export default class Pessoa {
    private nome: string = ""

    public constructor (nome: string){
        this.nome = nome
    }

    public getNome(): string {
        return this.nome;
      }
    public setNome(nome: string): void {
        this.nome = nome;
      }
    public desconheceName(){
      return "Olá"
    }
    public conheceName(){
     return "Olá, " + this.nome + "!";
    }
}
