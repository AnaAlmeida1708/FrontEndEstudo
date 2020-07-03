import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogoDaVelhaService {

  //constantes
  private readonly TAM_TAB: number = 3;//tamanho tabuleiro
  private readonly X: number = 1;//peça 1 é o X
  private readonly O: number = 2;//peça 2 é o 0
  private readonly VAZIO: number = 0;//sem nada

  private tabuleiro: any; //array multimensional, três linhas e três colunas
  private numMovimentos: number; //contabiliza o número de movimentos para identificar se houve empate
  private vitoria: any; //guardar a posição da vitória para destacar em verde

  private _jogador: number; //para representar quem é o jogador que ganhou
  //booleanos para indicar qual tela deve ser exibida
  private _showInicio: boolean;
  private _showTabuleiro: boolean;
  private _showFinal: boolean;

  constructor() { }

  inicializar(): void {
    this._showInicio = true;
    this._showTabuleiro = false;
    this._showFinal = false;
    this.numMovimentos = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }

  inicializarTabuleiro(): void {
    this.tabuleiro = [this.TAM_TAB];
    for(let i = 0; i < this.TAM_TAB; i++){
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }

  get showInicio(): boolean {
    return this._showInicio;
  }

  get showFinal(): boolean {
    return this._showFinal;
  }

  get showTabuleiro(): boolean {
    return this._showTabuleiro;
  }

  get jogador(): number {
    return this._jogador;
  }

  iniciarJogo(): void {
    this._showInicio = false;
    this._showTabuleiro = true;
  }

  

}
