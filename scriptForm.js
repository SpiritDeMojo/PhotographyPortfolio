









$(document).ready(function () {
    // Function to handle form submission
    function handleSubmit(form) {
        // Create an empty object to store the form data
        const formData = {};

        // Iterate through all form elements
        for (const element of form.elements) {
            // Skip the submit button
            if (element.type === 'submit') continue;

            // For radio buttons, save the value only if it's checked
            if (element.type === 'radio') {
                if (element.checked) {
                    formData[element.name] = element.value;
                }
            } else { // For other form elements, save their values directly
                formData[element.name] = element.value;
            }
        }

        // Log the formData object to the console
        console.log(formData);

        // Display an alert when the form is submitted
        alert("Your form has been submitted!");
    }

    // Event listener for when the DOM content is loaded
    $(document).ready(() => {
        // Get the form element using a query selector
        const form = document.querySelector('form');

        // Attach a 'submit' event listener to the form
        form.addEventListener('submit', (event) => {
            // Prevent the form from submitting and refreshing the page
            event.preventDefault();

            // Call the handleSubmit function with the form as an argument
            handleSubmit(form);
        });
    });
});
