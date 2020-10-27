let game = document.querySelector('.game');
let gameAction = document.createElement('div');
let results = document.createElement('div');
let rounds = document.createElement('h3');
let gameResult = document.createElement('h3');
let winner = document.createElement('h3');


//generate random number to be used by computer
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//computer will randomly choose between 1 and 3. each number is assigned to a choice
function computerPlay() {
    let computerChoice = getRandomNumber(1, 3);
    if (computerChoice === 1) {
        return 'rock';
    } else if (computerChoice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper"); 
const scissors = document.querySelector("#scissors");
const reset = document.querySelector("#reset");
const choices = [rock, paper, scissors];
const computerSelection = computerPlay();

let playerWins = 0;
let computerWins = 0;
let draw = 0;
let round = 0;

function determineWinner() {
    if (playerWins === 5) {
        return ('You win the game! Reset the game and play again!');
    } else if (computerWins === 5) {
        return ('The computer wins the game! Reset the game and play again!');
    }
    return ('');
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && (computerSelection === 'scissors')) {
        return ('You win! Rock beats scissors.');
    } else if (playerSelection === 'paper' && (computerSelection === 'rock')) {
        return ('You win! Paper beats rock.');
    } else if (playerSelection === 'scissors' && (computerSelection === 'paper')) {
        return ('You win! Scissors beat paper.');
    } else if (playerSelection === 'rock' && (computerSelection === 'paper')) {
        return ('You lose! Paper beats rock.');
    } else if (playerSelection === 'paper' && (computerSelection === 'scissors')) {
        return ('You lose! Scissors beat paper.');
    } else if (playerSelection === 'scissors' && (computerSelection === 'rock')) {
        return ('You lose! Rock beats scissors.');
    } else {
        return ('Draw! Play again.');
    }
}

function getGameResult() {
    if (results.innerText.includes('win')) {
        playerWins++;
    } else if (results.innerText.includes('lose')) {
        computerWins++;
    } else {
        draw++;
    }
    return `Round ${round + 1} \n **Your score: ${playerWins} | Computer score: ${computerWins} | Draw: ${draw}**`;
}

rounds.innerText = `Round ${round + 1}`;

choices.forEach((button) => {
    button.addEventListener('click', e => {
        if ((playerWins === 5) || computerWins === 5) {
            gameAction.innerText = '';
            results.innerText = '';
            rounds.innerText = '';
            gameResult.innerText = '';
        } else {
            rounds.innerText = '';
            gameAction.innerText = `You selected ${button.id}. The computer selected ${computerSelection}.`;
            results.innerText = playRound(button.id, computerSelection);
            gameResult.innerText = getGameResult();
            round++;
            winner.innerText = determineWinner();
        }
    })
});

reset.addEventListener('click', e => {
    playerWins = 0;
    computerWins = 0;
    draw = 0;
    round = 0;
    gameAction.innerText = '';
    results.innerText = '';
    winner.innerText = '';
    gameResult.innerText = `Round ${round + 1}`;
});

game.appendChild(gameAction);
game.appendChild(results);
game.appendChild(gameResult);
game.appendChild(rounds);
game.appendChild(winner);