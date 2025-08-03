document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const username = document.getElementById("loginUsername").value;
            const password = document.getElementById("loginPassword").value;

            try {
                const response = await fetch("http://localhost:8080/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username, password })
                });

                if (response.ok) {
                    alert("Login successful!");
                    window.location.href = "dashboard.html";  // ✅ Add this line for redirection
                } else {
                    alert("Invalid credentials");
                }
            } catch (error) {
                console.error("Login error:", error);
                alert("Server error. Please try again later.");
            }
        });
    }
});
