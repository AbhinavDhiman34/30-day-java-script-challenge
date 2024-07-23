//activity 1 
// task1 Create a promise that resolves with a message after a 2-second timeout and log the message to the console
const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Timeout complete. Message resolved after 2 seconds.");
    }, 2000);
});

timeoutPromise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error("Error:", error);
});
//task2 Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const timeoutPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Timeout error: Promise rejected after 2 seconds.");
    }, 2000);
});

timeoutPromise2.then((message) => {
    // This will not be executed in case of rejection
    console.log("Resolved message:", message);
}).catch((error) => {
    console.error("Error:", error);
});
