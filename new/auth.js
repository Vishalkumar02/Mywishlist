function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Implement your own login authentication logic here.
    // For now, we'll assume any non-empty username and password is a successful login.
    if (username.trim() !== '' && password.trim() !== '') {
      // Redirect to main.html after successful login
      window.location.href = 'main.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  
  function signup(event) {
    event.preventDefault();
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
  
    // Implement your own signup logic here.
    // For now, we'll assume any non-empty new username and password with matching confirmation is a successful signup.
    if (newUsername.trim() !== '' && newPassword.trim() !== '' && newPassword === confirmPassword) {
      // Redirect to main.html after successful signup
      window.location.href = 'main.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  }
  