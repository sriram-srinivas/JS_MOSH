'use strict';

let Maxscore=20,currentScore,highScore=0,answer=0,startMsg='Start Guessing...',correctGuess=false;

const result = document.getElementById("result");
const guess = document.getElementById("guess");
const msg = document.getElementById("msg");
const score = document.getElementById("score");
const HighScore = document.getElementById("HighScore");
const body = document.getElementsByTagName("body")[0];
const again = document.querySelector("#again");
const checkBtn = document.querySelector("#check");

const check = () => {
    const val = Number(guess.value)
    if(!val){
        msg.textContent = 'Enter a Number!'
    }else{
    const diff = val - answer;
    if(val === answer){
        msg.textContent = '🎉 Correct Number!'
        correctGuess= true
    } 
    else if(val > answer ){
        msg.textContent = diff < 3 ? 'High' : 'Too High' 
    } 
    else if(val < answer){
        msg.textContent = diff > -3 ? 'Low' : 'Too Low' 
    } 

    if(!correctGuess){
        score.textContent = --currentScore
        if(currentScore <= 0){
            score.textContent = currentScore = 0
            msg.textContent = " Game Over :("
        }
    }else{
        body.style.backgroundColor= "green"
        result.textContent = answer;
        if(currentScore > highScore){
            HighScore.textContent = highScore = currentScore
            msg.textContent += " New High Score!!!"
        }
    }
}
}

const reset = () => {
    msg.textContent = startMsg;
    currentScore = Maxscore;
    score.textContent = currentScore
    result.textContent = '?';
    correctGuess=false;
    guess.value="";
    body.style.backgroundColor= "black";
    answer = Math.floor(Math.random() * 21);  
}

HighScore.textContent = highScore;
again.addEventListener('click',reset);
checkBtn.addEventListener('click',check);
reset();