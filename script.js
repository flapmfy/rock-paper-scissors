"use strict";

function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3);
    let choiceString = "";
    
    if (choiceInt === 0) {
        choiceString = "rock";
    } else if (choiceInt === 1) {
        choiceString = "paper";
    } else if (choiceInt === 2) {
        choiceString = "scissors";
    }

    return choiceString;
}

const buttons = document.querySelectorAll(".choice");
buttons.forEach(button => button.addEventListener('click', getPlayerChoice));

function getPlayerChoice(e) {
    let playerChoice = e.target;
    console.log(playerChoice);

    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    let roundWinner = "";

    if (playerSelection === computerSelection) {
        roundWinner = "draw";
    } else {
        if (playerSelection === "rock" && computerSelection === "scissors") {
            roundWinner = "player";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            roundWinner = "player";
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            roundWinner = "player";
        } else {
            roundWinner = "computer";
        }
    }

    return roundWinner;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {

        console.log("+++++++++++++++++ROUND " + i + "+++++++++++++++++")
        let roundWinner = "";
        do {
            let playerChoice = getPlayerChoice();
            let computerChoice = getComputerChoice();
            roundWinner = playRound(playerChoice, computerChoice);

            //console output:
            console.log("Player: " + playerChoice);
            console.log("Computer: " + computerChoice);
            console.log("Round winner: " + roundWinner);
            console.log("------------------------------------");
        } while (roundWinner === "draw")

        if (roundWinner === "player") {
            playerScore++;
        } else {
            computerScore++;
        }

        console.log(playerScore + " X " + computerScore);
    }


    //console output
    console.log("+++++++++++++++++RESULTS+++++++++++++++++")
    if (playerScore === computerScore) {
        console.log("draw");
    } else if (playerScore > computerScore) {
        console.log("player won");
    } else {
        console.log("computer won");
    }
}


////////////////////////////tests

game(5);
