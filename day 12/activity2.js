//Activity 2: Finally Block
// Task 3: Script with try-catch-finally block.
try {
    console.log("Inside try block");
    throw new Error("Something went wrong");
} catch (error) {
    console.error("Error caught:", error.message);
} finally {
    console.log("Inside finally block");
}
