import React, { useState } from "react";
import testimonialsData from "../testimonials.json";

interface TestimonialsSectionProps {
  title?: string;
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "Recomendaciones de alumnos",
  className = "",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const reviews = testimonialsData.testimonials.reviews;

  // Handle slide change with transition
  const handleSlideChange = (newIndexOrFunction: number | ((prev: number) => number)) => {
    setIsTransitioning(true);
    
    setTimeout(() => {
      if (typeof newIndexOrFunction === 'function') {
        setCurrentIndex(newIndexOrFunction);
      } else {
        setCurrentIndex(newIndexOrFunction);
      }
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  // Get current set of 3 testimonials
  const getCurrentTestimonials = () => {
    const testimonials = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % reviews.length;
      testimonials.push(reviews[index]);
    }
    return testimonials;
  };

  const currentTestimonials = getCurrentTestimonials();

  // Navigation functions
  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? reviews.length - 3 : currentIndex - 3;
    handleSlideChange(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 3) % reviews.length;
    handleSlideChange(newIndex);
  };

  const goToPage = (pageIndex: number) => {
    handleSlideChange(pageIndex * 3);
  };

  return (
    <section className={`py-12 sm:py-16 px-4 sm:px-8 bg-black ${className}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold text-center">
            <span className="text-red-700">Recomendaciones</span> de alumnos
          </h2>
        </div>

        {/* Navigation and Rating Info */}
        <div className="flex items-center justify-center mb-6 sm:mb-8 gap-4 sm:gap-8">
          <button
            onClick={goToPrevious}
            disabled={isTransitioning}
            className="text-white hover:text-red-700 transition-colors disabled:opacity-50"
            aria-label="Previous testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="text-center">
            <div className="flex items-center justify-center mb-1 sm:mb-2">
              <div className="text-yellow-500 flex mr-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 sm:h-6 sm:w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-bold text-base sm:text-lg">
                {testimonialsData.testimonials.total_rating}
              </span>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              {testimonialsData.testimonials.total_reviews} opiniones verificadas
            </p>
          </div>

          <button
            onClick={goToNext}
            disabled={isTransitioning}
            className="text-white hover:text-red-700 transition-colors disabled:opacity-50"
            aria-label="Next testimonials"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 sm:h-8 sm:w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Testimonials Container with Overflow Hidden */}
        <div className="relative overflow-hidden">
          {/* Testimonials Grid with Slide Animation */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 transition-all duration-500 ease-in-out ${
              isTransitioning 
                ? 'transform translate-x-full opacity-0' 
                : 'transform translate-x-0 opacity-100'
            }`}
          >
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${currentIndex}`}
                className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-lg border border-gray-800 transform transition-all duration-300 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Student Info */}
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-700 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3 sm:mr-4">
                    {testimonial.student_name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-sm sm:text-base">
                      {testimonial.student_name}
                    </h4>
                    <div className="text-yellow-500 flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 sm:h-4 sm:w-4"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-300 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                  "{testimonial.review}"
                </p>

                {/* David's Response */}
                {testimonial.david_response && (
                  <div className="border-t border-gray-700 pt-3 sm:pt-4">
                    <div className="flex items-start">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm mr-2 sm:mr-3 mt-1">
                        D
                      </div>
                      <div>
                        <p className="text-red-700 font-semibold text-xs sm:text-sm mb-1">
                          Respuesta de David:
                        </p>
                        <p className="text-gray-400 text-xs sm:text-sm italic">
                          "{testimonial.david_response}"
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
          {Array.from({ length: Math.ceil(reviews.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToPage(index)}
              disabled={isTransitioning}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 disabled:opacity-50 ${
                Math.floor(currentIndex / 3) === index
                  ? "bg-red-700 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonials page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 