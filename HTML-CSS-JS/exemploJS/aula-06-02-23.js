//PARTE 1
// const numeros = [8, 5, 2, 10, 15, 0, -2, 7]

// const numeros2 = []
// numeros2.push(4)
// numeros2.push(2)
// numeros2.push(8)

// const numeros4 = [...numeros] //clone do array numeros

// const objt1 = {nome: 'Mari', instituicao: 'IFPE'} //objeto
// const objt2 = {...objt1} //clone do objeto objt1
// objt2.idade = 18
// objt2.nome = 'Mariana'
// console.log(objt1)
// console.log(objt2)

// const numeros3 = numeros.sort((a, b) => a - b)

// console.log(numeros3 === numeros)

// numeros4.sort((a, b) => a - b)

// console.log(numeros3)
// console.log(numeros) 

//PARTE 2
const numeros = [8, 5, 2, 10, 15, 0, -2, 7]
console.log(JSON.stringify(numeros))
//ordenar um array
const numeros2 = [...numeros]
numeros2.sort((a, b) => a - b)
console.log(JSON.stringify(numeros2))
//função map em umm array
const numeros3 = numeros.map((v) => v * 2)
console.log(JSON.stringify(numeros3))
//função reduce em um array
const numeros4 = numeros.reduce((soma, valor) => {
    return soma += valor}
    , 0)
console.log(JSON.stringify(numeros4))
//função filter em um array
const numeros5 = numeros.filter((v) => v % 2 === 0) //retorna os pares
console.log(JSON.stringify(numeros5))

//numeros.forEach
const texto1 = 'Mari'
const texto2 = "Mari" + " " + a
const a = 'Cavalcanti'
const texto3 = `Mari`, ${a}

const texto_longo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`