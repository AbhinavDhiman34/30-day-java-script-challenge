//activity4 Task 6 Use the fetch API to get data from a public API and log the response data to the console using promises.
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';
function fetchDataFromAPI(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Fetched Data:', data);
            return data;
        })
        .catch(error => {
            console.error('Fetch Error:', error);
        });
}
fetchDataFromAPI(apiUrl);
//task 7 Use the fetch API to get data from a public API and log the response data to the console using async/awalt.
// URL of a public API endpoint (example using JSONPlaceholder)
const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/1';

// Async function to fetch data from the API and log the response
async function fetchDataFromAPI(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Fetched Data:', data);
        return data;
    } catch (error) {
        console.error('Fetch Error:', error);
    }
}

fetchDataFromAPI(apiUrl1);
