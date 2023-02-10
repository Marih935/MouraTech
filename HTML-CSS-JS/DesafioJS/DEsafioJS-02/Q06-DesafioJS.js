function pa (inicio, razao, qtdElementos){
    let pa = ""
    for (let i = 0; i < qtdElementos; i++){
        if (i < qtdElementos - 1){
            pa += (inicio + (razao * i) + ", ")
        } else{
            pa += (inicio + (razao * i) + "...")
        }
    }
    return pa
}

console.log(pa(4, 3, 5))