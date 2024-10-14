import {
  ChevronLeft,
  EllipsisIcon,
  EllipsisVertical,
  MoveLeft,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const TopLayout = () => {
  return (
    <div className="px-5">
      <div className="w-full flex gap-1">
        <div className="w-1/3 rounded-full bg-white h-1"></div>
        <div className="w-1/3 rounded-full bg-white/50 h-1"></div>
        <div className="w-1/3 rounded-full bg-white/50 h-1"></div>
      </div>
      <div className="flex text-white items-center mt-4">
        <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-white/15 backdrop-blur-lg">
          <MoveLeft size={20} color="white"></MoveLeft>
        </div>

        <div className="flex flex-1 justify-center  ">
          <div className="flex items-center text-sm px-3 py-2 gap-2 rounded-full bg-red-500 bg-gradient-to-bl from-[#e84545] from-5% to-[#febf44] ">
            <Image
              alt="linked icon"
              src="/assets/linked-white-a14.svg"
              width={20}
              height={20}
            ></Image>
            <p>94%</p>
          </div>
        </div>
        <div className=" w-10 h-10 rounded-full flex justify-center items-center bg-white/15 backdrop-blur-lg ">
          <EllipsisIcon size={20} color="white"></EllipsisIcon>
        </div>
      </div>
    </div>
  );
};

export default TopLayout;
