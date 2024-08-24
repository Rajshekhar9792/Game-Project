let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const p = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame = () => {
    // console.log("game was draw");
    msg.innerText = "Game was draw. Play Again"
    msg.style.backgroundColor = "aqua";
}

const gencompChoice = () => {
    const option = ["Rock", "Paper", "Scissors"];
    const idx = Math.floor(Math.random() * 3)
    return option[idx];
};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win!")
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        // console.log("You lose!")
        msg.innerText = `You Lost. ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red";
        
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    let compChoice = gencompChoice();
    // console.log("comp choice = ", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else {
               userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);     
    }
};
 
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});