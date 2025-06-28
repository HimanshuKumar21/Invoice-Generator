// Hardcoded credentials (can later move to server-side or hash in storage)
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'admin123';

function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorBox = document.getElementById('loginError');

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    localStorage.setItem('isAdminLoggedIn', 'true');
    window.location.href = 'create.html';
  } else {
    errorBox.textContent = 'Invalid username or password';
    errorBox.classList.remove('d-none');
  }
}

// If already logged in, redirect to dashboard automatically
if (localStorage.getItem('isAdminLoggedIn') === 'true') {
  window.location.href = 'create.html';
}
