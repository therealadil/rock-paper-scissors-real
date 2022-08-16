let playerScore = 0;
let compScore = 0;

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
        return ("You picked " + playerSelection + ". They picked " + computerSelection + ". It's a tie. " +
            
        "Your score is " + playerScore + ". The computer's score is " + compScore + ".");    } 
        else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
        ) {
            playerScore+=1;
            return ("You picked " + playerSelection + ". They picked " + computerSelection + ". You win. " +
            
            "Your score is " + playerScore + ". The computer's score is " + compScore + ".");

        } else if (
            (playerSelection == "scissors" && computerSelection == "rock") ||
            (playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors")
        ) {
            compScore+=1;
            return ("You picked " + playerSelection + ". They picked " + computerSelection + ". You lose. " +
            
            "Your score is"  + playerScore + ". The computer's score is " + compScore + ".");
        } else {
            alert("This is an invalid entry, please choose again.");
            console.log(playRound(askPlayer(), getComputerChoice()));
        }


}




function play() {

        console.log(playRound( askPlayer() , getComputerChoice() ));


        
    
}

console.log("yo");





// on button click
// 	asks for choice ✅
// 	evaluates entry ✅
// 	returns result ✅
// 	find out who won 
// 	adds 1 to score of winner
