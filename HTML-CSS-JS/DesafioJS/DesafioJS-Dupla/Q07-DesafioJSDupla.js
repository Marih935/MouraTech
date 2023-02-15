function cifraCesar(frase){
    let novaFrase = ''
    for (let i = 0; i < frase.length; i++) {
        novaFrase += String.fromCharCode(frase.charCodeAt(i) + 3)
    }
    return novaFrase
}

console.log(cifraCesar('Foco e Simplicidade.'))