import { useState } from "react";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";

const Blogs = () => {

  const [search, setSearch] = useState("");



  const blogs = [
    {
      id: 1,
      title: "Getting Started with MERN Stack",
      description: "Learn how to build full-stack apps using MongoDB, Express, React and Node.",
      category: "Technology",
      author: "Saranya",
      authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
      date: "2 days ago",
      views: 120,
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      id: 2,
      title: "Why Tailwind CSS is Loved by Developers",
      description: "Explore how Tailwind CSS helps developers build modern UI faster.",
      category: "Web Design",
      author: "John Williams",
      authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
      date: "5 days ago",
      views: 95,
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      id: 3,
      title: "Understanding React Router",
      description: "A complete guide to navigation and routing in React apps.",
      category: "React",
      author: "David Miller",
      authorImage: "https://randomuser.me/api/portraits/men/65.jpg",
      date: "1 week ago",
      views: 150,
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
    },
    {
      id: 4,
      title: "10 Tips for Writing Better Blogs",
      description: "Improve your blogging skills with these powerful writing tips.",
      category: "Blogging",
      author: "Emily Johnson",
      authorImage: "https://randomuser.me/api/portraits/women/22.jpg",
      date: "2 weeks ago",
      views: 80,
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66"
    },
    {
      id: 5,
      title: "Introduction to JavaScript ES6",
      description: "Learn arrow functions, destructuring, modules and more.",
      category: "JavaScript",
      author: "Michael Brown",
      authorImage: "https://randomuser.me/api/portraits/men/75.jpg",
      date: "3 weeks ago",
      views: 200,
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
    },
    {
      id: 6,
      title: "Building Responsive Websites",
      description: "Create websites that look great on mobile, tablet and desktop.",
      category: "Web Development",
      author: "Sophia Lee",
      authorImage: "https://randomuser.me/api/portraits/women/68.jpg",
      date: "1 month ago",
      views: 140,
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    },
    {
      id: 7,
      title: "Introduction to UI/UX Design",
      description: "Learn the basics of UI and UX design principles.",
      category: "Design",
      author: "Daniel Wilson",
      authorImage: "https://randomuser.me/api/portraits/men/41.jpg",
      date: "1 month ago",
      views: 110,
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a"
    },
    {
      id: 8,
      title: "How APIs Work in Web Development",
      description: "Understand how APIs connect frontend and backend systems.",
      category: "Backend",
      author: "Olivia Martin",
      authorImage: "https://randomuser.me/api/portraits/women/50.jpg",
      date: "2 months ago",
      views: 175,
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    }
  ];

  // Filter blogs based on search
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">

      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
        Latest Blogs
      </h1>

      {/* Search Bar */}
      <SearchBar search={search} setSearch={setSearch} />

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-7xl mx-auto">

        {filteredBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}

      </div>

    </div>
  );
};

export default Blogs;