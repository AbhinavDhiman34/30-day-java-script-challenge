// Activity 4: Error Handling in Promises
// Task 6: Promise that randomly resolves or rejects, using .catch().
const randomPromise = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if (randomNum < 0.5) {
        resolve("Resolved successfully.");
    } else {
        reject(new Error("Promise rejected."));
    }
});

randomPromise
    .then(result => console.log(result))
    .catch(error => console.error("Promise error caught:", error.message));
// Task 7: Using try-catch in an async function to handle promise errors.
async function handlePromise() {
    try {
        const result = await randomPromise;
        console.log(result);
    } catch (error) {
        console.error("Async function error caught:", error.message);
    }
}

handlePromise();