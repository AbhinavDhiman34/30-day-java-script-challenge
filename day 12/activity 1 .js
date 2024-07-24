// Activity 1: Basic Error Handling with Try-Catch
// Task 1: Function that intentionally throws an error and handles it.
function throwError() {
    throw new Error("This is an intentional error.");
}

try {
    throwError();
} catch (error) {
    console.error("Error caught:", error.message);
}

// Task 2: Function that divides two numbers and throws an error if the denominator is zero.
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero.");
    }
    return numerator / denominator;
}

try {
    console.log(divideNumbers(10, 2)); // Valid division
    console.log(divideNumbers(10, 0)); // This will throw an error
} catch (error) {
    console.error("Error caught:", error.message);
}
