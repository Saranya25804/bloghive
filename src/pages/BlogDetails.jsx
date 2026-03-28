import { useParams } from "react-router-dom";

const BlogDetails = () => {

  const { id } = useParams();

  const blogs = [
    {
      id: "1",
      title: "Getting Started with MERN Stack",
      author: "Saranya",
      date: "March 2026",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      content:
        "The MERN stack is a powerful combination of MongoDB, Express, React, and Node.js. It allows developers to build full stack web applications using JavaScript. React handles the frontend while Node.js and Express manage the backend and MongoDB stores the data."
    },
    {
      id: "2",
      title: "Why Tailwind CSS is Popular",
      author: "John",
      date: "February 2026",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      content:
        "Tailwind CSS is a utility-first CSS framework that helps developers design faster without writing custom CSS. It provides pre-built classes for styling elements, making UI development efficient and flexible."
    },
    {
      id: "3",
      title: "React Router Explained",
      author: "David",
      date: "January 2026",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      content:
        "React Router is used for navigation in React applications. It allows developers to create multiple pages and switch between them without refreshing the browser."
    }
  ];

  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <h1 className="text-center text-2xl mt-10">Blog Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">

        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover"
        />

        {/* Blog Content */}
        <div className="p-6">

          <h1 className="text-3xl font-bold text-indigo-700 mb-3">
            {blog.title}
          </h1>

          <p className="text-gray-500 mb-6">
            By {blog.author} • {blog.date}
          </p>

          <p className="text-gray-700 leading-relaxed text-lg">
            {blog.content}
          </p>

        </div>

      </div>

    </div>
  );
};

export default BlogDetails;