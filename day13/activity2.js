// // Activity 2: Named and Default Exports

// Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.
// utils.js
// Named exports for multiple functions
function multiply(a, b) {
    return a * b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
}

module.exports = {
    multiply,
    subtract,
    divide
};
// calculator.js
const { multiply, subtract, divide } = require('./utils');

const product = multiply(4, 5);
const difference = subtract(10, 3);
const quotient = divide(20, 4);

console.log(`Product: ${product}`); // Output: Product: 20
console.log(`Difference: ${difference}`); // Output: Difference: 7
console.log(`Quotient: ${quotient}`); // Output: Quotient: 5

// Task 4: Create a module that exports a single function using default export. Import and use this function in another script.
// mathOperation.js
// Default export for a single function
function power(base, exponent) {
    return Math.pow(base, exponent);
}

module.exports = power;
// exponentiation.js
const power = require('./mathOperation');

const result = power(2, 3);
console.log(`2 raised to the power of 3 is ${result}`); // Output: 2 raised to the power of 3 is 8
