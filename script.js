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

function validateChoice(playerChoice) {
    playerChoice = playerChoice.toLowerCase();

    while ((playerChoice !== "rock") && (playerChoice !== "paper") && (playerChoice !== "scissors")) {
        playerChoice = prompt("Incorrect choice, try paper, rock or scissors.", "Rock").toLowerCase();
    }

    return playerChoice;
}

function getPlayerChoice() {
    let playerChoice = validateChoice(prompt("Rock, paper or scissors?", "Rock").toLowerCase());
    
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

function game(rounds = 5) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= rounds; i++) {
        let roundWinner = playRound(getPlayerChoice(), getComputerChoice());

        if (roundWinner === "player") {
            playerScore++;
        } else {
            computerScore++;
        }

        console.log("Player: " + playerScore + " X Computer: " + computerScore);
    }


}


////////////////////////////tests

let hrac = getPlayerChoice();
//let pc = getComputerChoice();
let pc = "rock";

console.log("Player: " + hrac);
console.log("Computer: " + pc);
console.log(playRound(hrac, pc));
