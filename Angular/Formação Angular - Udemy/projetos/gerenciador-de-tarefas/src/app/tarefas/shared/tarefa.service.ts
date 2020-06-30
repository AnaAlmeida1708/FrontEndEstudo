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

  buscarPorId(id: number): Tarefa {
    const tarefas = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);//itera sobre a lista de tarefas buscando o id informado
  }

  atualizar(tarefa: Tarefa): void {
    const tarefas:Tarefa[] =  this.listarTodos();
    tarefas.forEach((obj, index, objs) => {//obj:tarefa, objs:lista de tarefas
      if(tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  remover(id: number): void {
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);//busca todas as tarefas menos a que o id foi informado, é uma outra forma de iterar na lista
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  alterarStatus(id: number): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if(id === obj.id) {
        objs[index].concluida = !obj.concluida;//inverte o  valor booleano
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
