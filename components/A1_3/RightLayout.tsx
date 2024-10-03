import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const RightLayout = () => {
  return (
    <div className="right-layout-a3-shape bg-white ">
      <div className="absolute  right-7 bottom-[3%]    z-10 text-black  font-modularAmplitude text-3xl ">
        <div className=" flex flex-col justify-center items-end ">
          <p className="h-6 w-1 bg-black mt-2 -skew-y-[40deg]  "></p>
          <p className="h-12 w-1 bg-[#787677] mt-2 -skew-y-[40deg]  "></p>
          <p className="h-32 w-1 bg-black mt-2 -skew-y-[40deg]  "></p>
          <Button className="  mt-3 p-0 h-12 w-12 flex items-center justify-center rounded-xl bg-[#B3EF1B] focus:bg-[#B3EF1B]  border-none drop-shadow-[0_5px_2px_rgba(0,0,0,0.5)]">
            <Image
              src="/assets/antenna.svg"
              alt="Antenna"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightLayout;
