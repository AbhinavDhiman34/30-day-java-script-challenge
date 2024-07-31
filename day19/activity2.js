// Activity 2: Character Classes and Quantifiers

// Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const str = "JavaScript is a powerful Language used in Web Development.";
const regex = /\b[A-Z][a-z]*\b/g;
const matches = str.match(regex);
console.log(matches); 

// Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const str1 = "My phone numbers are 123-456-7890 and 987-654-3210.";
const regex1 = /\d+/g;
const matches1 = str1.match(regex1);
console.log(matches1);
