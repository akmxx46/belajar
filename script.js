const correctUsername = "akmal123";
const correctPassword = "lupapassword";

const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("errorMessage");


loginForm.addEventListener("submit", function (e) {
  e.preventDefault(); 
  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUsername === correctUsername && enteredPassword === correctPassword) {

    window.location.href = "https://www.tiktok.com/@malware79?_t=8rqF02xuQtN&_r=1";
  } else {

    errorMessage.style.display = "block";
    errorMessage.textContent = "Username atau password salah!";
  }
});
