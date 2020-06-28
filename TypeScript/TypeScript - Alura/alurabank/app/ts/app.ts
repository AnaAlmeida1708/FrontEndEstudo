const controller = new NegociacaoController();

$('.form').submit(controller.adiciona.bind(controller));

/*
Exemplo sem Jquery
document.querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
*/
