// Importing the built-in Node.js module for input handling
const readline = require('readline');

// Importing the custom operations module
const operations = require('./operations');

// Setting up readline to capture user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Main calculator function
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
            // Accessing the operation based on user input
            switch (operation.toLowerCase()) {
              case "add":
                result = operations.add(firstNumber, secondNumber);
                break;
              case "subtract":
                result = operations.subtract(firstNumber, secondNumber);
                break;
              case "multiply":
                result = operations.multiply(firstNumber, secondNumber);
                break;
              case "divide":
                result = operations.divide(firstNumber, secondNumber);
                break;
              default:
                console.log("Invalid operation! Please try again.");
                rl.close();
                return;
            }

            console.log(`The result of ${operation} is: ${result}`);
          } catch (error) {
            console.log(error.message);
          }

          rl.close();
        }
      );
    });
  });
}

// Start the calculator
calculate();
