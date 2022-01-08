const input = `5
1 2 3 4 5`;


const fProd = input => {
    let [n,arr] = input.split("\n")
    arr = arr.split(" ")
    let prod = 1
    for(let i = 0; i<n;i++){
        prod = ( prod * Number(arr[i]) ) % ( Math.pow(10,9) + 7 )
    }
    return prod
}

console.log(fProd(input));