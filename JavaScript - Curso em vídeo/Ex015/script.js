function carregar(){
    var msg = window.document.getElementById('msg')
    var foto = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if(hora >=0 && hora < 12){
        foto.src = "imagens/fotomanha.png"
        document.body.style.backgroundColor = '#fcd64a';
    } else if(hora >= 12 && hora < 18){
        foto.src = "imagens/fototarde.png"
        document.body.style.backgroundColor = '#76c7fc'
    } else {
        foto.src = "imagens/fotonoite.png" 
        document.body.style.backgroundColor = '#b035p8'
    }
}

