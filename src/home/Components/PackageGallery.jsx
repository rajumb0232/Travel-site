import React, { forwardRef } from 'react';

const PackageGallery = forwardRef((props, ref) => {
  // Sample travel packages data
  const packages = [
    {
      id: 1,
      place: "Santorini, Greece",
      image: "Santorini-Greece.webp",
      description: "Explore the iconic white and blue buildings, stunning sunsets, and beautiful beaches of this Mediterranean paradise.",
      price: 1299,
      rating: 4.8
    },
    {
      id: 2,
      place: "Kyoto, Japan",
      image: "Kyoto-Japan.webp",
      description: "Experience ancient temples, traditional tea ceremonies, and the breathtaking beauty of cherry blossoms in spring.",
      price: 1599,
      rating: 4.7
    },
    {
      id: 3,
      place: "Machu Picchu, Peru",
      image: "Machu-Picchu-Peru.webp",
      description: "Trek to the ancient Incan citadel nestled in the Andes Mountains with stunning archaeological sites and mountain views.",
      price: 1899,
      rating: 4.9
    },
    {
      id: 4,
      place: "Bali, Indonesia",
      image: "Bali-Indonesia.webp",
      description: "Discover lush rice terraces, sacred temples, vibrant culture, and pristine beaches in this tropical paradise.",
      price: 1199,
      rating: 4.6
    },
    {
      id: 5,
      place: "Amalfi Coast, Italy",
      image: "Amalfi-Coast-Italy.webp",
      description: "Drive along dramatic coastal roads, visit charming villages, and savor authentic Italian cuisine with Mediterranean views.",
      price: 1499,
      rating: 4.8
    },
    {
      id: 6,
      place: "Serengeti, Tanzania",
      image: "Serengeti-Tanzania.webp",
      description: "Witness the Great Migration and spot the Big Five on safari in one of Africa's most spectacular wildlife reserves.",
      price: 2299,
      rating: 4.9
    },
    {
      id: 7,
      place: "Reykjavik, Iceland",
      image: "Reykjavik-Iceland.webp",
      description: "Experience the Northern Lights, geothermal spas, waterfalls, and dramatic volcanic landscapes in the land of fire and ice.",
      price: 1799,
      rating: 4.7
    },
    {
      id: 8,
      place: "Raja Ampat, Indonesia",
      image: "Raja-Ampat-Indonesia.webp",
      description: "Discover pristine coral reefs, abundant marine life, and secluded beaches in this tropical diving paradise.",
      price: 2099,
      rating: 4.8
    },
    {
      id: 9,
      place: "Dubai, UAE",
      image: "Dubai-UAE.webp",
      description: "Experience luxury shopping, desert safaris, futuristic architecture, and world-class entertainment in this modern metropolis.",
      price: 1699,
      rating: 4.6
    }
  ];

  // Generate star rating display
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center" >
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-4 h-4 ${
              i < fullStars 
                ? 'text-yellow-400' 
                : i === fullStars && hasHalfStar 
                  ? 'text-yellow-400' 
                  : 'text-gray-300'
            }`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-1 text-gray-600 text-sm">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <section className="package-gallery py-16 px-6 bg-gray-50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Explore Our Popular Packages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map(pkg => (
            <div key={pkg.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-56 overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.place}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.place}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-800">
                    <span className="font-bold text-xl">${pkg.price}</span>
                    <span className="text-xs text-gray-500 ml-1">USD</span>
                  </div>
                  {renderStars(pkg.rating)}
                </div>
                
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default PackageGallery;
