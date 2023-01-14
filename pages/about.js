import React from "react";

const about = () => {
  return (
    <div className="bg-black h-screen w-full">
      <div className="pt-32 lg:px-32 px-6">
        <div className="w-full relative bg-gray-50 lg:px-32 px-6 py-8">
          <h2 className="text-2xl text-gray-800 font-bold py-4">
            About Us
          </h2>
          <p className="text-gray-800 text-base tracking-wide">
            Koris Energy is a renewable energy company which engages in the
            supplies, installations and maintenance of premium solar and wind
            power systems. The company sells, installs, and maintains all kinds
            of solar and wind products, ranging from inverters, solar panels,
            batteries, solar charge controllers, solar street lights, solar
            water heating systems, solar water pumping systems, solar air
            conditioners, wind turbines, and wind charge controllers. We offer
            end-to-end clean energy products and services, including generation,
            distribution, storage and consumption
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
