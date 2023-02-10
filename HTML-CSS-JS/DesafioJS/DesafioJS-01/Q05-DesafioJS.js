function OrdemDescrescente(a, b){
    return b - a
}

function ordenar_3_numeros(n1, n2, n3){
    let numeros = [n1, n2, n3]
    numeros.sort(OrdemDescrescente)
    return numeros
}