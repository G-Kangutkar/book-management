# 📚 Book Management App

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

A simple book management app to add, edit, delete, search and manage book availability — powered by React, Axios and Firebase Realtime Database.

---
## Demo Images

<p align="center" style={{margin-bottom:20px}}>
  <img src="https://github.com/G-Kangutkar/book-management/blob/main/public/ScreenshotLogin.png?raw=true" alt="Screenshot of the application login page">
</p>


<p align="center">
  <img src="https://github.com/G-Kangutkar/book-management/blob/main/public/ScreenshotHome.png?raw=true" alt="Screenshot of the application home page">
</p>


## ✨ Features

- 🔐 Login / Logout using firebase authentication with protected routes
- ➕ Add, ✏️ Edit, 🗑️ Delete books
- ✅ Toggle availability status
- 🔍 Real-time search by title
- 📱 Fully responsive UI

---

## 🛠️ Tech Stack

| | Technology |
|-|-----------|
| ⚛️ | React 18 |
| 🌐 | Axios |
| 🔥 | Firebase Realtime Database and Authentication |
| 🎨 | Tailwind CSS v4 |
| 🚀 | Vite |

---

## ⚙️ Installation

**1. Clone & install**
```bash
git clone https://github.com/yourusername/book-management-app.git
cd book-management-app
npm install
```

**2. Add your Firebase URL in `src/services/axiosInstance.js`**
```javascript
const api = axios.create({
  baseURL: 'https://your-project-id-default-rtdb.region.firebasedatabase.app',
});
```

**3. Run**
```bash
npm run dev
```
## 🌐 Axios API Reference

Base URL:
```
https://your-project-default-rtdb.region.firebasedatabase.app
```

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/books.json` | Fetch all books |
| `POST` | `/books.json` | Add new book |
| `PATCH` | `/books/{id}.json` | Update book fields |
| `DELETE` | `/books/{id}.json` | Delete a book |

```javascript
// ✅ GET - Fetch all books
const response = await api.get('/books.json');

// ✅ POST - Add new book (Firebase generates ID)
const response = await api.post('/books.json', newBook);

// ✅ PATCH - Update specific fields
const response = await api.patch(`/books/${id}.json`, { author: 'New Name' });

// ✅ DELETE - Remove a book
const response = await api.delete(`/books/${id}.json`);
```
---

## Firebase Authentication

```bash 
npm install firebase
```
### Create a firebase Project
- Go to Firebase Console

- Click Add Project → Give it a name → Create

- Click Web App (</>) → Register app → Copy Firebase config

```bash
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```
### Enable Authentication Providers
- Go to Authentication → Sign-in method

- Enable:

  → *Email/Password*
  → *Google (optional)*

### Create Environment Variables


Create a .env file at the project root

```env
VITE_API_KEY=YOUR_API_KEY
VITE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_PROJECT_ID=YOUR_PROJECT_ID
VITE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_APP_ID=YOUR_APP_ID
```

## 📁 Project Structure

```
src/
├── components/    # Navbar, BookCard, ProtectedRoute
├── pages/         # Login,Signup, Dashboard
├── services/      # axiosInstance.js, axiosService.js
├── context/       # AuthContext.jsx
├── config/        # firebase.config.js   
└── App.jsx
```

---

## 🔥 Firebase Rules (Development)

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

---

<div align="center">
Made with ❤️ using React + Axios + Firebase
</div>
