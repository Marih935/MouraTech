// Escreva uma função que receberá como parâmetro um array de objetos(como o abaixo) que representam os jogos de um dos grupo da copa do mundo.

// [
//     {Time1: "Suíça",    P1: 1, Time2: "Camarões", P2: 0},
//     {Time1: "Brasil",   P1: 2, Time2: "Sérvia",   P2: 0},
//     {Time1: "Camarões", P1: 3, Time2: "Sérvia",   P2: 3},
//     {Time1: "Brasil",   P1: 1, Time2: "Suíça",    P2: 0},
//     {Time1: "Sérvia",   P1: 2, Time2: "Suíça",    P2: 3},
//     {Time1: "Camarões", P1: 1, Time2: "Brasil",   P2: 0},
// ];

// A função deverá retornar outro array de objetos com a classificação deste grupo, conforme o exemplo abaixo:
// [
//     { Time: 'Brasil',     P: 6, J: 3, V: 2, E: 0, D: 1, GP: 3, GC: 1, SG:  2 },
//     { Time: 'Suíça',      P: 6, J: 3, V: 2, E: 0, D: 1, GP: 4, GC: 3, SG:  1 },
//     { Time: 'Camarões',   P: 4, J: 3, V: 1, E: 1, D: 1, GP: 4, GC: 4, SG:  0 },
//     { Time: 'Sérvia',     P: 1, J: 3, V: 0, E: 1, D: 2, GP: 5, GC: 8, SG: -3 }
// ]

// Legenda: P - Pontos; J - Jogos; V - Vitórias; E - Empates; D - Derrotas; GP - Gols pró (marcados); GC Gols contra (sofridos); SG - Saldo de gols.

// Observação: Em casos de empate nos pontos seguir os seguintes critérios de desempate: Mais vitórias (V), Maior saldo de gols (SG) e Mais gols marcados (GP).

// Nome da função: ranking

// Paramêtros: [{}, {}, ...]

// Retorno: [{}, {}, ...]

function ranking(array){
    let times = [];
    let classificacao = [];
    for(let i = 0; i < array.length; i++){
        if(!times.includes(array[i].Time1)){
            times.push(array[i].Time1);
        }
        if(!times.includes(array[i].Time2)){
            times.push(array[i].Time2);
        }
    }
    for(let i = 0; i < times.length; i++){
        let time = {Time: times[i], P: 0, J: 0, V: 0, E: 0, D: 0, GP: 0, GC: 0, SG: 0};
        for(let j = 0; j < array.length; j++){
            if(array[j].Time1 == times[i]){
                time.J++;
                time.GP += array[j].P1;
                time.GC += array[j].P2;
                time.SG = time.GP - time.GC;
                if(array[j].P1 > array[j].P2){
                    time.P += 3;
                    time.V++;
                }else if(array[j].P1 == array[j].P2){
                    time.P++;
                    time.E++;
                }else{
                    time.D++;
                }
            }else if(array[j].Time2 == times[i]){
                time.J++;
                time.GP += array[j].P2;
                time.GC += array[j].P1;
                time.SG = time.GP - time.GC;
                if(array[j].P2 > array[j].P1){
                    time.P += 3;
                    time.V++;
                }else if(array[j].P2 == array[j].P1){
                    time.P++;
                    time.E++;
                }else{
                    time.D++;
                }
            }
        }
        classificacao.push(time);
    }
    classificacao.sort(function(a, b){
        if(a.P > b.P){
            return -1;
        }else if(a.P < b.P){
            return 1;
        }else{
            if(a.V > b.V){
                return -1;
            }else if(a.V < b.V){
                return 1;
            }else{
                if(a.SG > b.SG){
                    return -1;
                }else if(a.SG < b.SG){
                    return 1;
                }else{
                    if(a.GP > b.GP){
                        return -1;
                    }else if(a.GP < b.GP){
                        return 1;
                    }else{
                        return 0;
                    }
                }
            }
        }
    });
    return classificacao;
}

console.log(ranking([
    {Time1: "Suíça",    P1: 1, Time2: "Camarões", P2: 0},
    {Time1: "Brasil",   P1: 2, Time2: "Sérvia",   P2: 0},
    {Time1: "Camarões", P1: 3, Time2: "Sérvia",   P2: 3},
    {Time1: "Brasil",   P1: 1, Time2: "Suíça",    P2: 0},
    {Time1: "Sérvia",   P1: 2, Time2: "Suíça",    P2: 3},
    {Time1: "Camarões", P1: 1, Time2: "Brasil",   P2: 0},
]));