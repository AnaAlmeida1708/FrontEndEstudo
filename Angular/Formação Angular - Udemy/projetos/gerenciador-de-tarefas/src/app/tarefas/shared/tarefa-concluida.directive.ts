import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[tarefaConcluida]'
})
export class TarefaConcluidaDirective implements OnInit {

  @Input() tarefaConcluida: boolean;//vai informar através do HTML se o valor falso ou true, precisa ter o mesmo nome da diretiva para funcionar no HTML

  constructor(private el: ElementRef) { }

  ngOnInit(){
    if(this.tarefaConcluida){
      this.el.nativeElement.style.textDecoration = 
      "line-through"
    }
  }

}
