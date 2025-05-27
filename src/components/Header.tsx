import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black text-white sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <StaticImage
              src={"../images/logo.png"}
              alt={"David Entrenador Logo"}
              width={100}
              className="w-20 sm:w-24 md:w-28 lg:w-32 transform hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 lg:space-x-8">
              <li>
                <Link to="/" className="relative py-2 group">
                  <span className="text-white hover:text-red-500 transition-colors duration-300 text-sm lg:text-base">
                    Inicio
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="relative py-2 group">
                  <span className="text-white hover:text-red-500 transition-colors duration-300 text-sm lg:text-base">
                    Servicios
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="relative py-2 group">
                  <span className="text-white hover:text-red-500 transition-colors duration-300 text-sm lg:text-base">
                    Tarifas
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="relative py-2 group">
                  <span className="text-white hover:text-red-500 transition-colors duration-300 text-sm lg:text-base">
                    Sobre mí
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="relative py-2 group">
                  <span className="text-white hover:text-red-500 transition-colors duration-300 text-sm lg:text-base">
                    Contacto
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="py-4 border-t border-gray-800">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-white hover:text-red-500 hover:bg-gray-900 transition-colors duration-200 rounded-md"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-white hover:text-red-500 hover:bg-gray-900 transition-colors duration-200 rounded-md"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-white hover:text-red-500 hover:bg-gray-900 transition-colors duration-200 rounded-md"
                >
                  Tarifas
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-white hover:text-red-500 hover:bg-gray-900 transition-colors duration-200 rounded-md"
                >
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-white hover:text-red-500 hover:bg-gray-900 transition-colors duration-200 rounded-md"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
