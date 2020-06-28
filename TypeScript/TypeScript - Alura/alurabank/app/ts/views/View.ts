abstract class View<T> {//T é semelhante ao Object no Java é um tipo genérico que pode ajudar na herança
    
    private _elemento: JQuery;

    constructor(seletor: string) {
        this._elemento = $(seletor);
    }

    //aqui eu exibo para o usuário o que foi definido no template, através do innerHTML
    update(model: T): void {
        
        this._elemento.html(this.template(model));  
    }

    abstract template(model: T): string;
    
}