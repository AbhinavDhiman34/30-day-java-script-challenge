//Activity 2: Creating and Appending Elements
//Task 3: Create a new div element with some text content and append it to the body.
// Create a new div element
var newDiv = document.createElement('div');
newDiv.textContent = 'This is a new div element added dynamically.';
newDiv.style.padding = '10px';
newDiv.style.backgroundColor = 'lightyellow';
newDiv.style.border = '1px solid black';
// Append the new div to the body
document.body.appendChild(newDiv);

// Task 4: Create a new li element and add it to an existing ul list.
var newListItem = document.createElement('li');
newListItem.textContent = 'Item 4';
newListItem.style.fontWeight = 'bold';
var existingList = document.getElementById('myList');
existingList.appendChild(newListItem);