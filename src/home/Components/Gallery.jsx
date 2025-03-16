import React, { useEffect, useState, useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1489396160836-2c99c977e970?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1632374960079-44d2b0ce8354?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1563249852-7aeead6b6baf?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1523980077198-60824a7b2148?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1643335622043-22b119a1f87e?q=80&w=3872&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJla2luZ3xlbnwwfHwwfHx8Mg%3D%3D",
  "https://images.unsplash.com/photo-1619229667032-e8700319c3c8?q=80&w=3510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1523544545175-92e04b96d26b?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1610226932964-7f6e2f0d51c5?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRyZWtpbmd8ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1549874682-13ffd26ee224?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHRyZWtpbmd8ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1548103981-34316e50b924?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHRyYXZlbCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1529154166925-574a0236a4f4?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHRyYXZlbCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1633193290810-f40654c0e00c?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1491557345352-5929e343eb89?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHRyYXZlbCUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHwy",
];

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState([]);
  const maxContainerHeight = 500; // Maximum height for the container

  useEffect(() => {
    // Preload images to get their natural dimensions
    const preloadImages = async () => {
      const imagePromises = images.map(
        (src) =>
          new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              // Calculate aspect ratio to maintain proportions
              const aspectRatio = img.width / img.height;
              
              // Base width for all images
              const baseWidth = 200;
              
              // Height based on aspect ratio
              const height = baseWidth / aspectRatio;
              
              resolve({
                src,
                width: baseWidth,
                height,
                aspectRatio
              });
            };
            img.src = src;
          })
      );

      const loadedImagesData = await Promise.all(imagePromises);
      setLoadedImages(loadedImagesData);
    };

    preloadImages();
  }, []);

  return (
    <section className="py-10 bg-gray-50" id="gallery">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Gallery</h2>
        
        <div 
          className="w-full overflow-x-auto px-4"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div 
            className="flex flex-col flex-wrap gap-y-4 gap-x-8 p-4"
            style={{ 
              height: `${maxContainerHeight}px`,
              width: 'max-content',
              alignContent: 'flex-start' 
            }}
          >
            {loadedImages.map((img, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg shadow-lg"
                style={{ 
                  width: `${img.width}px`,
                  height: `${img.height}px`,
                  flexGrow: 0, 
                  flexShrink: 0 
                }}
              >
                <img
                  src={img.src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;