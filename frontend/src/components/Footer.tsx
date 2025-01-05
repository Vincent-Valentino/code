import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us Section */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            We provide expertly designed courses to help you achieve your tech
            career goals and empower your learning journey.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/roadmap"
                className="hover:text-white transition duration-200">
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="/pricing"
                className="hover:text-white transition duration-200">
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition duration-200">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-blue-400 transition duration-300">
                <FaTwitter size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-blue-600 transition duration-300">
                <FaFacebook size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-blue-500 transition duration-300">
                <FaLinkedin size={28} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-pink-400 transition duration-300">
                <FaInstagram size={28} />
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Subscribe to our newsletter to stay updated with our latest courses
            and offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-zinc-700 pt-6 text-center text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="font-bold">Your Company</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
