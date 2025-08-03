document.addEventListener("DOMContentLoaded", async () => {
  const tableBody = document.querySelector("#staffTable tbody");

  try {
    const response = await fetch("http://localhost:8080/api/staff");
    const staffList = await response.json();

    staffList.forEach(staff => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${staff.id}</td>
        <td>${staff.name}</td>
        <td>${staff.department}</td>
        <td>${staff.designation}</td>
      `;
      tableBody.appendChild(row);
    });
  } catch (error) {
    console.error("Failed to load staff list", error);
  }
});