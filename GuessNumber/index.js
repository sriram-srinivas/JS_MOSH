let Maxscore=20,currentScore,highScore=0,answer=0,startMsg='Start Guessing...',correctGuess=false;

const result = document.getElementById("result");
const guess = document.getElementById("guess");
const msg = document.getElementById("msg");
const score = document.getElementById("score");
const HighScore = document.getElementById("HighScore");
const body = document.getElementsByTagName("body")[0];

const generateNewAnswer = () => {
    answer = Math.floor(Math.random() * 21);  
    console.log(answer)
}

const check = () => {
    const val = Number(guess.value)
    const diff = val - answer;
    if(val === answer){
        msg.innerHTML = 'Correct Number!'
        correctGuess= true
    } 
    else if(val > answer ){
        if(diff < 3){
            msg.innerHTML = `High`
        }else{
            msg.innerHTML = `Too High`
        }
    } 
    else if(val < answer){
        if(diff > -3){
            msg.innerHTML = `Low`
        }else{
            msg.innerHTML = `Too Low`
        }
    } 

    if(!correctGuess){
        console.log("inside false answer");
        score.innerHTML = --currentScore
    }else{
        body.style.backgroundColor= "green"
        result.innerHTML = answer;
        if(currentScore > highScore){
            HighScore.innerHTML = highScore = currentScore
            msg.innerHTML += " New High Score!!!"
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
    generateNewAnswer();
}

HighScore.innerHTML = highScore;
