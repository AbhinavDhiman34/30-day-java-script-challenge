// Activity 4: Getters and Setters

// Task 7: Add a getter method to the Person class to return the full name (assume a firsthane and lastlase property). Create an instance and log the full name using the getter.
class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    setName(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  const person = new Person('John', 'Doe');
  console.log(person.fullName); // Logs: John Doe
  
//  Task 8: Add a setter method to the Person, class to update the name properties (firstfiane, and lasthiase). Updaterthe name using the setter and log the updated full name.
class Person1 {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    setName(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  
  const person1 = new Person1('John', 'Doe');
  person.setName('Jane', 'Smith');
  console.log(person1.fullName); // Logs: Jane Smith
  

