# 🌐 Portfolio Website – Backend API

A **secure and modular backend API** for a personal portfolio website.  
Built with **Express.js + Prisma + Supabase (PostgreSQL)**, following **enterprise-grade architecture**.  

Designed to manage **blogs, projects, and portfolio owner authentication** for a seamless dynamic experience.

---

## ✨ Core Features

- 🔐 **JWT Authentication & Authorization** – Owner-only access for private features  
- 📝 **Blog Management** – Create, Read, Update, Delete (Owner only)  
- 💼 **Projects Management** – Dynamic project CRUD operations (Owner only)  
- 📄 **About Me Section** – Static personal info served via API (Public)  
- ⚡ **Secure password hashing** with bcrypt  
- 📊 **Dashboard Endpoints** for portfolio owner management  

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** Supabase (PostgreSQL) with Prisma ORM   
- **Authentication:** JWT + bcrypt  
- **Architecture:** Modular, layered, REST API  

---

## 🗂️ Public & Private Pages

| Page Type | Description |
|-----------|-------------|
| **Public** | View all blogs, individual blog pages, about section, projects showcase |
| **Private (Owner)** | Dashboard, create/update/delete blogs & projects, manage content |

---
## 🔗 Live Link 

👉 [Live Server]()

---
## 🔗 API Endpoints 

| Endpoint          | Method | Access | Description          |
|-------------------|--------|--------|----------------------|        
| `/api/v1/auth/login` | POST   | Public | Login portfolio owner|
| `/api/v1/blogs`      | GET    | Public | Fetch all blogs      |
| `/api/v1/blogs/:id`  | GET    | Public | Fetch individual blog by ID |
| `/api/v1/blogs`      | POST   | Private| Create new blog |
| `/api/v1/blogs/:id`  | PATCH  | Private| Update blog by ID |
| `/api/v1/blogs/:id`  | DELETE | Private| Delete blog by ID |
| `/api/v1/projects`   |  GET   | Public | Fetch all projects |
| `/api/v1/projects`   | POST   | Private| Create new project |
| `/api/v1/projects/:id`| PATCH | Private| Update project by ID |
| `/api/v1/projects/:id`| DELETE | Private| Delete project by ID |


> 



## 📚 Database & Seeding

- Database managed with **Prisma ORM**  
- PostgreSQL connection URL set in `.env`  
- Seeded admin user available for initial login  

**Example `.env`:**

### Clone the repo
git clone https://github.com/ShahariarSohan/portfolio-server.git

### Navigate to the project
cd portfolio-backend

### Install dependencies
npm install

### Run development server
npm run dev

### Prisma migration (if needed)
npx prisma migrate dev --name init

### Seed database
npm run prisma:seed
