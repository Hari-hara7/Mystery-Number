const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userInput = document.getElementById("userInput").value;
  const messageElement = document.getElementById("message");

  if (!userInput || isNaN(userInput)) {
    messageElement.textContent = "Please enter a valid number.";
    return;
  }

  const userGuess = parseInt(userInput);
  attempts++;

  if (userGuess === targetNumber) {
    messageElement.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
    disableInputAndButton();
  } else if (userGuess < targetNumber) {
    messageElement.textContent = "Too low! Try again.";
  } else {
    messageElement.textContent = "Too high! Try again.";
  }
}

function disableInputAndButton() {
  document.getElementById("userInput").disabled = true;
  document.querySelector("button").disabled = true;
}
