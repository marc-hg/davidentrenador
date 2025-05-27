import React from "react";
import { HeadFC, PageProps } from "gatsby";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      {/* Hero Banner Section */}
      <div className="relative h-[500px] bg-gray-900">
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
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-lg">
              Conoce a tu entrenador personalizado en Madrid
            </h1>
          </div>
        </div>
      </div>

      {/* Trainer Profile Section */}
      <section className="bg-black text-white py-16 px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="rounded-full overflow-hidden border-4 border-red-700 w-80 h-80">
              <StaticImage
                src="../images/david.png"
                alt="David Ramos Fernández"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-5xl font-bold mb-6">
              Entrenador a domicilio y{" "}
              <span className="text-white">online</span> -{" "}
              <span className="text-red-700">David</span> Ramos Fernández
            </h2>

            <p className="text-lg mb-4">
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

            <p className="text-lg mb-6">
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

            <p className="text-lg mb-8">
              Mi objetivo es ayudarte a alcanzar tus metas, ofreciéndote un plan
              de entrenamiento integral y adaptado a tus necesidades.
            </p>

            <Link to="/contact">
              <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded text-xl font-semibold transition duration-300">
                Contacta conmigo
              </button>
            </Link>
          </div>
        </div>

        {/* WhatsApp floating button */}
        <div className="fixed bottom-8 right-8 z-50">
          <a
            href="https://wa.me/34660103210"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-green-500 hover:bg-green-600 p-4 rounded-full transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
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
      <section className="py-16 px-8 bg-black">
        <div className="container mx-auto">
          <h2 className="text-4xl text-white font-bold text-center mb-12">
            <span className="text-red-700">Recomendaciones</span> de alumnos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Como entrenador es un 10 y otro 10 como persona, yo estoy muy
                agradecida por mostrarme la capacidad física que tengo, por
                motivarme en cada clase, superarme cada día más y que si hay
                ganas, todo se puede. Por no hablar de la gran suerte que
                representa poder entrenar sin tener que salir de tu casa y
                volvería a confiarle mi salud física."
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Después de casi un año entrenando con David puedo decir que fue
                de las mejores decisiones que he podido tomar, un entrenador muy
                profesional y al que se le nota que disfruta con su trabajo.
                Muchas gracias!!"
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-800">
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 flex">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                "Una amiga me recomendó a David y estoy muy contenta con él. Los
                entrenamientos son adaptados a mis necesidades y
                características, es puntual, amable y hace todo lo posible para
                encajar sesiones cuando tengo algún imprevisto. Me parece una
                persona muy profesional."
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

export const Head: HeadFC = () => <title>About Us</title>;
