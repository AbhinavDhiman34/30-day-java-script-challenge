// Activity 5: Graceful Error Handling in Fetch
// Task 8: Fetch API request to an invalid URL, handling error with .catch().
fetch('https://invalid-url-example.com')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => console.error('Fetch error:', error.message));
// Task 9: Fetch API request with invalid URL in async function, handling error with try-catch.
async function fetchData() {
    try {
        const response = await fetch('https://invalid-url-example.com');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Async fetch error:', error.message);
    }
}

fetchData();