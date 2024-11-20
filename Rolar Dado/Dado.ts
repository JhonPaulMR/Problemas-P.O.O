export default class Dado {
    private readonly faces: number = 0;
    private jogadaAnt: number = 0;

    public constructor (faces: number, jogadaAnt: number){
        this.faces = faces;
        this.jogadaAnt = jogadaAnt;
    }

    public getFaces(): number {
        return this.faces;
      }
    public getJogadaAnt(): number {
        return this.jogadaAnt;
      }
    public setJogadaAnt(jogadaAnt: number): void {
        this.jogadaAnt = jogadaAnt;
      }
    public getUltimoRolar(){
        const jogadaU = this.jogadaAnt
        return jogadaU;
  }
    public getRolarDado(){
        this.jogadaAnt = Math.floor(Math.random() * this.faces) + 1;
        return this.jogadaAnt;
    }
  }
