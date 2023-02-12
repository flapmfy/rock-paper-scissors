"use strict";

function getComputerChoice() {
    let choiceInt = Math.floor(Math.random() * 3);
    let choiceString = "";

    if (choiceInt === 0) {
        choiceString = "rock";
    } else if (choiceInt === 1) {
        choiceString = "paper";
    } else {
        choiceString = "scissors";
    }
    
    return choiceString;
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, paper or scissors?", "Rock");

    return playerChoice.toLowerCase();
}

console.log(getComputerChoice());