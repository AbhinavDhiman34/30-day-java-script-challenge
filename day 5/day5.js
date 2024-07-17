// activity 1 task 1 write a function to check whether a number is even or odd
function name(num) {
    if (num%2===0) {
        console.log("given "+num+ " is even");
    } else {
        console.log(num + " is odd");
    }
}
name(5);
name(6);
name(10);
name(9);
//task 2 function to calculate square of a number 
function square(num) {
    num *= num;
    return num;
}
let number = 5;
let squared= square(number);
console.log("the square of given numer is "+ squared);
// activity 2 task 3 maximum of two numbers
function findmax(num1, num2) {
    let maximum = num1 > num2 ? num1 : num2;
    console.log("The maximum of " + num1 + " and " + num2 + " is " + maximum);
}
findmax(10, 5);
//task 4
function concatenateStrings(str1, str2) {
    return str1 + str2;
}
let string1 = "Hello, ";
let string2 = "world!";
let result = concatenateStrings(string1, string2);
console.log(result); 
// activity 3 task5
const sum = (num1, num2) => num1 + num2;
let result2 = sum(5, 3);
console.log("The sum is: " + result2); 
// task 6
const containsSpecialCharacter = (str) => {
    // Regular expression to match any special character
    const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return regex.test(str);
};

// Example usage:
console.log(containsSpecialCharacter("Hello, world!")); // Output: true (contains '!')
//activity 4 function with parameterstask 7
function product(num1,num2=2) {
    let multiply = num1*num2;
    return multiply;
}
let result3 = product(6);
console.log("product of the given numbers is "+result3);
//task 8
function greet(name, age = 20) {
    return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("abhinav"));
//activity 5 task 9
function callFunctionMultipleTimes(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

function sayHello() {
    console.log("Hello!");
}

function sayGoodbye() {
    console.log("Goodbye!");
}

callFunctionMultipleTimes(sayHello, 3); 
callFunctionMultipleTimes(sayGoodbye, 200); 
// task 10
function applyFunctions(func1, func2, value) {
    let result1 = func1(value); // Apply func1 to value
    let finalResult = func2(result1); // Apply func2 to result1
    return finalResult;
}

// Example usage:
function double(num) {
    return num * 2;
}

function addTen(num) {
    return num + 10;
}

let value = 5;
let finalResult = applyFunctions(double, addTen, value);
console.log(`Result: ${finalResult}`); // Output: Result: 20

