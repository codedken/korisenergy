import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <>
      <div className="relative md:pt-32 pt-20 w-full bg-fixed bg-center bg-cover">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 h-[100%] bg-slate-900" />
        <div className="lg:mx-32 mx-4 gap-2 lg:flex lg:justify-between">
          <Slider slides={SliderData} />
          <div className="relative bg-gray-100 px-6 py-10 lg:h-auto w-full lg:w-[35%]">
            <h3 className="text-2xl font-bold mb-4">Living Off-The-Grid</h3>
            <p className="text-base text-gray-500">
              With our service, you are guaranteed to live off unreliable power
              grid and wave goodbye to epileptic power supply. At Koris Energy,
              we ensure that our clients get maximum satisfaction.
            </p>

            <div className=" ">
              <h3 className="font-semibold text-lg mb-1 mt-12">
                You can find us here
              </h3>
              <div className="flex gap-4">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100084899641073"
                >
                  <div className="bg-gray-400 w-8 h-8 flex justify-center items-center rounded-md">
                    <button>
                      <FaFacebookF size={16} className="text-white" />
                    </button>
                  </div>
                </Link>

                <Link href="https://www.linkedin.com/company/koris-energy-solutions/">
                  <div className="bg-gray-400 w-8 h-8 flex justify-center items-center rounded-md">
                    <button>
                      <FaLinkedinIn size={16} className="text-white" />
                    </button>
                  </div>
                </Link>
                <Link href="https://www.instagram.com/korisenergy/">
                  <div className="bg-gray-400 w-8 h-8 flex justify-center items-center rounded-md">
                    <button>
                      <FaInstagram size={16} className="text-white" />
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center w-full bg-gray-100 py-8 mt-2">
          <div className="w-1/2 lg:pl-32 lg:pr- px-6">
            <h2 className="text-2xl text-gray-800 font-bold py-4">
              About Us
            </h2>
            <p className="text-gray-800 text-base tracking-wide">
              Koris Energy is a renewable energy company which engages in the
              supplies, installations and maintenance of premium solar and wind
              power systems. The company sells, installs, and maintains all
              kinds of solar and wind products, ranging from inverters, solar
              panels, batteries, solar charge controllers, solar street lights,
              solar water heating systems, solar water pumping systems, solar
              air conditioners, wind turbines, and wind charge controllers. We
              offer end-to-end clean energy products and services, including
              generation, distribution, storage and consumption
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
          <Image src="/korisenergylogoNoBg.png" width={300} height={300} alt="Koris Logo" />
          </div>
        </div>
        <div className="relative w-full bg-gray-50 mt-2 md:px-32 px-6 py-12">
          <h2 className="text-center text-2xl text-gray-800 font-bold p-4">
            Shoot us an email
          </h2>
          <Contact />
        </div>
      </div>
    </>
  );
}
