# 🌐 My Portfolio Website – Backend API

A **secure and modular backend API** for my portfolio website.  
Built with **Express.js + Prisma + Supabase (PostgreSQL)**, following **enterprise-grade architecture**.  

Designed to manage **blogs, projects, and portfolio owner authentication** for a seamless dynamic experience.

---

## ✨ Core Features

- 🔐 **JWT Authentication & Authorization** –  Only I can access private features  
- 📝 **Blog Management** – Create, Read, Update, Delete ( Only me)  
- 💼 **Projects Management** – Dynamic project CRUD operations ( Only me)  
- 📄 **About Me Section** – Static personal info served via API (Public)  
- ⚡ **Secure password hashing** with bcrypt  
- 📊 **Dashboard Endpoints** for portfolio owner management (only me)  

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

👉 [Live Server](https://shahariarsohan-server.vercel.app)

---
## 🔗 API Endpoints 

| Endpoint          | Method | Access | Description          |
|-------------------|--------|--------|----------------------|        
| `/api/v1/auth/login` | POST   | Private | Login portfolio   |
| `/api/v1/blogs`      | GET    | Public | Fetch all blogs   |
| `/api/v1/blogs/:id`  | GET    | Public | Fetch individual blog by ID |
| `/api/v1/blogs`      | POST   | Private| Create new blog |
| `/api/v1/blogs/:id`  | PATCH  | Private| Update blog by ID |
| `/api/v1/blogs/:id`  | DELETE | Private| Delete blog by ID  |
| `/api/v1/projects`   |  GET   | Public | Fetch all projects |
| `/api/v1/projects/:id`| GET   | Public | Fetch individual blog by ID |
| `/api/v1/projects`    | POST  | Private| Create new project |
| `/api/v1/projects/:id`| PATCH | Private| Update project by ID  |
| `/api/v1/projects/:id`| DELETE| Private| Delete project by ID  |


> 



## 📚 Database & Seeding

- Database managed with **Prisma ORM**  
- PostgreSQL connection URL set in `.env`  
- Seeded admin user available for initial login  

**Example `.env`:**

## 💻 Installation Guide

- git clone https://github.com/ShahariarSohan/portfolio-server.git
- cd portfolio-backend
- npm install
- npm run dev
- npx prisma migrate dev --name init
- npm run prisma:seed
