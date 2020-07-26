import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { TarefaService, Tarefa } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  @ViewChild('formTarefa', { static: true }) formTarefa: NgForm;//injeta uma versão do formulário preenchido
  tarefa:Tarefa;//para gerar o valor da view dentro do nosso component

  constructor(
    private tarefaService: TarefaService,
    private router: Router) { }//usado depois para redirecionar a página quando a tarefa é cadastrada

  ngOnInit() {
    this.tarefa = new Tarefa();//inicialização da tarefa para associar com a interface
  }

  cadastrar(): void {
    if(this.formTarefa.form.valid) { //para só permitir que uma tarefa seja associada se estiver dentro do padrão definido, validado
      this.tarefaService.cadastrar(this.tarefa);
      this.router.navigate(["/tarefas"]); //metodo navigate para redirecionar
    }
  }


}
