import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ServicesPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Hero Banner Section */}
      <div className="relative h-[400px] sm:h-[500px] bg-gray-900">
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Servicios de entrenamiento en A Coruña
            </h1>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Mis servicios de{" "}
            <span className="text-red-700">entrenamiento personal</span> a
            domicilio
          </h2>

          <p className="text-lg sm:text-xl mb-6 sm:mb-8">
            Ofrezco entrenamientos adaptados a tus necesidades según tu forma
            física, tiempo disponible, material y objetivos.
          </p>

          <p className="text-base sm:text-lg mb-8 sm:mb-10">
            Siempre basado en la evolución del alumno,{" "}
            <span className="font-semibold">
              pautando objetivos a corto plazo
            </span>{" "}
            que se irán ampliando a medida que se cumplan, manteniendo un
            feedback constante.
          </p>

          <div className="mt-6 sm:mt-8">
            <a
              href="https://wa.me/34660103210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-700 hover:bg-red-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded text-lg sm:text-xl font-semibold transition duration-300 inline-block w-full sm:w-auto text-center"
            >
              Consulta disponibilidad
            </a>
          </div>
        </div>
      </section>

      {/* Service Types Grid */}
      <section className="bg-gradient-to-b from-black to-red-900 text-white py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
            {/* Service 1: Planning */}
            <div className="bg-red-900/50 p-6 sm:p-8 rounded-lg hover:bg-red-800/60 transition-all h-full">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-black p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white"
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">Planning</h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Recibe un plan de ejercicios personalizado para entrenar a tu
                ritmo y desde cualquier lugar.
              </p>
              <p className="mt-3 sm:mt-4 text-gray-200 text-sm sm:text-base">
                Además, haremos seguimiento online para ajustar tu progreso.
              </p>
            </div>

            {/* Service 2: In-home/Gym Training */}
            <div className="bg-red-900/50 p-6 sm:p-8 rounded-lg hover:bg-red-800/60 transition-all h-full">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-black p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white"
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                Entrenamiento en tu casa o gimnasio
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Me desplazo a donde tú necesites: tu casa, el gimnasio, la
                calle, o cualquier otro lugar que prefieras.
              </p>
              <p className="mt-3 sm:mt-4 text-gray-200 italic text-sm sm:text-base">
                *Fuera de A Coruña consultar tarifas
              </p>
            </div>

            {/* Service 3: Online Training */}
            <div className="bg-red-900/50 p-6 sm:p-8 rounded-lg hover:bg-red-800/60 transition-all h-full">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-black p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white"
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                Entrenamiento online
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Si prefieres entrenar desde la comodidad de tu hogar y en
                cualquier lugar del mundo, también ofrezco sesiones online.
              </p>
            </div>

            {/* Service 4: Nutritional Advisor */}
            <div className="bg-red-900/50 p-6 sm:p-8 rounded-lg hover:bg-red-800/60 transition-all h-full">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-black p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white"
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                Asesor nutricional
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Un buen entrenamiento debe ir acompañado de una alimentación
                adecuada. Por eso, ofrezco asesoramiento y seguimiento
                nutricional para ayudarte a alcanzar tus objetivos de manera
                integral.
              </p>
            </div>

            {/* Service 5: Football Training */}
            <div className="bg-red-900/50 p-6 sm:p-8 rounded-lg hover:bg-red-800/60 transition-all h-full">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="bg-black p-3 sm:p-4 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-white"
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
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-center">
                Entrenamiento de fútbol
              </h3>
              <p className="text-gray-200 text-sm sm:text-base">
                Además de entrenador personal, soy entrenador de fútbol con
                titulación UEFA PRO. Ofrezco clases particulares de
                tecnificación para mejorar los conceptos básicos del fútbol.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Personalizado Section */}
      <section className="bg-red-800 text-white py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Planning personalizado –{" "}
                <span className="text-black">Entrena donde y cuando quieras</span>
              </h2>
              
              <p className="text-lg sm:text-xl leading-relaxed">
                Si buscas{" "}
                <span className="font-semibold text-black">flexibilidad total para entrenar</span>{" "}
                a tu ritmo y desde cualquier lugar, el servicio Planning es para ti.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                Recibirás un plan de entrenamiento personalizado{" "}
                <span className="font-semibold text-black">adaptado a tus objetivos</span>{" "}
                y nivel, con ejercicios detallados para que los sigas durante varios días.
              </p>

              <div className="pt-2 sm:pt-4">
                <a
                  href="https://wa.me/34660103210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black hover:bg-gray-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-lg sm:text-xl font-semibold transition-colors transform hover:scale-105 duration-200 inline-block w-full sm:w-auto text-center"
                >
                  Solicita tu plan personalizado
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative max-w-sm sm:max-w-md w-full">
                <StaticImage
                  src="../images/plan_definitivo.jpg"
                  alt="Plan de entrenamiento personalizado"
                  className="rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-700 w-full"
                  placeholder="blurred"
                />
                {/* Decorative border */}
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-black to-gray-900 rounded-lg -z-10 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default ServicesPage;
