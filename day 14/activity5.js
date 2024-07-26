// Activity 5: Private Fields (Optional)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
    #balance;
  
    constructor(initialBalance) {
      this.#balance = initialBalance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
      }
    }
  
    withdraw(amount) {
      if (amount > 0 && amount <= this.#balance) {
        this.#balance -= amount;
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  }
  
  const account = new Account(100);
  account.deposit(50);
  console.log(account.getBalance()); // Logs: 150
  account.withdraw(20);
  console.log(account.getBalance()); // Logs: 130
  
// 
// Create an instance of the Account class with an initial balance of 100
const myAccount = new Account(100);

console.log("Initial balance:", myAccount.getBalance()); // Logs: Initial balance: 100

// Deposit 50 into the account
myAccount.deposit(50);
console.log("Balance after depositing 50:", myAccount.getBalance()); // Logs: Balance after depositing 50: 150

// Withdraw 20 from the account
myAccount.withdraw(20);
console.log("Balance after withdrawing 20:", myAccount.getBalance()); // Logs: Balance after withdrawing 20: 130

// Attempt to withdraw an invalid amount (e.g., negative or more than the balance)
myAccount.withdraw(200); // Should log: Invalid withdrawal amount.
console.log("Balance after attempting invalid withdrawal:", myAccount.getBalance()); // Logs: Balance after attempting invalid withdrawal: 130

// Deposit a negative amount (which should not change the balance)
myAccount.deposit(-10); // Should log: Deposit amount must be positive.
console.log("Balance after attempting to deposit negative amount:", myAccount.getBalance()); // Logs: Balance after attempting to deposit negative amount: 130
