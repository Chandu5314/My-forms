# 📦 IndexedDB User Manager (React CRUD App)

## 🚀 Overview

This is a **React-based CRUD application** that uses **IndexedDB** for client-side data storage.
It allows users to **add, update, delete, and search users** without any backend.

---

## ✨ Features

* ➕ Add new users
* ✏️ Edit existing users
* ❌ Delete users
* 🔍 Search users (real-time filtering)
* 💾 Persistent storage using IndexedDB
* ⚡ Fast performance (no API calls required)

---

## 🛠 Tech Stack

* React (Hooks)
* JavaScript (ES6+)
* IndexedDB (Browser Storage)
* CSS

---

## 📁 Project Structure

```
src/
 ├── App.jsx        # Main UI & logic
 ├── db.js          # IndexedDB operations
 ├── App.css        # Styling
 ├── main.jsx       # Entry point
```

---

## ⚙️ Installation

```bash
npm install
```

---

## ▶️ Run the Project

```bash
npm run dev
```

👉 App will run at:
http://localhost:5173

---

## 💡 How It Works

1. User fills the form
2. Data is stored in **IndexedDB**
3. Users are displayed in a list
4. You can:

   * Edit user details
   * Delete users
   * Search users instantly

---

## 🔐 Validation Rules

* All fields are required
* Email must include "@"

---

## 🔍 Search Functionality

* Filters users by **first name + last name**
* Case-insensitive search

---

## 📌 Key Concepts Used

* React `useState` & `useEffect`
* Controlled components
* CRUD operations
* IndexedDB API abstraction
* Dynamic filtering

---

## 🚀 Future Improvements

* Add pagination
* Improve UI with Tailwind CSS
* Add form validation library (Formik / Yup)
* Export data (CSV/JSON)
* Dark mode

---

## 👨‍💻 Author

GitHub: https://github.com/Chandu5314

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
