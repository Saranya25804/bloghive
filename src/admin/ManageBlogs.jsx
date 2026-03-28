import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManageBlogs = () => {

  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([
    { id: 1, title: "React Basics", author: "Saranya", date: "2026-03-10" },
    { id: 2, title: "Understanding MERN Stack", author: "Sai", date: "2026-03-09" },
    { id: 3, title: "Tailwind CSS Guide", author: "Lalli", date: "2026-03-08" }
  ]);

  const [search, setSearch] = useState("");
  const [editBlog, setEditBlog] = useState(null);
  const [formData, setFormData] = useState({ title: "", author: "", date: "" });

  const addBlog = () => {
    navigate("/admin/create-blog");
  };

  const deleteBlog = (id) => {
    if (window.confirm("Are you sure?")) {
      setBlogs(blogs.filter(blog => blog.id !== id));
    }
  };

  const handleEdit = (blog) => {
    setEditBlog(blog);
    setFormData(blog);
  };

  const handleSave = () => {
    setBlogs(
      blogs.map(blog =>
        blog.id === editBlog.id ? formData : blog
      )
    );
    setEditBlog(null);
  };

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-indigo-600">
          Manage Blogs
        </h1>

        <button
          onClick={addBlog}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          + Add Blog
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="mb-4 p-2 border rounded w-1/3"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto">

        {/* ✅ table-fixed add chesanu */}
        <table className="w-full table-fixed bg-white shadow-md rounded">

          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3 text-left w-16">ID</th>
              <th className="p-3 text-left w-1/3">Title</th>
              <th className="p-3 text-left w-1/4">Author</th>
              <th className="p-3 text-left w-1/4">Date</th>
              <th className="p-3 text-center w-40">Actions</th>
            </tr>
          </thead>

          <tbody>

            {filteredBlogs.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No Blogs Found
                </td>
              </tr>
            ) : (
              filteredBlogs.map((blog) => (
                <tr key={blog.id} className="border-b hover:bg-gray-100">

                  {/* ✅ text-left add chesanu */}
                  <td className="p-3 text-left">{blog.id}</td>
                  <td className="p-3 text-left">{blog.title}</td>
                  <td className="p-3 text-left">{blog.author}</td>
                  <td className="p-3 text-left">{blog.date}</td>

                  <td className="p-3 text-center space-x-3">
                    <button
                      onClick={() => handleEdit(blog)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteBlog(blog.id)}
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

      {/* Edit Modal same */}
      {editBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">

          <div className="bg-white p-6 rounded w-96">

            <h2 className="text-xl mb-4 font-bold">Edit Blog</h2>

            <input
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              className="w-full mb-2 p-2 border"
            />

            <input
              value={formData.author}
              onChange={(e) => setFormData({...formData, author: e.target.value})}
              className="w-full mb-2 p-2 border"
            />

            <input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({...formData, date: e.target.value})}
              className="w-full mb-4 p-2 border"
            />

            <div className="flex justify-end gap-2">
              <button onClick={() => setEditBlog(null)} className="bg-gray-400 px-3 py-1 text-white rounded">
                Cancel
              </button>
              <button onClick={handleSave} className="bg-green-500 px-3 py-1 text-white rounded">
                Save
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default ManageBlogs;