function computerPlay() {
    let computerSelection;
    let playerSelection;
    let string = ['rock', 'paper', 'scissors'];

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let result = getRandomIntInclusive(0, 2);
    return string[result];

}
let compturn = computerPlay();

console.log(compturn);

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection().toLowerCase();

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));