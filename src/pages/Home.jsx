const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      <section className="bg-indigo-600 text-white py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to BlogHive 🐝
        </h1>
        <p className="text-lg">
          Discover and share amazing blogs.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          Latest Blogs
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Learn MERN Stack
            </h3>
            <p className="text-gray-600 text-sm">
              Complete guide for beginners.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Tailwind CSS Tips
            </h3>
            <p className="text-gray-600 text-sm">
              Build modern UI easily.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">
              Backend Best Practices
            </h3>
            <p className="text-gray-600 text-sm">
              Structure your APIs properly.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;