const result1 = "Rock beats Scissors!";
const result2 = "Paper beats Rock!";
const result3 = "Scissors beats Paper!";
const result4 = "Tie! Rock doesn't beat Rock!";
const result5 = "Tie! Paper doesn't beat Paper!";
const result6 = "Tie! Scissors doesn't beat Scissors!";
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
function playRound(playerSelection, computerSelection){
	if (playerSelection.toUpperCase() === "ROCK"){
		if (computerSelection.toUpperCase() === "ROCK"){
			return result4;
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			return "You Lose! " + result2;
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			return "You Win! " + result1;
		}
	}
	else if (playerSelection.toUpperCase() === "PAPER"){
		if (computerSelection.toUpperCase() === "ROCK"){
			return "You Win! " + result2;
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			return result5;
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			return "You Lose! " + result3;
		}
	}
	else if (playerSelection.toUpperCase() === "SCISSORS"){
		if (computerSelection.toUpperCase() === "ROCK"){
			return "You Lose! " + result1;
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			return "You Win! " + result3;
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			return result6;
		}
	}
}