import React from "react";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:px-32 px-6 py-12">
        <div className="flex items-center justify-center gap-1">
          <Image src="/korislogo.png" width={50} height={50} alt="Koris Logo" />

          <div className="h-10 flex flex-col justify-between gap-1">
            <h2 className="font-bold text-xl h-4">
              KORIS<span className="italic text-xl">energy</span>
            </h2>
            <h3 className="font-bold text-lg text-orange-500 md:text-xl h-6">
              SOLUTIONS
            </h3>
          </div>
        </div>
        <div className="w-full mt-8 flex gap-8 justify-center text-sm text-gray-500 font-extralight leading-7">
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
          </div>
        </div>
        <div className="w-full flex gap-3 justify-center items-center mt-12">
          <Link href="https://www.facebook.com/profile.php?id=100084899641073">
            <button className="w-8 h-8 flex justify-center items-center hover:bg-blue-600 bg-gray-400 rounded-md inset-2">
              <FaFacebookF size={20} style={{ color: "white" }} />
            </button>
          </Link>
          <Link href="https://www.instagram.com/korisenergy/">
            <button className="w-8 h-8 flex justify-center items-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:to-pink-500 bg-gray-400 rounded-md inset-2">
              <FaInstagram size={26} style={{ color: "white" }} />
            </button>
          </Link>
          <Link href="https://www.linkedin.com/company/koris-energy-solutions/">
            <button className="w-8 h-8 flex justify-center items-center hover:bg-blue-500 bg-gray-400 rounded-md inset-2">
              <FaLinkedinIn size={22} style={{ color: "white" }} />
            </button>
          </Link>
          <Link href="https://wa.me/2348021060063">
            <button className="w-8 h-8 flex justify-center items-center hover:bg-green-500 bg-gray-400 rounded-md inset-2">
              <FaWhatsapp size={24} style={{ color: "white" }} />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center py-5 px-4 w-full bg-gray-900 text-yellow-500 tracking-wider">
        <small className="lg:text-base text-center text-sm">
          Copyright © {new Date().getFullYear()}.{" "}
          <span className="text-white underline">All Rights Reserved Koris Energy Solutions</span>
        </small>
      </div>
    </div>
  );
};

export default Footer;
