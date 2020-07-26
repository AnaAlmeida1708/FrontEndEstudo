import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable()
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ];

  constructor() { }

  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);//next comando para apresentar para todos que estão na escuta
      observable.complete();//após a finalização informará que terminou e não precisa mais ficar na escuta
    });
    
  }
}
