const input = `347 1000 432`

const cDiv = input => {
    let [i,r,k] = input.split(" ")
    i = Number(i);r = Number(r);k = Number(k);
    let count = 0
    for(let x=i;x<=r;x++){
        x % k == 0 ? count++ : null
    }
    return count
}

console.log(cDiv(input));