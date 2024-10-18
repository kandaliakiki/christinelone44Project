import React from "react";
import CustomCircleContainer from "./CustomCircleContainer";
import Image from "next/image";
import { Search } from "lucide-react";

const TopLayout = () => {
  return (
    <div className="px-5">
      <div className="flex justify-between">
        <div className="w-10 h-10 rounded-full border border-[#0b0105] flex justify-center items-center">
          <Image
            alt="menu icon"
            src="/assets/menu-a17.svg"
            width={16}
            height={16}
          ></Image>
        </div>
        <div className="flex">
          <div className=" w-10 h-10 relative  flex justify-center items-center gap-2 overflow-hidden">
            <div className="w-10 h-10 rounded-full  bg-white absolute  left-1 flex justify-center items-center">
              <Search size={20} color="#0b0105"></Search>
            </div>
          </div>
          <div className=" w-10 h-10 relative  flex justify-center items-center gap-2 overflow-hidden">
            <div className="w-10 h-10 rounded-full  bg-white absolute  right-1 flex justify-center items-center">
              <Image
                alt="notification icon"
                src="/assets/notification-bell-a17.svg"
                width={16}
                height={16}
              ></Image>
            </div>
          </div>
        </div>
        {/* <CustomCircleContainer></CustomCircleContainer> */}
      </div>
    </div>
  );
};

export default TopLayout;
