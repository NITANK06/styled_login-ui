document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    let isValid = true;

    // Reset errors
    emailError.textContent = "";
    passwordError.textContent = "";

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!validateEmail(email)) {
        emailError.textContent = "Enter a valid email address";
        isValid = false;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        alert("Login successful!");
        this.reset();
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
