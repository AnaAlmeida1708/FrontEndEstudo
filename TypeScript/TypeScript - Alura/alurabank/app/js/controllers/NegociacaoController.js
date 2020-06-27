class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._inputData = document.querySelector('#data'); //Casting de um tipo mais genérico para um mais específico
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault(); //para o formulário não ser recarregado após submissão
        //aqui fazemos as conversões dos dados recebidos no formulário para os tipos definidos no construtor da classe negociação
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
    }
}
