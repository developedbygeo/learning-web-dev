/* Global state */
const ROCK_OPTION = 'rock';
const PAPER_OPTION = 'paper';
const SCISSORS_OPTION = 'scissors';
const GAME_OPTIONS = [ROCK_OPTION, PAPER_OPTION, SCISSORS_OPTION];
const MAX_SCORE = 5;

let humanScore = 0;
let computerScore = 0;

/* Buttons */
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

/* Text elements */
const playerScoreNode = document.getElementById('player-score');
const computerScoreNode = document.getElementById('computer-score');
const commentaryNode = document.getElementById('commentary');

/* Event listeners */
rockButton.addEventListener('click', handleActionButtonClick);
paperButton.addEventListener('click', handleActionButtonClick);
scissorsButton.addEventListener('click', handleActionButtonClick);

function handleActionButtonClick(event) {
  const humanChoice = event.target.id; // 'rock', 'paper', or 'scissors'
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);

  const resultMessage = getRoundMessage(result, humanChoice, computerChoice);

  console.log(resultMessage);

  commentaryNode.textContent = resultMessage;

  /*
  Tasks: 
  - show live score updates
  - show live commentary
  - show final winner when score reaches MAX_SCORE
  - reset the game if user plays again and MAX_SCORE is reached
  */
}

/* Announcement functions */
function getRoundMessage(result, humanChoice, computerChoice) {
  if (result === 'draw') return `It is a draw! You both chose ${humanChoice}.`;

  if (result === 'human-wins') return `You win! ${humanChoice} beats ${computerChoice}.`;

  return `You lose! ${computerChoice} beats ${humanChoice}.`;
}

/* Game functions */
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * GAME_OPTIONS.length);
  return GAME_OPTIONS[randomNumber];
}

// function getHumanChoice() {
//   return prompt("Pick Rock or Paper or Scissors");
// }

// function announceWinner() {
//   if (humanScore === MAX_SCORE) {
//     return "You win the game!";
//   } else if (computerScore === MAX_SCORE) {
//     return "Computer wins the game!";
//   }
// }
// const rockButton = document
//   .getElementById("Rock")
//   .addEventListener("click", playGame);
// const paperButton = document.getElementById("Paper");
// const scissorsButton = document.getElementById("Scissors");

// /*
// 1. get both choices
// 2. compare choices
// 3. return result

// if we want to have multiple rounds:
// 4. result -> update score
// 5. exit condition -> score === 5
// */

// function playGame() {
//   const humanChoice = getHumanChoice();
//   const computerChoice = getComputerChoice();

//   const formattedUserInput = [rockButton, paperButton, scissorsButton];
//   const rockOption = COMPUTER_OPTIONS[0];
//   const paperOption = COMPUTER_OPTIONS[1];
//   const scissorsOption = COMPUTER_OPTIONS[2];

//   function handleScoreUpdate() {
//     if (
//       (formattedUserInput === rockButton && computerChoice === paperOption) ||
//       (formattedUserInput === paperButton &&
//         computerChoice === scissorsOption) ||
//       (formattedUserInput === scissorsButton && computerChoice === rockOption)
//     ) {
//       computerScore += 1;
//     } else if (
//       (formattedUserInput === rockButton &&
//         computerChoice === scissorsOption) ||
//       (formattedUserInput === paperButton && computerChoice === rockOption) ||
//       (formattedUserInput === scissorsButton && computerChoice === paperOption)
//     ) {
//       humanScore += 1;
//     }
//   }

// TODO: think about how can we refactor this function to be more readable
function playRound(humanChoice, computerChoice) {
  // handleScoreUpdate();

  if (humanChoice === ROCK_OPTION && computerChoice === ROCK_OPTION) {
    return 'draw';
  } else if (humanChoice === ROCK_OPTION && computerChoice === PAPER_OPTION) {
    return 'computer-wins';
  } else if (humanChoice === ROCK_OPTION && computerChoice === SCISSORS_OPTION) {
    return 'human-wins';
  } else if (humanChoice === PAPER_OPTION && computerChoice === PAPER_OPTION) {
    return 'draw';
  } else if (humanChoice === PAPER_OPTION && computerChoice === SCISSORS_OPTION) {
    return 'computer-wins';
  } else if (humanChoice === PAPER_OPTION && computerChoice === ROCK_OPTION) {
    return 'human-wins';
  } else if (humanChoice === SCISSORS_OPTION && computerChoice === SCISSORS_OPTION) {
    return 'draw';
  } else if (humanChoice === SCISSORS_OPTION && computerChoice === ROCK_OPTION) {
    return 'computer-wins';
  } else if (humanChoice === SCISSORS_OPTION && computerChoice === PAPER_OPTION) {
    return 'human-wins';
  } else {
    return 'INVALID!!!!';
  }
}
//   const resultMessage = playRound();
//   console.log(resultMessage);
//   console.log(`Scoreboard: Human ${humanScore} - Computer ${computerScore}`);
// }
