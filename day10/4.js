// Activity 4: Form Events

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
  const form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log('Form Data:', formDataObject);
  });
//  Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const selectDropdown = document.getElementById('selectOption');
const selectedOptionParagraph = document.getElementById('selectedOption');
selectDropdown.addEventListener('change', function() {
  // Get selected option value and display it in the paragraph
  const selectedValue = selectDropdown.value;
  selectedOptionParagraph.textContent = `Selected option: ${selectedValue}`;
});


