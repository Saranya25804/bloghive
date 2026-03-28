import React from "react";
import BlogCard from "./BlogCard";

const TrendingBlogs = () => {

  const trendingBlogs = [
    {
      id: 1,
      title: "Mastering MERN Stack",
      description: "Learn how to build full stack applications using MongoDB, Express, React and Node.",
      category: "Development",
      author: "John Doe",
      authorImage: "https://i.pravatar.cc/40?img=1",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      likes: 120,
      views: 900,
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Advanced Tailwind CSS",
      description: "Improve your UI design using advanced Tailwind techniques.",
      category: "Design",
      author: "Sarah Smith",
      authorImage: "https://i.pravatar.cc/40?img=2",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      likes: 210,
      views: 1500,
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Backend Architecture Guide",
      description: "Best practices to design scalable backend systems.",
      category: "Backend",
      author: "David Miller",
      authorImage: "https://i.pravatar.cc/40?img=3",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      likes: 180,
      views: 1100,
      readTime: "6 min read"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
        🔥 Trending Blogs
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {trendingBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}

      </div>

    </section>
  );
};

export default TrendingBlogs;