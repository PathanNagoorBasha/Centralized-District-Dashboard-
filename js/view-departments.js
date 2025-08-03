document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:8080/api/departments")
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector("#departmentsTable tbody");
      tableBody.innerHTML = ""; // Clear existing rows

      data.forEach(dept => {
        const row = `
          <tr>
            <td>${dept.id}</td>
            <td>${dept.name}</td>
            <td>${dept.head}</td>
            <td>${dept.contact}</td>
          </tr>
        `;
        tableBody.innerHTML += row;
      });
    })
    .catch(error => {
      console.error("Error loading departments:", error);
    });
});
