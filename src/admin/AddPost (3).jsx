
import { useState } from "react";

const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    category: "",
    image: "",
    content: "",
  });

  const [preview, setPreview] = useState(""); // ✅ image preview

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ IMAGE FILE HANDLE
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file); // preview kosam
      setPreview(imageURL);

      setPost({
        ...post,
        image: file, // file store chesthunam
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Post Data:", post);

    alert("Post Added Successfully!");

    setPost({
      title: "",
      category: "",
      image: "",
      content: "",
    });

    setPreview(""); // reset preview
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Post</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Post Title</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            placeholder="Enter post title"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* Category */}
        <div>
          <label className="block font-medium mb-1">Category</label>
          <input
            type="text"
            name="category"
            value={post.category}
            onChange={handleChange}
            placeholder="Enter category"
            className="w-full border p-2 rounded"
            required
          />
        </div>

        {/* ✅ FILE UPLOAD (instead of URL) */}
        <div>
          <label className="block font-medium mb-1">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border p-2 rounded"
          />
        </div>

        {/* ✅ IMAGE PREVIEW */}
        {preview && (
          <div>
            <p className="mb-1 font-medium">Preview:</p>
            <img
              src={preview}
              alt="preview"
              className="w-full h-60 object-cover rounded"
            />
          </div>
        )}

        {/* Content */}
        <div>
          <label className="block font-medium mb-1">Content</label>
          <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            placeholder="Write your blog content..."
            rows="6"
            className="w-full border p-2 rounded"
            required
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Publish Post
        </button>

      </form>
    </div>
  );
};

export default AddPost;