let playerScore = 0;
let compScore = 0;

let playerChoice = ""


let rockB = document.querySelector('#rock')
rockB.addEventListener('click', function(e){
    playerChoice = "rock"
    play();
})

let paperB = document.querySelector('#paper')
paperB.addEventListener('click', function(e){
    playerChoice = "paper"
    play();
})

let scissorsB = document.querySelector('#scissors')
scissorsB.addEventListener('click', function(e){
    playerChoice = "scissors"
    play();
})




function getComputerChoice  () {

    const gameResults = ["rock", "paper", "scissors"];

    const randomResult = Math.floor(Math.random()*3);

    return gameResults[randomResult];

}

// function askPlayer () {
//     const playerChoice = (prompt("Rock, Paper, or Scissors?")).toLowerCase();
    
//     return playerChoice;


// }



function playRound (playerSelection, computerSelection) {

    

    if (playerSelection == computerSelection) {
        return `You picked ${playerSelection}. 
        They picked ${computerSelection}. 
        This round is a tie. 
        Your score is ${playerScore}.
        The computer's score is ${compScore}.`
    } 
        else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
        ) {
            playerScore+=1;
            return `You picked ${playerSelection}. 
            They picked ${computerSelection}. 
            You win this round. 
            Your score is ${playerScore}.
            The computer's score is ${compScore}.`
        } else if (
            (playerSelection == "scissors" && computerSelection == "rock") ||
            (playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors")
        ) {
            compScore+=1;
            return `You picked ${playerSelection}.
            They picked ${computerSelection}.
            You lose this round.
            Your score is ${playerScore}.
            The computer's score is ${compScore}.`


        } 


}

let div = document.querySelector('#results')

div.addEventListener('click', function(e){
    div.innerHTML = "lol"
})



function play() {

        let test = playRound( playerChoice , getComputerChoice() )
        div.innerHTML = test

        
    
}






// on button click
// 	asks for choice ✅
// 	evaluates entry ✅
// 	returns result ✅
// 	find out who won 
// 	adds 1 to score of winner
