window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("user-form");
  const modalBody = document.getElementById("modal-body-content");
  const userModal = new bootstrap.Modal(document.getElementById("userModal"));
  const regStatus = document.getElementById("regstatus");

  form.addEventListener("reset", () => {
    regStatus.selectedIndex = 0;
  });

  // Listen for the form submission event
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Grab all user inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const regStatusValue = regStatus.value;
    const comments = document.getElementById("comments").value;

    // Courses
    const courses = [];
    if (document.getElementById("course1").checked)
      courses.push("Programming Languages");
    if (document.getElementById("course2").checked)
      courses.push("Operating Systems");
    if (document.getElementById("course3").checked)
      courses.push("Fullstack Web Development");

    // Display the user inputs in the modal
    modalBody.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Registration Status:</strong> ${regStatusValue}</p>
        <p><strong>Courses Taken:</strong> ${
          courses.length > 0 ? courses.join(", ") : "None"
        }</p>
        <p><strong>Comments:</strong> ${comments || "None"}</p>
      `;

    // Show the modal
    userModal.show();
  });

  regStatus.selectedIndex = 0;
});
