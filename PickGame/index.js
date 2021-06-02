'use strict';

let totalScore1,totalScore2,currentScore,currentRoll,activePlayer=true;

const playerScore1 = document.querySelector('#totalScore1');
const playerCurrentScore1 = document.querySelector('#currentScore1');
const playerScore2 = document.querySelector('#totalScore2');
const playerCurrentScore2 = document.querySelector('#currentScore2');
const resetBtn = document.querySelector('#reset');
const dicePanel = document.querySelector('#dice');
const rollerBtn = document.querySelector('#roller');
const passBtn = document.querySelector('#pass');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

const diceModal = {
    1: {ClassName: "first-face",pipCount:[1]},
    2: {ClassName: "second-face",pipCount:[2]},
    3: {ClassName: "third-face",pipCount:[3]},
    4: {ClassName: "fourth-face",pipCount:[2,2]},
    5: {ClassName: "fifth-face",pipCount:[2,1,2]},
    6: {ClassName: "sixth-face",pipCount:[3,3]},
    pipClassName: "pip", colClassName:"column"
}

const createDice = count => {
    
    const modal = diceModal[count]
    const dice = document.createElement("div")
    dice.classList.add(modal.ClassName)
    const colCount = modal.pipCount.length;

    if(colCount === 1){

        for(let i=0; i < modal.pipCount[0];i++){
            const pip = document.createElement("span")
            pip.classList.add(diceModal.pipClassName)
            dice.appendChild(pip)
        }
    }else if (colCount > 1){

        for(let i=0; i < colCount;i++){
            const col = document.createElement("div")
            col.classList.add(diceModal.colClassName)
                for(let j=0 ; j<modal.pipCount[i];j++){
                    const pip = document.createElement("span")
                    pip.classList.add(diceModal.pipClassName)
                    col.appendChild(pip)
                }
            dice.appendChild(col)
        }
    }
    return dice;
}

const setActivePlayer = () => {
    if (activePlayer) {
        player1.classList.add('active')
        player2.classList.remove('active')
    } else {
        player2.classList.add('active')
        player1.classList.remove('active')
    }
}

const playerPass = flag => {
    updateScore()
    activePlayer = !activePlayer
    setActivePlayer()

    if(flag){
        currentRoll=0
        showRoll()

        if(totalScore1 >=100 || totalScore2 >= 100){
            alert((totalScore1 > totalScore2 ? "Player 1" : "Player 2") + " Wins !!!")
            reset()
        }
    }
}

const updateScore = () => {
    if(activePlayer){
        totalScore1 += currentScore
        playerScore1.textContent = totalScore1
    }else{
        totalScore2 += currentScore
        playerScore2.textContent = totalScore2
    }
    currentScore = 0
    updateCurrentScore()
}

const updateCurrentScore = () => {
    if(activePlayer){
        playerCurrentScore1.textContent = currentScore
    }else{
        playerCurrentScore2.textContent = currentScore
    }
}

const rollDice = () => {
    currentRoll = Math.trunc(Math.random() * 6)+1;
    showRoll()
    setTimeout(setScore, 1000);
    
}

const setScore = () => {

    if(currentRoll===1){
        currentScore = 0
        updateCurrentScore()
        playerPass()
    }else{
        currentScore += currentRoll
        updateCurrentScore()
    }
}

const showRoll = () => {
    if(currentRoll){
        dicePanel.classList.remove('hidden')
        dicePanel.querySelector('[class$="face"]').style.animation = "mymove 1s infinite"
        setTimeout(()=>{ 
            dicePanel.innerHTML="";
            dicePanel.appendChild(createDice(currentRoll))
         }, 1000);
    }else{
        dicePanel.classList.add('hidden')
    }
}

const reset = () => {
    totalScore1=totalScore2=currentScore=currentRoll=0,activePlayer=true
    playerScore1.textContent = totalScore1
    playerCurrentScore1.textContent = currentScore
    playerScore2.textContent = totalScore2
    playerCurrentScore2.textContent = currentScore
    setActivePlayer()
    showRoll()
}

rollerBtn.addEventListener('click',rollDice)
passBtn.addEventListener('click',() => playerPass(true))
resetBtn.addEventListener('click',reset)
reset()