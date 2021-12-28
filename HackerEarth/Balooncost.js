const input =`2
9 6
10
1 1
1 1
0 1
0 0
0 1
0 0
0 1
0 1
1 1
0 0
1 9
10
0 1
0 0
0 0
0 1
1 0
0 1
0 1
0 0
0 1
0 0`;

const main = input =>{
    let [len ,...arr] = input.split('\n');
    len = parseInt(len)
    let res=""
    while(len-->0){
        let [cost,participants] =arr.splice(0,2)
        let [gCost,pCost] =cost.split(" ")
        gCost =parseInt(gCost)
        pCost =parseInt(pCost)
        let currentArr=arr.splice(0,participants)
        let gsum=0,psum=0
        for(let participant of currentArr){
            let [problem1,problem2]=participant.split(" ");
            gsum += problem1==1 ? gCost : 0
            gsum += problem2==1 ? pCost : 0

            psum += problem1==1 ? pCost : 0
            psum += problem2==1 ? gCost : 0
        }
        res !="" ? res+="\n" :null;
        res += psum>gsum ? gsum : psum;
    }
    return res
}

console.log(main(input));