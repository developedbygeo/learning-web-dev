/* Global state */
let humanScore = 0;
let computerScore = 0;

const ROCK_OPTION = 'rock';
const PAPER_OPTION = 'paper';
const SCISSORS_OPTION = 'scissors';

const HUMAN_WINS_MESSAGE = 'You win!';
const COMPUTER_WINS_MESSAGE = 'Computer wins!';
const DRAW_MESSAGE = 'It is a draw!';
const INVALID_MESSAGE = 'Invalid choice! Please choose rock, paper, or scissors.';

const GAME_OPTIONS = [ROCK_OPTION, PAPER_OPTION, SCISSORS_OPTION];
const MAX_SCORE = 5;

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

  const isGameFinished = isGameOver();

  if (isGameFinished) {
    const gameEndMessage = handleGameEndMessage();
    handleGameEndScore(true);
    commentaryNode.textContent = gameEndMessage;
  } else {
    getGameScore(result);
    commentaryNode.textContent = resultMessage;
  }

  playerScoreNode.textContent = `Your score: ${humanScore}`;
  computerScoreNode.textContent = `Computer score: ${computerScore}`;
}

/* Announcement functions */
function getRoundMessage(result, humanChoice, computerChoice) {
  if (result === DRAW_MESSAGE) return `It is a draw! You both chose ${humanChoice}.`;

  if (result === HUMAN_WINS_MESSAGE) return `You win! ${humanChoice} beats ${computerChoice}.`;

  return `You lose! ${computerChoice} beats ${humanChoice}.`;
}

function getGameScore(result) {
  if (result === HUMAN_WINS_MESSAGE) humanScore = humanScore += 1;
  else if (result === COMPUTER_WINS_MESSAGE) computerScore = computerScore += 1;
}

/* Game functions */
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * GAME_OPTIONS.length);
  return GAME_OPTIONS[randomNumber];
}

function isGameOver() {
  return humanScore === MAX_SCORE || computerScore === MAX_SCORE;
}

function handleGameEndScore(isGameOver) {
  if (isGameOver) {
    humanScore = 0;
    computerScore = 0;
  }
}

function handleGameEndMessage() {
  if (humanScore === MAX_SCORE) {
    return 'You win the game!';
  } else if (computerScore === MAX_SCORE) {
    return 'Computer wins the game!';
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === ROCK_OPTION && computerChoice === ROCK_OPTION) {
    return DRAW_MESSAGE;
  } else if (humanChoice === ROCK_OPTION && computerChoice === PAPER_OPTION) {
    return COMPUTER_WINS_MESSAGE;
  } else if (humanChoice === ROCK_OPTION && computerChoice === SCISSORS_OPTION) {
    return HUMAN_WINS_MESSAGE;
  } else if (humanChoice === PAPER_OPTION && computerChoice === PAPER_OPTION) {
    return DRAW_MESSAGE;
  } else if (humanChoice === PAPER_OPTION && computerChoice === SCISSORS_OPTION) {
    return COMPUTER_WINS_MESSAGE;
  } else if (humanChoice === PAPER_OPTION && computerChoice === ROCK_OPTION) {
    return HUMAN_WINS_MESSAGE;
  } else if (humanChoice === SCISSORS_OPTION && computerChoice === SCISSORS_OPTION) {
    return DRAW_MESSAGE;
  } else if (humanChoice === SCISSORS_OPTION && computerChoice === ROCK_OPTION) {
    return COMPUTER_WINS_MESSAGE;
  } else if (humanChoice === SCISSORS_OPTION && computerChoice === PAPER_OPTION) {
    return HUMAN_WINS_MESSAGE;
  } else {
    return INVALID_MESSAGE;
  }
}
