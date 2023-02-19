"use strict";

const playerScoreOut = document.querySelector(".js-player-score");
const computerScoreOut = document.querySelector(".js-computer-score");
const gameWinnerOut = document.querySelector(".js-winner");
const resetGameButton = document.querySelector(".js-reset");
const playerEmoji = document.querySelector(".player-emoji");
const computerEmoji = document.querySelector(".computer-emoji");

resetGameButton.addEventListener('click', resetGame);

const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => button.addEventListener("click", getPlayerChoice));

let playerScore = 0;
let computerScore = 0;

console.log(getComputerChoice())
function getComputerChoice() {
  let choiceInt = Math.floor(Math.random() * 3);

  return choiceInt;
}

function choiceToNumber(choiceString) {
  choiceString = choiceString.toLowerCase();
  let choiceInt = -1;

  if (choiceString === "rock") {
    choiceInt = 0;
  } else if (choiceString === "paper") {
    choiceint = 1;
  } else {
    choiceInt = 2;
  }

  return choiceInt;
}

function getPlayerChoice(e) {
  let playerChoice = e.currentTarget.lastElementChild.textContent;
  playRound(choiceToNumber(playerChoice), getComputerChoice());
}

function playRound(playerSelection, computerSelection) {
  let roundWinner = "";
  let winner = "";

  drawChoice(playerSelection, playerEmoji);
  drawChoice(computerSelection, computerEmoji);

  if (playerScore !== 5 && computerScore !== 5) {
    checkRoundWinner(playerSelection, computerSelection);
  } 
  
  if (playerScore === 5) {
    gameWinnerOut.textContent = "GAME WINNER: Player";
    resetGameButton.style.display = "block";
  } else if (computerScore === 5) {
    gameWinnerOut.textContent = "GAME WINNER: Computer";
    resetGameButton.style.display = "block";
  }
}

function checkRoundWinner (playerSelection, computerSelection) {
    const playerWinCondition = ["0-2", "1-0", "2-1"];
    let currentChoices = `${playerSelection}-${computerSelection}`;
    let roundWinner = "";

    console.log(currentChoices);

    if (playerSelection === computerSelection) {
        roundWinner = "draw";
      } else if (playerWinCondition.includes(currentChoices)) {
        roundWinner = "player";
      } else {
        roundWinner = "computer";
      }

      console.log(roundWinner);

      updateScore(roundWinner);
}

function updateScore(roundWinner) {
    if (roundWinner === "player") playerScore++;
    else if (roundWinner === "computer") computerScore++;

    playerScoreOut.textContent = playerScore;
    computerScoreOut.textContent = computerScore;
}

function resetGame() {
    location.reload();
}

function drawChoice(choice, where) {
    if (choice === 0) {
        where.textContent = "🪨";
    } else if (choice === 1) {
        where.textContent = "🤚";
    } else if (choice === 2) {
        where.textContent = "✂️";
    } else {
        where.textContent = "🤔";
    }
}
