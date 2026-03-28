import { useParams } from "react-router-dom";

const ReadMore = () => {

  const { id } = useParams();

  const blogs = [
    {
      id: 1,
      title: "Getting Started with MERN Stack",
      author: "Saranya",
      date: "March 2026",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      content:
        "The MERN stack is one of the most popular technologies used for building modern web applications. It includes MongoDB, Express.js, React.js, and Node.js. React is used for building interactive user interfaces, Node.js and Express.js handle backend logic, and MongoDB stores the application data. Together they provide a powerful full-stack development environment."
    },
    {
      id: 2,
      title: "Why Tailwind CSS is Popular",
      author: "John",
      date: "February 2026",
      category: "Frontend",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      content:
        "Tailwind CSS is a utility-first CSS framework that allows developers to build modern user interfaces quickly. Instead of writing custom CSS, developers can use ready-made classes directly inside HTML or JSX. This approach speeds up development and ensures consistent design across applications."
    },
    {
      id: 3,
      title: "React Router Explained",
      author: "David",
      date: "January 2026",
      category: "React",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      content:
        "React Router allows developers to build single-page applications with multiple views. It enables navigation between pages without reloading the browser. With React Router, developers can create routes, nested routes, dynamic routes, and protected routes."
    }
  ];

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <h2 className="text-center mt-10">Blog not found</h2>;
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
        <div className="p-8">

          <span className="text-indigo-600 font-semibold">
            {blog.category}
          </span>

          <h1 className="text-3xl font-bold mt-2">
            {blog.title}
          </h1>

          <p className="text-gray-500 mt-2">
            ✍ {blog.author} • {blog.date}
          </p>

          <p className="text-gray-700 mt-6 leading-relaxed">
            {blog.content}
          </p>

        </div>

      </div>

    </div>
  );
};

export default ReadMore;