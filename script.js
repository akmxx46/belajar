// Dummy data for username and password (for demonstration purposes)
const validUsername = "user";
const validPassword = "password";

function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Check if the username and password match the valid credentials
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        return true;
    } else {
        document.getElementById("error-message").style.display = "block";
        return false;
    }
}
