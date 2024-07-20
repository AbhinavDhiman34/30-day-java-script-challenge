//Activity 2: Destructuring
//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
// Example array of numbers
const numbers = [10, 20, 30, 40, 50];

// Array destructuring to extract first and second elements
const [first, second] = numbers;
console.log(`First element: ${first}`);   // Output: First element: 10
console.log(`second element: ${second}`); // Output: Second element: 20
//Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    year: 1997,
    genre: "Fantasy"
  };
  const { title, author } = book;
  console.log(`the title of the book is ${title} and author of the book is ${author}`);
  