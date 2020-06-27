class NegociacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    //aqui eu exibo para o usuário o que foi definido no template, através do innerHTML
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    //aqui é definido o que eu quero exibir para o usuário
    template(model) {
        return `
        <table class= "table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(negociacao => `
                        <tr>
                            <td>${negociacao.data.getDate()} /
                                ${negociacao.data.getMonth() + 1} / 
                                ${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}</td>
                            <td>${negociacao.volume}</td>
                        </tr>
                    `).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
    }
}
