function imc(altura, peso){
    let imc = peso / (altura * altura)
    if (imc < 18.5){
        return "Baixo peso"
    } else if (imc > 18.5 && imc < 25){
        return "Peso normal"
    } else if (imc > 25 && imc < 30){
        return "Excesso de peso"
    } else if (imc > 30 && imc < 35){
        return "Obesidade"
    } else if (imc > 35){
        return "Obesidade extrema"
    }
}