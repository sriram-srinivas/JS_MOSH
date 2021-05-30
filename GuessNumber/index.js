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
        msg.innerHTML = 'Enter a Number!'
    }else{
    const diff = val - answer;
    if(val === answer){
        msg.innerHTML = '🎉 Correct Number!'
        correctGuess= true
    } 
    else if(val > answer ){
        msg.innerHTML = diff < 3 ? 'High' : 'Too High' 
    } 
    else if(val < answer){
        msg.innerHTML = diff > -3 ? 'Low' : 'Too Low' 
    } 

    if(!correctGuess){
        score.innerHTML = --currentScore
        if(currentScore <= 0){
            score.innerHTML = currentScore = 0
            msg.innerHTML = " Game Over :("
        }
    }else{
        body.style.backgroundColor= "green"
        result.innerHTML = answer;
        if(currentScore > highScore){
            HighScore.innerHTML = highScore = currentScore
            msg.innerHTML += " New High Score!!!"
        }
    }
}
}

const reset = () => {
    msg.innerHTML = startMsg;
    currentScore = Maxscore;
    score.innerHTML = currentScore
    result.innerHTML = '?';
    correctGuess=false;
    guess.value="";
    body.style.backgroundColor= "black";
    answer = Math.floor(Math.random() * 21);  
}

HighScore.innerHTML = highScore;
again.addEventListener('click',reset);
checkBtn.addEventListener('click',check);
reset();