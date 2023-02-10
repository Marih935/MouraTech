//crie uma função dados dois valores (passados com parâmetros) e retorne um array com soma, subtração, multiplicação e divisão desses valores. 
//nome da função: matematica

function matematica(valorA, valorB) {
    const soma = valorA + valorB
    const subtracao = valorA - valorB
    const multiplicacao = valorA * valorB
    const divisao = valorA / valorB
    return [soma, subtracao, multiplicacao, divisao]
}

//console.log(matematica(6, 2)) //teste