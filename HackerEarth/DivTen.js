const input =``;

const dTen = input =>{
    let [len,arr] = input.split('\n');
    arr = arr.split(' ')[len-1]
    return arr[arr.length-1] == 0 ? 'Yes' : 'No'
}   

console.log(dTen(input));