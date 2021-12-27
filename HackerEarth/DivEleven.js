const input =`6
15478 8452 8232 874 985 4512`;

const d11 = input =>{
    let [len,arr] = input.split('\n');
    arr = arr.split(' ')
    let mIdx = (len/2)
    let arr1 = arr.splice(0,mIdx)
    let temp="",temp1=""
    for(let i=0;i<mIdx;i++){
            temp += parseInt(arr1[i][0])
            temp1 += parseInt(arr[i][arr[i].length-1])
        // console.log(arr1[i],arr[i])
        // temp += arr1[i][0]
        // temp1 += arr[i][arr[i].length-1]
        
    }
    return isDivisible(temp+temp1)
    //return arr[arr.length-1] === 0 ? 'OUI' : 'NON'
}  

const isDivisible = num =>{
    const len = num.length
    let odd=0,even=0;
    for(let i=1;i<=len;i++){
        if(i%2==0){
            even+=parseInt(num[i-1])
        }else{
            odd+=parseInt(num[i-1])
        }
    }
    console.log(odd,even);
    return (parseInt(odd)-parseInt(even))%11 === 0 ? 'OUI' : 'NON'
}

console.log(d11(input));


// 0   1  1
// 1   2  8
// 2   3  8 

// 0   4  4
// 1   5  5
// 2   6  1



// 0   1  1
// 1   2  8
// 2   3  8 
// 3   4  4

// 0   5  1
// 1   6  5
// 2   7  1
// 3   8  4