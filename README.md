# 🛒 E-Commerce Cloud Project

A **Full Stack E-Commerce Application** built using **Spring Boot, MySQL, HTML/CSS/JavaScript**, containerized using **Docker** and deployed through **Docker Hub**.

This project demonstrates **microservice-ready architecture, REST APIs, containerization, and full stack integration**.

---

# 🚀 Tech Stack

### Backend

* Java 17
* Spring Boot
* Spring Data JPA
* Hibernate
* MySQL
* Maven

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla)

### DevOps / Deployment

* Docker
* Docker Compose
* Docker Hub
* GitHub

---

# 🏗 System Architecture

This project follows a **3-tier architecture**:

```
Client (Browser)
        │
        ▼
Frontend (HTML / CSS / JS)
        │
 REST API Calls
        │
        ▼
Spring Boot Backend
(Controller → Service → Repository)
        │
        ▼
MySQL Database
```

### Architecture Diagram

![Architecture](architecture/system-architecture.png)

---

# 🐳 Docker Container Architecture

The application is fully **containerized using Docker**.

### Containers

1️⃣ Frontend Container
2️⃣ Backend Container
3️⃣ MySQL Database Container

All services are orchestrated using **Docker Compose**.

```
Docker Host
│
├── Frontend Container (Nginx)
│       Port: 3000
│
├── Backend Container (Spring Boot)
│       Port: 8081
│
└── MySQL Container
        Port: 3306
```

### Docker Architecture

![Docker Architecture](architecture/docker-architecture.png)

---

# 📦 Project Structure

```
E-commerce-cloud
│
├── backend
│   ├── src
│   │   ├── controller
│   │   ├── service
│   │   ├── repository
│   │   ├── entity
│   │   └── dto
│   ├── pom.xml
│   └── Dockerfile
│
├── frontend
│   ├── index.html
│   ├── products.html
│   ├── cart.html
│   ├── admin.html
│   ├── css
│   └── js
│
├── architecture
│   ├── system-architecture.png
│   └── docker-architecture.png
│
├── docker-compose.yml
└── README.md
```

---

# 📊 Database Schema

### Entities

### Product

| Field       | Type     |
| ----------- | -------- |
| id          | Long     |
| name        | String   |
| description | String   |
| price       | Double   |
| imageUrl    | String   |
| category    | Category |

### Category

| Field       | Type   |
| ----------- | ------ |
| id          | Long   |
| name        | String |
| description | String |

Relationship:

```
Category
   │
   │ 1
   ▼
Products
```

---

# 🔌 REST API Endpoints

### Product APIs

| Method | Endpoint               | Description       |
| ------ | ---------------------- | ----------------- |
| GET    | `/api/products`        | Get all products  |
| GET    | `/api/products/{id}`   | Get product by ID |
| POST   | `/api/products`        | Create product    |
| PUT    | `/api/products/{id}`   | Update product    |
| DELETE | `/api/products/{id}`   | Delete product    |
| GET    | `/api/products/search` | Search products   |

---

### Category APIs

| Method | Endpoint               | Description        |
| ------ | ---------------------- | ------------------ |
| GET    | `/api/categories`      | Get all categories |
| POST   | `/api/categories`      | Create category    |
| DELETE | `/api/categories/{id}` | Delete category    |

---

# 🛍 Features

✔ Product Management
✔ Category Management
✔ Product Search
✔ Shopping Cart (LocalStorage)
✔ REST API Architecture
✔ MySQL Database Integration
✔ Dockerized Application
✔ Docker Compose Orchestration

---

# 🖥 Screenshots

### Home Page

![Home](screenshots/home.png)

### Products Page

![Products](screenshots/products.png)

### Cart Page

![Cart](screenshots/cart.png)

---

# ⚙️ Running the Project

## Run with Docker

Pull images from Docker Hub:

```
docker compose up
```

Application will start:

```
Frontend : http://localhost:3000
Backend  : http://localhost:8081
Database : MySQL
```

---

## Run Backend Manually

```
cd backend
mvn spring-boot:run
```

---

# 🐳 Docker Hub Images

Backend Image:

```
narasimha03/ecommerce-backend:1.0
```

Frontend Image:

```
narasimha03/ecommerce-frontend:1.0
```

---

# 📈 Future Improvements

* User Authentication (JWT)
* Order Management
* Payment Integration
* Cloud Deployment (AWS / Kubernetes)
* Product Image Upload
* Admin Dashboard

---

# 👨‍💻 Author

**Narasimha**

GitHub
https://github.com/itznarasimha-dev

---

⭐ If you like this project, please **star the repository**.
