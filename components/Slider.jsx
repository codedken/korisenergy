import React, { useState } from "react";
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
    <div className="relative w-full sm:w-[65%] h-96 sm:h-auto mb-4 sm:mb-0 border-4 border-gray-500 rounded-md">
      {slides.map(
        (slide, i) =>
          current === i && (
            <Image
              key={i}
              src={slide.image}
              fill={true}
              alt="product"
              className="w-full h-full object-cover"
            />
          )
      )}

      <button className="absolute left-4 top-[50%] flex justify-center items-center p-2 border bg-white/70 rounded-md">
        <BsArrowLeft
          size={24}
          onClick={prev}
          className="text-gray-600 cursor-pointer"
        />
      </button>

      <div className="absolute left-2 top-2 block p-8 rounded-br-3xl w-4/6 bg-white/60">
        <p className="text-gray-600 text-lg font-semibold">
          <q>
            We deploy services beyond your imagination. Just give KORIS
            a try.
          </q>
        </p>
      </div>

      <button className="absolute right-4 top-[50%] flex justify-center items-center p-2 border bg-white/70 rounded-md">
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
