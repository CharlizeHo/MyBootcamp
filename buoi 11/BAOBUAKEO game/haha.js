let restart = document.querySelector(".restart-button");
let score = document.querySelector(".score");
let choices = document.querySelectorAll(".choice");
let modal = document.querySelector(".modal");
let result = document.querySelector(".modal-content");
let scoreBoard = {
  player: 0,
  computer: 0,
};

console.log(choices);

// event
choices.forEach(function (item) {
  item.addEventListener("click", play);
});

// play game
function play(event) {
  // console.log(event);

  let playerChoice = event.target.id;
  let computerChoice = getComputerChoice();
  let winner = getWinner(playerChoice, computerChoice);

  console.log(playerChoice, computerChoice, winner);

  showResult(winner, computerChoice);
}

// get computer choice
function getComputerChoice() {
  let random = Math.random();

  if (random <= 0.33) {
    return "rock";
  } else if (random <= 0.66) {
    return "scissors";
  } else {
    return "paper";
  }
  // if (random <= 0.9) {
  //   return "rock";
  // } else if (random <= 0.95) {
  //   return "scissors";
  // } else {
  //   return "paper";
  // }
}

// get winner
function getWinner(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (player === "rock") {
    if (computer === "scissors") {
      return "player";
    } else if (computer === "paper") {
      return "computer";
    }
  } else if (player === "scissors") {
    if (computer === "paper") {
      return "player";
    } else if (computer === "rock") {
      return "computer";
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      return "player";
    } else if (computer === "scissors") {
      return "computer";
    }
  }
}

// open modal
function showResult(winner, computerChoice) {
  modal.style.display = "block";

  if (winner === "player") {
    // increase score
    // scoreBoard.player = scoreBoard.player + 1;
    scoreBoard.player++;

    // show result
    result.innerHTML = `
      <h1>You Win!</h1>
      <i class="choice far fa-hand-${computerChoice} fa-5x"></i>
      <p>Computer chose <strong>${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</strong></p>
    `;
  } else if (winner === "computer") {
    // increase score
    scoreBoard.computer++;

    // show result
    result.innerHTML = `
      <h1>You Lose!</h1>
      <i class="choice far fa-hand-${computerChoice} fa-5x"></i>
      <p>Computer chose <strong>${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }</strong></p>
    `;
  } else {
    // show result
    result.innerHTML = `
      <h1>Draw!</h1>
      <i class="choice far fa-hand-${computerChoice} fa-5x"></i>
      <p>Computer chose <strong>${computerChoice}</strong></p>
    `;
  }

  // show score
  score.innerHTML = `
    <p class="score-player">Player: ${scoreBoard.player}</p>
    <p class="score-computer">Computer: ${scoreBoard.computer}</p>
  `;
}

// event
window.addEventListener("click", closeModal);

// close modal
function closeModal(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

// event
restart.addEventListener("click", restartGame);

// reset
function restartGame() {
  // reset score
  scoreBoard.player = 0;
  scoreBoard.computer = 0;

  // show score
  score.innerHTML = `
    <p class="score-player">Player: ${scoreBoard.player}</p>
    <p class="score-computer">Computer: ${scoreBoard.computer}</p>
  `;

  // open modal
  modal.style.display = "block";
  result.innerHTML = `<h1>Restart Game!</h1>`;
}