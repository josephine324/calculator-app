// app.js

// Importing the built-in Node.js module for input handling
const readline = require('readline');

// Importing the color package for styling output
const Color = require('color');

// Importing custom calculator module
const calculator = require('./calculator');

// Setting up readline to capture user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to display styled text
function colorizeText(text, color) {
  console.log(`\x1b[38;2;${Color(color).rgb().array().join(';')}m%s\x1b[0m`, text);
}

// Main function to perform calculation
function calculate() {
  rl.question("Enter the first number: ", (firstInput) => {
    const firstNumber = parseFloat(firstInput);

    rl.question("Enter the second number: ", (secondInput) => {
      const secondNumber = parseFloat(secondInput);

      rl.question(
        "Choose an operation (add, subtract, multiply, divide): ",
        (operation) => {
          let result;

          try {
            switch (operation.toLowerCase()) {
              case "add":
                result = calculator.add(firstNumber, secondNumber);
                break;
              case "subtract":
                result = calculator.subtract(firstNumber, secondNumber);
                break;
              case "multiply":
                result = calculator.multiply(firstNumber, secondNumber);
                break;
              case "divide":
                result = calculator.divide(firstNumber, secondNumber);
                break;
              default:
                colorizeText("Invalid operation! Please try again.", 'red');
                rl.close();
                return;
            }

            colorizeText(`The result of ${operation} is: ${result}`, 'green');
          } catch (error) {
            colorizeText(error.message, 'red');
          }

          rl.close();
        }
      );
    });
  });
}

// Start the calculator
calculate();
