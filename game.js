//function to get random computer choice

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {

    let randomChoice = getRandomInt(3);
    if (randomChoice == 0) {
        return "rock";
    }

    else if (randomChoice == 1) {
        return "paper";
    }

    else {
        return "scissors";
    }
}

//prompt for human choice

function getHumanChoice() {

    let humanChoice = prompt("I challenge you to a game of Rock Paper Scissors!").toLowerCase();

    while (!["rock", "paper", "scissors"].includes(humanChoice)) {
        humanChoice = prompt("Invalid input! Please choose either 'rock', 'paper', or 'scissors'").toLowerCase();
    }

    return humanChoice;
}

//logic for one round

let computerScore = 0;
let humanScore = 0;

for (let round = 1; round <= 5; round++) {

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    
    console.log("*** Round " + round + " result***");
    
    if (computerChoice === humanChoice) {
    
        console.log("It's a tie!");
    
    } else if (
        ((computerChoice === "rock") && (humanChoice === "paper")) || 
        ((computerChoice === "paper") && (humanChoice === "scissors")) || 
        ((computerChoice === "scissors") && (humanChoice === "rock"))
    ) {
        
        humanScore++;
        console.log("Darn it! You win this round!");
    
    } else {
    
        computerScore++;
        console.log("Haha! I win this round!");

    }

    console.log("I picked " + computerChoice);
    console.log("You picked " + humanChoice);
    console.log("Your score is " + humanScore);
    console.log("My score is " + computerScore);

}

console.log("*** Final Result ***")
console.log("Your score is " + humanScore);
console.log("My score is " + computerScore);

if (humanScore === computerScore) {
    console.log("It seems like we're even. Good game, my friend.")
}

else if (humanScore > computerScore) {
    console.log("You won! Great job :)")
}

else {
    console.log("I won! Take that, loser! Just kidding, good game! :D")
}
