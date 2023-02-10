function fatorial(num){
    let numInicial = num
    if (num == 0){
        return "0! = 1"
    } else if(num == 1){
        return "1! = 1 = 1"
        } else{
        let multiplicacao = ""
        let resultado = 1 * numInicial
        for (let i = num; i > 0; i--){
            if (i > 1){
                multiplicacao += (num + " X " )
                num--
                resultado *= num
            } else{
                multiplicacao += (num)
            }
        }
        let multiplicacaoFinal = multiplicacao
        multiplicacao = ""
        return numInicial + "!" + " = " + multiplicacaoFinal + " = " + resultado
    }
}

console.log(fatorial(2))