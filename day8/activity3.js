//Activity 3: Spread and Rest Operators
//task 5
const existingArray = [1, 2, 3];
const additionalElements = [4, 5, 6];
const newArray = [...existingArray, ...additionalElements];
console.log(`thw existing array was ${existingArray} the existing elements were ${additionalElements} and after ising spread operator array becomes ${newArray}`);
//task 6 Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
// Function to sum arbitrary number of arguments
function sum(...args) {
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2));          
console.log(sum(1, 2, 3));       
console.log(sum(1, 2, 3, 4, 5)); 
