// Activity 3: Keyboard Events

// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console. 
const inputField = document.getElementById('inputField');
inputField.addEventListener('keydown', function(event) {
  // Log the key pressed to the console
  console.log('Key pressed:', event.key);
});
// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph
const inputField2 = document.getElementById('inputField2');
const displayParagraph = document.getElementById('displayValue');
inputField2.addEventListener('keyup', function() {
  // Display the current value of the input field in the paragraph
  displayParagraph.textContent = inputField2.value;
});