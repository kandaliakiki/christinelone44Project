import React from "react";

const HealthControlCalories = () => {
  return (
    <div className="py-8 pb-14">
      <p className="text-black text-xs text-right font-semibold  mt-5 mb-1">
        1200 / 2100 kcal
      </p>

      <div className="absolute bg-black flex justify-center items-center"></div>
      <div className="relative w-full flex ">
        <div className="w-1/2 bg-white rounded-full h-2"></div>
        <div className="w-1/2 bg-black rounded-full h-2"></div>
        <div className="absolute inset-0 flex items-center justify-center  ">
          <div className="w-20 h-20 rounded-full flex items-center justify-center  z-20 backdrop-blur-sm bg-opacity-25 bg-white ">
            <div className="w-16 h-16 bg-white text-black font-semibold flex flex-col justify-center items-center rounded-full ">
              <p className="text-base leading-none">1200</p>
              <p className="text-xs">today</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthControlCalories;
