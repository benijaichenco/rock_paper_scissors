//create rock paper scissors variables,
let rock;
let paper;
let scissors;
//create score variables,
let compScore = 0;
let playerScore = 0;
//create win lose draw variables,
function win() {
    console.log('Player won this round!');
    playerScore += 1;
    compScore += 0;
    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + compScore);
}
function lose() {
    console.log('Computer won this round!');
    playerScore += 0;
    compScore += 1;
    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + compScore);
}
function tie() {
    console.log('Draw!');
    playerScore += 0;
    compScore += 0;
    console.log('Player Score: ' + playerScore);
    console.log('Computer Score: ' + compScore);
}
//create choices variable,
const choices = ['rock', 'paper', 'scissors'];
//generate function to return rock paper or scissors randomly,
function getCompChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}
console.log(getCompChoice());
//generate function to return user's input,
function getPlayerChoice() {
    let input = prompt('type rock, paper or scissors:', '');
    input = input.toLowerCase();
    return input;
}
//generate function to start a rock paper scissors round against the computer,
function playRound(playerSelection, compSelection) {
    compSelection = getCompChoice();
    console.log('Computer Selected: ' + compSelection);
    playerSelection = getPlayerChoice();
    console.log('Player selected: ' + playerSelection);
    if (playerSelection == 'rock' && compSelection == 'rock') {
        return tie();
    } else if (playerSelection == 'rock' && compSelection == 'paper') {
        return lose();
    } else if (playerSelection == 'rock' && compSelection == 'scissors') {
        return win();
    } else if (playerSelection == 'paper' && compSelection == 'rock') {
        return win();
    } else if (playerSelection == 'paper' && compSelection == 'paper') {
        return tie();
    } else if (playerSelection == 'paper' && compSelection == 'scissors') {
        return lose();
    } else if (playerSelection == 'scissors' && compSelection == 'rock') {
        return lose();
    } else if (playerSelection == 'scissors' && compSelection == 'paper') {
        return win();
    } else if (playerSelection == 'scissors' && compSelection == 'scissors') {
        return tie();
    }
}
//show computer selection on console log,
//show player selection on console log,
//generate if else for when player and computer choose rock paper or scissors,
//show computer score on console log,
//show player score on console log,
//generate a function that invokes the game start function 5 times,