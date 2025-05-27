/* Global state */

let humanScore = 0;
let computerScore = 0;

const COMPUTER_OPTIONS = ['rock', 'paper', 'scissors'];

/* Game functions */

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * COMPUTER_OPTIONS.length);
  return COMPUTER_OPTIONS[randomNumber];
}

function getHumanChoice() {
  let humanSelection = prompt('Pick Rock or Paper or Scissors');
}

function playRound(humanChoice, computerChoice) {
  const formattedUserInput = humanChoice.toLowerCase().trim();
  const rockOption = COMPUTER_OPTIONS[0];
  const paperOption = COMPUTER_OPTIONS[0];
  const scissorsOption = COMPUTER_OPTIONS[0];

  if (formattedUserInput === rockOption && computerChoice === rockOption) {
    return "It's a draw";
  } else if (formattedUserInput === rockOption && computerChoice === paperOption) {
    return 'You lose! Paper beats Rock';
  } else if (formattedUserInput === rockOption && computerChoice === scissorsOption) {
    return 'You win! Rock beats Scissors';
  } else if (formattedUserInput === paperOption && computerChoice === paperOption) {
    return "It's a draw";
  } else if (formattedUserInput === paperOption && computerChoice === scissorsOption) {
    return 'You lose! Scissors beats Paper';
  } else if (formattedUserInput === paperOption && computerChoice === rockOption) {
    return 'You win! Paper beats Rock';
  } else if (formattedUserInput === scissorsOption && computerChoice === scissorsOption) {
    return "It's a draw";
    ``;
  } else if (formattedUserInput === scissorsOption && computerChoice === rockOption) {
    return ' You lose! Rock beats Paper';
  } else if (formattedUserInput === scissorsOption && computerChoice === paperOption)
    return 'You win! Scissors beats Paper';
}
const humanSelection = getHumanChoice();
const computerSelections = getComputerChoice();
