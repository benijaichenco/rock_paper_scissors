//create score variables,
let computerScore = 0;
let playerScore = 0;
let computerResult = 0;
let playerResult = 0;
//create rock paper scissors variables,
const rps = ['rock', 'paper', 'scissors'];
//create variables to select buttons
const buttons = document.querySelectorAll('button');
//create variable for 'content'
const content = document.createElement('div');
content.classList = 'content';
//create variables to display round details
const score = document.querySelector('.score');
score.textContent = `${playerResult} - ${computerResult}`
const roundChoice = document.createElement('div');
const roundResult = document.createElement('div');
const roundScore = document.createElement('div');
const matchResult = document.createElement('div');
//create a variable to select the container in the HTML
const container = document.querySelector('.container');
//create variable for a play again button
const playAgain = document.createElement('button');
playAgain.textContent = 'Play Again!';
//generate a play again function
function restart() {
    content.removeChild(matchResult);
    content.removeChild(playAgain);
    container.removeChild(content);
    for (const btn of button) {
        btn.disabled = false;
    }
    playerScore = 0;
    computerScore = 0;}

//create win lose draw variables,
function win() {
    roundResult.textContent = 'Player won this round!';
    playerScore++;
}
function lose() {
    roundResult.textContent = 'Computer won this round!';
    computerScore++;
}
function tie() {
    roundResult.textContent = 'Draw!';
}
//generate function to return rock paper or scissors randomly,
function getComputerChoice() {
    return rps[Math.floor(Math.random()*rps.length)];
}
//generate function to return user's input,
const button = Array.from(buttons);
button.forEach(button => {
    button.addEventListener('click', () => {
        if (button.id == 'rock') {
            playRound('rock');
        } else if (button.id == 'paper') {
            playRound('paper');
        } else if (button.id == 'scissors') {
            playRound('scissors');
        }
        //add content to nodeList when buttons are pressed
        container.appendChild(content);
    });
});

//generate function to start a rock paper scissors round against the computer,
function playRound(playerSelection, compSelection) {
    compSelection = getComputerChoice();
    roundChoice.textContent = 'Player selected: ' + playerSelection + ' Computer Selected: ' + compSelection;
    if (compSelection === playerSelection) {
        tie();
    } else if (playerSelection === 'rock') {
        compSelection === 'paper' ? lose() : win();
    } else if (playerSelection === 'paper') {
        compSelection === 'scissors' ? lose() : win();
    } else if (playerSelection === 'scissors') {
        compSelection === 'rock' ? lose() : win();
    }
    //display game details
    roundScore.textContent = `Player score: ${playerScore}, computer score: ${computerScore}`;
    content.appendChild(roundChoice);
    content.appendChild(roundResult);
    content.appendChild(roundScore);
    //if one of contestants reaches 5 points, display win message
    if (playerScore === 5) {
        matchResult.textContent = 'Player defeated the computer!';
        content.appendChild(matchResult);
        score.textContent = `${++playerResult} - ${computerResult}`
    } else if (computerScore === 5) {
        matchResult.textContent = 'Computer defeated player!';
        content.appendChild(matchResult);
        score.textContent = `${playerResult} - ${++computerResult}`
        
    }
    //generate a function that adds a 'play again' button
    if (playerScore === 5 || computerScore === 5) {
        for (const btn of buttons) {
            btn.disabled = true;
        }
        content.appendChild(playAgain);
        playAgain.addEventListener('click', restart);
    }
}



