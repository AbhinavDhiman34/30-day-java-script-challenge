// to check whether a number is +veor -ve using if else activity 1
//task 1
function checkPositiveNegative(number) {
    if (number > 0) {
        console.log(number + " is positive");
    } else if (number < 0) {
        console.log(number + " is negative");
    } else {
        console.log(number + " is neither positive nor negative (it's zero)");
    }
}

// Test cases
checkPositiveNegative(10);   
checkPositiveNegative(-5);   
checkPositiveNegative(0);
//task 2
// program to check if a person is eligible to vote
function checkVoterEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote!");
    } else {
        console.log("You are not eligible to vote yet.");
    }
}

// Test cases
checkVoterEligibility(20);   
checkVoterEligibility(16);   
checkVoterEligibility(18);   
//activity 2 nested if else 
// task 3
// Function to find the largest of three numbers
function findLargestNumber(num1, num2, num3) {
    let largest;

    if (num1 >= num2) {
        if (num1 >= num3) {
            largest = num1;
        } else {
            largest = num3;
        }
    } else {
        if (num2 >= num3) {
            largest = num2;
        } else {
            largest = num3;
        }
    }

    return largest;
}

// Test cases
let num1 = 10, num2 = 5, num3 = 8;
console.log(`The largest number among ${num1}, ${num2}, and ${num3} is: ${findLargestNumber(num1, num2, num3)}`);

num1 = 15, num2 = 30, num3 = 20;
console.log(`The largest number among ${num1}, ${num2}, and ${num3} is: ${findLargestNumber(num1, num2, num3)}`);

num1 = 7, num2 = 7, num3 = 7;
console.log(`The largest number among ${num1}, ${num2}, and ${num3} is: ${findLargestNumber(num1, num2, num3)}`);
//activity 3
// task 4
// Function to determine day of the week based on a number
function getDayOfWeek(dayNumber) {
    let dayName;

    switch (dayNumber) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number. Please enter a number between 1 and 7.";
            break;
    }

    return dayName;
}

// Test cases
console.log("Day 1:", getDayOfWeek(1));   
console.log("Day 4:", getDayOfWeek(4));   
console.log("Day 7:", getDayOfWeek(7));   
console.log("Day 9:", getDayOfWeek(9));    
//task 5
// Function to assign grade based on score
function assignGrade(score) {
    let grade;

    switch (true) {
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80:
            grade = 'B';
            break;
        case score >= 70:
            grade = 'C';
            break;
        case score >= 60:
            grade = 'D';
            break;
        default:
            grade = 'F';
            break;
    }

    return grade;
}

// Test cases
console.log("Score 95, Grade:", assignGrade(95));   
console.log("Score 82, Grade:", assignGrade(82));   
console.log("Score 70, Grade:", assignGrade(70));   
console.log("Score 62, Grade:", assignGrade(62));   
console.log("Score 45, Grade:", assignGrade(45));   
 
// task 6
// Function to check if a number is even or odd using ternary operator
function checkEvenOdd(number) {
    let result = (number % 2 === 0) ? "even" : "odd";
    console.log(`${number} is ${result}`);
}

// Test cases
checkEvenOdd(10);
checkEvenOdd(7);
checkEvenOdd(0);
checkEvenOdd(-5);   
// activity 4
// Function to check if a year is a leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Test cases
let year = 2020;
console.log(`${year} is a leap year? ${isLeapYear(year)}`);

year = 2021;
console.log(`${year} is a leap year? ${isLeapYear(year)}`);   

year = 2000;
console.log(`${year} is a leap year? ${isLeapYear(year)}`);

year = 1900;
console.log(`${year} is a leap year? ${isLeapYear(year)}`);   
