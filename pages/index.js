import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <>
      <div>
        <div className="relative h-screen px-4 sm:px-32 sm:pt-32 pt-20 w-full bg-fixed bg-center bg-cover custom-bg">
          {/* Overlay */}
          <div className="absolute top-0 left-0 right-0 bottom-0 h-screen bg-black/75" />
          <div className="gap-3 w-full sm:h-[70%] sm:flex sm:justify-between">
            <Slider slides={SliderData} />
            <div className="relative bg-gray-100 rounded-md px-8 py-12 h-80 sm:h-auto w-full sm:w-[35%]">
              <h3 className="text-2xl font-bold mb-4">Living Off-The-Grid</h3>
              <p className="text-base text-gray-500">
                In Nigeria Within the newly developed Guzape District in the
                heart of Abuja lies a unique 10-apartment block building,
                running totally off the grid with a combination
              </p>

              <div className="absolute bottom-4 ">
                <h3 className="font-semibold text-lg mb-2">
                  You can find us here
                </h3>
                <div className="flex gap-4">
                  <div className="bg-gray-600 w-8 h-8 flex justify-center items-center rounded-md">
                    <button>
                      <FaFacebookF size={18} className="text-white" />
                    </button>
                  </div>
                  <div className="bg-gray-600 w-8 h-8 flex justify-center items-center rounded-md">
                    <button>
                      <AiOutlineTwitter size={22} className="text-white" />
                    </button>
                  </div>
                  <div className="bg-gray-600 w-8 h-8 flex justify-center items-center rounded-md">
                    <button>
                      <AiOutlineInstagram size={22} className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full relative bg-gray-100 mt-4 sm:px-32 px-6 py-12">
            <h2 className="text-center text-3xl text-gray-800 font-bold p-4">
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
          <div className="w-full relative bg-gray-100 mt-4 sm:px-32 px-6 py-12">
            <h2 className="text-center text-3xl text-gray-800 font-bold p-4">
              Contact Us
            </h2>
            <div>
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="Your email address" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="start typing message here" />
            </div>
          </div>
        </div>
        <div className="w-full h-96 bg-blue-100 px-4" />
      </div>
    </>
  );
}
