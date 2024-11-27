// Add event listener to the form submission
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  // Retrieve input values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  // Display a loading message while the request is processed
  const messageElement = document.getElementById('message');
  messageElement.textContent = 'Submitting your registration...';

  // Make a POST request to the Google Apps Script Web App
  fetch('https://script.google.com/macros/s/AKfycbwI50jgon8nZhh5X96n9nj_flnVXE8HEe82WTdmu7aMIum47AiXC9BFL864ZTbvj5-bEg/exec', { // Replace with your actual deployment URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email }), // Send the form data as JSON
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Display success message from the server
      messageElement.textContent = data.message || 'Registration successful!';
      document.getElementById('registrationForm').reset(); // Reset the form
    })
    .catch(error => {
      // Display error message if the request fails
      messageElement.textContent = 'An error occurred. Please try again.';
      console.error('Error:', error);
    });
});
