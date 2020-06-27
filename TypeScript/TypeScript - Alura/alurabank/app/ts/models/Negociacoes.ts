class Negociacoes {

    private _negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {

        this._negociacoes.push(negociacao);
    }

    //importante definir qual o tipo será retornado
    paraArray(): Negociacao[] {

        //devolvendo um outro array para evitar alterações no original
        return [].concat(this._negociacoes);
    }
}