# 🔗 URL Shortener App (MERN Stack)

## 🚀 Overview

This is a **MERN stack URL Shortener** project with user authentication, backend API, and a responsive frontend. Built using **MongoDB**, **Express**, **React**, and **Node.js**, it allows users to register/login and generate shortened URLs for easier sharing.

### Live App 👉 [https://url-shortner-mu-three.vercel.app/]

---
### 🎯 Features
🔐 User Authentication: Secure login and signup using sessions/cookies.\
🌐 URL Shortening: Convert long URLs into short, unique codes.\
📈 Dashboard View: Users can manage and view all their shortened URLs.\
📤 Redirect Handling: Accessing a short URL automatically redirects to the original.\
🎨 Responsive UI: Clean, intuitive frontend built with React, Tailwind CSS, and Vite.\
⚙️ Backend API: RESTful API built with Express.js and connected to MongoDB Atlas.\
🔁 Session Support: Authentication state is managed via cookies (withCredentials setup).

---

## 🔧 Tech Stack

### Frontend
- React 19 + Vite
- Tailwind CSS 4
- Axios (with credentials)
- Redux Toolkit + React Query
- TanStack

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- express-session, bcrypt, dotenv, jwt
- CORS with credentials setup

---

## 🛠️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/url-shortener.git
```
---
### 2️⃣ Setup Backend

```bash
cd backend
npm install
```
---
```
Create a .env file in /backend:

PORT=5000
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
FRONTEND_ORIGIN=https://your-frontend-url.vercel.app

npm run dev
```
---
### 3️⃣ Setup Frontend
```bash
cd ../frontend
npm install
```
---
Create a .env file in /frontend:
```
VITE_BACKEND_URL=https://your-backend-url.onrender.com
npm run dev
