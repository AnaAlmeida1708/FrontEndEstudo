/**
 * Serviço responsável por executar as operações da calculadora
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
//Define as constantes utilizadas para identificar as operações de cálculo --readonly--
static readonly SOMA: string = '+';
static readonly SUBTRACAO: string = '-';
static readonly DIVISAO: string = '/';
static readonly MULTIPLICACAO: string = '*';

  constructor() { }

/**
 * Recebe dois números e a operação e devolve o resultado
 * @param num1 
 * @param num2 
 * @param operacao 
 * @return resultado
 */
calcular(num1: number, num2: number, operacao: string): number {
  let resultado: number; //armazena o resultado da operação

  switch(operacao) {
    case CalculadoraService.SOMA:
      resultado = num1 + num2;
    break;
    case CalculadoraService.SUBTRACAO:
      resultado = num1 - num2;
    break;
    case CalculadoraService.MULTIPLICACAO:
      resultado = num1 * num2;
    break;
    case CalculadoraService.DIVISAO:
      resultado = num1 / num2;
    break;
    default:
      resultado = 0;
  }

  return resultado;

}



}
