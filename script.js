//your JS code here. If required.
const form = document.getElementById("signup-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password === confirmPassword) {
        const userData = {
            name: name,
            email: email,
            password: password
        };

        // Store user data in session storage
        sessionStorage.setItem("user", JSON.stringify(userData));

        alert("Sign up successful!");
        form.reset();
    } else {
        alert("Passwords do not match");
    }
});
