function getComputerChoice  () {

    const gameResults = ["rock", "paper", "scissors"];

    const randomResult = Math.floor(Math.random()*3);

    return gameResults[randomResult];
}

function askPlayer () {
    const playerChoice = (prompt("Rock, Paper, or Scissors?")).toLowerCase();
    
    return playerChoice;


}



function playRound (playerSelection, computerSelection) {

    

    if (playerSelection == computerSelection) {
        return "You picked " + playerSelection + ". They picked " + computerSelection + ". It's a tie." 
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
        ) {
            return "You picked " + playerSelection + ". They picked " + computerSelection + ". You win." 
        } else if (
            (playerSelection == "scissors" && computerSelection == "rock") ||
            (playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors")
        ) {
            return "You picked " + playerSelection + ". They picked " + computerSelection + ". You lose." 
        } else {
            alert("this is invalid entry");
            console.log(playRound(askPlayer(), getComputerChoice()));
        }


}




    function game () {
        for (let i = 0; i<5; i++) {
            playRound( askPlayer(), getComputerChoice() )

        }
    }