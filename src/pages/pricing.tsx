import { PageProps, HeadFC } from "gatsby";
import Layout from "../components/Layout";
import React from "react";
import { Link } from "gatsby";

const PricingPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Main pricing section with dark background */}
      <div className="bg-black py-12 px-4 text-white">
        <div className="container mx-auto">
          <h1 className="text-center text-4xl mb-16">
            <span className="text-white">Tarifas para </span>
            <span className="text-red-700">nuevos clientes</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800">
              <div className="bg-red-800 text-white p-6 text-center">
                <h2 className="text-2xl">
                  Entrenamiento
                  <br />
                  PLANNING
                </h2>
              </div>
              <div className="p-8 text-center">
                <div className="text-6xl font-bold mb-4 text-white">25€</div>
                <div className="text-gray-400">por sesión</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800">
              <div className="bg-red-800 text-white p-6 text-center">
                <h2 className="text-2xl">
                  Entrenamiento
                  <br />a domicilio
                </h2>
              </div>
              <div className="p-8 text-center">
                <div className="text-6xl font-bold mb-4 text-white">30€</div>
                <div className="text-gray-400">por sesión</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800">
              <div className="bg-red-800 text-white p-6 text-center">
                <h2 className="text-2xl">
                  Entrenamiento
                  <br />
                  online
                </h2>
              </div>
              <div className="p-8 text-center">
                <div className="text-6xl font-bold mb-4 text-white">30€</div>
                <div className="text-gray-400">por sesión</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-lg overflow-hidden shadow-lg bg-gray-900 border border-gray-800">
              <div className="bg-red-800 text-white p-6 text-center">
                <h2 className="text-2xl">
                  Entrenamiento
                  <br />
                  en pareja
                </h2>
              </div>
              <div className="p-8 text-center">
                <div className="text-6xl font-bold mb-4 text-white">25€</div>
                <div className="text-gray-400">por persona</div>
              </div>
            </div>
          </div>

          <p className="text-center text-red-700 italic mt-16">
            *Consultar tarifas para entrenamientos fuera de Madrid.
          </p>
        </div>
      </div>

      {/* Bonos section */}
      <div className="bg-gray-900 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-center text-4xl mb-12">
            <span className="text-white">Bonos de </span>
            <span className="text-red-700">sesiones</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Bono 1 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-black border border-gray-800">
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-5 text-white">
                  10 sesiones
                </h3>
                <div className="h-px w-20 bg-red-700 mx-auto mb-5"></div>
                <div className="mb-5">
                  <div className="text-red-700 text-3xl font-bold mb-2">
                    280€
                  </div>
                  <div className="text-gray-400 text-lg">
                    A consumir en un mes
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-block mt-4 border-2 border-red-700 text-red-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 hover:text-white transition-colors"
                >
                  ¡Lo quiero!
                </Link>
              </div>
            </div>

            {/* Bono 2 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-black border border-gray-800">
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-5 text-white">
                  15 sesiones
                </h3>
                <div className="h-px w-20 bg-red-700 mx-auto mb-5"></div>
                <div className="mb-5">
                  <div className="text-red-700 text-3xl font-bold mb-2">
                    400€
                  </div>
                  <div className="text-gray-400 text-lg">
                    A consumir en 45 días
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-block mt-4 border-2 border-red-700 text-red-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 hover:text-white transition-colors"
                >
                  ¡Lo quiero!
                </Link>
              </div>
            </div>

            {/* Bono 3 */}
            <div className="rounded-lg overflow-hidden shadow-md bg-black border border-gray-800">
              <div className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-5 text-white">
                  20 sesiones
                </h3>
                <div className="h-px w-20 bg-red-700 mx-auto mb-5"></div>
                <div className="mb-5">
                  <div className="text-red-700 text-3xl font-bold mb-2">
                    500€
                  </div>
                  <div className="text-gray-400 text-lg">
                    A consumir en dos meses
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="inline-block mt-4 border-2 border-red-700 text-red-700 px-8 py-3 rounded-md text-lg font-medium hover:bg-red-700 hover:text-white transition-colors"
                >
                  ¡Lo quiero!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Duration section */}
      <div className="bg-red-800 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl">
            <span className="text-black">Todas las sesiones tienen una </span>
            <span className="text-white">duración de 1 hora</span>
          </h2>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;

export const Head: HeadFC = () => (
  <title>Tarifas - David Entrenador Personal</title>
);
