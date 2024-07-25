// task5
// configAndUtils.js

// Constants
const PI = 3.14159;
const E = 2.71828;

// Functions
function square(number) {
    return number * number;
}

function circumference(radius) {
    return 2 * PI * radius;
}

function exponential(base, exponent) {
    return Math.pow(base, exponent);
}

// Exporting all constants and functions together in an object
module.exports = {
    PI,
    E,
    square,
    circumference,
    exponential
};
// app.js

const configAndUtils = require('./configAndUtils');

const radius = 5;
const base = 2;
const exponent = 3;

console.log(`PI: ${configAndUtils.PI}`); // Output: PI: 3.14159
console.log(`Euler's number (E): ${configAndUtils.E}`); // Output: Euler's number (E): 2.71828
console.log(`Square of 4: ${configAndUtils.square(4)}`); // Output: Square of 4: 16
console.log(`Circumference of a circle with radius ${radius}: ${configAndUtils.circumference(radius)}`); // Output: Circumference of a circle with radius 5: 31.4159
console.log(`2 raised to the power of 3: ${configAndUtils.exponential(base, exponent)}`); // Output: 2 raised to the power of 3: 8

