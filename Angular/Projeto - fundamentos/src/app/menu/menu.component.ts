import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public texto:string;
  constructor() { }

  ngOnInit(): void {
    //aqui eu digo que quando iniciar esse atributo recebe o valor abaixo
    this.texto = 'Olá, testando property binding'
  }

  clicou(){
    this.texto = "Olá, testando event binding"
  }

}
