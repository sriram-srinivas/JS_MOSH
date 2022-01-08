const input =10


const fact = input => {
    let res = 1
    for(let i = 2; i<=input;i++){
        res *= i
    }
    return res
}

console.log(fact(input));