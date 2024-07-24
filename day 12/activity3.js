// Activity 3: Custom Error Objects
// Task 4: Custom error class and throwing/handling it.
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error.");
}

try {
    throwCustomError();
} catch (error) {
    console.error("Custom error caught:", error.message);
}
// Task 5: Function validating user input and throwing custom error if validation fails.
// Task 5
function validateInput(input) {
    if (!input || input.trim().length === 0) {
        throw new CustomError("Input cannot be empty.");
    }
    return input;
}

try {
    console.log(validateInput("Hello")); // Valid input
    console.log(validateInput("")); // This will throw an error
} catch (error) {
    console.error("Validation error caught:", error.message);
}
