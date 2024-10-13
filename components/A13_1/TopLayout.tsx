import { ChevronLeft, EllipsisVertical } from "lucide-react";
import React from "react";

const TopLayout = () => {
  return (
    <div className="flex text-white items-center px-5">
      <ChevronLeft size={35} color="white" strokeWidth={1.5}></ChevronLeft>
      <div className="flex text-xl flex-1 justify-center gap-5">
        <div className=" flex flex-col items-center font-medium">
          <p className="">For You</p>
          <div className="w-5 h-[0.158rem] rounded-full bg-white mt-1"></div>
        </div>
        <div className=" flex flex-col items-center font-medium">
          <p className="text-white/70">Nearby</p>
        </div>
      </div>
      <EllipsisVertical size={30} color="white"></EllipsisVertical>
    </div>
  );
};

export default TopLayout;
