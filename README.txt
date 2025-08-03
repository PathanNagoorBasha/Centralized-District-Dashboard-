
# Centralized Dashboard for District Administration System

A web-based dashboard for managing and monitoring key departments under a district administration. This system provides functionality to add, view, and manage entities such as departments, staff, and reports in a centralized manner.

---

## 📌 Project Structure

```
centralized-dashboard/
├── backend/ (Spring Boot Project)
│   ├── src/main/java/com/dashboard/...
│   ├── src/main/resources/
│   └── pom.xml
│
├── frontend/
│   ├── HTML pages/
│   │   ├── index.html
│   │   ├── dashboard.html
│   │   ├── add-department.html
│   │   ├── view-departments.html
│   │   ├── add-staff.html
│   │   ├── view-staff.html
│   │   ├── reports.html
│   │   └── etc.
│   │
│   ├── css/
│   │   └── styles.css
│   │
│   └── js/
│       ├── dashboard.js
│       ├── add-department.js
│       ├── view-departments.js
│       ├── add-staff.js
│       ├── view-staff.js
│       └── reports.js
│
└── README.md
```

---

## 🚀 Features

- Add and view Departments
- Add and view Staff
- Submit and view Department Reports
- Bootstrap-powered responsive UI
- Modular JS files for each page
- REST API integration with Spring Boot backend

---

## ⚙️ Technologies Used

### Backend:
- Java 17+
- Spring Boot
- Spring MVC
- PostgreSQL
- JPA (Hibernate)
- RESTful APIs

### Frontend:
- HTML5
- CSS3 (with Bootstrap 5)
- JavaScript (Modularized per page)

---

## 🛠️ Setup Instructions

### 🔧 Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/centralized-dashboard.git
   ```

2. Import the backend folder into **Eclipse** or **IntelliJ** as a Maven project.

3. Configure the PostgreSQL database:
   - Create a new database (e.g., `district_dashboard`)
   - Update `application.properties`:
     ```
     spring.datasource.url=jdbc:postgresql://localhost:5432/district_dashboard
     spring.datasource.username=your_db_username
     spring.datasource.password=your_db_password
     ```

4. Run the Spring Boot application:
   ```
   mvn spring-boot:run
   ```

---

### 🌐 Frontend Setup

1. Navigate to the `frontend/HTML pages/` folder.
2. Open `index.html` in your browser or serve with a lightweight server like `Live Server` in VSCode.

---

## 🧪 Testing

- Visit `http://localhost:8080` to verify backend is running.
- Open `dashboard.html` to navigate between features.
- Add departments and staff and verify in view pages.
- Check browser console for JS logs or network errors.

---

## 📂 API Endpoints

| Method | Endpoint                  | Description              |
|--------|---------------------------|--------------------------|
| GET    | `/api/departments`        | List all departments     |
| POST   | `/api/departments`        | Add a department         |
| GET    | `/api/staff`              | List all staff           |
| POST   | `/api/staff`              | Add a staff member       |
| POST   | `/api/reports`            | Submit a report          |
| GET    | `/api/reports`            | View all reports         |

---

## 🧑‍💻 Contributors

- **Pathan Nagoorbasha** (Lead Developer)


---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
