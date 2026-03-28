import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHeart,
  FaEdit,
  FaTrash,
  FaCommentDots,
  FaUserPlus,
  FaPlus
} from "react-icons/fa";

const Dashboard = () => {
  const user = "Saranya";

  const profileImage = "https://i.pravatar.cc/100?img=5";

  const [followers, setFollowers] = useState(120);
  const [following] = useState(80); // following change kakudadhu kabatti static

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "React Basics",
      author: "Saranya",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      likes: 0,
      comments: [],
      commentInput: "",
      isFollowing: false
    },
    {
      id: 2,
      title: "MERN Stack Guide",
      author: "Saranya",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      likes: 0,
      comments: [],
      commentInput: "",
      isFollowing: false
    },
    {
      id: 3,
      title: "JavaScript ES6 Features",
      author: "Saranya",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
      likes: 0,
      comments: [],
      commentInput: "",
      isFollowing: false
    },
    {
      id: 4,
      title: "Node.js Backend Guide",
      author: "Saranya",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      likes: 0,
      comments: [],
      commentInput: "",
      isFollowing: false
    },
    {
      id: 5,
      title: "MongoDB Database Basics",
      author: "Saranya",
      image:
        "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
      likes: 0,
      comments: [],
      commentInput: "",
      isFollowing: false
    },
    {
      id: 6,
      title: "Tailwind CSS Styling",
      author: "Saranya",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      likes: 0,
      comments: [],
      commentInput: "",
      isFollowing: false
    }
  ]);

  const deleteBlog = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const likeBlog = (id) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
      )
    );
  };

  // FOLLOW FUNCTION FIX
  const toggleFollow = (id) => {
    const blog = blogs.find((b) => b.id === id);

    setBlogs(
      blogs.map((blog) =>
        blog.id === id ? { ...blog, isFollowing: !blog.isFollowing } : blog
      )
    );

    if (blog.isFollowing) {
      setFollowers((prev) => prev - 1);
    } else {
      setFollowers((prev) => prev + 1);
    }
  };

  const handleCommentChange = (id, value) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id ? { ...blog, commentInput: value } : blog
      )
    );
  };

  const addComment = (id) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === id && blog.commentInput.trim() !== ""
          ? {
              ...blog,
              comments: [...blog.comments, blog.commentInput],
              commentInput: ""
            }
          : blog
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white shadow-md rounded-xl p-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={profileImage}
              alt="profile"
              className="w-14 h-14 rounded-full border"
            />
            <h1 className="text-2xl font-bold text-gray-700">
              Welcome back, {user} 👋
            </h1>
          </div>

          <Link
            to="/login"
            className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600"
          >
            Logout
          </Link>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h2 className="text-gray-500">Total Blogs</h2>
            <p className="text-3xl font-bold text-indigo-600 mt-2">
              {blogs.length}
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h2 className="text-gray-500">Followers</h2>
            <p className="text-3xl font-bold text-green-600 mt-2">
              {followers}
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h2 className="text-gray-500">Following</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {following}
            </p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 flex items-center justify-center">
            <Link
              to="/create"
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              <FaPlus /> New Blog
            </Link>
          </div>

        </div>

        {/* Blog List */}
        <div className="grid md:grid-cols-3 gap-6">

          {blogs.map((blog) => (

            <div key={blog.id} className="bg-white shadow rounded-lg overflow-hidden">

              <img
                src={blog.image}
                alt="blog"
                className="w-full h-40 object-cover"
              />

              <div className="p-4">

                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={profileImage}
                    alt="author"
                    className="w-7 h-7 rounded-full"
                  />

                  <p className="text-xs text-gray-500">{blog.author}</p>

                  <button
                    onClick={() => toggleFollow(blog.id)}
                    className={`ml-auto text-xs px-2 py-1 rounded flex items-center gap-1 ${
                      blog.isFollowing
                        ? "bg-gray-400 text-white"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    <FaUserPlus />
                    {blog.isFollowing ? "Following" : "Follow"}
                  </button>
                </div>

                <h3 className="text-lg font-semibold text-gray-700">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Learn the fundamentals of {blog.title}.
                </p>

                <div className="flex gap-2 mt-3 flex-wrap">

                  <button
                    onClick={() => likeBlog(blog.id)}
                    className="flex items-center gap-1 bg-pink-500 text-white px-2 py-1 text-sm rounded"
                  >
                    <FaHeart /> {blog.likes}
                  </button>

                  <Link
                    to={`/edit-blog/${blog.id}`}
                    className="flex items-center gap-1 bg-yellow-500 text-white px-2 py-1 text-sm rounded"
                  >
                    <FaEdit /> Edit
                  </Link>

                  <button
                    onClick={() => deleteBlog(blog.id)}
                    className="flex items-center gap-1 bg-red-500 text-white px-2 py-1 text-sm rounded"
                  >
                    <FaTrash /> Delete
                  </button>

                </div>

                {/* Comments */}
                <div className="mt-3">

                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Add comment..."
                      value={blog.commentInput}
                      onChange={(e) =>
                        handleCommentChange(blog.id, e.target.value)
                      }
                      className="border p-1 text-sm rounded w-full"
                    />

                    <button
                      onClick={() => addComment(blog.id)}
                      className="bg-green-500 text-white px-2 text-sm rounded"
                    >
                      <FaCommentDots />
                    </button>
                  </div>

                  <div className="mt-2 space-y-1 max-h-16 overflow-y-auto">
                    {blog.comments.map((c, i) => (
                      <p
                        key={i}
                        className="bg-gray-100 p-1 text-xs rounded"
                      >
                        {c}
                      </p>
                    ))}
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
};

export default Dashboard;