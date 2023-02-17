"use strict";

let playerScore = 0;
let computerScore = 0;
const playerScoreOut = document.querySelector(".js-player-score");
const computerScoreOut = document.querySelector(".js-computer-score");
const roundWinnerOut = document.querySelector(".js-round-winner");
const gameWinnerOut = document.querySelector(".js-winner");
const resetGameButton = document.querySelector(".js-reset");
const playerEmoji = document.querySelector(".player-emoji");
const computerEmoji = document.querySelector(".computer-emoji");

resetGameButton.addEventListener('click', resetGame);

const buttons = document.querySelectorAll(".choice");
buttons.forEach((button) => button.addEventListener("click", playRound));

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

function getPlayerChoice(e) {
  let playerChoice = e.currentTarget.lastElementChild.textContent;
  return playerChoice.toLowerCase();
}

function playRound(e) {
  let roundWinner = "";
  let winner = "";
  let playerSelection = getPlayerChoice(e);
  let computerSelection = getComputerChoice();

  drawChoice(playerSelection, playerEmoji);
  drawChoice(computerSelection, computerEmoji);

  if (playerScore !== 5 && computerScore !== 5) {
    roundWinner = checkRoundWinner(playerSelection, computerSelection);
    roundWinnerOut.textContent = roundWinner;
  }

    if (playerScore === 5 || computerScore === 5) {
    winner = getGameWinner();
    gameWinnerOut.textContent = winner;
    resetGameButton.style.display = "block";
  }
}


function checkRoundWinner (playerSelection, computerSelection) {
    let roundWinner = "";

    if (playerSelection === computerSelection) {
        roundWinner = "draw";
      } else {
        if (playerSelection === "rock" && computerSelection === "scissors") {
          roundWinner = "player";
        } else if (playerSelection === "paper" && computerSelection === "rock") {
          roundWinner = "player";
        } else if (
          playerSelection === "scissors" &&
          computerSelection === "paper"
        ) {
          roundWinner = "player";
        } else {
          roundWinner = "computer";
        }
      }
      updateScore(roundWinner);

      return roundWinner;
}

function updateScore(roundWinner) {
    if (roundWinner === "player") playerScore++;
    else if (roundWinner === "computer") computerScore++;

    playerScoreOut.textContent = playerScore;
    computerScoreOut.textContent = computerScore;
}

function getGameWinner() {
    if (playerScore === 5) return "player";
    return "computer";
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreOut.textContent = 0;
    computerScoreOut.textContent = 0;
    roundWinnerOut.textContent = "";
    gameWinnerOut.textContent = "";
    resetGameButton.style.display = "none";
    drawChoice("no", playerEmoji);
    drawChoice("no", computerEmoji);
}

function drawChoice(choice, where) {
    if (choice === "rock") {
        where.textContent = "🪨";
    } else if (choice === "paper") {
        where.textContent = "🤚";
    } else if (choice === "scissors") {
        where.textContent = "✂️";
    } else {
        where.textContent = "🤔";
    }
}
