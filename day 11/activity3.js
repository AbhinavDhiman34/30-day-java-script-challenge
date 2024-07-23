// activity3
//task 4 Write an async function that waits for a promise to resolve and then logs the resolved value.
async function logResolvedValue() {
    try {
        // Simulated promise that resolves after 2 seconds
        const result = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("Promise resolved value");
            }, 2000);
        });

        // Log the resolved value
        console.log("Resolved value:", result);
    } catch (error) {
        console.error("Error:", error);
    }
}
logResolvedValue();
//task 5Write an async function that handles a rejected promise using try-catch and logs the error message.
async function handleRejectedPromise() {
    try {
        // Simulated promise that rejects after 2 seconds
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error("Promise rejected with an error message"));
            }, 2000);
        });
    } catch (error) {
        // Log the error message
        console.error("Error:", error.message);
    }
}
handleRejectedPromise();
