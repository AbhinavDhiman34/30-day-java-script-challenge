// Activity 1: Class Definition

// Task 1: Define a class Person with properties me and see, and a method to return a greeting message. Create an imtance of the class and log the greeting message. 
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
  }
  
  const person = new Person('John', 'Doe');
  console.log(person.getGreeting());
  // Task 2: Add a method to the Person, class that updates the age property and logs the updated age.
  class Person1{
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  }
  
  const person1 = new Person1('John', 'Doe', 30);
  person.updateAge(31); // Logs: Updated age: 31
  