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
    <div className="relative w-full sm:w-[65%] h-96 sm:h-auto mb-2 sm:mb-0 border-8 border-gray-500 rounded-md">
      <div className="flex ease-in duration-300 w-full h-full">
        {slides.map((slide, i) => {
          return current === i && <Image
            key={i}
            src={slide.image}
            fill={true}
            loading="lazy"
            alt="product"
            className="w-full h-full object-cover"
          />
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
        <p className="text-gray-200 text-base tracking-wider">
          <q>
            We deploy services beyond your imagination. Just give KORIS a try.
          </q>
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
