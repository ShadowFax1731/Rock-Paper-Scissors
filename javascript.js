let playerChoice, computerChoice, playerScore = 0, computerScore = 0;
let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
const options = document.querySelectorAll('.btn');

let roundResult = document.querySelector('.round-result');

let player = document.querySelector('.player-score');
let computer = document.querySelector('.computer-score');

const CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return CHOICES[Math.floor(Math.random() * 3)];
}

options.forEach((option) => {
    option.addEventListener('click', function() {
        playerChoice = option.id;
        playGame();
    })
})

function playRound(){
    computerChoice = getComputerChoice();
    console.log(playerChoice, computerChoice);

    if(playerChoice == 'rock'){
        if(computerChoice == 'rock'){
            roundResult.textContent = `Tie Game!`
        }else if(computerChoice =='scissors'){
            roundResult.textContent = `You Win! Your choice ${playerChoice} beats the computer choice ${computerChoice}`;
            playerScore++;
        } else{
            roundResult.textContent = `You Lose! Your choice ${playerChoice} loses to the computer choice ${computerChoice}`;
            computerScore++;
        }
    } else if(playerChoice == 'scissors'){
        if(computerChoice =='scissors'){
            roundResult.textContent = `Tie Game!`
        } else if(computerChoice == 'rock'){
            roundResult.textContent = `You Lose! Your choice ${playerChoice} loses to the computer choice ${computerChoice}`;
            computerScore++;
        } else {
            roundResult.textContent = `You Win! Your choice ${playerChoice} beats the computer choice ${computerChoice}`;
            playerScore++;
        }
    } else if(playerChoice == 'paper'){
        if(computerChoice == 'paper'){
            roundResult.textContent = `Tie Game!`
        }else if(computerChoice == 'rock'){
            roundResult.textContent = `You Lose! Your choice ${playerChoice} beats the computer choice ${computerChoice}`;
            computerScore++;
        } else{
            roundResult.textContent = `You Win! Your choice ${playerChoice} beats the computer choice ${computerChoice}`;
            playerScore++;
        }
    }

}

function playGame(){
    roundResult.textContent = "Choose Rock, Paper or Scissors";
    playRound();
    player.textContent = playerScore;
    computer.textContent = computerScore;

    if(playerScore == 5){
        roundResult.textContent = 'You won! Congratulations!!'
        playerScore = 0;
        computerScore = 0;
        player.textContent = playerScore;
        computer.textContent = computerScore;
    }

    if (computerScore == 5){
        roundResult.textContent = 'You lost! Better luck next time.'
        playerScore = 0;
        computerScore = 0;
        player.textContent = playerScore;
        computer.textContent = computerScore;
    }
}