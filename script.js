// Random
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let randomGuess
let playerSelection
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const gameTitle = document.querySelector('#game');
let computerScore = 0;
let playerScore = 0;
const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');
const winning = document.querySelector('#winning');
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
        computerScore = computerScore + 1;
        computerScoreText.textContent = computerScore
        playerScoreText.textContent = playerScore
        return "Computer Wins. Rock Beats Scizzors"
    } else if (computerSelection == "Scizzors" && playerSelection == "rock") {
        playerScore = playerScore + 1;
        computerScoreText.textContent = computerScore
        playerScoreText.textContent = playerScore
        return "You Win. Rock Beats Scizzors"
    } else if (computerSelection == "Paper" && playerSelection == "scissors") {
        playerScore = playerScore + 1;
        computerScoreText.textContent = computerScore
        playerScoreText.textContent = playerScore
        return "You Win. Scizzors beats paper"
    } else if (computerSelection == "Scizzors" && playerSelection == "paper") {
        computerScore = computerScore + 1;
        computerScoreText.textContent = computerScore
        playerScoreText.textContent = playerScore
        return "Computer Wins. Scizzors beats Paper"
    } else if (computerSelection == "Rock" && playerSelection == "paper") {
        playerScore = playerScore + 1;
        computerScoreText.textContent = computerScore
        playerScoreText.textContent = playerScore
        return "You win. Paper Beats Rock"
    } else if (computerSelection == "Paper" && playerSelection == "rock") {
        computerScore = computerScore + 1;
        computerScoreText.textContent = computerScore
        playerScoreText.textContent = playerScore
        return "Computer Wins. Paper beats Rock"
    }
}

// GAME Function

function game() {
    let computerSelection = computerPlay()
    return playRound(computerSelection, playerSelection);
}

rock.addEventListener('click', () =>  {
    playerSelection = "rock"
    gameTitle.textContent = game()
    if (playerScore == 5){
        window.location="won.html"
    }
    else if (computerScore == 5){
        window.location="lost.html"
    }
} )

paper.addEventListener('click', () =>  {
    playerSelection = "paper"
    gameTitle.textContent = game()
    if (playerScore == 5){
        window.location="won.html"
    }
    else if (computerScore == 5){
        window.location="lost.html"
    }
} )

scissors.addEventListener('click', () =>  {
    playerSelection = "scissors"
    gameTitle.textContent = game()
    if (playerScore == 5){
        window.location="won.html"
    }
    else if (computerScore == 5){
        window.location="lost.html"
    }
} )

