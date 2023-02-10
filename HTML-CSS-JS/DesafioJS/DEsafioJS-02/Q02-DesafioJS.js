function tabuada(num){
    let resultado = ""
    for (let i = 0; i <= 10; i++) {
        resultado += (num + " x " + i + " = " + num*i)
        if (i < 10){
            resultado += ", "
        }
    }
    let resultadoFinal = resultado 
    resultado = ""
    return resultadoFinal
}

console.log(tabuada(5))