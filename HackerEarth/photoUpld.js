const input = `180
5
640 480
120 300
180 180
400 400
200 180`;


const upload = input => {
    let [L,N,...arr] = input.split("\n")
    L = Number(L)
    //console.log(L,N,arr);
    let result = "";
    for(let i = 0; i < arr.length; i++){
        let [W,H] = arr[i].split(" ")
        W = Number(W)
        H = Number(H)
        result != "" ? result +="\n" : null
        result += W<L || H<L ? "UPLOAD ANOTHER" : W == H && W >= L ? "ACCEPTED" : "CROP IT"
    }
    return(result)
}

console.log(upload(input));