const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const resultText = screen2.querySelector("h2");

let xAttempts = 0;
let randomNumber;

//Events
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);

//Functions 
function generateRandomNumber() {
  return Math.floor(Math.random() * 11);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function updateResultText() {
  resultText.innerText = `Got it right in ${xAttempts} Attempt${xAttempts !== 1 ? 's' : ''}!`;
}

function handleTryClick(event) {
  event.preventDefault();

  const inputNumber = Number(document.querySelector("#inputNumber").value);

  if (inputNumber === randomNumber) {
    updateResultText();
    toggleScreen();
  }

  document.querySelector("#inputNumber").value = "";
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 0;
  randomNumber = generateRandomNumber();
}

// Initial setup
randomNumber = generateRandomNumber();
