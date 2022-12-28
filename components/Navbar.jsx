import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#ffffff");

  useEffect(() => {
    const handleColor = () => {
      if (window.scrollY >= 30) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", handleColor);
  }, []);

  const toggleNav = () => {
    setNav((prevState) => !prevState);
  };
  return (
    <nav
      style={{ backgroundColor: `${color}` }}
      className="fixed w-full flex justify-between items-center py-5 px-5 sm:px-32 text-white ease-in duration-300 z-20"
    >
      <h2
        style={{ color: `${textColor}` }}
        className="font-bold text-2xl sm:text-3xl z-50"
      >
        <Link href="/">KORISenergy</Link>
      </h2>
      <ul
        style={{ color: `${textColor}` }}
        className="hidden sm:flex justify-center items-center"
      >
        <li className="p-6 font-bold tracking-wide">
          <Link href="/">Home</Link>
        </li>
        <li className="p-6 font-bold tracking-wide">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="p-6 font-bold tracking-wide">
          <Link href="/about">About</Link>
        </li>
        <Link href="/contact">
          <button className="bg-red-600 rounded-lg ml-4 py-2 font-bold shadow-gray-400 shadow-inner hover:shadow-gray-200 px-4">
            <p className="h-5 text-gray-200 text-center">Contact</p>
          </button>
        </Link>
        <li></li>
      </ul>
      {/* Menu button */}
      <div
        onClick={toggleNav}
        style={{ color: `${textColor}` }}
        className="block sm:hidden cursor-pointer z-30"
      >
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={20} />}
      </div>
      {/*Mobile Menu */}
      <div
        className={
          nav
            ? "flex justify-center items-center bg-black/80 absolute top-0 bottom-0 left-0 right-0 h-screen ease-in duration-300"
            : "flex justify-center items-center absolute top-0 bottom-0 left-[150%] right-0 h-screen ease-in duration-300"
        }
      >
        <ul className=" text-white">
          <li className="p-4 text-2xl">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 text-2xl">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="p-4 text-2xl">
            <Link href="/about">About</Link>
          </li>
          <li className="p-4 text-2xl">
            <Link href="/contact">Contact</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
