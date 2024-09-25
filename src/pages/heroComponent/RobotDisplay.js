import React, { useState, useEffect } from 'react';
import RobotInfo from './RobotInfo';
import ImageCarousel from './ImageCarousel';

function RobotDisplay() {
  const robots = [
    { 
      name: "Mini Robot 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imageUrl: "https://www.veve.me/collectibles/_next/image?url=https%3A%2F%2Fd11unjture0ske.cloudfront.net%2Ftransparent_background_image.ea0d07e7-6beb-4178-af18-8673c66d074f.fda2dbd4-d3af-4613-a06a-41ac3efa122f.png&w=1060&q=75",
      url: "/product1",
      backgroundColor: "bg-green-400"
    },
    {
      name: "Mini Robot 2",
      description: "Description for Mini Robot 2. This robot has features D, E, and F.",
      imageUrl: "https://example.com/image2.jpg",
      url: "/product2",
      backgroundColor: "bg-blue-400"
    },
    {
      name: "Mini Robot 3",
      description: "Description for Mini Robot 3. This robot has features G, H, and I.",
      imageUrl: "https://example.com/image3.jpg",
      url: "/product3",
      backgroundColor: "bg-red-400"
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(true); // Animation state

  // Handle image preloading
  useEffect(() => {
    const images = robots.map(robot => new Image().src = robot.imageUrl);
    let loadedCount = 0;

    const checkImagesLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setLoading(false);
        setAnimate(true); // Set animation to true after images load
      }
    };

    images.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = checkImagesLoaded;
      img.onerror = checkImagesLoaded;
    });
  }, [robots]);

  const handleSlideChange = (swiper) => {
    setAnimate(false); // Reset animation state
    setTimeout(() => {
      setActiveSlideIndex(swiper.activeIndex);
      setAnimate(true); // Start animation after slide change
    }, 300); // Small delay for smooth transition
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
        <p className="ml-4 text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <main className={`flex flex-col rounded-xl ${robots[activeSlideIndex].backgroundColor} transition-all duration-500`}>
      {/* <div className="absolute top-16 left-28">
        <div className="text-4xl font-bold animate-spin text-gray-400">+</div>
      </div>
      <div className="absolute bottom-5 right-5">
        <div className="text-4xl font-bold animate-spin text-gray-400">+</div>
      </div> */}
      <section className="px-16 pt-11 pb-5 w-full rounded-3xl max-md:px-5 max-md:max-w-full shadow-lg">
        <div className="flex gap-5 max-md:flex-col">
        
          <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col mt-24 mr-0 text-white max-md:mt-10 max-md:max-w-full">
              
              {/* <div className="flex items-center justify-center">
                <div className="text-6xl font-bold animate-spin text-gray-400">+</div>
              </div> */}
              
              <div className={`transition-opacity duration-500 ${animate ? 'opacity-100' : 'opacity-0'}`}>
                <RobotInfo 
                  name={robots[activeSlideIndex].name} 
                  description={robots[activeSlideIndex].description} 
                />
              </div>
              <h1 className="mt-16 ml-5 text-5xl font-bold max-md:mt-10 max-md:max-w-full max-md:text-4xl">
                VIEW OUR 3D MINI ROBOT
              </h1>
            </div>
          </div>
          
          {/* Right: Image Carousel */}
          <div className="flex flex-col ml-5 w-[46%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-10 max-md:max-w-full">
              <ImageCarousel robots={robots} onSlideChange={handleSlideChange} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RobotDisplay;
