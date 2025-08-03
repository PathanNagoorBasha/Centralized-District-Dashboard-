document.addEventListener("DOMContentLoaded", async () => {
  const reportSection = document.getElementById("reportContent");

  try {
    const deptRes = await fetch("http://localhost:8080/api/departments");
    const staffRes = await fetch("http://localhost:8080/api/staff");
    const departments = await deptRes.json();
    const staff = await staffRes.json();

    reportSection.innerHTML = `
      <p>Total Departments: ${departments.length}</p>
      <p>Total Staff Members: ${staff.length}</p>
    `;
  } catch (error) {
    console.error("Failed to load report data", error);
  }
});