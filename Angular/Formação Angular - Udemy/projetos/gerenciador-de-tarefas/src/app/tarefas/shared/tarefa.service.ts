import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable()
export class TarefaService {

  constructor() { }

  /**
   * Usamos este retorno pois a primeira vez que se usa o localStorage
   * ele retorna um undefinied pois estará vazio, neste caso indicamos que se não houver uma lista de tarefas para ele voltar um array vazio
   */
  listarTodos(): Tarefa[] {
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : []; 
  }

  cadastrar(tarefa: Tarefa): void {
    const tarefas = this.listarTodos();// listamos todas as tarefas
    tarefa.id = new Date().getTime();//criamos um id usando timestamp
    tarefas.push(tarefa);//inserimos a tarefa no fim da lista
    localStorage['tarefas'] = JSON.stringify(tarefas); //salvamos a lista, convertendo ela para String que é o formato que o localStorage trabalha
  }

  
}
