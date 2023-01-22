import Image from "next/image";
import { BsBriefcaseFill } from "react-icons/bs";
import Contact from "../components/Contact";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative w-full">
        {/* Overlay */}
        <div className="w-full h-screen overflow-x-clip absolute top-0 left-0">
          <div className="w-[500%] h-full flex slider">
            <Image
              src="/korisimages/panel0.png"
              width={800}
              height={800}
              alt="Solar Panel"
              className="h-full w-[20%]"
            />
            <Image
              src="/korisimages/panel2.png"
              width={800}
              height={800}
              alt="Solar Panel"
              className="h-full w-[20%]"
            />
            <Image
              src="/korisimages/battery2.png"
              width={800}
              height={800}
              alt="Solar Panel"
              className="h-full w-[20%]"
            />
            <Image
              src="/korisimages/panel6.png"
              width={800}
              height={800}
              alt="Solar Panel"
              className="h-full w-[20%]"
            />
            <Image
              src="/korisimages/panel0.png"
              width={800}
              height={800}
              alt="Solar Panel"
              className="h-full w-[20%]"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-[100%] bg-black/80" />
        <div className="relative">
          <div className="relative w-full h-screen">
            <div className="absolute bottom-1/2 w-[100%] top-1/2 flex justify-center items-center">
              <div className="w-[90%] overflow-hidden">
                <div className="sliding-text w-[500%] flex">
                  <h1
                    style={{ fontFamily: "Kanit" }}
                    className="lg:text-7xl w-[20%] text-5xl text-center font-bold text-white"
                  >
                    Leading sustainable energy future in Nigeria
                  </h1>
                  <h1
                    style={{ fontFamily: "Kanit" }}
                    className="lg:text-7xl w-[20%] text-5xl text-center font-bold text-white"
                  >
                    Experience uninterruptible power supply
                  </h1>
                  <h1
                    style={{ fontFamily: "Kanit" }}
                    className="lg:text-7xl w-[20%] text-5xl text-center font-bold text-white"
                  >
                    Durable Systems To Provide You With Comfort.
                  </h1>
                  <h1
                    style={{ fontFamily: "Kanit" }}
                    className="lg:text-7xl w-[20%] text-5xl text-center font-bold text-white"
                  >
                    Live the life that you desire
                  </h1>
                  <h1
                    style={{ fontFamily: "Kanit" }}
                    className="lg:text-7xl w-[20%] text-5xl text-center font-bold text-white"
                  >
                    Leading sustainable energy future in Nigeria
                  </h1>
                </div>
              </div>
            </div>
            <div className="absolute bottom-20 right-0 left-0 mx-auto w-fit">
              <div className="relative bg-gray-700/80 flex items-center gap-3 w-fit p-3 rounded-full">
                <button className="slider-indicator-btn lg:w-12 w-8 lg:h-12 h-8 rounded-full border-4 bg-gray-400" />
                <button className="slider-indicator-btn lg:w-12 w-8 lg:h-12 h-8 rounded-full border-4 bg-gray-400" />
                <button className="slider-indicator-btn lg:w-12 w-8 lg:h-12 h-8 rounded-full border-4 bg-gray-400" />
                <button className="slider-indicator-btn lg:w-12 w-8 lg:h-12 h-8 rounded-full border-4 bg-gray-400" />
                <button className="slider-indicator-btn lg:w-12 w-8 lg:h-12 h-8 rounded-full border-4 bg-gray-400" />
                <div className="slider-indicator lg:w-12 w-8 lg:h-12 h-8 border-4 rounded-full absolute left-3 bg-orange-400 duration-500"></div>
              </div>
            </div>
          </div>
          <div className="lg:h-[32rem] lg:flex justify-center items-center">
            <div className="relative lg:w-[50%] h-full">
              <Image
                src="/img3.jpg"
                width={400}
                height={400}
                alt="products"
                className="relative w-full h-full"
              />
              <div className="absolute bottom-4 right-0 mx-auto left-0 w-[80%] h-fit p-6 bg-black/40 rounded-lg">
                <q className="text-gray-100 lg:text-xl text-center text-lg font-bold">
                  We deploy services beyond your imagination. Give Koris a try.
                </q>
              </div>
            </div>

            <div className="lg:w-[50%] h-full bg-gray-50 py-8 px-6">
              <div className="relative h-full">
                <h3 className="text-3xl text-gray-600 font-bold">
                  Living Off The Grid
                </h3>
                <p className="mt-6 text-base text-gray-600 font-light leading-8">
                  With our service, you are guaranteed to live off unreliable
                  power grid and wave goodbye to epileptic power supply. At
                  Koris Energy, we ensure that our clients get maximum
                  satisfaction.
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center w-full bg-white py-8 mt-2">
          <div className="lg:w-1/2 lg:pl-36 px-6">
            <h2 className="text-3xl text-gray-600 font-bold">About Us</h2>
            <p className="mt-6 text-gray-600 text-base font-light tracking-wide leading-8">
              Koris Energy is a renewable energy company which engages in the
              supplies, installations and maintenance of premium solar and wind
              power systems. The company sells, installs, and maintains all
              kinds of solar and wind products, ranging from inverters, solar
              panels, batteries, solar charge controllers, solar street lights,
              solar water heating systems, solar water pumping systems, solar
              air conditioners, wind turbines, and wind charge controllers.
            </p>
            <button className="flex gap-2 items-center mt-6 border border-orange-400 text-orange-500 hover:bg-orange-400 hover:text-white font-bold text-sm tracking-wide py-3 px-6">
              <span className="h-4">Business Profile</span>
              <BsBriefcaseFill size={20} />
            </button>
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
        <div className="relative w-full bg-gray-50 mt-2 md:px-36 py-12">
          <div className="w-full h-full px-6 py-4 bg-gradient-to-br from-orange-200 via-blue-100 to-teal-100">
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
