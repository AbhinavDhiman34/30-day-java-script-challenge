// useLodash.js
const _ = require('lodash');

// Using lodash to find unique values in an array
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = _.uniq(array);

console.log('Original array:', array);
console.log('Unique array:', uniqueArray);
// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
// fetchData.js
const axios = require('axios');

// Function to fetch data from a public API
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        console.log('Response data:', response.data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function
fetchData();
