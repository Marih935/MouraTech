function febre(arrayMedidas){
    let medidas = []
    for (let i = 0; i < arrayMedidas.length; i++){
        if (arrayMedidas[i] <= 35){
            medidas.push("Hipotermia")
        } else if (arrayMedidas[i] > 35 && arrayMedidas[i] < 37.8){
            medidas.push("Normal")
        } else if (arrayMedidas[i] >= 37.8 && arrayMedidas[i] < 39.6){
            medidas.push("Febre")
        } else if (arrayMedidas[i] >= 39.6 && arrayMedidas[i] < 41){
            medidas.push("Febre Alta")
        } else if (arrayMedidas[i] >= 41){
            medidas.push("Hipertermia")
        }
    }
    return medidas
}

console.log(febre([ 35.41, 33.12, 41.06, 38.9, 40.22 ]))