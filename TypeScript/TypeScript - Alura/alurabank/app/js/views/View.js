class View {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    //aqui eu exibo para o usuário o que foi definido no template, através do innerHTML
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
}
