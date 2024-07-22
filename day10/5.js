// Activity 5: Event Delegation

// Task 9:  // Get reference to the list
  const list = document.getElementById('myList');
  list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
      // Log the text content of the clicked list item
      console.log('Clicked item:', event.target.textContent);
    }
  });

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
const parentElement = document.getElementById('parentElement');
  parentElement.addEventListener('click', function(event) {
    if (event.target.classList.contains('child')) {
      console.log('Clicked item:', event.target.textContent);
    }
  });

  // Example of dynamically adding a new child element
  setTimeout(function() {
    const newChild = document.createElement('div');
    newChild.classList.add('child');
    newChild.textContent = 'New Item';
    parentElement.appendChild(newChild);
  }, 2000); 