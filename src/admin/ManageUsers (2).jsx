import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ManageUsers = () => {

  const navigate = useNavigate();

  // ✅ LOAD FROM localStorage FIRST
  const [users, setUsers] = useState(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    return savedUsers && savedUsers.length > 0
      ? savedUsers
      : [
          {
            id: 1,
            name: "Saranya",
            email: "saranya@gmail.com"
          },
          {
            id: 2,
            name: "Ravi",
            email: "ravi@gmail.com"
          },
          {
            id: 3,
            name: "Admin",
            email: "admin@gmail.com"
          }
        ];
  });

  const [search, setSearch] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  // ✅ AUTO SAVE TO localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // DELETE USER
  const deleteUser = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (confirmDelete) {
      setUsers(users.filter(user => user.id !== id));
    }
  };

  // EDIT USER
  const handleEdit = (user) => {
    setEditUser(user);
    setFormData(user);
  };

  // SAVE USER
  const handleSave = () => {
    setUsers(
      users.map(user =>
        user.id === editUser.id ? { ...user, ...formData } : user
      )
    );
    setEditUser(null);
  };

  // FILTER USERS
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase()) ||
    user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">
          Manage Users
        </h1>

        <button
          onClick={() => navigate("/admin/add-user")}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          + Add User
        </button>
      </div>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search users..."
        className="mb-4 p-2 border rounded w-1/3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">

        <table className="w-full bg-white shadow-md rounded">

          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredUsers.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No Users Found
                </td>
              </tr>
            ) : (
              filteredUsers.map((user) => (

                <tr key={user.id} className="border-b hover:bg-gray-100">

                  <td className="p-3">{user.id}</td>
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>

                  <td className="p-3 text-center space-x-2">

                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteUser(user.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))
            )}

          </tbody>

        </table>

      </div>

      {/* EDIT MODAL */}
      {editUser && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

          <div className="bg-white p-6 rounded w-96">

            <h2 className="text-xl mb-4 font-bold">Edit User</h2>

            <input
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full mb-2 p-2 border"
              placeholder="Name"
            />

            <input
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full mb-4 p-2 border"
              placeholder="Email"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setEditUser(null)}
                className="bg-gray-400 px-3 py-1 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-green-500 px-3 py-1 text-white rounded"
              >
                Save
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default ManageUsers;