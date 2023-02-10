function bhaskara(ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if (delta < 0) {
        return resultados = []
    } else {
        let x1 = (-bx + Math.sqrt(delta)) / (2 * ax2)
        let x2 = (-bx - Math.sqrt(delta)) / (2 * ax2)
        if (x1 != x2) {
        resultados.push(x1)
        resultados.push(x2)
        } else {
        resultados.push(x1)
        }
        return resultados
    }
}