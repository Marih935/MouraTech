const numeros = [5, 8, 10, 1, 3, 15, 20]

function OrdenarCrescente(a, b) {
    return a - b
}

function OrdenarDecrescente(a, b) {
    return b - a
}

console.log(numeros.sort(OrdenarDecrescente))