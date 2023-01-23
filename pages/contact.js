import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const contact = () => {
  return (
    <div className="bg-black pb-4 w-full">
      <div className="pt-32 lg:px-36">
        <div className="w-full relative bg-gray-50 pt-8">
          <h2 className="lg:text-3xl text-2xl text-gray-800 ml-6 font-bold py-4">
            Contact Us
          </h2>
          <div className="ml-6 my-4 flex flex-col gap-4">
            <h4 className="flex gap-3 text-gray-600 lg:text-xl text-lg">
              <FaPhoneAlt size={18}/>
              +234-802 1060 063
            </h4>
            <h4 className="flex gap-3 text-gray-600 lg:text-xl text-lg">
              <FaEnvelope size={18}/>
              korisenergysolutions@gmail.com
            </h4>
            <h4 className="flex gap-3 text-gray-600 lg:text-xl text-lg">
              <FaMapMarkerAlt size={18}/>
              No 23 Ayinde Giwa street, Surulere, Lagos state, Nigeria
            </h4>
          </div>
          <div className="text-gray-600 relative w-full text-base font-light tracking-wide leading-9">
            <div className="absolute flex justify-center pt-6 top-0 left-0 w-full h-[100%] bg-gray-100">
              <h2 className="lg:text-xl text-lg text-gray-600 font-bold">Map Image Loading.....</h2>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.1557676258262!2d3.3498654142665005!3d6.501956425218478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c1649d12009%3A0x3df54a4b0c6ffc39!2s23%20Ayinde%20Giwa%20St%2C%20Surulere%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1674362765002!5m2!1sen!2sng"
              style={{ border: 0, width: "100%", height: "calc(100vh * 0.65)" }}
              allowFullScreen=""
              loading="lazy"
              className="relative"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
