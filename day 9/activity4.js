// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag).

    function changeImageSrc() {
      var imageElement = document.getElementById('myImage');
      if (imageElement) {
        // Change the src attribute of the image
        imageElement.src = 'new-image.jpg';
        imageElement.alt = 'New Image'; 
      } else {
        console.log('Image element not found.');
      }
    }


// Task 8: Add and remove a CSS class to/from an HTML element.
function addClass() {
    var element = document.getElementById('myElement');
    element.classList.add('highlighted');
  }

  function removeClass() {
    var element = document.getElementById('myElement');
    element.classList.remove('highlighted');
  }