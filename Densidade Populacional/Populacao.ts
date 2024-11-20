export default class Populacao {
    private habitantes: number = 0;
    private area: number = 0;
    private nome: string = "";

    public constructor (habitantes: number, area: number, nome: string){
        this.habitantes = habitantes;
        this.area = area;
        this.nome = nome;
    }

    public getHab(): number {
      return this.habitantes;
    }
  
    public setHab(habitantes: number): void {
      this.habitantes = habitantes;
    }
    public getArea(): number {
      return this.area;
    }
  
    public setArea(area: number): void {
      this.area = area;
    }
    public getPeso(): string {
      return this.nome;
    }
  
    public setNome(nome: string): void {
      this.nome = nome;
    }
    public getDensidade(densidade: number): string {
      densidade = (this.habitantes/this.area);
      return "A Densidade populacional de(o) " + this.nome + " é de: " + densidade.toFixed(1) + " habitantes por km²"   
    }
 
  }
