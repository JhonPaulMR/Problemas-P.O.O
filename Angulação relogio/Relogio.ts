export default class Relogio {
    private horas: number = 0;
    private minutos: number = 0;
    private angulo: number = 0;
    public constructor (horas: number, minutos: number, angulo: number){
        this.horas = horas;
        this.minutos = minutos;
        this.angulo = angulo;
    }

    public getHoras(): number {
        return this.horas;
      }
    public setHoras(horas: number): void {
        this.horas = horas;
      }
    public getMinutos(): number {
        return this.minutos;
      }
    public setMinutos(minutos: number): void {
        this.minutos = minutos;
      }
    public getAngulo(): number {
        return this.angulo;
      }
    public setAngulo(angulo: number): void {
        this.angulo = angulo;
      }

    public getAngulacaoH(){
        this.angulo = ((this.horas%12) + (this.minutos/60)) * 30;
        return "Angulo do Ponteiro das Horas: " + (this.angulo).toFixed(2) + "°";
    }
    public getAngulacaoM(){
        this.angulo = this.minutos * 6;
        return "Angulo do Ponteiro dos Minutos: " + (this.angulo).toFixed(2) + "°";
  }
}
