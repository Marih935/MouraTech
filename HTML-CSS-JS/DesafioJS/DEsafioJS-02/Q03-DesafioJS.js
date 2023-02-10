function intervalo(valorInicial, valorFinal){
    let array = []
    if (valorFinal < valorInicial){
        for(let i = valorInicial; i >= valorFinal; i--){
            array.push(i)
        }
    } else {
        for(let i = valorInicial; i <= valorFinal; i++){
            array.push(i)
        }
    }
    return array
}