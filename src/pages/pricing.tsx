import { PageProps, HeadFC } from "gatsby";
import Layout from "../components/Layout";
import React from "react";
import { Link } from "gatsby";

const PricingPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Main pricing section with dark background */}
      <div className="bg-black py-8 sm:py-12 px-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl mb-12 sm:mb-16">
            <span className="text-white">Tarifas para </span>
            <span className="text-red-700">nuevos clientes</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Card 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800">
              <div className="bg-red-800 text-white p-4 sm:p-6 text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl">
                  Entrenamiento
                  <br />
                  PLANNING
                </h2>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 text-white">25€</div>
                <div className="text-gray-400 text-sm sm:text-base">por sesión</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800">
              <div className="bg-red-800 text-white p-4 sm:p-6 text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl">
                  Entrenamiento
                  <br />a domicilio
                </h2>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 text-white">30€</div>
                <div className="text-gray-400 text-sm sm:text-base">por sesión</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800">
              <div className="bg-red-800 text-white p-4 sm:p-6 text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl">
                  Entrenamiento
                  <br />
                  online
                </h2>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 text-white">30€</div>
                <div className="text-gray-400 text-sm sm:text-base">por sesión</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800">
              <div className="bg-red-800 text-white p-4 sm:p-6 text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl">
                  Entrenamiento
                  <br />
                  en pareja
                </h2>
              </div>
              <div className="p-6 sm:p-8 text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 text-white">25€</div>
                <div className="text-gray-400 text-sm sm:text-base">por persona</div>
              </div>
            </div>
          </div>

          <p className="text-center text-red-700 italic mt-12 sm:mt-16 text-sm sm:text-base">
            *Consultar tarifas para entrenamientos fuera de Madrid.
          </p>
        </div>
      </div>

      {/* Bonos section */}
      <div className="bg-gray-900 py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl mb-8 sm:mb-12">
            <span className="text-white">Bonos de </span>
            <span className="text-red-700">sesiones</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {/* Bono 1 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-black border border-gray-800">
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-white">
                  10 sesiones
                </h3>
                <div className="h-px w-16 sm:w-20 bg-red-700 mx-auto mb-4 sm:mb-5"></div>
                <div className="mb-4 sm:mb-5">
                  <div className="text-red-700 text-2xl sm:text-3xl font-bold mb-2">
                    280€
                  </div>
                  <div className="text-gray-400 text-base sm:text-lg">
                    A consumir en un mes
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-block mt-3 sm:mt-4 border-2 border-red-700 text-red-700 px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-red-700 hover:text-white transition-colors w-full sm:w-auto"
                >
                  ¡Lo quiero!
                </Link>
              </div>
            </div>

            {/* Bono 2 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-black border border-gray-800">
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-white">
                  15 sesiones
                </h3>
                <div className="h-px w-16 sm:w-20 bg-red-700 mx-auto mb-4 sm:mb-5"></div>
                <div className="mb-4 sm:mb-5">
                  <div className="text-red-700 text-2xl sm:text-3xl font-bold mb-2">
                    400€
                  </div>
                  <div className="text-gray-400 text-base sm:text-lg">
                    A consumir en 45 días
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-block mt-3 sm:mt-4 border-2 border-red-700 text-red-700 px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-red-700 hover:text-white transition-colors w-full sm:w-auto"
                >
                  ¡Lo quiero!
                </Link>
              </div>
            </div>

            {/* Bono 3 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-black border border-gray-800">
              <div className="p-6 sm:p-8 text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-white">
                  20 sesiones
                </h3>
                <div className="h-px w-16 sm:w-20 bg-red-700 mx-auto mb-4 sm:mb-5"></div>
                <div className="mb-4 sm:mb-5">
                  <div className="text-red-700 text-2xl sm:text-3xl font-bold mb-2">
                    500€
                  </div>
                  <div className="text-gray-400 text-base sm:text-lg">
                    A consumir en dos meses
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-block mt-3 sm:mt-4 border-2 border-red-700 text-red-700 px-6 sm:px-8 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-red-700 hover:text-white transition-colors w-full sm:w-auto"
                >
                  ¡Lo quiero!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Duration section */}
      <div className="bg-red-800 py-8 sm:py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl">
            <span className="text-black">Todas las sesiones tienen una </span>
            <span className="text-white">duración de 1 hora</span>
          </h2>
        </div>
      </div>

      {/* WhatsApp floating button */}
      <div className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 z-50">
        <a
          href="https://wa.me/34660103210"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-green-500 hover:bg-green-600 p-3 sm:p-4 rounded-full transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 sm:h-10 sm:w-10 text-white"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
            </svg>
          </div>
        </a>
      </div>
    </Layout>
  );
};

export default PricingPage;

export const Head: HeadFC = () => (
  <title>Tarifas - David Entrenador Personal</title>
);
