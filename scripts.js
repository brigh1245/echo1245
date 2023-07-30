function login(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Define your username and password combinations here
  const validCredentials = [
    { username: "echo", password: "echo" },
    { username: "user2", password: "password2" },
  ];

  // Check if the entered username and password match any valid credentials
  const isValidCredential = validCredentials.some(cred => cred.username === username && cred.password === password);

  if (isValidCredential) {
    alert("Login successful!");
    // <a href="index.html">
  } else {
    alert("Invalid username or password. Please try again.");
  }
}