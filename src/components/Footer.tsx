import React from "react";
import { Link } from "gatsby";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-gray-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Logo and Links */}
          <div>
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              David Entrenador
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-red-600"></span>
            </h2>
            <nav className="mt-8">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Sobre mí
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Tarifas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-gray-300 hover:text-red-500 transition-colors duration-300 flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Contacto
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Middle Column - Opening Hours */}
          <div>
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              Horario
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-red-600"></span>
            </h2>
            <ul className="mt-8 space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Lunes - Viernes:</span>
                <span className="text-white">7:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Sábado:</span>
                <span className="text-white">9:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Domingo:</span>
                <span className="text-white">Cerrado</span>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact Info */}
          <div className="">
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              Contacto
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-red-600"></span>
            </h2>
            <div className="mt-8 space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-red-500 font-semibold">660 10 32 10</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-3 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:ramos_213@hotmail.com"
                  className="text-red-500 hover:underline"
                >
                  ramos_213@hotmail.com
                </a>
              </p>
            </div>

            {/* Social Icons */}
            <div className="mt-8 flex space-x-4">
              <a
                rel="nofollow"
                href="tel:+34660103210"
                aria-label="Llamar por teléfono"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
              <a
                rel="nofollow"
                href="https://wa.me/34660103210"
                aria-label="Contactar por WhatsApp"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"></path>
                  <path d="M20.636 3.364C18.364 1.091 15.262 0 12 0 5.489 0 .101 5.39.101 12.001c0 2.115.551 4.175 1.601 5.984l-1.702 6.22 6.369-1.671c1.748.954 3.714 1.455 5.721 1.456h.004c6.507 0 11.899-5.39 11.899-12.001.001-3.207-1.252-6.218-3.36-8.625zm-8.636 18.437h-.004c-1.766-.001-3.492-.476-4.986-1.373l-.358-.213-3.706.972.99-3.621-.234-.372c-.984-1.567-1.513-3.389-1.513-5.192 0-5.442 4.434-9.88 9.884-9.88 2.641 0 5.122 1.03 6.988 2.899 1.866 1.869 2.892 4.347 2.892 6.982-.001 5.442-4.435 9.879-9.953 9.879z"></path>
                </svg>
              </a>
              <a
                rel="nofollow"
                href="mailto:ramos_213@hotmail.com"
                aria-label="Enviar email"
                className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © {year} David Entrenador Personal. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
