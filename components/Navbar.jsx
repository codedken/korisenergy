import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";

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
      className="fixed w-full flex justify-between items-center py-5 px-5 md:px-32 text-white ease-in duration-300 z-20"
    >
      <Link href="/" className="z-50">
        <div className="flex items-center justify-center gap-1">
          <Image src="/korislogo.png" width={50} height={50} alt="Koris Logo" />

          <div className="h-10 flex flex-col justify-between gap-1">
            <h2
              style={{ color: nav ? `#ffffff` : `${textColor}` }}
              className="font-bold text-xl md:text-xl z-50 h-4"
            >
              KORIS<span className="italic text-xl">energy</span>
            </h2>
            <h3 className="font-bold text-lg text-orange-500 md:text-xl z-50 h-6">
              SOLUTIONS
            </h3>
          </div>
        </div>
      </Link>
      <ul
        style={{ color: `${textColor}` }}
        className="hidden md:flex justify-center items-center"
      >
        <li className="p-6 font-bold tracking-wide">
          <Link
            href="/"
            className="hover:border-b-2"
            style={{ borderBottomColor: `${textColor}` }}
          >
            Home
          </Link>
        </li>
        <li className="p-6 font-bold tracking-wide">
          <Link
            href="/projects"
            className="hover:border-b-2"
            style={{ borderBottomColor: `${textColor}` }}
          >
            Projects
          </Link>
        </li>
        <li className="p-6 font-bold tracking-wide">
          <Link
            href="/about"
            className="hover:border-b-2"
            style={{ borderBottomColor: `${textColor}` }}
          >
            About
          </Link>
        </li>
        <Link href="/contact">
          <button
            style={{ borderColor: `${textColor}` }}
            className="border hover:bg-gray-100 group rounded-sm ml-4 py-2 font-bold px-4"
          >
            <p className="h-5 text-center group-hover:text-gray-800">Contact</p>
          </button>
        </Link>
        <li></li>
      </ul>
      {/* Menu button */}
      <div
        onClick={toggleNav}
        style={{ color: nav ? `#ffffff` : `${textColor}` }}
        className="block md:hidden cursor-pointer z-[5]"
      >
        {nav ? <AiOutlineClose size={24} /> : <VscMenu size={20} />}
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
          <li onClick={toggleNav} className="p-4 text-2xl">
            <Link href="/">Home</Link>
          </li>
          <li onClick={toggleNav} className="p-4 text-2xl">
            <Link href="/projects">Projects</Link>
          </li>
          <li onClick={toggleNav} className="p-4 text-2xl">
            <Link href="/about">About</Link>
          </li>
          <li onClick={toggleNav} className="p-4 text-2xl">
            <Link href="/contact">Contact</Link>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
