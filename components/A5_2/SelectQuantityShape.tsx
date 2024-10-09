import React from "react";

const SelectQuantityShape = () => {
  return (
    <div className="fixed -bottom-16 -left-20 ">
      <div className="relative  ">
        <div className="absolute -top-10 left-28 text-white">
          <div className="flex items-center gap-2">
            <div className="w-[6px] h-[6px] rounded-full top-[2px]  bg-[#E38035] "></div>
            <p className="text-xs  text-white uppercase">Select Quantity</p>
          </div>
        </div>
        <div className="w-[21rem] h-[21rem]   absolute -left-5 -bottom-5 rounded-full bg-transparent outline-dotted outline-white"></div>
        <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center absolute -top-1 left-48">
          <span className="text-black text-xl">16</span>
        </div>
        <div className="w-14 h-14 rounded-full bg-white flex justify-center items-center absolute top-36 right-1">
          <span className="text-black text-xl">32</span>
        </div>
        <svg
          width="350"
          height="321"
          viewBox="0 0 434 321"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-rotate-[35deg]"
        >
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="20%" stopColor="#000000" />
              <stop offset="80%" stopColor="rgba(60, 63, 73, 0.9)" />
            </linearGradient>
          </defs>
          <path
            d="M160.5 320.5C72.1344 320.5 0.5 248.866 0.5 160.5C0.5 72.1344 72.1344 0.5 160.5 0.5C231.353 0.5 291.506 55.0178 312.523 120.662C316.752 133.869 328.399 144 342.347 144H347.855C351.608 144 355.22 142.568 357.954 139.997L362.972 135.277C383.362 116.098 416.471 121.968 429.026 146.987C434.95 158.794 434.95 172.706 429.026 184.513C416.471 209.532 383.362 215.402 362.972 196.223L357.954 191.503C355.22 188.932 351.608 187.5 347.855 187.5H342.347C328.398 187.5 316.785 197.652 312.43 210.812C291.341 274.529 231.288 320.5 160.5 320.5Z"
            stroke="none"
            fill="url(#gradient1)"
          />
        </svg>

        <div className=" absolute bottom-32 left-28 text-white ">
          <div className="relative ">
            <span className="text-5xl font-light">20</span>
            <span>.80</span>
            <span className="text-opacity-50 text-white absolute top-0 -right-3">
              USD
            </span>
          </div>
          <p className="text-sm font-light">24 Units</p>
          <div className="flex items-center gap-1">
            <div className="w-[6px] h-[6px] rounded-full top-[2px]  bg-[#E38035] "></div>
            <p className="text-sm font-light text-[#E38035]">Cookies</p>
          </div>
        </div>
        <div className="w-14 h-14 rounded-full bg-black flex justify-center items-center absolute top-[54px] right-[29px]">
          <span className="text-white text-xl">24</span>
        </div>
      </div>
    </div>
  );
};

export default SelectQuantityShape;
