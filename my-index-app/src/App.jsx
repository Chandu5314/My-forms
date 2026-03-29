import { useState, useEffect } from "react";
import {
  addUserDB,
  getUsersDB,
  deleteUserDB,
  updateUserDB
} from "./db";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });
  const [editId, setEditId] = useState(null);
  const [search, setSearch] = useState("");

  // READ
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsersDB();
    setUsers(data);
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // VALIDATION
  const validate = () => {
    if (!form.firstName || !form.lastName || !form.email) {
      alert("All fields required!");
      return false;
    }
    if (!form.email.includes("@")) {
      alert("Invalid email!");
      return false;
    }
    return true;
  };

  // CREATE + UPDATE
  const handleSubmit = async () => {
    if (!validate()) return;

    if (editId) {
      await updateUserDB({ id: editId, ...form });
    } else {
      await addUserDB(form);
    }

    setForm({ firstName: "", lastName: "", email: "" });
    setEditId(null);
    loadUsers();
  };

  // DELETE
  const handleDelete = async (id) => {
    await deleteUserDB(id);
    loadUsers();
  };

  // EDIT
  const handleEdit = (user) => {
    setForm(user);
    setEditId(user.id);
  };

  // SEARCH FILTER
  const filteredUsers = users.filter((u) =>
    `${u.firstName} ${u.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h2> IndexedDB User Manager</h2>

      <div className="form">
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <button onClick={handleSubmit}>
          {editId ? "Update" : "Add User"}
        </button>
      </div>

      <input
        className="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="list">
        {filteredUsers.map((u) => (
          <div className="card" key={u.id}>
            <p><b>{u.firstName} {u.lastName}</b></p>
            <p>{u.email}</p>

            <div className="actions">
              <button onClick={() => handleEdit(u)}>Edit</button>
              <button onClick={() => handleDelete(u.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;