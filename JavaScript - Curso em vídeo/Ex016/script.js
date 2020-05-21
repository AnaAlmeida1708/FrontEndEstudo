function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade< 10){
                img.setAttribute('src', 'imagens/bebemenino.png')
            } else if(idade < 21){
                img.setAttribute('src', 'imagens/homemjovem.png')
            } else if(idade < 60){
                img.setAttribute('src', 'imagens/homemadulto.png')
            } else {
                img.setAttribute('src', 'imagens/homemidoso.png')
            }
        } else {
            genero = 'mulher'
            if(idade >= 0 && idade< 10){
                img.setAttribute('src', 'imagens/bebemenina.png')
            } else if(idade < 21){
                img.setAttribute('src', 'imagens/mulherjovem.png')
            } else if(idade < 60){
                img.setAttribute('src', 'imagens/mulheradulta.png')
            } else {
                img.setAttribute('src', 'imagens/mulheridosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
        img.style.marginTop = '10px';
        img.style.borderRadius = '125px';
        res.appendChild(img)
    }
}