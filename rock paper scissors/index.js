/* Global state */

let humanScore = 0;
let computerScore = 0;

const COMPUTER_OPTIONS = ["rock", "paper", "scissors"];

/* Game functions */

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * COMPUTER_OPTIONS.length);
  return COMPUTER_OPTIONS[randomNumber];
}

function getHumanChoice() {
  let humanSelection = prompt("Pick Rock or Paper or Scissors");
}

function playGame(humanChoice, computerChoice) {
  const formattedUserInput = humanChoice.toLowerCase().trim();
  const rockOption = COMPUTER_OPTIONS[0];
  const paperOption = COMPUTER_OPTIONS[1];
  const scissorsOption = COMPUTER_OPTIONS[2];

  function playRound() {
    if (formattedUserInput === rockOption && computerChoice === rockOption) {
      return "It's a draw";
    } else if (
      formattedUserInput === rockOption &&
      computerChoice === paperOption
    ) {
      return "You lose! Paper beats Rock";
    } else if (
      formattedUserInput === rockOption &&
      computerChoice === scissorsOption
    ) {
      return "You win! Rock beats Scissors";
    } else if (
      formattedUserInput === paperOption &&
      computerChoice === paperOption
    ) {
      return "It's a draw";
    } else if (
      formattedUserInput === paperOption &&
      computerChoice === scissorsOption
    ) {
      return "You lose! Scissors beats Paper";
    } else if (
      formattedUserInput === paperOption &&
      computerChoice === rockOption
    ) {
      return "You win! Paper beats Rock";
    } else if (
      formattedUserInput === scissorsOption &&
      computerChoice === scissorsOption
    ) {
      return "It's a draw";
      ``;
    } else if (
      formattedUserInput === scissorsOption &&
      computerChoice === rockOption
    ) {
      return " You lose! Rock beats Paper";
    } else if (
      formattedUserInput === scissorsOption &&
      computerChoice === paperOption
    )
      return "You win! Scissors beats Paper";
  }
  playRound(5);
  if (
    (formattedUserInput === rockOption && computerChoice === paperOption) ||
    (formattedUserInput === paperOption && computerChoice === scissorsOption) ||
    (formattedUserInput === scissorsOption && computerChoice === rockOption)
  ) {
    return ++computerScore;
  } else if (
    (formattedUserInput === rockOption && computerChoice === scissorsOption) ||
    (formattedUserInput === paperOption && computerChoice === rockOption) ||
    (formattedUserInput === scissorsOption && computerChoice === paperOption)
  ) {
    return ++humanScore;
  } else if (
    (formattedUserInput === rockOption && computerChoice === rockOption) ||
    (formattedUserInput === paperOption && computerChoice === paperOption) ||
    (formattedUserInput === scissorsOption && computerChoice === scissorsOption)
  ) {
    return ++humanScore && ++computerScore;
  }
}
const humanSelection = getHumanChoice();
const computerSelections = getComputerChoice();
