/* Global state */

let humanScore = 0;
let computerScore = 0;

const COMPUTER_OPTIONS = ['rock', 'paper', 'scissors'];
const MAX_SCORE = 5;

/* Game functions */
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * COMPUTER_OPTIONS.length);
  return COMPUTER_OPTIONS[randomNumber];
}

function getHumanChoice() {
  return prompt('Pick Rock or Paper or Scissors');
}

function announceWinner() {
  if (humanScore === MAX_SCORE) {
    return 'You win the game!';
  } else if (computerScore === MAX_SCORE) {
    return 'Computer wins the game!';
  }
}

/* 
1. get both choices
2. compare choices
3. return result

if we want to have multiple rounds:
4. result -> update score
5. exit condition -> score === 5
*/

function playGame() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  const formattedUserInput = humanChoice.toLowerCase().trim();
  const rockOption = COMPUTER_OPTIONS[0];
  const paperOption = COMPUTER_OPTIONS[1];
  const scissorsOption = COMPUTER_OPTIONS[2];

  function handleScoreUpdate() {
    if (
      (formattedUserInput === rockOption && computerChoice === paperOption) ||
      (formattedUserInput === paperOption && computerChoice === scissorsOption) ||
      (formattedUserInput === scissorsOption && computerChoice === rockOption)
    ) {
      computerScore += 1;
    } else if (
      (formattedUserInput === rockOption && computerChoice === scissorsOption) ||
      (formattedUserInput === paperOption && computerChoice === rockOption) ||
      (formattedUserInput === scissorsOption && computerChoice === paperOption)
    ) {
      humanScore += 1;
    }
  }

  function playRound() {
    handleScoreUpdate();

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
    } else if (formattedUserInput === scissorsOption && computerChoice === paperOption) {
      return 'You win! Scissors beats Paper';
    } else {
      return 'Invalid choice! Please pick Rock, Paper, or Scissors.';
    }
  }

  const resultMessage = playRound();
  console.log(resultMessage);
  console.log(`Scoreboard: Human ${humanScore} - Computer ${computerScore}`);
}

while (humanScore < MAX_SCORE || computerScore < MAX_SCORE) {
  playGame();
  const finalMessage = announceWinner();

  if (finalMessage) {
    console.log(finalMessage);
    break;
  }
}
