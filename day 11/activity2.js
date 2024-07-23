//activity2 
//task3 Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// Function to simulate fetching data from server with delay
function fetchDataFromServer(data, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, delay);
    });
}
fetchDataFromServer("First data", 1000)
    .then((data) => {
        console.log("Received:", data);
        return fetchDataFromServer("Second data", 1500);
    })
    .then((data) => {
        console.log("Received:", data);
        return fetchDataFromServer("Third data", 500);
    })
    .then((data) => {
        console.log("Received:", data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
