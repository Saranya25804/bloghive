import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ManagePosts = () => {

  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    { id: 1, title: "MERN Stack Guide", author: "Saranya", status: "Published" },
    { id: 2, title: "React Tips", author: "Sai", status: "Pending" },
    { id: 3, title: "Node.js Basics", author: "Kiran", status: "Published" }
  ]);

  const [commentsData] = useState({
    1: ["Great blog!", "Very useful 👍"],
    2: ["Nice tips", "Helped me a lot"],
    3: ["Good explanation"]
  });

  const [search, setSearch] = useState("");
  const [editPost, setEditPost] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    status: "Pending"
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      setPosts(posts.filter(post => post.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setPosts(
      posts.map(post =>
        post.id === id
          ? { ...post, status: post.status === "Published" ? "Pending" : "Published" }
          : post
      )
    );
  };

  // ✅ UPDATED EDIT (navigate)
  const handleEdit = (post) => {
    navigate(`/admin/edit-post/${post.id}`);
  };

  const handleViewComments = (postId) => {
    navigate("/admin/comments");
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 min-h-screen bg-gray-100">

      <h1 className="text-3xl font-bold text-indigo-600 mb-6">
        My Posts
      </h1>

      <input
        type="text"
        placeholder="Search posts..."
        className="mb-6 p-2 border rounded w-full md:w-1/3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="overflow-x-auto bg-white rounded-lg shadow">

        <table className="w-full text-left">

          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3">Author</th>
              <th className="p-3">Status</th>
              <th className="p-3">Comments</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredPosts.map(post => (
              <tr key={post.id} className="border-b">

                <td className="p-3">{post.title}</td>
                <td className="p-3">{post.author}</td>

                <td className="p-3">
                  <span className={`px-3 py-1 rounded text-white text-sm ${
                    post.status === "Published" ? "bg-green-500" : "bg-yellow-500"
                  }`}>
                    {post.status}
                  </span>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => handleViewComments(post.id)}
                    className="bg-purple-500 text-white px-3 py-1 rounded"
                  >
                    View
                  </button>
                </td>

                <td className="p-3 space-x-2">

                  <button
                    onClick={() => handleEdit(post)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(post.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => toggleStatus(post.id)}
                    className="bg-gray-700 text-white px-3 py-1 rounded"
                  >
                    Toggle
                  </button>

                </td>

              </tr>
            ))}

            {filteredPosts.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No posts found
                </td>
              </tr>
            )}

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default ManagePosts;