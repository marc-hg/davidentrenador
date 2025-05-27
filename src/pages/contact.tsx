import React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Hero Banner Section */}
      <div className="relative h-[400px] sm:h-[500px] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <StaticImage
            src="../images/contact.png"
            alt="Equipamiento de gimnasio"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-5xl px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Contáctame para comenzar tu entrenamiento personalizado
            </h1>
          </div>
        </div>
      </div>

      {/* Consultation Section */}
      <div className="py-12 sm:py-16 lg:py-20 bg-black text-white">
        <div className="container mx-auto px-4 sm:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-red-500 max-w-6xl mx-auto">
            ¿Cómo pueden ayudarte mis entrenamientos?
          </h2>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6 sm:mb-8 font-light">
              Haz tu consulta, te responderé lo antes posible
            </h3>
            <p className="text-base sm:text-lg text-gray-300">
              Contáctame para programar tu primera sesión o para obtener más
              información sobre mis servicios. Estoy{" "}
              <span className="text-red-500 font-medium">
                disponible en Madrid
              </span>{" "}
              y municipios cercanos, así como para{" "}
              <span className="text-red-500 font-medium">sesiones online</span>.
            </p>
          </div>
        </div>
      </div>

      {/* Red contact section */}
      <div className="bg-red-800 py-12 sm:py-16 text-white">
        <div className="container mx-auto text-center px-4 sm:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-12 sm:mb-16">
            Contacta ya con tu entrenador personal en Madrid
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-4xl mx-auto">
            {/* Phone */}
            <div className="flex flex-col items-center">
              <a
                rel="nofollow"
                href="tel:+34660103210"
                aria-label="Llamar por teléfono"
                className="mb-3 sm:mb-4"
              >
                <div className="bg-black rounded-full p-3 sm:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    className="sm:w-8 sm:h-8"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                    <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                  </svg>
                </div>
              </a>
              <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2">Teléfono</h3>
              <p className="text-lg sm:text-xl">660 10 32 10</p>
            </div>

            {/* WhatsApp */}
            <div className="flex flex-col items-center">
              <a
                rel="nofollow"
                href="https://wa.me/34660103210"
                aria-label="Contactar por WhatsApp"
                className="mb-3 sm:mb-4"
              >
                <div className="bg-black rounded-full p-3 sm:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    className="sm:w-8 sm:h-8"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </div>
              </a>
              <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2">WhatsApp</h3>
              <p className="text-lg sm:text-xl">660 10 32 10</p>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <a
                rel="nofollow"
                href="mailto:ramos_213@hotmail.com"
                aria-label="Enviar email"
                className="mb-3 sm:mb-4"
              >
                <div className="bg-black rounded-full p-3 sm:p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    className="sm:w-8 sm:h-8"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                </div>
              </a>
              <h3 className="text-xl sm:text-2xl mb-1 sm:mb-2">Email</h3>
              <p className="text-lg sm:text-xl break-all">ramos_213@hotmail.com</p>
            </div>
          </div>
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

export default ContactPage;

export const Head: HeadFC = () => (
  <title>Contacto - David Entrenador Personal</title>
);
