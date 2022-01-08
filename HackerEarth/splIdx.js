const input = require('./input')

const splIdx = input =>{
    let[len,arr] = input.split("\n")
    arr = arr.split(" ")
    let splIdx=0,maxSum=0
    for(let i=0;i<len;i++){
        let counter = 2,sum=0,lens=i+1+counter,cIndex=1
        sum += parseInt(arr[i])
        console.log("for","i",i,"arr[i]",arr[i],"len",len,"lens",lens,"counter",counter);
        while( !(lens > len) ){
            for(let j=1;j<=counter;j++){
                sum += parseInt(arr[i+cIndex])
                console.log("sum",sum,parseInt(arr[i+cIndex]));
                cIndex++
            }
            counter++
            lens += counter
            console.log("while","counter",counter,"lens",lens,"sum",sum);
        }
        console.log("sum",sum,maxSum);
        if(sum>=maxSum){
            maxSum=sum
            splIdx=i
        }
    }
    //console.log(splIdx,maxSum);
    return maxSum
}

console.log(splIdx(input)); 