function computerPlay() {


    let string = ['rock', 'paper', 'scissors'];

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    let result = getRandomIntInclusive(0, 2);
    return string[result];

}
let computerScore = 0;
let playerScore = 0;
let playerSelection;



const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("please choose between rock, paper, scissors");
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        playerScore += 1;
        computerScore += 1;
        return ("It's a tie, you both picked: " + playerSelection + " and the score is : You : " + playerScore + "  Computer : " + computerScore)
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore += 1;
        return ("You win! " + playerSelection + " beats " + computerSelection + ". The score is: You : " + playerScore + " Computer : " + computerScore)
    } else {
        computerScore += 1;
        return ("you lose! " + computerSelection + " beats " + playerSelection + ". The score is: You : " + playerScore + " Computer : " + computerScore)
    }

}


function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore === computerScore) {
        return "This game is a tie."
    } else if (playerScore < computerScore) {
        return "you lose the game."
    } else {
        return "You win the game."
    }

}
console.log(game());