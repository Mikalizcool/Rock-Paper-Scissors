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