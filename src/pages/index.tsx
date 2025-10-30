import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import React, { useState, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import TestimonialsSection from "../components/TestimonialsSection";

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
        <div className="relative z-20 container mx-auto px-4 sm:px-8 md:px-16 flex flex-col items-center justify-center -mt-24 sm:-mt-48">
          <div className="text-center sm:text-right w-full md:w-2/3 sm:ml-auto">
            <h2
              className={`text-4xl sm:text-6xl md:text-8xl font-bold mb-2 sm:mb-4 transform transition-all duration-700 ${
                visibleItems.item1
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
              style={{
                textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000'
              }}
            >
              FUERZA.
            </h2>
            <h2
              className={`text-4xl sm:text-6xl md:text-8xl font-bold mb-2 sm:mb-4 transform transition-all duration-700 ${
                visibleItems.item2
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
              style={{
                textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000'
              }}
            >
              SALUD.
            </h2>
            <h2
              className={`text-4xl sm:text-6xl md:text-8xl font-bold mb-2 sm:mb-4 transform transition-all duration-700 ${
                visibleItems.item3
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
              style={{
                textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000'
              }}
            >
              CONSTANCIA.
            </h2>
            <h2
              className={`text-4xl sm:text-6xl md:text-8xl font-light mb-8 sm:mb-12 transform transition-all duration-700 ${
                visibleItems.item4
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }`}
              style={{
                textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000'
              }}
            >
              EMPIEZA YA.
            </h2>

            <div className="flex flex-col sm:flex-row justify-center sm:justify-end gap-4 items-center sm:items-end">
              <Link to="/services">
                <button
                  className={`bg-transparent border-2 border-white text-white text-lg sm:text-2xl px-6 sm:px-10 py-3 sm:py-4 rounded hover:bg-white hover:text-red-700 transition-all transform hover:scale-105 duration-200 w-full sm:w-auto ${
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
                  className={`bg-red-700 text-white text-lg sm:text-2xl px-6 sm:px-10 py-3 sm:py-4 rounded hover:bg-red-800 transition-colors transform hover:scale-105 duration-200 w-full sm:w-auto ${
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
            <span className="text-white text-xs sm:text-sm mb-2 font-bold text-shadow">
              Descubre más
            </span>
            <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-white rounded-full flex justify-center bg-black bg-opacity-50">
              <div className="w-1.5 sm:w-2 h-2 sm:h-3 bg-red-600 rounded-full mt-1.5 sm:mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <div className="relative h-12 sm:h-16 bg-gradient-to-r from-red-700 to-red-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 sm:w-32 h-24 sm:h-32 bg-black rotate-45 transform origin-center"></div>
        </div>
        <div className="relative z-10 text-white font-bold tracking-widest text-sm sm:text-base">
          DAVID ENTRENADOR
        </div>
      </div>

      {/* Updated Hero Section */}
      <section className={"bg-black text-white"}>
        <div
          className={"container mx-auto flex flex-col lg:flex-row items-center justify-between p-4 sm:p-8 lg:p-12 gap-8"}
        >
          <div className={"max-w-2xl order-2 lg:order-1"}>
            <h1 className={"text-3xl sm:text-4xl lg:text-6xl font-bold mb-2"}>
              Entrenador personal a domicilio
            </h1>
            <h2 className={"text-lg sm:text-xl lg:text-2xl mb-4"}>
              Empieza a{" "}
              <span className={"text-red-700"}>transformar tu vida</span>
            </h2>
            <p className={"text-base sm:text-lg lg:text-xl mb-6 sm:mb-8"}>
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
                "bg-red-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded text-base sm:text-lg font-semibold hover:bg-red-800 transition-colors w-full sm:w-auto"
              }
            >
              Conoce la razón de mi éxito entrenando
            </button>
          </div>
          <div className={"relative order-1 lg:order-2 w-full lg:w-auto flex justify-center"}>
            <div className={"relative max-w-sm sm:max-w-md lg:max-w-lg"}>
              <StaticImage
                src={"../images/david.png"}
                alt={"David Entrenador Personal"}
                className={"rounded-lg w-full"}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials/Reviews Section */}
      <TestimonialsSection />

      {/* Features section with dark background */}
      <section className="bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mb-12 sm:mb-16 lg:mb-20 text-white">
            Entrenador personal en A Coruña
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-700 mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 sm:h-16 sm:w-16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                20 años de experiencia
              </h3>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-700 mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 sm:h-16 sm:w-16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2zm12-1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h12z" />
                  <path d="M2 6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6zm12-1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h12z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                Servicio a domicilio y online
              </h3>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-700 mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 sm:h-16 sm:w-16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                Enfoque personalizado
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Planning section with red background */}
      <section className="bg-red-800 text-white py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Planning personalizado -{" "}
            <span className="text-black">Entrena donde y cuando quieras</span>
          </h2>

          <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-white">
            Si necesitas un método flexible para ejercitarte a tu propio ritmo y
            desde cualquier lugar, el servicio Planning es ideal para ti.
          </p>

          <p className="text-base sm:text-lg text-white">
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

      {/* Beneficios del Planning section with dark background */}
      <section className="bg-black py-12 sm:py-16 px-4 sm:px-8">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 text-white">
            Beneficios del <span className="text-red-700">Planning</span>:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-700 mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 sm:h-16 sm:w-16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                Entrena cuándo y dónde quieras
              </h3>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-700 mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 sm:h-16 sm:w-16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                Plan adaptado a tus objetivos y nivel
              </h3>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-700 mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 sm:h-16 sm:w-16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                Seguimiento online para mejorar tu rendimiento
              </h3>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="text-red-700 mb-4 sm:mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 sm:h-16 sm:w-16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
                  <path d="M4.893 12.607a.5.5 0 1 1-.786-.614l.33-.422A.5.5 0 0 1 5 11.5h6a.5.5 0 0 1 .437.25l.33.422a.5.5 0 1 1-.786.614L10.67 12H5.33l-.437.607z"/>
                  <path d="M4 4a4 4 0 1 1 4.5 3.969V8.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 4zm2.5-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
                </svg>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                Más económico que una clase presencial
              </h3>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/contact">
              <button className="bg-red-700 text-white text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded hover:bg-red-800 transition-colors transform hover:scale-105 duration-200 font-semibold w-full sm:w-auto">
                ¡Empieza hoy con tu Planning personalizado!
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Training Services Section with Dumbbell Background */}
      <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
        {/* Diagonal Red Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-red-700 transform -skew-x-12 origin-top-left w-full sm:w-5/6 -ml-10 sm:-ml-20"></div>
        </div>

        {/* Background Weight Image */}
        <div className="absolute right-0 top-0 w-1/3 sm:w-2/5 h-full z-10 opacity-50 sm:opacity-100">
          <StaticImage
            src="../images/dumbell.png"
            alt="Weight Plate"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-8 md:px-16 flex items-center min-h-screen">
          <div className="w-full md:w-3/5 lg:w-2/5 pr-4 sm:pr-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Servicios de
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-black leading-tight">
              entrenamiento
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              para
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 text-black">
              gimnasios en A Coruña
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 sm:mb-8 text-white">
              Entrenamientos adaptados a tus necesidades
            </h3>

            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-white leading-relaxed">
              Ofrezco servicios diseñados para ayudarte a alcanzar tus metas de 
              salud y fitness. Ya sea que prefieras entrenar en la comodidad de tu 
              hogar, en un gimnasio, al aire libre o de manera online, 
              <span className="text-black font-bold"> adapto cada sesión a tus necesidades específicas</span>.
            </p>

            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white leading-relaxed">
              Con un enfoque personalizado, proporciono todo el material 
              necesario y ofrezco <span className="text-black font-bold">asesoramiento nutricional</span> para que logres 
              resultados óptimos.
            </p>

            <Link to="/services">
              <button className="bg-black text-white text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-gray-800 transition-colors transform hover:scale-105 duration-200 font-semibold w-full sm:w-auto">
                Así es cómo trabajo
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact/Pricing Section with Reverse Diagonal Layout */}
      <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
        {/* Background Dumbbells Image */}
        <div className="absolute left-0 top-0 w-1/3 sm:w-2/5 h-full z-10 opacity-50 sm:opacity-100">
          <StaticImage
            src="../images/dumbells.png"
            alt="Dumbbells"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Diagonal Red Background - Reversed */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-red-700 transform skew-x-12 origin-top-right w-full sm:w-5/6 -mr-10 sm:-mr-20 right-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-20 container mx-auto px-4 sm:px-8 md:px-16 flex items-center justify-center sm:justify-end min-h-screen">
          <div className="w-full md:w-3/5 lg:w-2/5 pl-4 sm:pl-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              Solicita
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              precios y más
            </h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-6 sm:mb-8 text-black leading-tight">
              información
            </h1>

            <p className="text-base sm:text-lg mb-4 sm:mb-6 text-white leading-relaxed">
              ¿Estás listo para transformar tu vida y alcanzar tus metas de salud y 
              fitness? No esperes más. Estoy aquí para ayudarte en cada paso del 
              camino.
            </p>

            <p className="text-base sm:text-lg mb-6 sm:mb-8 text-white leading-relaxed">
              Si tienes dudas o quieres solicitar más información, 
              <span className="text-black font-bold"> no dudes en ponerte en contacto conmigo</span>. 
              Estaré encantado de poder ofrecerte asesoramiento.
            </p>

            <Link to="/contact">
              <button className="bg-black text-white text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded hover:bg-gray-800 transition-colors transform hover:scale-105 duration-200 font-semibold w-full sm:w-auto">
                Contacta conmigo
              </button>
            </Link>
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

export default IndexPage;
