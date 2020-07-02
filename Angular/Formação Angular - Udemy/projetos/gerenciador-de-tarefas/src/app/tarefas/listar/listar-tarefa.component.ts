import { Component, OnInit } from '@angular/core';
import { TarefaService, Tarefa } from '../shared';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css']
})
export class ListarTarefaComponent implements OnInit {
  
  tarefas: Tarefa[];

  constructor(private tarefaService: TarefaService) { }

  ngOnInit() {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[] {
    return this.tarefaService.listarTodos();
  }

  remover($event: any, tarefa: Tarefa): void {
    $event.preventDefault();//para desabilitar o carregamento automático da página
    if(confirm('Deseja remover a tarefa "' + tarefa.nome + '"?')){//método do próprio navegador que gera um alerta de confirmação
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

}
