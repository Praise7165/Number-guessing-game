

let guessField = document.querySelector(".guessField");
let guessSubmit = document.querySelector(".guessSubmit");


let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let range = document.querySelector(".lowOrHi");

let paras = document.querySelectorAll(".resultParas p");



let restartGame = document.querySelector("button");


let randomNumber = Math.floor(Math.random() * 100) + 1;


guessSubmit.addEventListener("click", guessNumber);


let guessCount = 1;

function guessNumber() {

    let guess = Number(guessField.value);

    if (guessCount == 1) {
        guesses.textContent = "Previous result: ";
    }



    guesses.textContent += ` ${guess}`;


    if (guess == randomNumber) {
        lastResult.textContent = `Congratulations!! you got it right, after ${guessCount < 2 ? (guessCount + " trial") : (guessCount + " trials")}`;
        lastResult.style.background = "green";
        range.textContent = "";

        resetGame();
    }

    else if (guessCount == 10) {
        lastResult.textContent = "!!!GAME OVER";
        range.textContent = ""; 
        
        resetGame();
    }

    else {
        lastResult.textContent = `Wrong, you have ${10 - guessCount} more attempts`;
        lastResult.style.backgroundColor = "red";


        if (guess < randomNumber) {
            range.textContent = "Your guess was too low!";
        } else if (guess > randomNumber) {
            range.textContent = "Your guess was too high!";  
        }
    }
    



    guessCount += 1;
    guessField.value = "";
    guessField.focus();
};



function resetGame() {

    restartGame.style.display = "block";
    guessField.disabled = true;
    guessSubmit.disabled = true;

    restartGame.addEventListener("click", () => {

        guessCount = 1;

        for (let para of paras) {
            para.textContent = "";
        };

        lastResult.style.backgroundColor = "transparent";
        

        restartGame.style.display = "none";
        guessField.disabled = false;
        guessSubmit.disabled = false;

        randomNumber = Math.floor(Math.random() * 100) + 1;

        guessField.focus();

    })
}










