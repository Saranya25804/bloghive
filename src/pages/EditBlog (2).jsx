import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBlog = {
      id,
      title,
      content,
      author
    };

    console.log("Updated Blog:", updatedBlog);

    alert("Blog Updated Successfully!");

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">

        <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
          Edit Blog
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Title */}
          <div>
            <label className="block mb-2 font-semibold">
              Blog Title
            </label>
            <input
              type="text"
              placeholder="Enter blog title"
              className="w-full border p-3 rounded focus:outline-indigo-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Author */}
          <div>
            <label className="block mb-2 font-semibold">
              Author
            </label>
            <input
              type="text"
              placeholder="Author name"
              className="w-full border p-3 rounded focus:outline-indigo-500"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          {/* Content */}
          <div>
            <label className="block mb-2 font-semibold">
              Blog Content
            </label>
            <textarea
              rows="6"
              placeholder="Write blog content..."
              className="w-full border p-3 rounded focus:outline-indigo-500"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition"
          >
            Update Blog
          </button>

        </form>

      </div>

    </div>
  );
};

export default EditBlog;