$(document).ready(function(){

/*função para abrir o menu ao clicar no ícone*/ 
    $(".btn-menu").click(function(){
        $(".menu").show();
    });
    
/*função para fechar o menu ao clicar no X */ 
    $(".btn-close").click(function(){
        $(".menu").hide();
    });

});