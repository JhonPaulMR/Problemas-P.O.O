export default class Tanque {
    private capacidadeTanque: number = 0;
    private combustivelAtual: number = 0;

    public constructor (capacidadeTanque: number, combustivelAtual: number){
        this.capacidadeTanque = capacidadeTanque
        this.combustivelAtual = combustivelAtual
    }

    public getCombustivel(): number {
      return this.combustivelAtual;
    }
  
    public setCombustivel(combustivelAtual: number): void {
      this.combustivelAtual = this.combustivelAtual;
    }

    public getCapacidade(): number {
      return this.capacidadeTanque;
    }
  
    public setCapacidade(capacidadeTanque: number): void {
      this.capacidadeTanque = capacidadeTanque;
    }

    public encherTanque(): void{
        this.combustivelAtual = this.capacidadeTanque
    }

    public abastecerTanque(litros: number): void{
        Math.min(this.combustivelAtual + litros, this.capacidadeTanque)
    }

    public getTanque(): string {
        const porcentagem = ((this.combustivelAtual/this.capacidadeTanque)*100).toFixed(2)
        return "Combustível Atual: " + (this.combustivelAtual).toFixed(2) + " L | Capacidade: " + (this.capacidadeTanque).toFixed(2) + " L" + "\n" + porcentagem + "% Cheio" 
    }

}
