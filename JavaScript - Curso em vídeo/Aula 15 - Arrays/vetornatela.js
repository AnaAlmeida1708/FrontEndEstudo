var vet = [6,7,2,5,9]
//for(let i = 0; i < vet.length; i++){
//    console.log(`A posição ${i} do vet é ${vet[i]}`)
//}

for(let pos in vet){
    console.log(`A posição ${pos} do vet é ${vet[pos]}`)
}
console.log('Mostra posição do elemento')
var index = vet.indexOf(10)
if(index == -1){
    console.log('Elemento não encontrado')
}else{
    console.log(`Elemento na posicao ${index}`)
}