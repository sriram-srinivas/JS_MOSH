const input = `1
2
88
42
99`;


const LUE = input => {
    input = input.replace(/[^0-9||^\n]/g,"")
    input = input.split("\n")
    input = input.includes("42") ? input.slice(0,input.indexOf("42")) : input
    input = input.join("\n")
    return input
}

console.log(LUE(input));