import React, {useState} from "react";
import Image from "next/image";
import {FaArrowCircleLeft,
  FaArrowCircleRight} from 'react-icons/fa';

const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    }
    const prev = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    }
    if(!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <div className="relative w-full sm:w-[65%] h-96 sm:h-auto mb-4 sm:mb-0 border-8 border-gray-500 rounded-bl-xl rounded-tr-xl">
    {slides.map((slide, i) => current === i && <Image key={i}
        src={slide.image}
        fill={true}
        alt="product"
        className="w-full h-full object-cover"
      />
)}
      
      <FaArrowCircleLeft
        size={30}
        onClick={prev}
        className="absolute top-[50%] left-4 text-gray-300 cursor-pointer"
      />

      <div className="absolute translate-x-2/4 translate-y-2/4 block sm:hidden p-8 rounded-tl-3xl rounded-br-3xl w-1/2 bg-white/60">
        <p className="text-gray-500 font-semibold">
          <q>
            We deliver quality services beyond your imagination. Just give KORIS
            a try.
          </q>
        </p>
      </div>

      <FaArrowCircleRight
        size={30}
        onClick={next}
        className="absolute top-[50%] right-4 text-gray-300 cursor-pointer"
      />
    </div>
  );
};

export default Slider;
