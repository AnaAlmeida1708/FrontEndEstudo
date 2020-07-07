import { Component, OnInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { ConversaoResponse, Conversao } from '../models';
import { ConversorService } from '../services';

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

  //para comunicar o componente de conversão com o componente modal, permite receber um parâmetro que vem externo passado de outro componente, basta chamá-lo usando o mesmo nome da tag html já fará com que ele entenda a conversão
  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();

  //Neste caso o EventEmitter funciona "parecido" com um observable, mas do lado inverso, aqui criamos a anotação com o nome do método que queremos e também um método que diz para chamar o evento quando ele ocorrer e no HTML chamamos o mesmo nome e dizemos o que ele deve fazer Ex: (onConfirm)="init()" neste caso o onConfirm informa que o método init() do nosso componente pai deve ser chamado
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(private conversorService: ConversorService) { }

  ngOnInit(): void {
  }

  novaConsulta(){
    this.onConfirm.emit();
  }

  get valorConvertido(): string {
    if(this.conversaoResponse === undefined){
      return '0';
    }

    return(this.conversao.valor * 
      this.conversaoResponse.rates[this.conversao.moedaPara]).toFixed(2);
  }

  get cotacaoPara(): number {
    return this.conversorService.cotacaoPara(this.conversaoResponse, this.conversao)
  }

  get cotacaoDe(): string {
    return this.conversorService.cotacaoDe(this.conversaoResponse, this.conversao);
  }

  get dataCotacao(): string {
    return this.conversorService.dataCotacao(
      this.conversaoResponse
    );
  }

}
