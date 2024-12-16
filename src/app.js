let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");

const userScorePara = document.querySelector("#playerScore");
const compScorePara = document.querySelector("#computerScore");

const generateComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  result.innerText = "Game was Draw. Play again.";
  result.style.backgroundColor = "#ffffff";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    result.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    result.style.backgroundColor = "#ffffff";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    result.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    result.style.backgroundColor = "#ffffff";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = generateComputerChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});