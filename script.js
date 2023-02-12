"use strict";

function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3);
    
    return choiceInt;
}

function validateChoice(playerChoice) {
    playerChoice = choiceToNumber(playerChoice);

    while (playerChoice === -1) {
        playerChoice = choiceToNumber(prompt("Incorrect choice, try paper, rock or scissors.", "Rock"));
    }

    return playerChoice;
}

function choiceToNumber(playerChoice) {
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === "rock") {
        playerChoice = 0;
    } else if (playerChoice === "paper") {
        playerChoice = 1;
    } else if (playerChoice === "scissors") {
        playerChoice = 2;
    } else {
        playerChoice = -1;
    }

    return playerChoice;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper or scissors?", "Rock");
    playerChoice = validateChoice(playerChoice);
    
    return playerChoice;
}



function playRound(playerSelection, computerSelection) {
    let roundWinner = "";

    if (playerSelection === computerSelection) {
        roundWinner = "draw";
    } else {
        if (playerSelection === 0 && computerSelection === 2) {
            roundWinner = "player";
        } else {
            roundWinner = "computer";
        }

        if (playerSelection === 1 && computerSelection === 0) {
            roundWinner = "player";
        } else {
            roundWinner = "computer";
        }

        if (playerSelection === 2 && computerSelection === 1) {
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

    }
}

console.log(getPlayerChoice());