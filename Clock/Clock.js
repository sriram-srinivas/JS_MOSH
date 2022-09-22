const rotateEle = (sech,hand) => {
    ele = sech
       let val = startDeg[hand]+6 || 0
        val = val > 360 ? 360 : val
        startDeg[hand]=val    
    ele.style.transform = `rotate(${val}deg)`
    console.log(ele);
}

const minH = document.getElementById("minuteHand");
const hourH = document.getElementById("hourHand");
const secH = document.getElementById("secondHand")

let startDeg= {secH:270};
rotateEle(secH,"secH")
setInterval(() => rotateEle(secH),1000)
console.log(getComputedStyle(secH).transform,secH.style.transform)
