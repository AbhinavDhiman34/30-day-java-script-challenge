//Activity 3: Removing Elements
//Task 5: Select an HTML element and remove it from the DOM
function removeElement() {
    var elementToRemove = document.getElementById('toBeRemoved');
if (elementToRemove) {
      elementToRemove.remove(); // Remove the element from the DOM
    } else {
      console.log('Element not found.');
    }
  }
  function removeLastChild() {
    var parentElement = document.getElementById('parentElement');
    if (parentElement && parentElement.lastChild) {
      // Remove the last child of the parent element
      parentElement.removeChild(parentElement.lastChild);
    } else {
      console.log('Parent element or last child not found.');
    }
  }