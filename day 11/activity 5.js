//Task 8: Use Promise. all to wait for multiple promises to resolve and then log all their values.
// Example promises simulating fetching data from different endpoints
const promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 2000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 1500);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 1000);
});

// Using Promise.all to wait for all promises to resolve
Promise.all([promise1, promise2, promise3])
    .then((values) => {
        console.log('All promises resolved successfully');
        console.log('Resolved values:', values);
    })
    .catch((error) => {
        console.error('One or more promises failed:', error);
    });
//Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
// Example promises simulating fetching data from different endpoints
const promiseA = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise A resolved');
    }, 2000);
});

const promiseB = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise B resolved');
    }, 1500);
});

const promiseC = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise C resolved');
    }, 1000);
});

// Using Promise.race to get the value of the first resolved promise
Promise.race([promiseA, promiseB, promiseC])
    .then((value) => {
        console.log('First promise resolved:', value);
    })
    .catch((error) => {
        console.error('Race failed:', error);
    });
