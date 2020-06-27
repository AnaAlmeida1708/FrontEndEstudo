class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    //importante definir qual o tipo será retornado
    paraArray() {
        //devolvendo um outro array para evitar alterações no original
        return [].concat(this._negociacoes);
    }
}
