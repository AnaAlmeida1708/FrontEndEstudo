export class Tarefa {
    //O uso do ponto de interrogação representa que estes atributos são opcionais
    constructor(
        public id?: number,
        public nome?: string,
        public concluida?: boolean) {}
}