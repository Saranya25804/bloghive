const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About BlogHive 🐝
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          A modern blogging platform built with the MERN stack that allows
          creators to share ideas, stories, and knowledge with the world.
        </p>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">

        {/* Mission Section */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to provide a simple, powerful, and user-friendly
            blogging platform where anyone can express their thoughts freely.
            BlogHive empowers writers, students, and professionals to create
            and publish high-quality content without technical complexity.
          </p>
        </section>

        {/* Vision Section */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Our Vision
          </h2>
          <p className="text-gray-700 leading-relaxed">
            We envision a connected community where knowledge is shared openly.
            BlogHive aims to become a trusted space for learning, creativity,
            and innovation through meaningful blogging experiences.
          </p>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-8">
            Key Features
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">
                ✍ Easy Blog Creation
              </h3>
              <p className="text-gray-600 text-sm">
                Create and edit blogs with a simple and intuitive interface.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">
                🔐 Secure Authentication
              </h3>
              <p className="text-gray-600 text-sm">
                User authentication system ensures safe and protected accounts.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">
                📱 Responsive Design
              </h3>
              <p className="text-gray-600 text-sm">
                Fully responsive layout that works perfectly on all devices.
              </p>
            </div>

          </div>
        </section>

        {/* Technologies Section */}
        <section className="bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">
            Technologies We Use
          </h2>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>MongoDB</strong> – Database management</li>
            <li><strong>Express.js</strong> – Backend framework</li>
            <li><strong>React.js</strong> – Frontend library</li>
            <li><strong>Node.js</strong> – Server-side runtime</li>
            <li><strong>Tailwind CSS</strong> – Modern UI styling</li>
          </ul>
        </section>

        {/* Call To Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start Blogging?
          </h2>
          <p className="text-gray-600 mb-6">
            Join BlogHive today and share your ideas with the world.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition">
            Create Your Account
          </button>
        </section>

      </div>

    </div>
  );
};

export default About;