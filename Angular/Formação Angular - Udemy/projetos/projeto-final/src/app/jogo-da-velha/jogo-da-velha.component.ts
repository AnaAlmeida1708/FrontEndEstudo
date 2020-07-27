import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }

  get showInicio(): boolean {
    return this.jogoDaVelhaService.showInicio;
  }

  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.showTabuleiro;
  }

  get showFinal(): boolean {
    return this.jogoDaVelhaService.showFinal;
  }

  iniciarJogo($event: any): void {
    $event.preventDefault();
    this.jogoDaVelhaService.iniciarJogo();
  }

  //realiza uma jogada ao clicar em algum lugar do tabuleiro
  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  //define a se a peça a ser exibida é X
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }
  
  //define a se a peça a ser exibida é O
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  //retorna se deve ser exibida a marcação de vitória
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  get jogador(): number {
    return this.jogoDaVelhaService.jogador;
  }

  novoJogo($event: any): void {
    $event.preventDefault();
    this.jogoDaVelhaService.novoJogo();
  }

}
