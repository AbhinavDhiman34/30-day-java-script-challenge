// Activity 1: Basic Regular Expressions

// Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const str = "I love JavaScript. JavaScript is a versatile language.";
const regex = /JavaScript/g;
const matches = str.match(regex);
console.log(matches);


// Task 2: Write a regular expression to match all digits in a string. Log the matches.
const str1 = "The year is 2024 and my address is 1234 Main St.";
const regex1 = /\d+/g;
const matches1 = str1.match(regex1);
console.log(matches1);

