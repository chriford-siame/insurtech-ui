import React from "react";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">iTech Quotes</h3>
          <p className="text-gray-200">
            Fast, reliable motor insurance quotes at your fingertips. 
            Secure and transparent coverage for your vehicle.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-orange-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/quotations" className="hover:text-orange-400 transition">
                Get a Quote
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="/faq" className="hover:text-orange-400 transition">
                FAQ
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-orange-400 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-orange-400 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-200 flex items-center gap-2">
            <Mail className="w-4 h-4" /> support@itechquotes.com
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-orange-400 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-orange-400 transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-white pt-6 text-center text-gray-300 text-sm">
        &copy; {new Date().getFullYear()} iTech Quotes. All rights reserved.
      </div>
    </footer>
  );
}
