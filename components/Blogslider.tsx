import React, { useState } from "react";
import Image from 'next/image';

const BlogSlider: React.FC = () => {
  const slides = [
    {
      img: "/images/ad_01.png",
      date: "26 December 2019",
      title: "What is Teen Patti Gold?",
      text: "It is an online independent application compatible with Android phones and tablets. One can install it to play a diverse collection of fun games under one umbrella. It is very similar to a casino app. Yes! You spend money on in-app chips and challenge other players to compete in a particular game or event.",
    },
    {
      img: "/images/teenpati (2).jpg",
      date: "27 December 2019",
      title: "Teen Patti Gold Key Features:",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    },
    {
      img: "/images/maxresdefault.jpg",
      date: "28 December 2019",
      title: "Other Features of Teen Patti Gold:",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi?",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex justify-center p-6 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
      <div className="flex flex-col md:flex-row items-center max-w-5xl bg-white rounded-lg shadow-lg relative">
        {/* Image Section */}
        <div className="w-full md:w-1/3 p-4">
          <div className="relative w-full h-64 rounded-lg overflow-hidden">
            <Image
              key={currentIndex} // Ensures the Image component re-renders when index changes
              src={slides[currentIndex].img}
              alt={slides[currentIndex].title}
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-transparent opacity-70"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3 p-6">
          <p className="text-sm text-gray-400 ">{slides[currentIndex].date}</p>
          <h2 className="mt-2 text-xl md:text-2xl font-bold text-gray-800">
            {slides[currentIndex].title}
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600 w-[95%]">
            {slides[currentIndex].text}
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full shadow-md hover:opacity-90 transition"
              aria-label={`Read more about ${slides[currentIndex].title}`}
            >
              READ MORE
            </a>
          </div>
        </div>

        {/* Vertical Dots Indicator */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 max-sm:relative max-sm:top-auto max-sm:right-auto max-sm:flex-row max-sm:space-y-0 max-sm:space-x-2 max-sm:mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
                ? "bg-red-500 shadow-lg scale-125 md:h-[30px] max-sm:w-[20px]"
                : "bg-gray-300 hover:bg-gray-400"
                }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
