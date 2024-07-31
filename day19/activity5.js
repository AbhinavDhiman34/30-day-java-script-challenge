// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const password = "Password1!";
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
const isValid = regex.test(password);
console.log(isValid); // true or false

// Task 10: Write a regular expression to validate a URL. Log whether the URL is valid

const url = "https://www.example.com";
const regex1 = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,6}(\/[a-zA-Z0-9#]+)*\/?$/;
const isValid1 = regex1.test(url);
console.log(isValid1); // true or false
