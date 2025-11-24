import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white">WorldGyaan</h2>
          <p className="mt-3 text-gray-400 text-sm">
            We provide modern solutions with elegant UI and smooth experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +880 1234-567890
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> info@example.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition"><Facebook /></a>
            <a href="#" className="hover:text-white transition"><Instagram /></a>
            <a href="#" className="hover:text-white transition"><Twitter /></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} WorldGyaan — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
