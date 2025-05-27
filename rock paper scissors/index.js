function getComputerChoice() {
  let computerOptions = ["Rock", "Paper", "Scissors"];
  let randomNumber = Math.floor(Math.random() * computerOptions.length + 1);
  if (randomNumber === 1) {
    return "Rock";
  }
  if (randomNumber === 2) {
    return "Paper";
  }
  if (randomNumber === 3) {
    return "Scissors";
  }
}
function getHumanChoice() {
  let humanSelection = prompt("Pick Rock or Paper or Scissors");
}
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "Rock" && computerChoice === "Rock") {
    return "It's a draw";
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    return "You lose! Paper beats Rock";
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    return "You win! Rock beats Scissors";
  } else if (humanChoice === "Paper" && computerChoice === "Paper") {
    return "It's a draw";
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    return "You lose! Scissors beats Paper";
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    return "You win! Paper beats Rock";
  } else if (humanChoice === "Scissors" && computerChoice === "Scissors") {
    return "It's a draw";
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    return " You lose! Rock beats Paper";
  } else if (humanChoice === "Scissors" && computerChoice === "Paper")
    return "You win! Scissors beats Paper";
}
const humanSelection = getHumanChoice();
const computerSelections = getComputerChoice();
