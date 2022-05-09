let playerScore = 0,
    computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let outcome;
    if (playerSelection == "rock") {
        if (computerSelection == "rock") {
                outcome = "Draw";
        } else if (computerSelection == "paper") {
                outcome = "You Lose";
        } else if (computerSelection == "scissors") {
                outcome = "You Win";
        };
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            outcome = "You Win";
        } else if (computerSelection == "paper") {
            outcome = "Draw";
        } else if (computerSelection == "scissors") {
            outcome = "You Lose";
        };
    } else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            outcome = "You Lose";
        } else if (computerSelection == "paper") {
            outcome = "You Win";
        } else if (computerSelection == "scissors") {
            outcome = "Draw";
        };
    } else {
        alert("Invalid input, please try again");
    }
    return outcome;
};

let computerChoice = function() {
    let choice,
        choiceNum = Math.floor(Math.random() * 3 ) + 1;
    switch(choiceNum) {
        case 1:
            choice = "rock";
            break;
        case 2:
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
            break;
    };
    return choice;
};

function playGame() {
    let playerSelection,
        computerSelection,
        outcomeMsg,
        rounds = parseInt(prompt("How many rounds do you want to play?"));
    for (i = 1; i <= rounds; i++) {
        playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        computerSelection = computerChoice();
        outcome = playRound(playerSelection, computerSelection);
        switch(outcome) {
            case "You Win":
                ++playerScore;
                outcomeMsg = `${outcome}! ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)} beats ${computerSelection}!\n`;

                alert(outcomeMsg + `\nYour Score: ${playerScore}\n` + `Computer Score: ${computerScore}`);
                break;
            case "You Lose":
                ++computerScore;
                outcomeMsg = `${outcome}! ${computerSelection.charAt(0).toUpperCase()+computerSelection.slice(1)} beats ${playerSelection}!\n`;

                alert(outcomeMsg + `\nYour Score: ${playerScore}\n` + `Computer Score: ${computerScore}`);
                break;
            case "Draw":
                outcomeMsg = `${outcome}! ${playerSelection.charAt(0).toUpperCase()+playerSelection.slice(1)} is equal to ${computerSelection}!\n`;

                alert(outcomeMsg + `\nYour Score: ${playerScore}\n` + `Computer Score: ${computerScore}`);
                break;
            default:
                alert("No outcome");
                break;
        };

    };
    console.log(`Final Score:\n` + `You: ${playerScore}\n` + `Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You win!");
    } else if (computerScore > playerScore) {
        console.log("Too bad, try again next time!");
    } else {
        console.log("It's a draw... Best two out of three?");
    }
}

playGame();