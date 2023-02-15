//exemplo de saidA:{ 'R$100': 12, 'R$50': 1, 'R$20': 2, 'R$10': 0, 'R$5': 0 }

function saque(number){
    let cedulas = [100, 50, 20, 10, 5]
    let resultado = {}
    if(number < 5 || number%5 != 0){
        return {}
    }
    for(let i = 0; i < cedulas.length; i++){
        resultado[`R$${cedulas[i]}`] = Math.floor(number / cedulas[i])
        number = number % cedulas[i]
    }
    return resultado
}

console.log(saque(11))