"use-strict";

// document.querySelector('.message')
// .textContent ="correct Number";


// document.querySelector('.number').textContent="13";

// document.querySelector(".guess").value="23";
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20)+1;

let score=20;

let highScore=0;

const displayMessage=function(message){
    document.querySelector(".message").textContent=message;
}

document.querySelector(".check")
.addEventListener('click',function(){
    const guess =Number(document.querySelector(".guess").value)
    console.log(guess, typeof guess);
    // When user have no input
    if(!guess){
        displayMessage("No Number");
    }
    // When player wins
    else if(guess===secretNumber){
        displayMessage("correct number")
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor="#60b347"
        document.querySelector(".number").style.width="30rem";
        if(score>highScore){
            highScore=score;
            document.querySelector(".highscore").textContent=highScore;
        }
    }
    // When guess is Wrong
    else if(guess !== secretNumber){
        if(score>1){
            displayMessage(guess>secretNumber?"too High":"to Low")
            score--;
            document.querySelector(".score").textContent=score;
        }
        else{
            displayMessage("You Lost The Game")
            document.querySelector(".score").textContent=0;
        }
        
    }
  
});

document.querySelector(".again").addEventListener(
    "click",function(){
        score=20;
        secretNumber = Math.trunc(Math.random()*20)+1
        displayMessage("Start Guessing...")
        document.querySelector(".score").textContent=score;
        document.querySelector(".number").textContent="?";
        document.querySelector(".guess").value=" ";
        document.querySelector('body').style.backgroundColor="#222"
        document.querySelector(".number").style.width="15rem";

    }
)