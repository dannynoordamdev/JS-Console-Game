const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    return "invalid input!";
  }
};

// to test the function:
// console.log(getUserChoice('paper'));

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";

    case 1:
      return "paper";

    case 2:
      return "scissors";
  }
};

// to test the function:
// console.log(getComputerChoice())

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Game is a tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer won!";
    } else {
      return "you won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "you won!";
    } else {
      return "computer won!";
    }
  }
  if (userChoice === "bomb") {
     
      return "you won!";
    
  }
};

const playGame = (userType) => {
  const userChoice = getUserChoice(userType);
  console.log(`You threw: ${userChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`The computer threw: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
};

const askPlayType = () => {
  return prompt("What do you choose? 'rock', 'paper', or 'scissors?'");
};

const userType = askPlayType();
playGame(userType);
