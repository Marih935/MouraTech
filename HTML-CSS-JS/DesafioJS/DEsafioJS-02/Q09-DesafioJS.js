

function ipv4_bits(enderecoIPv4){
    let octetos = enderecoIPv4.split(".")
    let binario = ""
    for(let i = 0; i < octetos.length; i++){
        let octeto = parseInt(octetos[i])
        let bin = octeto.toString(2)
        binario += bin.padStart(8, "0")
    }
    return binario
}

console.log(ipv4_bits("192.168.0.1"))