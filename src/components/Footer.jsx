const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            BlogHive
          </h2>
          <p className="text-sm">
            A modern blogging platform built using MERN stack.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Signup</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-3">
            Contact
          </h2>
          <p className="text-sm">support@bloghive.com</p>
        </div>

      </div>

      <div className="text-center py-4 border-t border-gray-700 text-sm">
        © 2026 BlogHive. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;