// Activity 5: Enhanced Object Literals
// task8 
// Creating an object with enhanced object literals
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    age: 30,
    greet() {
        return `Hello! My name is ${this.fullName()} and I am ${this.age} years old.`;
    }
};
console.log(person);
//task 9 Task 9: Create an object with computed property names based on variables and log the object to the console.
const key1 = 'name';
const key2 = 'age';
const person1 = {
    [key1]: 'Alice',
    [key2]: 30,
    [`is${key1.charAt(0).toUpperCase() + key1.slice(1)}Valid`]: true 
};
console.log(person1);