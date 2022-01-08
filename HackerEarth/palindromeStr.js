const input ="ANA"


const pStr = input => {
    return input === [...input].reverse().join("")   ? `"YES"` : "NO"
}

console.log(pStr(input));