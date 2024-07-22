// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color. 
const element = document.getElementById('changeColorElement');
element.addEventListener('mouseover', function() {
  // Change background color of the element
  element.style.backgroundColor = '#69c';
});
//Task 4: Add a mouseout event listener to an element that resets its background color
element.addEventListener('mouseout', function() {
  // Reset background color of the element
  element.style.backgroundColor = '#e0e0e0';
});
