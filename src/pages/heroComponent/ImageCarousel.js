import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

function ImageCarousel({ robots, onSlideChange }) {
  return (
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
        renderBullet: (index, className) => {
          return `<span class="${className} w-2 h-2 mx-1 rounded-full bg-gray-400"></span>`;
        },
      }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      modules={[Pagination, Navigation, Mousewheel]} // Add Mousewheel here
      mousewheel={true} // Enable mousewheel control
      className="w-full"
      onSlideChange={onSlideChange}
    >
      {robots.map((robot, index) => (
        <SwiperSlide key={index} className="relative">
          <img 
            loading="lazy" 
            src={robot.imageUrl} 
            className="object-contain w-full aspect-[0.78] max-md:max-w-full" 
            alt={`3D Mini Robot ${index + 1}`} 
          />
        </SwiperSlide>
      ))}
      
      
      {/* Pagination styles */}
      <style jsx>{`
        .swiper-pagination {
          bottom: 10px; /* Adjust as needed */
        }
        .swiper-pagination-bullet-active {
          background-color: #fff; /* Active dot color */
        }
      `}</style>
    </Swiper>
  );
}

export default ImageCarousel;
