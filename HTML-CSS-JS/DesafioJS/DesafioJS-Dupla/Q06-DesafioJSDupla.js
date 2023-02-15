function volleyball(string) {
    let vitorias = 0
    let derrotas = 0
    let setsVencidos = 0
    let setsPerdidos = 0
    let array = string.split(",")
    for (let i = 0; i < array.length; i++) {
        let sets = array[i].split("x")
        setsVencidos += Number(sets[0])
        setsPerdidos += Number(sets[1])
        if (sets[0] > sets[1]) {
            vitorias++
        } else {
            derrotas++
        }
    }
    return [vitorias, derrotas, setsVencidos, setsPerdidos]
}

console.log(volleyball("3x1,3x0,2x3,3x0,1x3,3x1"))