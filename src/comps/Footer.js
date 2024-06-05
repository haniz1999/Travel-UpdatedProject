import React from 'react';

const Footer = () => (
  <footer className="bg-gray-800 text-white">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-4">About Us</h2>
          <p>Discover the best of Israel with curated travel guides, tips, and insights.</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Quick Links</h2>
          <ul>
            <li><a href="/explore" className="hover:text-blue-400">Explore</a></li>
            <li><a href="/restaurants" className="hover:text-blue-400">Restaurants</a></li>
            <li><a href="/where-to-go" className="hover:text-blue-400">Where to Go</a></li>
            <li><a href="/things-to-do" className="hover:text-blue-400">Things to Do</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Contact Us</h2>
          <p>Email: contact@example.com</p>
          <p>Phone: +972 123 4567</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-400">Facebook</a>
            <a href="#" className="hover:text-blue-400">Instagram</a>
            <a href="#" className="hover:text-blue-400">Twitter</a>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-gray-700 text-center py-4">
      <p>&copy; 2024 Travel Israel. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
