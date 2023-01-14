import React, { useState, useEffect } from "react";
import Image from "next/image";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };
  const prev = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <div className="relative w-full lg:w-[65%] h-96 lg:h-auto mb-2 lg:mb-0 border-4 border-gray-500">
      <div className="flex relative ease-in duration-300 w-full h-full">
        {slides.map((slide, i) => {
          return (
            current === i && (
              <Image
                key={i}
                src={slide.image}
                fill={true}
                priority={true}
                alt="product"
                className="w-full h-full object-cover"
              />
            )
          );
        })}
      </div>

      <button className="absolute left-4 bottom-[50%] flex justify-center items-center p-2 border bg-white/70 rounded-md">
        <BsArrowLeft
          size={24}
          onClick={prev}
          className="text-gray-600 cursor-pointer"
        />
      </button>

      <div className="absolute left-4 bottom-4 right-4 block p-4 rounded-sm bg-black/50">
        <p className="text-gray-200 font-semibold text-base tracking-wider">
          We deploy services beyond your imagination. Just give KORIS a try
        </p>
      </div>

      <button className="absolute right-4 bottom-[50%] flex justify-center items-center p-2 border bg-white/70 rounded-md">
        <BsArrowRight
          size={24}
          onClick={next}
          className="text-gray-600 cursor-pointer"
        />
      </button>
    </div>
  );
};

export default Slider;
