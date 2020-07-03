import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JogoDaVelhaComponent } from './jogo-da-velha.component';



@NgModule({
  declarations: [
    JogoDaVelhaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [//necessário pois não vamos trabalhar com rotas e vamos renderizar as tags do compnente direto no app component
    JogoDaVelhaComponent
  ]
})
export class JogoDaVelhaModule { }
