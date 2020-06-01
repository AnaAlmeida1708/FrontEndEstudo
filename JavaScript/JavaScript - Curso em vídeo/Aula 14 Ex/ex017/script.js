function contar(){
    var ini = Number(document.getElementById('txini').value)
    var fim = Number(document.getElementById('txfim').value)
    var passo = Number(document.getElementById('txpasso').value)
    var res = document.getElementById('res')

    if(ini == "" || fim == "" || passo ==""){
        alert('[ERRO] Faltam dados!') 
    } else{
        res.innerHTML = 'Contando: <br>'
        if(ini < fim){
            for(let c = ini; c <= fim; c += passo){
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            for(let c = ini; c >= fim; c -= passo){
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }

}