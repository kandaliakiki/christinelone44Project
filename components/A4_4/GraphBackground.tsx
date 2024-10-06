import React from "react";

const GraphBackground = () => {
  return (
    <div className="relative pr-5 mr-5 w-full mt-14">
      <svg
        width="401"
        height="162"
        viewBox="0 0 401 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className=" pr-10 p-2"
      >
        <path
          d="M1 96.3469L54.8043 161H141.217L231.435 52.5918H289.043L331.978 1H401"
          stroke="#ABABAB"
          strokeWidth="2"
        />
      </svg>
      {/* Circles positioned absolutely with backdrop blur */}
      <div className="absolute top-[-3px] left-0 pointer-events-none">
        <div className="absolute rounded-full left-[50.8043px] top-[148px] w-[15px] h-[15px] bg-[rgba(120,120,120,0.55)] backdrop-blur-[3px] backdrop-brightness-[150%]" />
        <div className="absolute rounded-full left-[123.217px] top-[148px] w-[15px] h-[15px] bg-[#9B73C5] bg-opacity-55 backdrop-blur-[3px] backdrop-brightness-[150%]" />
        <div className="absolute rounded-full left-[206.435px] top-[50.5918px] w-[15px] h-[15px] bg-[rgba(120,120,120,0.55)] backdrop-blur-[3px] backdrop-brightness-[150%]" />
        <div className="absolute rounded-full left-[255.435px] top-[50.5918px] w-[15px] h-[15px] bg-[rgba(120,120,120,0.55)] backdrop-blur-[3px] backdrop-brightness-[150%]" />

        <div className="absolute rounded-full left-[293.043px] top-[6px] w-[15px] h-[15px] bg-[#DD5851] bg-opacity-55 backdrop-blur-[3px] backdrop-brightness-[150%]" />
        <div className="absolute rounded-full left-[350.978px] top-[6px] w-[15px] h-[15px] bg-[rgba(120,120,120,0.55)] backdrop-blur-[3px] backdrop-brightness-[150%]" />
      </div>
      <div className="absolute bottom-7 left-24 rounded-full py-3 px-9 border border-[#242424] text-white bg-gradient-to-r from-gray-900 to-transparent bg-opacity-55 backdrop-blur-[2px]">
        5.2
      </div>
      <div className="flex flex-col justify-end rotate-90 absolute -right-9 bottom-16 ">
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-6 h-1 bg-[#AF83DF] rounded-full"></div>
        </div>
      </div>
      <p className="absolute text-gray-400 -right-3 bottom-0 text-xl">Now</p>
    </div>
  );
};

export default GraphBackground;
