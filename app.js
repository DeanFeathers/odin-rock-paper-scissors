function userChoice () {
  const userChoice = prompt("Do you choose Rock, Paper, or Scissors?").toLowerCase();
  return userChoice
}

function compChoice () {
  let compChoice = Math.random();
  if (compChoice < 0.34) {
    compChoice = "rock";
  } else if (compChoice <= 0.67) {
    compChoice = "paper";
  } else {
    compChoice = "scissors";
  }
  return compChoice
}

function playRound (userChoice, compChoice) {
  //Rock Choice
  if (userChoice == "rock") {
    if (compChoice == "scissors") {
      return "You Win! rock beats scissors!";
    } else if (compChoice == "paper") {
      return "Loser! paper Beats rock";
    } else if (compChoice == "rock") {
      return "It's a Draw";
    } else {
      return "Something Went Wrong";
    }
  }
  //paper Choice
  else if (userChoice == "paper") {
    if (compChoice == "rock") {
      return "You Win! paper beats rock";
    } else if (compChoice == "scissors") {
      return "You Lose! scissors beats paper";
    } else if (compChoice == "paper") {
      return "It's a Draw";
    } else {
      return "Something Went Wrong";
    }
  }
  //scissors Choice
  else if (userChoice == "scissors") {
    if (compChoice == "paper") {
      return "You win! scissors beat paper";
    } else if (userChoice == "scissors" && compChoice == "rock") {
      return "You Lose! rock beats scissors";
    } else if (userChoice == "scissors" && compChoice == "scissors") {
      return "It's a Draw";
    } else {
      return "Something Went Wrong";
    }
  } else {
    return "That's not a valid choice";
  }
}

console.log(playRound(userChoice(), compChoice()))