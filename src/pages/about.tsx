import React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import TestimonialsSection from "../components/TestimonialsSection";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Hero Banner Section */}
      <div className="relative h-[400px] sm:h-[500px] bg-gray-900">
        <div className="absolute inset-0 overflow-hidden">
          <StaticImage
            src="../images/aboutme.png"
            alt="Equipamiento de gimnasio"
            className="h-full w-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center max-w-5xl px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Conoce a tu entrenador personalizado en A Coruña
            </h1>
          </div>
        </div>
      </div>

      {/* Trainer Profile Section */}
      <section className="bg-black text-white py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 sm:gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="rounded-full overflow-hidden border-4 border-red-700 w-60 h-60 sm:w-80 sm:h-80">
              <StaticImage
                src="../images/david.png"
                alt="David Ramos Fernández"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Entrenador a domicilio y{" "}
              <span className="text-white">online</span> -{" "}
              <span className="text-red-700">David</span> Ramos Fernández
            </h2>

            <p className="text-base sm:text-lg mb-3 sm:mb-4">
              Con dos{" "}
              <span className="font-semibold">
                máster en entrenamiento personal
              </span>{" "}
              y siendo{" "}
              <span className="font-semibold">técnico nacional deportivo</span>,
              llevo más de 17 años entrenando tanto a nivel personal como
              colectivo en gimnasios, domicilios y equipos de fútbol. He
              trabajado con diferentes alumnos, objetivos y patologías, y
              también he preparado pruebas de oposiciones.
            </p>

            <p className="text-base sm:text-lg mb-4 sm:mb-6">
              Además, soy{" "}
              <span className="font-semibold">
                entrenador nacional de fútbol
              </span>{" "}
              con{" "}
              <span className="text-red-700 font-bold">
                titulación UEFA PRO desde 2008
              </span>
              , y he entrenado en diferentes clubes y edades, desde el fútbol
              base hasta el nivel profesional.
            </p>

            <p className="text-base sm:text-lg mb-6 sm:mb-8">
              Mi objetivo es ayudarte a alcanzar tus metas, ofreciéndote un plan
              de entrenamiento integral y adaptado a tus necesidades.
            </p>

            <Link to="/contact">
              <button className="bg-red-700 hover:bg-red-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded text-lg sm:text-xl font-semibold transition duration-300 w-full sm:w-auto">
                Contacta conmigo
              </button>
            </Link>
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
      </section>

      {/* Testimonials/Reviews Section */}
      <TestimonialsSection />
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Us</title>;
