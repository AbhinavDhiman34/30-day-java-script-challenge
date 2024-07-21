//Activity 1: Selecting and Manipulating Elements
//Task 1: Select an HTML element by its its ID and change its text content
var element = document.getElementById('myElement');
    element.textContent = 'New Text Content';
    // task 2
   var elements = document.querySelectorAll('.myClass');
    elements.forEach(function(element) {
      element.style.backgroundColor = 'lightblue';
    });