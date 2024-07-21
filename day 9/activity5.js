// Activity 5: Event Handling

// Task 9: a button that changes the text content of Add a click event listener to a a paragraph.
// Select the button element
var button = document.getElementById('myButton');
button.addEventListener('click', function() {
  // Change the text content of the button
  if (button.textContent === 'Click me!') {
    button.textContent = 'Clicked!';
    button.style.backgroundColor = 'lightyellow';
  } else {
    button.textContent = 'Click me!';
  }
});



// Task 10: Add a mouseover event listener to an element that changes its border color.
var element = document.getElementById('myElement');
element.addEventListener('mouseover', function() {
  element.classList.add('highlight');
});
element.addEventListener('mouseout', function() {
  element.classList.remove('highlight');
});