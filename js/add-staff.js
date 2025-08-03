

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addStaffForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("staffName").value;
      const department = document.getElementById("staffDepartment").value;
      const designation = document.getElementById("staffDesignation").value;

      const staff = { name, department, designation };

      try {
        const response = await fetch("http://localhost:8080/api/staff", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(staff)
        });

        if (response.ok) {
          alert("Staff added successfully!");
          form.reset();
        } else {
          alert("Failed to add staff.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Server error");
      }
    });
  }
});