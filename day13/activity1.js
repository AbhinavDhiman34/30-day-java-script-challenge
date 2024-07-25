// //Activity 1: Creating and Exporting Modules
// //Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script.
function add(a, b) {
    return a + b;
}

module.exports = add;
const add = require('./mathUtils');

const result = add(5, 3);
console.log(`The result of adding 5 and 3 is ${result}`);


// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module In another script.
// main.js
// person.js
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    greet: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    },
    haveBirthday: function() {
        this.age += 1;
        return `Happy birthday! I am now ${this.age} years old.`;
    }
};

module.exports = person;
// app.js
const person = require('./person');

console.log(person.greet()); // Output: Hello, my name is John Doe

console.log(person.haveBirthday()); // Output: Happy birthday! I am now 31 years old.
console.log(person.haveBirthday()); // Output: Happy birthday! I am now 32 years old.

