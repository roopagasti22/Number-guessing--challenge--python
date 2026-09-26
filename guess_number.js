const readline = require("readline");

const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Guess the number between 1 and 100.");

function askForGuess() {
  input.question("Enter your guess: ", (answer) => {
    const guess = Number(answer.trim());

    if (!Number.isInteger(guess)) {
      console.log("Please enter a whole number.");
      askForGuess();
      return;
    }

    attempts += 1;

    if (guess === secretNumber) {
      console.log(`Correct! You got it in ${attempts} attempts.`);
      input.close();
      return;
    }

    console.log(guess > secretNumber ? "2 high" : "2 low");
    askForGuess();
  });
}

askForGuess();