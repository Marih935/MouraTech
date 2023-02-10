function agrupamento(array){
    let result01 = 0 // 0 < x <= 25
    let result02 = 0 // 25 < x <= 50
    let result03 = 0 // 50 < x <= 75
    let result04 = 0 // 75 < x <= 100
    for(let i = 0; i < array.length; i++){
        if (array[i] >= 0 && array[i] <= 25){
            result01++
        } else if (array[i] > 25 && array[i] <= 50){
            result02++
        } else if (array[i] > 50 && array[i] <= 75){
            result03++
        } else if (array[i] > 75 && array[i] <= 100){
            result04++
        }
    }
    return [result01, result02, result03, result04]
}