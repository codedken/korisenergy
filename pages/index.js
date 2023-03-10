import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsBriefcaseFill } from "react-icons/bs";
import Contact from "../components/Contact";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";
import HomeSlideText from "../components/HomeSlideText";
import HomeSlideImages from "../components/HomeSlideImages";
import About from "../components/About";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden">
        {/* Overlay */}
        <HomeSlideImages />
        <div className="absolute top-0 left-0 right-0 bottom-0 h-[100%] bg-black/70" />
        <div className="relative">
          <HomeSlideText />
          <div className="lg:h-[32rem] lg:flex justify-center items-center">
            <div className="relative lg:w-[50%] h-full">
              <Image
                src="/img3.jpg"
                width={400}
                height={400}
                alt="products"
                className="relative w-full h-full"
              />
              <div className="absolute bottom-4 right-6 mx-auto left-6 h-fit p-6 bg-black/40 rounded-lg">
                <q className="text-gray-100 lg:text-xl text-center text-lg font-bold">
                  We deploy services beyond your imagination. Give Koris a try.
                </q>
              </div>
            </div>

            <div className="lg:w-[50%] h-full bg-gray-50 py-8 px-6">
              <div
                className="relative h-full"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h3 className="text-3xl text-gray-600 font-bold">
                  Live Off-Grid
                </h3>
                <p className="mt-6 text-base text-gray-600 font-light leading-8">
                  Most countries in Africa are faced with inconsistent power
                  supply. As a result, this leads to some level of
                  unproductivity and inefficiencies for businesses that depends
                  largely on power.
                </p>
                <p className="mt-4 text-base text-gray-600 font-light leading-8">
                  With our service, you are guaranteed to live off unreliable
                  power grid and wave goodbye to epileptic power supply. At
                  Koris Energy, we ensure that our clients get maximum
                  satisfaction.
                </p>
                <div className="mt-12">
                  <h4 className="text-xl text-gray-800 ">
                    You can reach us here
                  </h4>
                  <div className="flex items-center gap-3 mt-3">
                    <Link href="https://www.facebook.com/profile.php?id=100084899641073">
                      <button className="sm-btn flex justify-center items-center w-10 h-10 rounded-lg hover:bg-blue-500 bg-blue-600">
                        <FaFacebookF className="text-white" size={24} />
                      </button>
                    </Link>
                    <Link href="https://www.instagram.com/korisenergy/">
                      <button className="sm-btn flex justify-center items-center w-10 h-10 rounded-lg hover:from-yellow-300 hover:to-pink-400 hover:via-pink-400 bg-gradient-to-tr from-yellow-400 via-pink-500 to-pink-500">
                        <FaInstagram className="text-white" size={28} />
                      </button>
                    </Link>
                    <Link href="https://www.linkedin.com/company/koris-energy-solutions/">
                      <button className="sm-btn flex justify-center items-center w-10 h-10 rounded-lg hover:bg-blue-400 bg-blue-500">
                        <FaLinkedinIn className="text-white" size={24} />
                      </button>
                    </Link>
                    <Link href="https://wa.me/2348021060063">
                      <button className="sm-btn flex justify-center items-center w-10 h-10 rounded-lg hover:bg-green-400 bg-green-500">
                        <FaWhatsapp className="text-white" size={26} />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About />
        <div className="md:py-12 py-8 px-6 w-full bg-red-500 flex relative flex-col justify-center items-center">
          <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-30" />
          <h3 className="lg:text-4xl md:text-2xl text-xl font-bold text-gray-100 relative underline">Testimonials</h3>
          <q className="relative lg:my-10 my-8 text-gray-300 tracking-wide lg:w-[36rem] w-auto lg:text-3xl md:text-xl text-lg text-center">
            It has been 2 years since Koris installed my solar system, and I
            must confess that it is worth the money.
          </q>
          <div className="absolute bottom-4 right-4">
            <p className="md:text-xl text-lg text-white font-bold">
              Mr Kennedy Ojukwu
            </p>
            <p className="md:text-lg text-base text-gray-200">
              CEO Kencode Comms
            </p>
          </div>
        </div>
        <div className="relative w-full bg-gray-50 mt-2 md:px-36 py-12">
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="w-full h-full px-6 py-4 bg-gradient-to-br from-orange-200 via-blue-100 to-teal-100"
          >
            <h2 className="text-center text-2xl text-gray-600 font-bold p-4">
              Shoot us an email
            </h2>
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
