



function getComputerChoice  () {

    const gameResults = ["rock", "paper", "scissors"];

    const randomResult = Math.floor(Math.random()*3);

    return gameResults[randomResult];
}

