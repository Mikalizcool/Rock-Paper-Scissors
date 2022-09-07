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
		console.log("Rock");
		return "Rock";
	}
	else if (rand == 1){
		console.log("Paper");
		return "Paper";
	}
	else{
		console.log("Scissors");
		return "Scissors";
	}
}
function playRound(playerSelection, computerSelection){ // 0 = win, 1 = lose, 2 = tie
	if (playerSelection.toUpperCase() === "ROCK"){
		if (computerSelection.toUpperCase() === "ROCK"){
			return 2;
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			return 1;
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			return 0;
		}
	}
	else if (playerSelection.toUpperCase() === "PAPER"){
		if (computerSelection.toUpperCase() === "ROCK"){
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
			return 0;
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			return 2;
		}
	}
}
function game(){
	for (let i = 0; i < 5; i++){
		let playerSelect = prompt("Select Rock, Paper, or Scissors.");
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