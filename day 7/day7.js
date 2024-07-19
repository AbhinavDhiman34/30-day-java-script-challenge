//activity 1 | task 1 |Creating an object representing a book
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};
console.log(book);
//task 2 acess and log the author and title properties of the book object
let book2={
    title: "why i love javascript",
    author: "abhinav",
    year: 2024
}
console.log("title : "+ book2.title);
console.log("Author: "+ book2.author);
// activity 2 
// task 3 add a method to book object that returns a string with the book title and author and logs the result this method
let book3 = {
    title: "why i love javascript",
    author: "abhinav",
    year: 1960,
    getInfo: function() {
        return `${this.title} by ${this.author}`;
    }
};
console.log(book3.getInfo());
//task 4 add a method to book object that takes the year as parameter and updates the book year property than logthe updated object
let book4 = {
    title: "why i love javascript",
    author: "abhinav",
    year: 1960,
    updateyear: function(year) {
        this.year = year;
        console.log("Updated book object:", this);
    }
    };
    book4.updateyear(2024);
    // activity 3 nested object
    // task 5 create a nested object representing a library with properties like name and an array of books objects then log the library object to the console
    let library ={
        name:"awesome library",
        booksinlibrary:[
            {title: "To Kill a Mockingbird",
                author: "Harper Lee",
                year: 1960},
            {title: "1984",
                author: "George Orwell",
                year: 1949},
            {title: "The Catcher in the Rye",
                author: "J.D. Salinger",
                year: 1951},
        ]
    }
    console.log(library);
    //task6 access and log the name of library and title of all the books in the library
    // Accessing and logging the name of the library
console.log("Library Name:", library.name);
// Accessing and logging the title of each book in the library
library.booksinlibrary.forEach(books=> {
    console.log("Book Title:", books.title);
});
// activity 4 this keyword 
//task 7 add a method to the book object that uses this keyword to return the string with the book title and year and log the result of this method 
let book6 = {
    title: "why i love javascript",
    author: "abhinav",
    year: 1960,
    gettitleandyear : function () {
        return ` book name: ${this.title} published year : ${this.year}`;
    }
}
console.log(book6.gettitleandyear());
// activity 5 
// task 8 use for in loop to navigate over the properties of the book object and log each properties and its value
let book7 ={
    title: "why i love javascript",
    author: "abhinav",
    year: 1960,
}
for (let prop in book) {
    console.log(`${prop}: ${book[prop]}`);
}
//task 9
let book8 ={
    title: "why i love ",
    author: "abhinav",
    year: 2023,
}
const keys = Object.keys(book8);
const values = Object.values(book8);
keys.forEach((key, value) => {
    console.log(`keys are = ${key}: values = ${values[value]}`);
});
