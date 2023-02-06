import React from "react";

const HomeSlideText = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute bottom-1/2 w-[100%] top-1/2 flex justify-center items-center">
        <div className="w-[98%] overflow-hidden">
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
              Experience uninterrupted power supply
            </h1>
            <h1
              style={{ fontFamily: "Kanit" }}
              className="lg:text-7xl w-[20%] text-5xl text-center font-bold text-white"
            >
              Durable Systems To Provide You With Comfort
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
  );
};

export default HomeSlideText;
