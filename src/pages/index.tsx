import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  const [visibleItems, setVisibleItems] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    button: false,
    scrollIndicator: false,
  });

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    // Sequential animation with delays
    const timer1 = setTimeout(
      () => setVisibleItems((prev) => ({ ...prev, item1: true })),
      300
    );
    const timer2 = setTimeout(
      () => setVisibleItems((prev) => ({ ...prev, item2: true })),
      800
    );
    const timer3 = setTimeout(
      () => setVisibleItems((prev) => ({ ...prev, item3: true })),
      1300
    );
    const timer4 = setTimeout(
      () => setVisibleItems((prev) => ({ ...prev, item4: true })),
      1800
    );
    const timer5 = setTimeout(
      () => setVisibleItems((prev) => ({ ...prev, button: true })),
      2300
    );
    const timer6 = setTimeout(
      () => setVisibleItems((prev) => ({ ...prev, scrollIndicator: true })),
      2800
    );

    // Add scroll listener to hide indicator when scrolled
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup timers and event listeners on component unmount
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      {/* Enhanced CTA Section */}
      <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <StaticImage
            src="../images/portada.jpg"
            alt="Background"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-8 md:px-16 flex flex-col items-center justify-center -mt-48">
          <div className="text-right w-full md:w-2/3 ml-auto">
            <h2
              className={`text-6xl md:text-8xl font-bold mb-4 transform transition-all duration-700 ${
                visibleItems.item1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              FUERZA.
            </h2>
            <h2
              className={`text-6xl md:text-8xl font-bold mb-4 transform transition-all duration-700 ${
                visibleItems.item2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              SALUD.
            </h2>
            <h2
              className={`text-6xl md:text-8xl font-bold mb-4 transform transition-all duration-700 ${
                visibleItems.item3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              CONSTANCIA.
            </h2>
            <h2
              className={`text-6xl md:text-8xl font-light mb-12 transform transition-all duration-700 ${
                visibleItems.item4
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
            >
              EMPIEZA YA.
            </h2>

            <div className="flex justify-end gap-4 flex-col md:flex-row items-end">
              <Link to="/services">
                <button
                  className={`bg-transparent border-2 border-white text-white text-2xl px-10 py-4 rounded hover:bg-white hover:text-red-700 transition-all transform hover:scale-105 duration-200 ${
                    visibleItems.button
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                >
                  SERVICIOS
                </button>
              </Link>
              <Link to="/contact">
                <button
                  className={`bg-red-700 text-white text-2xl px-10 py-4 rounded hover:bg-red-800 transition-colors transform hover:scale-105 duration-200 ${
                    visibleItems.button
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                >
                  CONTACTA HOY
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Updated Scroll indicator */}
        <div
          className={`fixed left-1/2 transform -translate-x-1/2 z-30 transition-all duration-500 ${
            visibleItems.scrollIndicator && showScrollIndicator
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}
          style={{ bottom: "5vh" }}
        >
          <div className="flex flex-col items-center">
            <span className="text-white text-sm mb-2 font-bold text-shadow">
              Descubre más
            </span>
            <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center bg-black bg-opacity-50">
              <div className="w-2 h-3 bg-red-600 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="relative h-16 bg-gradient-to-r from-red-700 to-red-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-black rotate-45 transform origin-center"></div>
        </div>
        <div className="relative z-10 text-white font-bold tracking-widest">
          DAVID ENTRENADOR
        </div>
      </div>

      {/* Updated Hero Section */}
      <section className={"bg-black text-white"}>
        <div
          className={"container mx-auto flex items-center justify-between p-12"}
        >
          <div className={"max-w-2xl"}>
            <h1 className={"text-6xl font-bold mb-2"}>
              Entrenador personal a domicilio
            </h1>
            <h2 className={"text-2xl mb-4"}>
              Empieza a{" "}
              <span className={"text-red-700"}>transformar tu vida</span>
            </h2>
            <p className={"text-xl mb-8"}>
              Con 20 años de experiencia en entrenamiento personal, estoy aquí
              para ayudarte a alcanzar tus{" "}
              <span className={"font-bold"}>metas físicas</span> y de{" "}
              <span className={"font-bold"}>bienestar</span>. Ofrezco
              entrenamientos personalizados adaptados a tus necesidades y
              disponibilidad, ya sea en tu domicilio, en gimnasios, en la calle
              o de manera online.
            </p>
            <button
              className={
                "bg-red-700 text-white px-6 py-3 rounded text-lg font-semibold hover:bg-red-800 transition-colors"
              }
            >
              Conoce la razón de mi éxito entrenando
            </button>
          </div>
          <div className={"relative"}>
            <div className={"relative"}>
              <StaticImage
                src={"../images/david.png"}
                alt={"David Entrenador Personal"}
                className={"rounded-lg"}
                style={{ maxWidth: "450px" }}
              />
              <div
                className={
                  "absolute bottom-0 right-0 bg-black bg-opacity-70 p-4 rounded-lg"
                }
              >
                <StaticImage
                  src={"../images/logo.png"}
                  alt={"Logo David Entrenador"}
                  width={150}
                />
              </div>
            </div>
          </div>
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
      {/* Features section with dark background */}
      <section className="bg-black py-20 px-8">
        <div className="container mx-auto">
          <h2 className="text-5xl text-center font-bold mb-20 text-white">
            Entrenador personal en Madrid
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-700 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                20 años de experiencia
              </h3>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-700 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2zm12-1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12z" />
                  <path d="M2 6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6zm12-1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                Servicio a domicilio y online
              </h3>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-700 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                Enfoque personalizado
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Planning section with red background */}
      <section className="bg-red-800 text-white py-16 px-8">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold mb-8">
            Planning personalizado -{" "}
            <span className="text-black">Entrena donde y cuando quieras</span>
          </h2>

          <p className="text-xl mb-6 text-white">
            Si necesitas un método flexible para ejercitarte a tu propio ritmo y
            desde cualquier lugar, el servicio Planning es ideal para ti.
          </p>

          <p className="text-lg text-white">
            Obtendrás un programa de entrenamiento personalizado,{" "}
            <span className="text-black font-bold">
              diseñado según tus objetivos y nivel
            </span>
            , con rutinas detalladas que podrás seguir durante varios días.
            Además,{" "}
            <span className="text-black font-bold">
              tendrás sesiones de seguimiento online
            </span>{" "}
            para evaluar tu progreso y realizar ajustes que optimicen tus
            resultados.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
