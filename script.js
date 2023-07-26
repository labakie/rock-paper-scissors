const computerChoice = ['Rock', 'Paper', 'Scissor'];

function getComputerChoice() {
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `It's a tie!`;
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissor') {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    } else if (playerSelection === 'Scissor') {
        if (computerSelection === 'Paper') {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
    }
  }
   
  const playerSelection = 'Scissor';
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(computerSelection);
  console.log(playRound(playerSelection, computerSelection));