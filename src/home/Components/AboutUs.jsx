import React from "react";

const AboutUs = () => {
  return (
    <section className="my-10 py-10 px-6 md:px-20 lg:px-40 bg-white" id="about-us">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4 md:px-6">
        {/* Left Section - Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1470075801209-17f9ec0cada6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q29tcGFueXxlbnwwfDF8MHx8fDI%3D"
            alt="Company Image"
            className="w-full md:h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Right Section - Company Info */}
        <div className="md:w-1/2 w-full text-left flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            We are a leading company established in 2010, dedicated to providing top-notch services in our industry.
            With a team of experts, we strive to deliver the best experiences to our customers worldwide.
          </p>
          <p className="text-gray-700 mb-4 text-sm md:text-base">
            Our mission is to innovate and set new standards in the market, ensuring customer satisfaction at every step.
          </p>
          <p className="text-gray-700 text-sm md:text-base">
            Join us on our journey to excellence and be part of our success story.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;