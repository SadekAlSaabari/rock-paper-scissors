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

const rockBTN = document.querySelector(".rockBTN");
const paperBTN = document.querySelector(".paperBTN");
const scissorsBTN = document.querySelector(".scissorsBTN");
const kenImage = document.querySelector(".challenge");
const kenMessage = document.querySelector(".callToBattle");

let KS = document.querySelector(".KS");
let HS = document.querySelector(".HS");

let kenScore = 0;
let humanScore = 0;

rockBTN.onclick = function() {
    let kenChoice = getComputerChoice();

    if (kenChoice == "paper") {
        kenImage.src = "images/win.png";
        kenMessage.textContent = "Hehe, a win for me! One more time!";
        kenScore++;
        KS.textContent = kenScore;
    }

    else if (kenChoice == "rock") {
        kenImage.src = "images/challenge.png";
        kenMessage.textContent = "Darn, a draw! Let's go again!";
    }

    else {
        kenImage.src = "images/loss.png";
        kenMessage.textContent = "I-I lost? How?! Urgh, forget it, I'm still winning this! Again!";
        humanScore++;
        HS.textContent = humanScore;
    }
};

paperBTN.onclick = function() {
    let kenChoice = getComputerChoice();

    if (kenChoice == "scissors") {
        kenImage.src = "images/win.png";
        kenMessage.textContent = "Hehe, a win for me! One more time!";
        kenScore++;
        KS.textContent = kenScore;
    }

    else if (kenChoice == "paper") {
        kenImage.src = "images/challenge.png";
        kenMessage.textContent = "Darn, a draw! Let's go again!";
    }

    else {
        kenImage.src = "images/loss.png";
        kenMessage.textContent = "I-I lost? How?! Urgh, forget it, I'm still winning this! Again!";
        humanScore++;
        HS.textContent = humanScore;
    }
};

scissorsBTN.onclick = function() {
    let kenChoice = getComputerChoice();

    if (kenChoice == "rock") {
        kenImage.src = "images/win.png";
        kenMessage.textContent = "Hehe, a win for me! One more time!";
        kenScore++;
        KS.textContent = kenScore;
    }

    else if (kenChoice == "scissors") {
        kenImage.src = "images/challenge.png";
        kenMessage.textContent = "Darn, a draw! Let's go again!";
    }

    else {
        kenImage.src = "images/loss.png";
        kenMessage.textContent = "I-I lost? How?! Urgh, forget it, I'm still winning this! Again!";
        humanScore++;
        HS.textContent = humanScore;
    }
};

//OLD prompt for human choice

//function getHumanChoice() {

    //let humanChoice = prompt("I challenge you to a game of Rock Paper Scissors!").toLowerCase();

    //while (!["rock", "paper", "scissors"].includes(humanChoice)) {
        //humanChoice = prompt("Invalid input! Please choose either 'rock', 'paper', or 'scissors'").toLowerCase();
    //}

    //return humanChoice;
//}

//NEW prompt for human choice

//logic for one round

// let KenScore = 0;
// let humanScore = 0;

// for (let round = 1; round <= 5; round++) {

// let computerChoice = getComputerChoice();
// let humanChoice = getHumanChoice();

// console.log("*** Round " + round + " result***")

// if (computerChoice === humanChoice) {

//     console.log("It's a tie!");

// } else if (
//     ((computerChoice === "rock") && (humanChoice === "paper")) || 
//     ((computerChoice === "paper") && (humanChoice === "scissors")) || 
//     ((computerChoice === "scissors") && (humanChoice === "rock"))
// ) {
    
//     humanScore++;
//     console.log("Darn it! You win this round!");

// } else {

//     computerScore++;
//     console.log("Haha! I win this round!");

// }

// console.log("I picked " + computerChoice);
// console.log("You picked " + humanChoice);
// console.log("Your score is " + humanScore);
// console.log("My score is " + computerScore);

// }

// console.log("*** Final Result ***")
// console.log("Your score is " + humanScore);
// console.log("My score is " + computerScore);

// if (humanScore === computerScore) {
//     console.log("It seems like we're even. Good game, my friend.")
// }

// else if (humanScore > computerScore) {
//     console.log("You won! Great job :)")
// }

// else {
//     console.log("I won! Take that, loser! Just kidding, good game! :D")
// }