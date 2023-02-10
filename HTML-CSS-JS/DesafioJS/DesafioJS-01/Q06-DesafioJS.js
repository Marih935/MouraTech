function peso_ideal(altura, sexo) {
    if (sexo == 'm') {
        return (72.7 * altura) - 58
    } else {
        return (62.1 * altura) - 44.7
    }
}