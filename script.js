document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;

      fetch('https://script.google.com/macros/s/AKfycbwI50jgon8nZhh5X96n9nj_flnVXE8HEe82WTdmu7aMIum47AiXC9BFL864ZTbvj5-bEg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById('message').textContent = data.message;
        document.getElementById('registrationForm').reset();
      })
      .catch(error => {
        document.getElementById('message').textContent = 'An error occurred. Please try again.';
        console.error('Error:', error);
      });
    });
