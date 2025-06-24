import React from "react";
import { Outlet } from "react-router-dom";
import { FaHome, FaCompass, FaBox, FaInfoCircle, FaUser, FaSignInAlt, FaTwitter, FaLinkedin, FaInstagram, FaQuestionCircle, FaEnvelope, FaLock } from "react-icons/fa";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Navbar */}
      <nav className="shadow-lg border-b border-gray-700" style={{ backgroundColor: '#393E46' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-xl font-bold text-white flex items-center gap-2">
                <FaHome className="inline-block text-blue-400" />
                Global Board World
              </a>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="flex items-center gap-1 text-gray-300 hover:text-white">
                <FaHome /> Home
              </a>
              <a href="/explore" className="flex items-center gap-1 text-gray-300 hover:text-white">
                <FaCompass /> Explore
              </a>
              <a href="/how-it-works" className="flex items-center gap-1 text-gray-300 hover:text-white">
                <FaInfoCircle /> How It Works
              </a>
            </div>

            {/* Auth Buttons - Improved contrast and icons */}
            <div className="flex items-center space-x-4">
              <button className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition">
                <FaSignInAlt /> Sign In
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition">
                <FaUser /> Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 bg-black">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="text-white border-t border-gray-700" style={{ backgroundColor: '#393E46' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FaHome className="text-blue-400" /> Global Board World
              </h3>
              <p className="text-gray-400">
                Connecting talent with opportunities worldwide.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/explore" className="flex items-center gap-1 hover:text-white"><FaCompass /> Explore</a></li>
                <li><a href="/how-it-works" className="flex items-center gap-1 hover:text-white"><FaInfoCircle /> How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/help" className="flex items-center gap-1 hover:text-white"><FaQuestionCircle /> Help Center</a></li>
                <li><a href="/contact" className="flex items-center gap-1 hover:text-white"><FaEnvelope /> Contact</a></li>
                <li><a href="/privacy" className="flex items-center gap-1 hover:text-white"><FaLock /> Privacy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="flex items-center gap-1 hover:text-white"><FaTwitter /> Twitter</a></li>
                <li><a href="#" className="flex items-center gap-1 hover:text-white"><FaLinkedin /> LinkedIn</a></li>
                <li><a href="#" className="flex items-center gap-1 hover:text-white"><FaInstagram /> Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Global Board World. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 