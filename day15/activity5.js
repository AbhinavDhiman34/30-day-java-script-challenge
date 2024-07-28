// Activity 5: Memoization

// Task 7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.
function memoize(fn) {
    const cache = {};

    return function(arg) {
        if (arg in cache) {
            return cache[arg];
        } else {
            const result = fn(arg);
            cache[arg] = result;
            return result;
        }
    };
}

// Example function to memoize
function slowFunction(n) {
    // Simulate a slow operation
    for (let i = 0; i < 1e6; i++) {}
    return n * 2;
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Computes result and caches it
console.log(memoizedFunction(5)); // Retrieves result from cache

// Task 8: Create a memoized version of a function that calculates the factorial of a number.
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5)); // Computes result and caches it
console.log(memoizedFactorial(5)); // Retrieves result from cache
console.log(memoizedFactorial(6)); // Computes result and caches it
