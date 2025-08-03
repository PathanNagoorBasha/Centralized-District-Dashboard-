document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addDepartmentForm");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("deptName").value;
      const head = document.getElementById("deptHead").value;
      const contact = document.getElementById("deptContact").value;

      const department = { name, head, contact };

      try {
        const response = await fetch("http://localhost:8080/api/departments", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(department)
        });

        if (response.ok) {
          alert("Department added successfully!");
          form.reset();
        } else {
          alert("Failed to add department.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("Server error");
      }
    });
  }
});


