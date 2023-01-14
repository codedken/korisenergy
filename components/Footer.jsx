import React from "react";
import Image from "next/image";
import { GoLocation } from "react-icons/go";
import { BsEnvelope, BsTelephone } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:px-32 px-6 py-12">
        <div className="flex items-center justify-center gap-1">
          <Image src="/korislogo.png" width={50} height={50} alt="Koris Logo" />

          <div className="h-10 flex flex-col justify-between gap-1">
            <h2 className="font-bold text-xl md:text-xl z-50 h-4">
              KORIS<span className="italic text-xl">energy</span>
            </h2>
            <h3 className="font-bold text-lg text-orange-500 md:text-xl z-50 h-6">
              SOLUTIONS
            </h3>
          </div>
        </div>
        <div className="w-full mt-8 flex gap-10 justify-center text-sm text-gray-500 font-extralight leading-7">
          <div className="w-[50%] flex justify-end">
            <p className="w-64 text-right">
              No 23 Ayinde Giwa street, Surulere, Lagos state, Nigeria.
            </p>
          </div>
          <div className="w-[50%]">
            <p className="flex items-center gap-2 ">
              +234-802 1060 063 (Commercial Office)
            </p>
            <p className="flex items-center gap-2 ">
              +234-802 1060 063 (Corporate HQ)
            </p>
            <p className="flex items-center gap-2 ">
              korisenergysolutions@gmail.com
            </p>
          </div>
        </div>
        <div className="w-full flex gap-3 justify-center items-center mt-12">
          <div className="p-2 bg-gray-400 rounded-md inset-2">
            <FaFacebookF style={{ color: "white" }} />
          </div>
          <div className="p-2 bg-gray-400 rounded-md inset-2">
            <FaInstagram style={{ color: "white" }} />
          </div>
          <div className="p-2 bg-gray-400 rounded-md inset-2">
            <FaLinkedinIn style={{ color: "white" }} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-5 w-full bg-gray-900 text-orange-500 tracking-wider">
        <small className="text-base">
          copyright © {new Date().getFullYear()}
        </small>
      </div>
    </div>
  );
};

export default Footer;
