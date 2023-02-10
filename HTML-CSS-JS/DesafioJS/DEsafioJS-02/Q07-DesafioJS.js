function primo(num){
    let divisores = 0
    for (let i = 1; i <= num; i++){
        if (num % i === 0){
            divisores++
        }
    }
    if (divisores === 2){
        return true
    } else{
        return false
    }
}

console.log(primo(10))