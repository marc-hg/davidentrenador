import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Hero Banner Section */}
      <div className="relative h-[500px] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <StaticImage
            src="../images/servicios.png"
            alt="Servicios"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-5xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Servicios de entrenamiento en Madrid
            </h1>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-black text-white py-16 px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mis servicios de{" "}
            <span className="text-red-700">entrenamiento personal</span> a
            domicilio
          </h2>

          <p className="text-xl mb-8">
            Ofrezco entrenamientos adaptados a tus necesidades según tu forma
            física, tiempo disponible, material y objetivos.
          </p>

          <p className="text-lg mb-10">
            Siempre basado en la evolución del alumno,{" "}
            <span className="font-semibold">
              pautando objetivos a corto plazo
            </span>{" "}
            que se irán ampliando a medida que se cumplan, manteniendo un
            feedback constante.
          </p>

          <div className="mt-8">
            <a
              href="https://wa.me/34660103210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded text-xl font-semibold transition duration-300 inline-block"
            >
              Consulta disponibilidad
            </a>
          </div>
        </div>
      </section>

      {/* Service Types Grid */}
      <section className="bg-gradient-to-b from-black to-red-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-10">
            {/* Service 1: Planning */}
            <div className="bg-red-900/50 p-8 rounded-lg hover:bg-red-800/60 transition-all h-full">
              <div className="flex justify-center mb-6">
                <div className="bg-black p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
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
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">Planning</h3>
              <p className="text-gray-200 text-base">
                Recibe un plan de ejercicios personalizado para entrenar a tu
                ritmo y desde cualquier lugar.
              </p>
              <p className="mt-4 text-gray-200 text-base">
                Además, haremos seguimiento online para ajustar tu progreso.
              </p>
            </div>

            {/* Service 2: In-home/Gym Training */}
            <div className="bg-red-900/50 p-8 rounded-lg hover:bg-red-800/60 transition-all h-full">
              <div className="flex justify-center mb-6">
                <div className="bg-black p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Entrenamiento en tu casa o gimnasio
              </h3>
              <p className="text-gray-200 text-base">
                Me desplazo a donde tú necesites: tu casa, el gimnasio, la
                calle, o cualquier otro lugar que prefieras.
              </p>
              <p className="mt-4 text-gray-200 italic text-base">
                *Fuera de Madrid consultar tarifas
              </p>
            </div>

            {/* Service 3: Online Training */}
            <div className="bg-red-900/50 p-8 rounded-lg hover:bg-red-800/60 transition-all h-full">
              <div className="flex justify-center mb-6">
                <div className="bg-black p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Entrenamiento online
              </h3>
              <p className="text-gray-200 text-base">
                Si prefieres entrenar desde la comodidad de tu hogar y en
                cualquier lugar del mundo, también ofrezco sesiones online.
              </p>
            </div>

            {/* Service 4: Nutritional Advisor */}
            <div className="bg-red-900/50 p-8 rounded-lg hover:bg-red-800/60 transition-all h-full">
              <div className="flex justify-center mb-6">
                <div className="bg-black p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Asesor nutricional
              </h3>
              <p className="text-gray-200 text-base">
                Un buen entrenamiento debe ir acompañado de una alimentación
                adecuada. Por eso, ofrezco asesoramiento y seguimiento
                nutricional para ayudarte a alcanzar tus objetivos de manera
                integral.
              </p>
            </div>

            {/* Service 5: Football Training */}
            <div className="bg-red-900/50 p-8 rounded-lg hover:bg-red-800/60 transition-all h-full">
              <div className="flex justify-center mb-6">
                <div className="bg-black p-4 rounded-full w-16 h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">
                Entrenamiento de fútbol
              </h3>
              <p className="text-gray-200 text-base">
                Además de entrenador personal, soy entrenador de fútbol con
                titulación UEFA PRO. Ofrezco clases particulares de
                tecnificación para mejorar los conceptos básicos del fútbol.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
