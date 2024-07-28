// Activity 3: Closures in Loops

// Task 5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.
const functions = [];

for (let i = 0; i < 5; i++) {
    functions.push(function() {
        console.log(i);
    });
}

functions.forEach(fn => fn());  // Logs: 0, 1, 2, 3, 4

