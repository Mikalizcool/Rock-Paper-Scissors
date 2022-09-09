const result1 = "Rock beats Scissors!";
const result2 = "Paper beats Rock!";
const result3 = "Scissors beats Paper!";
const result4 = "Tie! Rock doesn't beat Rock!";
const result5 = "Tie! Paper doesn't beat Paper!";
const result6 = "Tie! Scissors doesn't beat Scissors!";
let playerWins = 0;
let computerWins = 0;

function getComputerChoice(){
	let rand = Math.floor(Math.random() * 3);
	if (rand == 0){
		return "Rock";
	}
	else if (rand == 1){
		return "Paper";
	}
	else{
		return "Scissors";
	}
}
function playRound(playerSelection){ // 0 = win, 1 = lose, 2 = tie
	let computerSelection = getComputerChoice();
	if (playerSelection.toUpperCase() === "ROCK"){
		if (computerSelection.toUpperCase() === "ROCK"){
			return 2;
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			return 1;
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			if (playerWins < 5){
				playerWins += 1;
				if (playerWins == 5){
					document.getElementById("result").innerHTML = "VICTORY!";
				}
				document.getElementById("playerScore").innerHTML = playerWins;
			}
			return 0;
		}
	}
	else if (playerSelection.toUpperCase() === "PAPER"){
		if (computerSelection.toUpperCase() === "ROCK"){
			if (playerWins < 5){
				playerWins += 1;
				if (playerWins == 5){
					document.getElementById("result").innerHTML = "VICTORY!";
				}
				document.getElementById("playerScore").innerHTML = playerWins;
			}
			else if (playerWins == 5){
				document.getElementById("result").innerHTML = "VICTORY!";
			}
			return 0;
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			return 2;
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			return 1;
		}
	}
	else if (playerSelection.toUpperCase() === "SCISSORS"){
		if (computerSelection.toUpperCase() === "ROCK"){
			return 1;
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			if (playerWins < 5){
				playerWins += 1;
				if (playerWins == 5){
					document.getElementById("result").innerHTML = "VICTORY!";
				}
				document.getElementById("playerScore").innerHTML = playerWins;
			}
			return 0;
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			return 2;
		}
	}
}
function game(){
		let computerSelect = getComputerChoice();
		let result = playRound(playerSelect, computerSelect);
		if (result == 0){
			playerWins ++;
			console.log("You win the round!");
		}
		else if (result == 1){
			computerWins ++;
			console.log("The computer wins the round!");
		}
		else if (result == 2){
			console.log("It's a tie!");
		}
	if (playerWins > computerWins){
		console.log("You win!");
	}
	else if (playerWins < computerWins){
		console.log("The computer wins!");
	}
	else{
		console.log("The game is a tie!");
	}
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', () => playRound("rock"));
const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => playRound("paper"));
const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => playRound("scissors"));
const playBtn = document.querySelector("#play-again");
playBtn.addEventListener('click', () => {playerWins = 0; document.getElementById("playerScore").innerHTML = playerWins; document.getElementById("result").innerHTML = "";});