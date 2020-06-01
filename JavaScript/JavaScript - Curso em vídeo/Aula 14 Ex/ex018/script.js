function calcular(){
    var num = document.getElementById('n')
    var res = document.getElementById('res')
    var tab = document.getElementById('seltab')
    if(num.value.length == 0){
        alert('Por favor, digite um número')
    } else{
        var n = Number(num.value)
        var i = 1
        tab.innerHTML = ''
        for(i; i <=10 ; i++){
            var r = n*i
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${r}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
    
    
    

}