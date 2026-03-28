import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {

  const navigate = useNavigate();

  const [blog, setBlog] = useState({
    title: "",
    author: "",
    content: "",
    image: ""
  });

  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);

    setBlog({
      ...blog,
      image: imageUrl
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!blog.title || !blog.author || !blog.content) {
      alert("Please fill all fields");
      return;
    }

    const oldBlogs = JSON.parse(localStorage.getItem("blogs")) || [];

    const newBlog = {
      id: Date.now(),
      ...blog,
      likes: 0,
      comments: []
    };

    const updatedBlogs = [...oldBlogs, newBlog];

    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

    // ✅ FIXED REDIRECT
    navigate("/blogs");

    // ✅ reset form
    setBlog({
      title: "",
      author: "",
      content: "",
      image: ""
    });

    setPreview(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">

        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          Create New Blog
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Title Input */}
          <input
            type="text"
            name="title"
            placeholder="Blog Title"
            value={blog.title}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          {/* Author Input */}
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={blog.author}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          {/* Content */}
          <textarea
            name="content"
            rows="6"
            placeholder="Write blog..."
            value={blog.content}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="w-full border p-3 rounded"
          />

          {/* Image Preview */}
          {preview && (
            <img
              src={preview}
              alt="preview"
              className="w-full h-60 object-cover rounded"
            />
          )}

          {/* Submit */}
          <button
            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700"
          >
            Publish Blog
          </button>

        </form>

      </div>

    </div>
  );
};

export default CreateBlog;