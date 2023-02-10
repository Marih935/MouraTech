const aluno = {} //objeto
aluno.id = 1
aluno.nome = 'Mariana' 
aluno.sobrenome = 'Cavalcanti'
aluno.idade = 18
aluno.ativo = true
aluno.notas = [8, 7, 9, 7]
aluno.responsavel = {
    nome: 'Albênia',
    sobrenome: 'Cavalcanti'}
aluno.nome_completo = (o) => o.nome + ' ' + o.sobrenome

const aluno1 = new Object()
aluno1.id = 2
aluno1.nome = 'Maria' 
aluno1.sobrenome = 'Joana'
aluno1.idade = 23
aluno1.ativo = false
aluno1.notas = [9, 5, 10, 7]
aluno1.responsavel = {
    nome: 'Luana',
    sobrenome: 'Santos'}

const alunos = []
alunos.push(aluno)
alunos.push(aluno1)

// for (const atributo in aluno){ //navegar em um objeto
//     const valor = aluno[atributo]
//     console.log(`${atributo}: ${valor}`)
// }

// for (const iterator of alunos) {
//     console.log(iterator)
// }

alunos.sort((o1, o2) => (o1.id - o2.id))
const alunos_filtro = alunos.filter((v) => !v.ativo)

for (const iterator of alunos_filtro) {
    console.log(iterator)
}