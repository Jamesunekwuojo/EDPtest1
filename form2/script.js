// Initialize users in localStorage if it doesn't exist
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([]));
}

document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("email").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    // Retrieve stored users from localStorage
    const users = JSON.parse(localStorage.getItem("users"));

    // Check if email already exists
    const emailExists = users.some((user) => user.email === email);

    if (emailExists) {
      document.getElementById("errorAlert").classList.remove("d-none"); // Show error alert
    } else {
      // Add new user to the list
      users.push({ firstName, lastName, email, password, age, gender });
      localStorage.setItem("users", JSON.stringify(users)); // Update localStorage

      document.getElementById("errorAlert").classList.add("d-none"); // Hide error alert
      alert("Form submitted successfully!");

      // Optionally, clear the form
      document.getElementById("registrationForm").reset();
    }
  });
