import { useState } from "react";

const Comments = () => {

  // 📝 Posts with Comments
  const [posts, setPosts] = useState([   // ✅ setPosts add chesanu
    {
      id: 1,
      title: "MERN Guide",
      comments: [
        { id: 1, user: "Saranya", text: "This blog is very helpful!" },
        { id: 2, user: "Ravi", text: "Nice explanation 👌" },
      ],
    },
    {
      id: 2,
      title: "React Tips",
      comments: [
        { id: 3, user: "Anitha", text: "Good content!" },
      ],
    },
  ]);

  const [search, setSearch] = useState("");

  // ✅ DELETE FUNCTION
  const handleDelete = (postId, commentId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this comment?");
    if (!confirmDelete) return;

    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments.filter(c => c.id !== commentId)
        };
      }
      return post;
    });

    setPosts(updatedPosts);
  };

  // 🔍 Filter posts based on search
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.comments.some((c) =>
        c.text.toLowerCase().includes(search.toLowerCase())
      )
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">
        Comments Dashboard
      </h1>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search posts or comments..."
        className="border p-3 mb-6 w-full rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📋 Posts with Comments */}
      <div className="space-y-8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <div 
              key={post.id} 
              className="bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition"
            >

              {/* 📝 Post Title + Count */}
              <h2 className="text-2xl font-semibold text-indigo-600 mb-1">
                {post.title}
              </h2>

              <p className="text-sm text-gray-500 mb-4">
                Total Comments: {post.comments.length}
              </p>

              {/* 💬 Comments */}
              <div className="space-y-3">
                {post.comments.map((comment) => (
                  <div
                    key={comment.id}
                    className="bg-gray-100 p-4 rounded-lg flex justify-between items-center"
                  >
                    <div>
                      <p className="font-semibold text-gray-800">
                        {comment.user}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {comment.text}
                      </p>
                    </div>

                    {/* 🗑 DELETE WORKING */}
                    <button
                      onClick={() => handleDelete(post.id, comment.id)} // ✅ UPDATED
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>
                ))}
              </div>

            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No comments found.</p>
        )}
      </div>
    </div>
  );
};

export default Comments;