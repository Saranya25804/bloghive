import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark, FaEye, FaComment, FaTrash } from "react-icons/fa";

const BlogCard = ({ blog }) => {

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(blog.likes || 0);

  const [saved, setSaved] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  const addComment = () => {
    if (commentInput.trim() !== "") {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  const deleteComment = (index) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-sm hover:shadow-xl transition">

      {/* Blog Image */}
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">

        {/* PROFILE SECTION */}
        <div className="flex items-center justify-between mb-2">

          <div className="flex items-center space-x-2">

            <img
              src={blog.authorImage}
              alt="author"
              className="w-8 h-8 rounded-full border"
            />

            <div>
              <p className="text-sm font-semibold text-gray-800">
                {blog.author}
              </p>

              <p className="text-xs text-gray-500">
                {blog.date}
              </p>
            </div>

          </div>

          <button className="text-xs bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full">
            Follow
          </button>

        </div>

        {/* Category */}
        <span className="text-xs text-indigo-600 font-semibold">
          {blog.category}
        </span>

        {/* Title */}
        <h2 className="text-lg font-bold mt-1">
          {blog.title}
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-1">
          {blog.description}
        </p>

        {/* Blog Stats */}
        <div className="flex items-center gap-3 text-xs text-gray-500 mt-2">

          <div className="flex items-center gap-1">
            <FaEye /> {blog.views}
          </div>

          <div>
            ⏱ {blog.readTime}
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-3">

          <button
            onClick={handleLike}
            className="text-lg hover:scale-110 transition"
          >
            {liked ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-500" />
            )}
          </button>

          <button
            onClick={handleSave}
            className="text-lg hover:scale-110 transition"
          >
            {saved ? (
              <FaBookmark className="text-indigo-600" />
            ) : (
              <FaRegBookmark className="text-gray-500" />
            )}
          </button>

          <span className="text-xs text-gray-600">
            {likes} Likes
          </span>

        </div>

        {/* Comment Section */}
        <div className="mt-3">

          <div className="flex items-center gap-2 mb-1">
            <FaComment className="text-gray-500 text-sm" />
            <span className="text-xs font-semibold">
              {comments.length} Comments
            </span>
          </div>

          {/* Comment Input */}
          <input
            type="text"
            placeholder="Add comment"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}

            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addComment();
              }
            }}

            className="border p-2 mt-1 w-full rounded text-sm"
          />

          <button
            onClick={addComment}
            className="bg-indigo-500 text-white px-3 py-1 rounded text-xs hover:bg-indigo-600 mt-2"
          >
            Post
          </button>

          {/* Comment List */}
          <div className="mt-2 space-y-1 max-h-24 overflow-y-auto">

            {comments.map((c, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 px-2 py-1 rounded"
              >

                <p className="text-xs text-gray-700">
                  💬 {c}
                </p>

                <button
                  onClick={() => deleteComment(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash size={12} />
                </button>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default BlogCard;