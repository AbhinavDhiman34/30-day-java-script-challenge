// Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.
const str = "My phone number is (123) 456-7890.";
const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches = str.match(regex);
console.log(matches);

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const str1= "Contact me at example.user@example.com.";
const regex1 = /(\w+@\w+\.\w+)/;
const matches1 = str1.match(regex1);
console.log(matches1); 