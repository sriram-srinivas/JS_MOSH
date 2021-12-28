const input =`2
1
0`;

const ssd = input =>{
    const map = [6,2,5,5,4,5,6,3,7,6]
        
    const [len,...arr] = input.split('\n')
    let res=""
    for(num of arr){
        let count=0
        for(let i=0;i<num.length;i++){
            count += map[parseInt(num[i])]
        }
        if(count%2 === 1){
            res+="7"
            count -=3
        }
        for(let j=0;j<count;j+=2){
            res+="1"
        }
        res+="\n"
    }
    return res
}

ssd(input)