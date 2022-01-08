const input ="mookuJANA"


const invert = input => {
    return input.split("").map(ch => {
        return ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase() 
    }

    ).join("")
}

console.log(invert(input));