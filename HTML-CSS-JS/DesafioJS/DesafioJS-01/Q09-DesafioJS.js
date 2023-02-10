function media_ponderada (nota1, nota2){
    var media = (nota1 * 4 + nota2 * 6) / 10
    if (media >= 90){
        return "A"
    } else if (media >= 75 && media < 90){
        return "B"
    } else if (media >= 60 && media < 75){
        return "C"
    } else if (media >= 40 && media < 60){
        return "D"
    } else if (media < 40){
        return "E"
    }
}