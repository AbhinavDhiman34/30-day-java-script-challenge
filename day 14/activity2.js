// Activity 2: Class Inheritance

// Task 3: Define a class Student that extends the Person class. Add a property student lu, and a method to return the student ID. Create an instance of the student class and log the student D

class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
  }
  
  class Student extends Person {
    constructor(firstName, lastName, age, studentID) {
      super(firstName, lastName, age);
      this.studentID = studentID;
    }
  
    getStudentID() {
      return this.studentID;
    }
  }
  
  const student = new Student('Jane', 'Smith', 20, 'S123456');
  console.log(student.getStudentID()); // Logs: S123456
  
// Task 4: Override the greeting method in the student class to include the student ID in the message. Log the overridden greeting message.
class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
  }
  
  class Student1 extends Person {
    constructor(firstName, lastName, age, studentID) {
      super(firstName, lastName, age);
      this.studentID = studentID;
    }
  
    getStudentID() {
      return this.studentID;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName} and my student ID is ${this.studentID}.`;
    }
  }
  
  const student1 = new Student1('Jane', 'Smith', 20, 'S123456');
  console.log(student1.getGreeting()); // Logs: Hello, my name is Jane Smith and my student ID is S123456.
  