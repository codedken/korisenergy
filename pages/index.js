import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";

export default function Home() {
  return (
    <>
      <div className="relative h-screen px-4 sm:px-32 sm:pt-32 pt-20 w-full bg-fixed bg-center bg-cover z-10 custom-bg">
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 h-screen bg-black/75" />
        <div className="gap-4 w-full z-30 sm:h-[70%] sm:flex sm:justify-between">
          <Slider slides={SliderData} />
          <div className="relative bg-gray-100 rounded-2xl px-8 py-12 h-80 sm:h-auto w-full sm:w-[35%]">
            <h3 className="text-2xl font-bold mb-4">Living Off-The-Grid</h3>
            <p className="text-lg text-gray-500">
              In Nigeria Within the newly developed Guzape District in the heart
              of Abuja lies a unique 10-apartment block building, running
              totally off the grid with a combination
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
      </div>
    </>
  );
}
