  //activity 1 task 1  Add a click event listener to a button that changes the text content of a paragraph.
  const button = document.getElementById('changeTextButton');
  const paragraph = document.getElementById('paragraph');
  button.addEventListener('click', function() {
    paragraph.textContent = 'New text after clicking the button.';
  });
  //Task 2: Add a double-click event listener to an image that toggles its visibility.
  const image = document.getElementById('toggleImage');
    image.addEventListener('dblclick', function() {
      // Toggle visibility of the image
      if (image.style.display === 'none') {
        image.style.display = 'block';
      } else {
        image.style.display = 'none';
      }
    });