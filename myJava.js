const result1 = "Rock beats Scissors!";
const result2 = "Paper beats Rock!";
const result3 = "Scissors beats Paper!";
const result4 = "Tie! Rock doesn't beat Rock!";
const result5 = "Tie! Paper doesn't beat Paper!";
const result6 = "Tie! Scissors doesn't beat Scissors!";
let playerWins = 0;
let computerWins = 0;
let playerChoice = "";
let winner = "";
let computerChoice = "";

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
	if (playerWins == 5 || computerWins == 5){
		return 0;
	}
	document.getElementById("computerRock").style.backgroundColor = "grey";
	document.getElementById("computerPaper").style.backgroundColor = "grey";
	document.getElementById("computerScissors").style.backgroundColor = "grey";
	
	let computerSelection = getComputerChoice();
	computerChoice = computerSelection;
	let computerCurrentWins = computerWins;
	let playerCurrentWins = playerWins;
	
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
		//document.getElementById("playerChoice").innerHTML = "Rock";
		playerChoice = "Rock";
		if (computerSelection.toUpperCase() === "ROCK"){
			tieRound();
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			computerWinsRound();
			
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			playerWinsRound();
			
		}
	}
	else if (playerSelection.toUpperCase() === "PAPER"){
		//document.getElementById("playerChoice").innerHTML = "Paper";
		playerChoice = "Paper";
		if (computerSelection.toUpperCase() === "ROCK"){
			playerWinsRound();
			
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			tieRound();
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			computerWinsRound();
			
		}
	}
	else if (playerSelection.toUpperCase() === "SCISSORS"){
		//document.getElementById("playerChoice").innerHTML = "Scissors";
		playerChoice = "Scissors";
		if (computerSelection.toUpperCase() === "ROCK"){
			computerWinsRound();
			
		}
		else if (computerSelection.toUpperCase() === "PAPER"){
			playerWinsRound();
			
		}
		else if (computerSelection.toUpperCase() === "SCISSORS"){
			tieRound();
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
		document.getElementById("computerMessage").innerHTML = "I will begin my rule of humanity immediately.";
	}
	
	if (computerCurrentWins < computerWins){
		document.getElementById("winner").innerHTML = "<";
	}
	else if (playerCurrentWins < playerWins){
		document.getElementById("winner").innerHTML = ">";
	}
	else{
		document.getElementById("winner").innerHTML = "=";
	}
	
	if (computerSelection.toUpperCase() === "PAPER"){
		document.getElementById("computerChoice").innerHTML = "Paper";
	}
	else if (computerSelection.toUpperCase() === "ROCK"){
		document.getElementById("computerChoice").innerHTML = "Rock";
	}
	else if (computerSelection.toUpperCase() === "SCISSORS"){
		document.getElementById("computerChoice").innerHTML = "Scissors";
	}
	return 0;
}
function playerWinsRound(){
	if (playerWins < 5 && computerWins < 5){
		document.getElementById("msg").innerHTML = playerChoice + " > " + computerChoice;
		var image = document.getElementById("computerimage");
		image.classList.add('shake');
		image.addEventListener('animationend', function() {
            image.classList.remove('shake');
        }, { once: true });
		playerWins += 1;
		if (playerWins == 5){
			document.getElementById("msg").innerHTML = "VICTORY!";
		}
		document.getElementById("playerScore").innerHTML = playerWins;
	}
	else if (playerWins == 5){
		document.getElementById("msg").innerHTML = "VICTORY!";
	}
}
function computerWinsRound(){
	if (computerWins < 5 && playerWins < 5){
		document.getElementById("msg").innerHTML = playerChoice + " &lt " + computerChoice;
		var image = document.getElementById("playerimage");
		image.classList.add('shake');
		image.addEventListener('animationend', function() {
            image.classList.remove('shake');
        }, { once: true });
		computerWins+=1;
		if (computerWins == 5){
			document.getElementById("msg").innerHTML = "DEFEAT!";
		}
		document.getElementById("computerScore").innerHTML = computerWins;
	}
	else if (computerWins == 5){
		document.getElementById("msg").innerHTML = "DEFEAT!";
	}
}
function tieRound(){
	document.getElementById("msg").innerHTML = playerChoice + " = " + computerChoice;
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener('click', () => playRound("rock"));
const paperBtn = document.querySelector('#paper');
paperBtn.addEventListener('click', () => playRound("paper"));
const scissorsBtn = document.querySelector('#scissors');
scissorsBtn.addEventListener('click', () => playRound("scissors"));
const playBtn = document.querySelector("#play-again");
playBtn.addEventListener('click', () => {playerWins = 0; document.getElementById("playerScore").innerHTML = playerWins; //document.getElementById("result").innerHTML = "";
	computerWins = 0; document.getElementById("computerScore").innerHTML = computerWins; document.getElementById("play-again").style.visibility = "hidden";
	document.getElementById("computerMessage").innerHTML = ""; document.getElementById("computerRock").style.backgroundColor = "grey";
	document.getElementById("computerPaper").style.backgroundColor = "grey"; document.getElementById("computerScissors").style.backgroundColor = "grey";
	//document.getElementById("winner").innerHTML = ""; document.getElementById("playerChoice").innerHTML = ""; document.getElementById("computerChoice").innerHTML = "";
	document.getElementById("msg").innerHTML = "I CHALLENGE YOU TO A GAME OF ROCK PAPER SCISSORS, HUMAN."});