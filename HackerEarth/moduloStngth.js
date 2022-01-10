const input = `5 5
6 11 16 7 12`


const ms=inp=>{
    let [nk,a]=inp.split("\n")
    let [n,k]=nk.split(" ")
    n = Number(n);k=Number(k)
    a=a.split(" ")
    let o = {},s=0
    for(let i=0;i<n;i++){
       let v = Number(a[i])
       v = v % k
       o[v] ? o[v].push(a[i]) : o[v] = [a[i]]
    }
    Object.entries(o).map(
        ([k,v]) => {
            s += (v.length -1) * v.length
        }
    )
    return s
}

console.log(ms(input));