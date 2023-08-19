import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-5">
      <div className="container mx-auto flex flex-wrap justify-between">
        {/* First Row */}
        <div className="w-full sm:w-1/2 md:w-1/5 mb-4 sm:mb-0">
          {/* Logo and Address */}
          <div className="text-center sm:text-left">
            <img src="logo.png" alt="Logo" className="w-16 h-16 mx-auto mb-4" />
            <p>123 Main Street<br />City, State, Zip</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 mb-4 sm:mb-0">
          {/* Services */}
          <p className="font-bold">Services</p>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
            <li>Service 4</li>
            <li>Service 5</li>
          </ul>
        </div>
        {/* Empty Column */}
        <div className="hidden md:block md:w-1/5"></div>

        {/* Second Row */}
        <div className="w-full sm:w-1/2 md:w-1/5 mb-4 sm:mb-0">
          {/* Support */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold">Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/5 mb-4 sm:mb-0">
          {/* Subscription Form */}
          <div className="text-center sm:text-right">
            <input type="email" placeholder="Enter your email" className="w-full p-2 mb-2" />
            <button className="bg-orange-500 text-white px-4 py-2">Subscribe</button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/5"></div>

        {/* Third Row - Social Media Icons */}
        <div className="w-full md:w-1/5 text-center md:text-right">
          <div className="mb-4 md:mb-0">
            {/* Copyright */}
            <p>&copy; 2023 Your Company</p>
          </div>
          <div>
            {/* Social Media Icons */}
            <a href="#" className="text-white mr-4">Facebook</a>
            <a href="#" className="text-white mr-4">Twitter</a>
            <a href="#" className="text-white mr-4">LinkedIn</a>
            <a href="#" className="text-white">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
