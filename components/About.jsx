import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsBriefcaseFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="relative flex items-center w-full bg-white py-8 mt-2">
      <div
        className="lg:w-1/2 lg:pl-36 px-6"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <h2 className="text-3xl text-gray-600 font-bold">About Us</h2>
        <p className="mt-6 text-gray-600 text-base font-light tracking-wide leading-8">
          Koris Energy is a renewable energy company which engages in the
          supplies, installations and maintenance of premium solar and wind
          power systems. The company sells, installs, and maintains all kinds of
          solar and wind products, ranging from inverters, solar panels,
          batteries, solar charge controllers, solar street lights, solar water
          heating systems, solar water pumping systems, solar air conditioners,
          wind turbines, and wind charge controllers.
        </p>
        <Link href="/projects">
          <button className="flex gap-2 items-center mt-6 border border-orange-400 text-orange-500 hover:bg-orange-400 hover:text-white font-bold text-sm tracking-wide py-3 px-6">
            <span className="h-4">Business Profile</span>
            <BsBriefcaseFill size={20} />
          </button>
        </Link>
      </div>
      <div className="w-1/2 lg:flex hidden lg:justify-center lg:items-center">
        <Image
          src="/korisenergypnglogo.png"
          width={450}
          height={450}
          alt="Koris Logo"
        />
      </div>
    </div>
  );
};

export default About;
