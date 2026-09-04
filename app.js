const minval = 1;
const maxval = 6;
let rolls = 10;
let totalScore = document.getElementById("score");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
const rollButton = document.getElementById("roll-btn");
const resetBtn = document.getElementById("reset-btn");
let score = document.getElementById("score");
let rollsRemaining = document.getElementById("rolls-remains");
dice1_val = 0;
dice2_val = 0;

let playerScore = 0;
function updateScore() {
  let randomRoll1 = Math.floor(Math.random() * (maxval - minval + 1)) + minval;
  let randomRoll2 = Math.floor(Math.random() * (maxval - minval + 1)) + minval;
  let total = Number(randomRoll1 + randomRoll2);
  console.log(`Dice 1: ${randomRoll1}`);
  console.log(`Dice 2: ${randomRoll2}`);
  document.getElementById("score").textContent += total;
  if (randomRoll1 + randomRoll2 == 7) {
    console.log("Your total is 7");
    console.log("You lose all your points");
    playerScore = 0;
  } else {
    playerScore += Number(total);
  }
  updateCounter();
  dice1.innerText = randomRoll1;
  dice2.innerText = randomRoll2;
  rollsRemaining.innerText -= 1;
  if (rollsRemaining.innerText == 0) {
    console.log("You ran out of turns.");
    rollButton.disabled = true;
  }
}

function updateCounter() {
  score.innerText = playerScore;
}

rollButton.addEventListener("click", () => {
  updateScore();
});

resetBtn.addEventListener("click", () => {
  rollsRemaining.innerText = 10;
  document.getElementById("score").textContent = 0;
  playerScore = 0;
  dice1.innerText = 0;
  dice2.innerText = 0;
  if (resetBtn.click) {
    rollButton.disabled = false;
  }
});
