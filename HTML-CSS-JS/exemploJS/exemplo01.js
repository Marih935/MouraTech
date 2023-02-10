function adicao(n1, n2){
    return n1 + n2;
}

function subtracao(n1, n2){
    return n1 - n2;
}

function matematica(fn, n1, n2){
    return fn(n1, n2); // fn é uma função
}

console.log((10).toString()); //decimal
console.log((10).toString(2)); //binário
console.log((10).toString(8)); //octal
console.log((10).toString(16)); //hexadecimal


// console.log(5 == '5'); //valor igual
// console.log(5 === '5'); //valor e tipo igual

// console.log(typeof(5));
// console.log(typeof(adicao));
// console.log(typeof('Mari =)'));

// console.log(matematica(soma, 5, 3));
// console.log(matematica(subtracao, 5, 3));