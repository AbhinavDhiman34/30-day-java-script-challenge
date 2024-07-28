// Activity 1: Understanding Closures

// Task 1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.
function outerFunction() {
    const message = 'Hello from the outer function!';

    function innerFunction() {
        console.log(message);
    }

    return innerFunction;
}

const myFunction = outerFunction();
myFunction();  // Logs: Hello from the outer function!

// Task 2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.
function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.getCount());  // Logs: 0
counter.increment();
console.log(counter.getCount());  // Logs: 1

