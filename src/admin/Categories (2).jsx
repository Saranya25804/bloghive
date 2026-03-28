import { useState } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Technology", status: "Active" },
    { id: 2, name: "Health", status: "Active" },
    { id: 3, name: "Education", status: "Inactive" },
  ]);

  const [newCategory, setNewCategory] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  // ➕ Add Category
  const addCategory = () => {
    if (!newCategory.trim()) return;

    const newCat = {
      id: Date.now(),
      name: newCategory,
      status: "Active",
    };

    setCategories([...categories, newCat]);
    setNewCategory("");
  };

  // 🗑 Delete Category
  const deleteCategory = (id) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  // 🔄 Toggle Status
  const toggleStatus = (id) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id
          ? {
              ...cat,
              status: cat.status === "Active" ? "Inactive" : "Active",
            }
          : cat
      )
    );
  };

  // ✏ Edit Category
  const startEdit = (cat) => {
    setEditId(cat.id);
    setEditValue(cat.name);
  };

  const saveEdit = (id) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, name: editValue } : cat
      )
    );
    setEditId(null);
  };

  // 🔍 Search Filter
  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Category Management</h1>

      {/* ➕ Add Category */}
      <div className="flex mb-4 gap-2">
        <input
          type="text"
          placeholder="Add Category"
          className="border p-2 rounded w-full"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />

        <button
          onClick={addCategory}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search category..."
        className="border p-2 mb-4 w-full rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📊 Stats */}
      <div className="flex gap-4 mb-6">
        <div className="bg-green-100 px-4 py-2 rounded">
          Active: {categories.filter(c => c.status === "Active").length}
        </div>
        <div className="bg-red-100 px-4 py-2 rounded">
          Inactive: {categories.filter(c => c.status === "Inactive").length}
        </div>
      </div>

      {/* 📋 Category List */}
      <div className="space-y-3">
        {filteredCategories.length > 0 ? (
          filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              {/* Name */}
              <div>
                {editId === cat.id ? (
                  <input
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="border p-1 rounded"
                  />
                ) : (
                  <h3 className="font-semibold">{cat.name}</h3>
                )}

                <span
                  className={`text-xs px-2 py-1 rounded ${
                    cat.status === "Active"
                      ? "bg-green-200"
                      : "bg-red-200"
                  }`}
                >
                  {cat.status}
                </span>
              </div>

              {/* Actions */}
              <div className="space-x-2">
                {editId === cat.id ? (
                  <button
                    onClick={() => saveEdit(cat.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => startEdit(cat)}
                    className="bg-indigo-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => toggleStatus(cat.id)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded"
                >
                  Toggle
                </button>

                <button
                  onClick={() => deleteCategory(cat.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default Categories;