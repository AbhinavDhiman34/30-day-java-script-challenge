// Activity 3: Static Methods and Properties

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message, 
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    static getGenericGreeting() {
      return "Hello! Welcome to our platform.";
    }
  
    getGreeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
  }
  
  console.log(Person.getGenericGreeting()); // Logs: Hello! Welcome to our platform.
//   Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total nuniber of students.
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    static getGenericGreeting() {
      return "Hello! Welcome to our platform.";
    }
  
    getGreeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName}.`;
    }
  }
  
  class Student extends Person {
    static studentCount = 0;
  
    constructor(firstName, lastName, age, studentID) {
      super(firstName, lastName, age);
      this.studentID = studentID;
      Student.studentCount++;
      console.log(`Total students: ${Student.studentCount}`);
    }
  
    getStudentID() {
      return this.studentID;
    }
  
    getGreeting() {
      return `Hello, my name is ${this.firstName} ${this.lastName} and my student ID is ${this.studentID}.`;
    }
  }
  
  const student1 = new Student('Jane', 'Smith', 20, 'S123456'); // Logs: Total students: 1
  const student2 = new Student('Tom', 'Brown', 22, 'S654321'); // Logs: Total students: 2
  
