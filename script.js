//create rock paper scissors variables,
let rock;
let paper;
let scissors;
//create win lose draw variables,
let win;
let lose;
let tie;
//create score variables,
let compScore;
let playerScore;
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
    console.log(input);
}
//generate function to start a rock paper scissors round against the computer,
//show computer selection on console log,
//show player selection on console log,
//generate if else for when player and computer choose rock paper or scissors,
//show computer score on console log,
//show player score on console log,
//generate a function that invokes the game start function 5 times,