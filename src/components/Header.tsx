import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white flex justify-around items-center px-16 p-4 sticky top-0 z-50">
      <Link to="/">
        <StaticImage
          src={"../images/logo.png"}
          alt={"logo"}
          width={150}
          className="transform hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link to="/" className="relative py-2 group">
              <span className="text-white hover:text-red-500 transition-colors duration-300">
                Inicio
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/services" className="relative py-2 group">
              <span className="text-white hover:text-red-500 transition-colors duration-300">
                Servicios
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="relative py-2 group">
              <span className="text-white hover:text-red-500 transition-colors duration-300">
                Tarifas
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="relative py-2 group">
              <span className="text-white hover:text-red-500 transition-colors duration-300">
                Sobre mí
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
          <li>
            <Link to="/contact" className="relative py-2 group">
              <span className="text-white hover:text-red-500 transition-colors duration-300">
                Contacto
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
