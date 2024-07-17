//activity 1 
//task 1
for (let i = 1; i <=10; i++) {
    console.log(i);
}
//task 2
for (let i = 1; i <=10; i++) {
   console.log( "5 x "+ i +"= "+ 5*i);
}
// activity 2 
//task 3
let i = 1;
let sum = 0;
while (i<=10) {
    sum += i ;
    i++;
   }
   console.log("the sum of numbers from 1 to 10 is " + sum);
// task 4
let j = 11;
while (j>1) {
  j--;
console.log(j);
}
//ACTIVITY 3
// TASK 5
console.log("numbers from 1 to 5 using do while loop");
let k =1;
do {
    console.log(k);
    k++;
} while (k<=5);
// task 6
// factorial of a number on 0 not defined 
// facrotial = 5*num -1
let factorial = 1;
let l = 1;
const num = 5;
if (num<0) {
    console.log("enter a positive value");
}else{
  
    do {
        factorial *= l;
        l++;
    } while (l<=num);
    console.log(`The factorial of ${num} is: ${factorial}`);
}
//activity 4 
// task 7
const numRows = 5;

// Outer loop for rows
for (let i = 1; i <= numRows; i++) {
    // String to store each line of the pattern
    let patternLine = "";

    // Inner loop for columns in each row
    for (let j = 1; j <= i; j++) {
        patternLine += '* '; // Adding '*' to the line
    }
    console.log(patternLine);
}
