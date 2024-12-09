import React from 'react';
import Logo from "../../assets/food/logo.png";  // Import your logo

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-black py-3">
      <div className="container mx-auto px-3">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={Logo} alt="Logo" className="w-32 mb-4" />
            <p className="text-lg text-center md:text-left uppercase">Your best foodie</p>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-4 uppercase">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition duration-300">Home</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Menu</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" className="text-2xl hover:text-white transition duration-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" className="text-2xl hover:text-white transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" className="text-2xl hover:text-white transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-2xl hover:text-white transition duration-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-8 text-sm">
          <p>&copy; 2024 Foodie. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
