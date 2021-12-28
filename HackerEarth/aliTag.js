const input="11B242-73";

const tagCheck = input =>{
    const vowels = ['A','E','I','O','U','Y']
    input = [...input]
    const chr=input[2]
    if(vowels.includes(chr) || input.includes("0")){
        return false
    }
    for(let i=0;i<input.length-1;i++){
        if(Number(input[i]) && Number(input[i+1])){
            if ((parseInt(input[i])+parseInt(input[i+1]))%2 != 0 ){
                return false
            }
        }
    }
    return true
}
console.log(tagCheck(input) ? "valid":"invalid");  