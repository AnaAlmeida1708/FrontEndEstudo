import { 
  Directive, 
  HostListener, //Você passa um evento e através desse evento você consegue dizer o que fazer ou não
  ElementRef 
} from '@angular/core';
//usados para sincronizar o valor da view com o do model
import { 
  NG_VALUE_ACCESSOR, 
  ControlValueAccessor 
} from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: NumeroDirective,
    multi: true
  }]
})
export class NumeroDirective implements ControlValueAccessor {

  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) { }

  /**
   * Implementa evento de keyup para o elemento da diretiva
   * KeyUp = É chamado sempre que você pressiona e solta uma tecla
   * 
   * @param $event 
   */
  @HostListener('keyup', ['$event']) 
  onKeyUp($event: any){
    let valor = $event.target.value;//pega o valor que está contido no campo de texto
    let posDecimais = valor.indexOf('.');

    valor = valor.replace(/[\D]/g, '');//expressão regular que verifica tudo que não é número

    if(posDecimais > 0){
      valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais);
    }

    $event.target.value = valor;
    this.onChange(valor);
  }

  //atualiza o valor na model
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  //atualiza valor na model para evento touched
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  //obtem o valor contido na model
  writeValue(value: any): void {
    this.el.nativeElement.value = value;
  }

  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

}
