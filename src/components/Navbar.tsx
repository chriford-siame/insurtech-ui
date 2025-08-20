import React, { useState } from "react";
import { useAuth } from "src/hooks/useAuth";
import { Car, Menu, X } from "lucide-react";

function Navbar() {
  const { isAuthenticated, handleLogout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-12 items-center">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center text-white text-2xl font-bold tracking-tight"
          >
            <Car className="w-7 h-7 mr-2 text-orange-300" />
            <span className="text-white">iTech</span>
            <span className="text-purple-300">Quotes</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center sm:items-center md:space-x-6">
            {isAuthenticated ? (
              <>
                <a
                  href="/claims"
                  className="text-white hover:text-orange-200 transition"
                >
                  Claims
                </a>
                <a
                  href="/"
                  className="text-white hover:text-orange-200 transition"
                >
                  Quotations
                </a>
                <a
                  href="/about"
                  className="text-white hover:text-orange-200 transition"
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="text-white hover:text-orange-200 transition"
                >
                  Contact
                </a>
              </>
            ) : null}

            {!isAuthenticated ? (
              <>
                <a
                  href="/login"
                  className="px-3 py-1 rounded-md text-sm font-medium text-white bg-gray-700 hover:bg-gray-800"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="px-3 py-1 rounded-md text-sm font-medium bg-orange-500 text-white hover:bg-orange-600"
                >
                  Sign Up
                </a>
              </>
            ) : (
              <button
                onClick={() => {
                  handleLogout();
                  window.location.href = "/";
                }}
                className="px-3 py-1 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobile}
              className="text-white focus:outline-none"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-3 space-y-2">
          {isAuthenticated ? (
            <>
              <a href="/claims" className="block text-white hover:text-orange-200">
                Claims
              </a>
              <a href="/quotations" className="block text-white hover:text-orange-200">
                Quotations
              </a>
              <a href="/about" className="block text-white hover:text-orange-200">
                About Us
              </a>
              <a href="/contact" className="block text-white hover:text-orange-200">
                Contact
              </a>
            </>
          ) : (
            <>
              <a href="/login" className="block text-white hover:text-orange-200">
                Login
              </a>
              <a
                href="/register"
                className="block text-white bg-orange-500 px-2 py-1 rounded-md"
              >
                Sign Up
              </a>
            </>
          )}

          {isAuthenticated && (
            <button
              onClick={() => {
                handleLogout();
                window.location.href = "/";
              }}
              className="w-full text-left text-white bg-red-500 px-2 py-1 rounded-md"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
