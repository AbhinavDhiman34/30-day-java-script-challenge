//activity 1 array creation and access 
let arr1 =[1,2,3,4,5];
console.log(arr1);
// task 2 acessing the first and last element of a array and logging them to the console
let arr = [1, 2, 3, 4, 5];
let firstElement = arr[0];
let lastElement = arr[arr.length-1];
// Logging them to the console
console.log("First Element:", firstElement);
console.log("Last Element:", lastElement);
//activity 2 array methods (basics)
// task 3 to add a element at the end of an array and log the updated array 
let arr2= [1,2,3,4,5];
arr2.push(6);
console.log(arr2);
//task 4 pop a element from end of array
let arr3=[1,2,3,4,5,6];
arr3.pop(6);
console.log(arr3);
//task5 using shift to remove the element from the beginning of an array 
let arr4=[1,2,3,4,5,6];
arr4.shift(0);
console.log(arr4);
// task 6 using unshift to add a new number at the begening 
let arr5 = [1,2,3,4,5,6];
arr5.unshift(7);
console.log(arr5);
//activity 3 array method intermediate 
//task 7 map method to create a new array where each number is doubled and log the new array to console
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);
//task 8 use filter method to create a new array with only even numbers
let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = numbers2.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);
//task 9 use the reduce method to calculate the sum of all the numbers in the array 
// Example array
let numbers3 = [1, 2, 3, 4, 5];

// Use reduce to calculate the sum of all numbers in the array
let sum = numbers3.reduce((sum, currentValue) => sum + currentValue,0);
console.log("Sum of Numbers:", sum);
//activity 4 arrray iteration
//task 10 use a for loop to iterate over the array and log all elements to console
let numbers5 = [1, 2, 3, 4, 5];

// Iterate over the array using a for loop
for (let i = 0; i < numbers5.length; i++) {
    console.log(numbers[i]);
}
//task11 use a for each loop to iterate over the array and log all elements to console
let num1 = [1, 2, 3, 4, 5];
num1.forEach(element => {
    console.log(element);
});
//activity 5 task 12
// create a two dimensional Array(Matrix)and log the entire array to the console
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix);
// task 13 acess and log a specific element from two dimensional array
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
// Access and log a specific element (e.g., element at row 1, column 2)
console.log("Element at row 1, column 2:", matrix[1][2])
