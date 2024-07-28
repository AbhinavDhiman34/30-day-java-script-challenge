// Activity 2: Practical Closures

// Task 3: Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call.
function createIdGenerator() {
    let lastId = 0;

    return function() {
        lastId++;
        return lastId;
    };
}

const generateId = createIdGenerator();
console.log(generateId());  // Logs: 1
console.log(generateId());  // Logs: 2
console.log(generateId());  // Logs: 3

// Task 4: Create a closure that captures a user's name and returns a function that greets the user by name.
function createGreeter(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

const greetAlice = createGreeter('Alice');
const greetBob = createGreeter('Bob');

greetAlice();  // Logs: Hello, Alice!
greetBob();    // Logs: Hello, Bob!

