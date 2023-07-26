const computerChoice = ['Rock', 'Paper', 'Scissorss'];

function getComputerChoice() {
    return computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

function playRound(playerSelectionFixed, computerSelection) {
    if (playerSelectionFixed === computerSelection) {
        return `It's a tie!`;
    } else if (playerSelectionFixed === 'Rock') {
        if (computerSelection === 'Scissors') {
            return `You win! ${playerSelectionFixed} beats ${computerSelection}`;
        } else {
            return `You lose! ${computerSelection} beats ${playerSelectionFixed}`;
        }
    } else if (playerSelectionFixed === 'Paper') {
        if (computerSelection === 'Rock') {
            return `You win! ${playerSelectionFixed} beats ${computerSelection}`;
        } else {
            return `You lose! ${computerSelection} beats ${playerSelectionFixed}`;
        }
    } else if (playerSelectionFixed === 'Scissors') {
        if (computerSelection === 'Paper') {
            return `You win! ${playerSelectionFixed} beats ${computerSelection}`;
        } else {
            return `You lose! ${computerSelection} beats ${playerSelectionFixed}`;
        }
    }
  }

  function caseSensitiveHandler (word) {
    const firstLetter = word.slice(0,1).toUpperCase();
    const theRest = word.slice(1).toLowerCase();
    return firstLetter + theRest;
  }
   
  const playerSelection = 'Scissors';
  const playerSelectionFixed = caseSensitiveHandler(playerSelection);
  const computerSelection = getComputerChoice();
  console.log(playerSelection);
  console.log(playerSelectionFixed);
  console.log(computerSelection);
  console.log(playRound(playerSelectionFixed, computerSelection));