import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 md:py-8 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Section 1: About the Club */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">
            Colchester Cavaliers Cricket Club
          </h2>
          <p className="text-sm">
            Welcome to the official website of Colchester Cavaliers Cricket
            Club. We are dedicated to promoting cricket and fostering a sense of
            community.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/fixtures" className="hover:text-blue-400">
                Fixtures
              </Link>
            </li>
            <li>
              <Link to="/players" className="hover:text-blue-400">
                Players
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Section 3: Contact Information */}
        <div className="text-center md:text-right">
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p className="text-sm">Colchester, Essex, UK</p>
          <p className="text-sm">Email: info@colchestercavalierscc.com</p>
          <p className="text-sm">Phone: +44 123 456 789</p>
        </div>
      </div>

      {/* Developer Info */}
      <div className="text-center mt-6 md:mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Colchester Cavaliers Cricket Club.
          All rights reserved.
        </p>
        <p className="text-sm mt-1">
          Developed by{" "}
          <span className="font-semibold text-blue-400">Shashank Goud</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
