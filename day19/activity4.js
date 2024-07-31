// Activity 4: Assertions and Boundaries

// Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const str = "JavaScript is amazing!";
const regex = /^\w+/;
const match = str.match(regex);
console.log(match);

// Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const str1 = "I enjoy coding in Python";
const regex1 = /\w+$/;
const match1 = str1.match(regex1);
console.log(match1); 
