function fibonacci(nElementosFib){
    let fib = ""
    if (nElementosFib === 0){ 
        return fib
    } else if (nElementosFib === 1){
        return fib = "0..."
    } else if (nElementosFib === 2){
        return fib = "0, 1..."
    }
    for (let i = 0; i < nElementosFib; i++){
        if (i === 0){
            fib += "0"
        } else if (i === 1){
            fib += ", 1"
        } else if (i == nElementosFib - 1){
            let fibAux = fib.split(", ")
            let fibAux2 = parseInt(fibAux[i-1]) + parseInt(fibAux[i-2])
            fib += ", " + fibAux2 + "..."
        } else{
            let fibAux = fib.split(", ")
            let fibAux2 = parseInt(fibAux[i-1]) + parseInt(fibAux[i-2])
            fib += ", " + fibAux2 
        }
    }
    return fib
}

console.log(fibonacci(20))