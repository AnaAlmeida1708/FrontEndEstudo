//var hora = 19 - hora fixa
var agora = new Date()//pega a data e hora do sistema no momento
var hora = agora.getHours() // pega só a hora da data e hora que foram instanciadas antes
if( hora < 12 ) {
    console.log('Bom dia!')
} else if ( hora < 18 ) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}