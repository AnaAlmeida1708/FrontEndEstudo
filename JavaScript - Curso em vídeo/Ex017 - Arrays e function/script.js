var num = document.getElementById('txn')
var lista = document.getElementById('lista')
var res = document.getElementById('res')
var valores = []

function adicionar(){
    if(isNum(num.value) && inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
            item.text = `Valor ${num.value} adicionado.`
            lista.appendChild(item)
            res.innerHTML = ''
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function isNum(n){
    if( Number(n) >= 1 && Number(n) <= 100 ){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n) != - 1)){
        return true
    } else {
        return false
    }
}

let maior = function maiorValor(v){
    let maior =0
    for(let i = 0; i < v.length; i++){
        if(maior < v[i]){
            maior = v[i]
        }
    }
    return maior
}

let menor = function menorValor(v){
    let menor = Number.MAX_VALUE
    for(let i = 0; i < v.length; i++){
        if(menor > v[i]){
            menor = v[i]
        }
    }
    return menor
}

let total = function total (v){
    let total = 0
    for(let i = 0; i < v.length; i++){
        total += v[i]
        }
    return total
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        res.innerHTML += `Ao todo, temos ${valores.length} números cadastrados. <br> <br>`
        res.innerHTML += `O maior valor informado foi ${maior(valores)} <br> <br>`
        res.innerHTML += `O menor valor informado foi ${menor(valores)} <br> <br>`
        res.innerHTML += `Somando todos os valores, temos ${total(valores)}<br> <br>`
        res.innerHTML += `A média dos valores digitados é ${total(valores)/valores.length}`
    }
}

/**
 * FUNCTION FINALIZAR VERSÃO GUANABARA
 * 
 * function finalizar(){
 * if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let media = 0
        let soma = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `Ao todo, temos ${tot} números cadastrados. <br> <br>`
        res.innerHTML += `O maior valor informado foi ${maior} <br> <br>`
        res.innerHTML += `O menor valor informado foi ${menor} <br> <br>`
        res.innerHTML += `Somando todos os valores, temos ${soma}<br> <br>`
        res.innerHTML += `A média dos valores digitados é ${media}`
    }
 * }
 */