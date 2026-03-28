import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {

  const [search, setSearch] = useState("");

  const blogs = [
    {
      title: "MERN Stack Guide",
      description:
        "Explore in-depth tutorials and insights to enhance your development journey."
    },
    {
      title: "Tailwind Advanced Tips",
      description:
        "Learn powerful Tailwind CSS techniques for modern UI design."
    },
    {
      title: "Backend Architecture",
      description:
        "Understand scalable backend architecture for large applications."
    }
  ];

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-sky-100 overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative py-32 text-center">

        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 opacity-95"></div>

        <div className="relative z-10 text-white px-6 max-w-4xl mx-auto">

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Discover. Write. Inspire.
          </h1>

          <p className="text-lg md:text-xl text-white/90">
            BlogHive is your creative space to share ideas and explore knowledge.
          </p>

          <div className="mt-10 flex justify-center gap-6 flex-wrap">

            <Link to="/blogs">
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition duration-300">
                Explore Blogs
              </button>
            </Link>

            <Link to="/getstart">
              <button className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition duration-300">
                Start Writing
              </button>
            </Link>

          </div>

          {/* SEARCH BAR */}
          <div className="mt-10 max-w-xl mx-auto relative">

            <input
              type="text"
              placeholder="Search blogs in BlogHive..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-white text-black border border-gray-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            {/* SEARCH RESULTS */}
            {search && (
              <div className="absolute w-full bg-white text-black mt-2 rounded-lg shadow-lg max-h-60 overflow-y-auto">

                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog, index) => (
                    <div
                      key={index}
                      className="p-3 border-b hover:bg-gray-100 cursor-pointer"
                    >
                      <h3 className="font-semibold">{blog.title}</h3>
                      <p className="text-sm text-gray-600">
                        {blog.description}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="p-3 text-gray-500 text-center">
                    No blogs found
                  </p>
                )}

              </div>
            )}

          </div>

        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-800 mb-16">
          Why Choose BlogHive?
        </h2>

        <div className="grid md:grid-cols-3 gap-10">

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">
              Modern Tech Stack
            </h3>
            <p className="text-slate-600 text-sm">
              Built using MERN Stack and Tailwind CSS for blazing fast performance.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">
              Elegant Design
            </h3>
            <p className="text-slate-600 text-sm">
              Clean, responsive and user-friendly interface for creators.
            </p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="text-xl font-semibold mb-3 text-indigo-700">
              Global Reach
            </h3>
            <p className="text-slate-600 text-sm">
              Share your stories with the world and connect with developers.
            </p>
          </div>

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="py-20 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">

        <h2 className="text-4xl font-bold mb-6">
          Ready to Share Your Ideas?
        </h2>

        <p className="mb-8 text-white/90">
          Join BlogHive today and become part of a blogging community.
        </p>

        <Link to="/getstart">
          <button className="bg-white text-indigo-600 px-10 py-4 rounded-full font-semibold shadow-lg hover:scale-110 transition duration-300">
            Get Started Now
          </button>
        </Link>

      </section>

    </div>
  );
};

export default Home;