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
function playRound(playerSelection){
	document.getElementById("computerRock").style.backgroundColor = "grey";
	document.getElementById("computerPaper").style.backgroundColor = "grey";
	document.getElementById("computerScissors").style.backgroundColor = "grey";
	
	let computerSelection = getComputerChoice();
	
	if (computerSelection.toUpperCase() === "PAPER"){
		document.getElementById("computerPaper").style.backgroundColor = "red";
	}
	else if (computerSelection.toUpperCase() === "ROCK"){
		document.getElementById("computerRock").style.backgroundColor = "red";
	}
	else if (computerSelection.toUpperCase() === "SCISSORS"){
		document.getElementById("computerScissors").style.backgroundColor = "red";
	}
	if (playerSelection.toUpperCase() === "ROCK"){
		if (computerSelection.toUpperCase() === "ROCK"){
			
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			if (computerWins < 5 && playerWins < 5){
				computerWins++;
				document.getElementById("computerPaper").style.backgroundColor = "red";
				if (computerWins == 5){
					document.getElementById("result").innerHTML = "COMPUTER WINS!";
				}
				document.getElementById("computerScore").innerHTML = computerWins;
			}
			
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			if (playerWins < 5 && computerWins < 5){
				playerWins += 1;
				if (playerWins == 5){
					document.getElementById("result").innerHTML = "VICTORY!";
				}
				document.getElementById("playerScore").innerHTML = playerWins;
			}
			
		}
	}
	else if (playerSelection.toUpperCase() === "PAPER"){
		if (computerSelection.toUpperCase() === "ROCK"){
			if (playerWins < 5 && computerWins < 5){
				playerWins += 1;
				if (playerWins == 5){
					document.getElementById("result").innerHTML = "VICTORY!";
				}
				document.getElementById("playerScore").innerHTML = playerWins;
			}
			else if (playerWins == 5){
				document.getElementById("result").innerHTML = "VICTORY!";
			}
			
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			if (computerWins < 5 && playerWins < 5){
				computerWins++;
				document.getElementById("computerScissors").style.backgroundColor = "red";
				if (computerWins == 5){
					document.getElementById("result").innerHTML = "COMPUTER WINS!";
				}
				document.getElementById("computerScore").innerHTML = computerWins;
			}
			
		}
	}
	else if (playerSelection.toUpperCase() === "SCISSORS"){
		if (computerSelection.toUpperCase() === "ROCK"){
			if (computerWins < 5 && playerWins < 5){
				computerWins++;
				document.getElementById("computerRock").style.backgroundColor = "red";
				if (computerWins == 5){
					document.getElementById("result").innerHTML = "COMPUTER WINS!";
				}
				document.getElementById("computerScore").innerHTML = computerWins;
			}
			
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			if (playerWins < 5 && computerWins < 5){
				playerWins += 1;
				if (playerWins == 5){
					document.getElementById("result").innerHTML = "VICTORY!";
				}
				document.getElementById("playerScore").innerHTML = playerWins;
			}
			
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			
		}
	}
	if (playerWins == 5 || computerWins == 5){
		document.getElementById("play-again").style.visibility = "visible";
	}
	if (playerWins == 5 && computerWins == 0){
		document.getElementById("computerMessage").innerHTML = "You somehow managed to win every round. Please share with me your cheat software.";
	}
	else if (computerWins == 5 && playerWins == 0){
		document.getElementById("computerMessage").innerHTML = "You have lost every round. Pathetic.";
	}
	else if (playerWins == 5){
		document.getElementById("computerMessage").innerHTML = "You seemed to have successfully cheated. Congratulations.";
	}
	else if (computerWins == 5){
		document.getElementById("computerMessage").innerHTML = "I enjoy the sight of humans on their knees. That is a joke.";
	}
	return 0;
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
playBtn.addEventListener('click', () => {playerWins = 0; document.getElementById("playerScore").innerHTML = playerWins; document.getElementById("result").innerHTML = "";
	computerWins = 0; document.getElementById("computerScore").innerHTML = computerWins; document.getElementById("play-again").style.visibility = "hidden";
	document.getElementById("computerMessage").innerHTML = ""; document.getElementById("computerRock").style.backgroundColor = "grey";
	document.getElementById("computerPaper").style.backgroundColor = "grey"; document.getElementById("computerScissors").style.backgroundColor = "grey";});