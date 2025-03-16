import React, { useState, useEffect, forwardRef } from "react";

const ServicesSlider = () => {
  // sample data
  const services = [
    {
      id: 1,
      title: "Affordable Hotels",
      description:
        "We partner with the best hotels to provide comfortable accommodations at competitive prices, ensuring quality stays without breaking your budget.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Food & Drinks",
      description:
        "Experience local cuisine with our curated dining options, from street food tours to fine dining experiences, all included in your package.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          ></path>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Safety Guide",
      description:
        "Your safety is our priority. Our experienced guides provide detailed safety briefings and are trained in first aid and emergency procedures for every destination.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          ></path>
        </svg>
      ),
    },
    {
      id: 4,
      title: "Private Transportation",
      description:
        "Enjoy hassle-free travel with our private transportation services available 24/7, from airport transfers to daily excursions with professional drivers.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          ></path>
        </svg>
      ),
    },
    {
      id: 5,
      title: "Personalized Itineraries",
      description:
        "We create custom travel itineraries based on your interests, whether you're seeking adventure, relaxation, cultural experiences, or a mix of everything.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
      ),
    },
    {
      id: 6,
      title: "24/7 Customer Support",
      description:
        "Our dedicated support team is available around the clock to assist with any questions or concerns during your travels, providing peace of mind wherever you go.",
      icon: (
        <svg
          className="w-12 h-12 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          ></path>
        </svg>
      ),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [servicesPerSlide, setServicesPerSlide] = useState(3);

  useEffect(() => {
    const updateServicesPerSlide = () => {
      if (window.innerWidth < 768) {
        setServicesPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setServicesPerSlide(2);
      } else {
        setServicesPerSlide(3);
      }
    };

    updateServicesPerSlide();
    window.addEventListener("resize", updateServicesPerSlide);
    return () => window.removeEventListener("resize", updateServicesPerSlide);
  }, []);

  useEffect(() => {
    setCurrentSlide(0);
  }, [servicesPerSlide]);

  const totalSlides = Math.ceil(services.length / servicesPerSlide);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentServices = () => {
    const startIndex = currentSlide * servicesPerSlide;
    return services.slice(startIndex, startIndex + servicesPerSlide);
  };

  const getSlideIndicator = () => {
    return `${currentSlide + 1}/${totalSlides}`;
  };

  const gridColsClass =
    servicesPerSlide === 1
      ? "grid-cols-1"
      : servicesPerSlide === 2
      ? "grid-cols-2"
      : "grid-cols-3";

  return (
    <section className="services-section py-16 px-6 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of travel services to make your
            journey comfortable, enjoyable, and memorable from start to finish.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Left arrow button */}
          <button
            onClick={handlePrevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
            aria-label="Previous services"
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          {/* Services container with transition effect */}
          <div className="bg-blue-50 rounded-xl p-8 overflow-hidden">
            <div
              className={`grid ${gridColsClass} gap-6 transition-all duration-500 ease-in-out`}
            >
              {getCurrentServices().map((service) => (
                <div key={service.id} className="flex items-start">
                  <div className="flex-shrink-0 mr-4">{service.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right arrow button */}
          <button
            onClick={handleNextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
            aria-label="Next services"
          >
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          {/* Slide indicator */}
          <div className="text-center mt-4 text-gray-500 text-sm">
            {getSlideIndicator()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;
