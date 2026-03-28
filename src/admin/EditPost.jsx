import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditPost = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    author: "",
    status: "Pending"
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Updated Post:", id, post);

    alert("Post Updated Successfully ✅");

    navigate("/admin/manage-posts");
  };

  return (
    <div className="p-8 max-w-xl mx-auto">

      <h1 className="text-3xl font-bold mb-6 text-indigo-600 text-center">
        Edit Post (ID: {id})
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow rounded">

        <input
          type="text"
          name="title"
          placeholder="Post Title"
          value={post.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={post.author}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <select
          name="status"
          value={post.status}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Pending</option>
          <option>Published</option>
        </select>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate("/admin/manage-posts")}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Save Changes
          </button>
        </div>

      </form>

    </div>
  );
};

export default EditPost;