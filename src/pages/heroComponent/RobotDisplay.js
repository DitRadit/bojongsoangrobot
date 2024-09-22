import React, { useState } from 'react';
import RobotInfo from './RobotInfo';
import ImageCarousel from './ImageCarousel';

function RobotDisplay() {
  const robots = [
    { 
      name: "Mini Robot 1",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      imageUrl: "https://www.veve.me/collectibles/_next/image?url=https%3A%2F%2Fd11unjture0ske.cloudfront.net%2Ftransparent_background_image.ea0d07e7-6beb-4178-af18-8673c66d074f.fda2dbd4-d3af-4613-a06a-41ac3efa122f.png&w=1060&q=75",
      backgroundColor: "bg-green-400"
    },
    {
      name: "Mini Robot 2",
      description: "Description for Mini Robot 2. This robot has features D, E, and F.",
      imageUrl: "https://example.com/image2.jpg",
      backgroundColor: "bg-blue-400"
    },
    {
      name: "Mini Robot 3",
      description: "Description for Mini Robot 3. This robot has features G, H, and I.",
      imageUrl: "https://example.com/image3.jpg",
      backgroundColor: "bg-red-400"
    },
  ];

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.activeIndex);
  };

  return (
    <main className={`flex flex-col rounded-xl ${robots[activeSlideIndex].backgroundColor} transition-all duration-500`}>
      <section className="px-16 pt-11 pb-5 w-full rounded-3xl max-md:px-5 max-md:max-w-full shadow-lg">
        <div className="flex gap-5 max-md:flex-col">
          {/* Left: Static Heading and Robot Info */}
          <div className="flex flex-col w-[54%] max-md:ml-0 max-md:w-full">
            <div className="flex z-10 flex-col mt-24 mr-0 text-white max-md:mt-10 max-md:max-w-full">
              <RobotInfo 
                name={robots[activeSlideIndex].name} 
                description={robots[activeSlideIndex].description} 
              />
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
