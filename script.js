// Random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let randomGuess

// Computer Plays The Game

function computerPlay() {
    randomGuess = getRandomInt(3)
    if (randomGuess == 0) {
        return "Rock";
    } else if (randomGuess == 1) {
        return "Paper";
    } else {
        return "Scizzors";
    }
}


function playRound(computerSelection, playerSelection) {
    if (computerSelection == "Rock" && playerSelection == "rock") {
        return "Its A tie. Rock cant Beat Rock"
    } else if (computerSelection == "Scizzors" && playerSelection == "scissors") {
        return "Its A tie. Scizzors cant Beat Scizzors"
    } else if (computerSelection == "Paper" && playerSelection == "paper") {
        return "Its A tie. Paper cant Beat Paper"
    } else if (computerSelection == "Rock" && playerSelection == "scissors") {
        return "Computer Wins. Rock Beats Scizzors"
    } else if (computerSelection == "Scizzors" && playerSelection == "rock") {
        return "You Win. Rock Beats Scizzors"
    } else if (computerSelection == "Paper" && playerSelection == "scissors") {
        return "You Win. Scizzors beats paper"
    } else if (computerSelection == "Scizzors" && playerSelection == "paper") {
        return "Computer Wins. Scizzors beats Paper"
    } else if (computerSelection == "Rock" && playerSelection == "paper") {
        return "You win. Paper Beats Rock"
    } else if (computerSelection == "Paper" && playerSelection == "rock") {
        return "Computer Wins. Paper beats Rock"
    }
}

// GAME Function

function game() {
    let playerSelection = prompt("What will you choose?")
    playerSelection = playerSelection.toLowerCase()
    let computerSelection = computerPlay()
    return playRound(computerSelection, playerSelection);
}

for (let i = 0; i < 5; i++) {
    console.log(game())
}
