import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const TopLayout = () => {
  return (
    <div className="text-white">
      <div className="px-2 flex  mt-5 gap-3">
        <div className="w-16 h-16 bg-[#595959] rounded-full flex items-center justify-center">
          <p className="text-3xl font-light">NS</p>
        </div>
        <div className="w-16 h-16 bg-[#595959] rounded-full flex items-center justify-center">
          <Image
            alt="menu-icon"
            src="/assets/menu-a4.svg"
            width={32}
            height={32}
          ></Image>
        </div>
        <div className="h-16 flex-1 bg-[#595959]  rounded-full flex items-center gap-6 text-lg  px-5 font-light">
          <p>Home</p>
          <div className="flex-1 h-[2px] bg-gradient-to-r from-white to-transparent rounded-full"></div>
          <p>How it Works</p>
          <p>Our Nutrinitionist</p>

          <p>Journal</p>
        </div>
        <div className="bg-white  rounded-full h-16  focus:bg-white px-8 flex justify-center items-center">
          <p className=" uppercase text-lg tracking-tighter font-semibold text-black">
            Get Started
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopLayout;
