const canvas = document.querySelector('#canvas')
canvas.setAttribute('width', window.innerWidth);
canvas.setAttribute('height', window.innerHeight);
const ctx = canvas.getContext('2d')
ctx.fillStyle = 'blue'
 ctx.fillRect(10, 10, 100, 100) // (x,y,width,height)

 ctx.beginPath()
 ctx.moveTo(300, 50)
 ctx.lineTo(300, 300)
 ctx.lineTo(550, 300)
 ctx.strokeStyle = 'red'
 ctx.stroke()