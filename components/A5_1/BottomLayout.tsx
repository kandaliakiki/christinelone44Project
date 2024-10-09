import Image from "next/image";
import React from "react";

const BottomLayout = () => {
  return (
    <div className="fixed w-screen -bottom-8 left-0 h-24 bg-[#141519] px-4 rounded-[2.8rem] flex">
      <div className="relative  w-full h-full ">
        <div className="absolute -translate-y-1/4 flex justify-center gap-10 w-full h-full">
          <div className="flex h-full flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#363841] flex justify-center items-center">
              <Image
                alt="home icon"
                src="/assets/home-a5.svg"
                width={30}
                height={30}
              ></Image>
            </div>
            <p className="text-sm text-[#E38035] text-center mt-1">Home</p>
          </div>
          <div className="-translate-y-1 flex h-full flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-[#363841] flex justify-center items-center">
              <Image
                alt="search icon"
                src="/assets/search.svg"
                width={30}
                height={30}
              ></Image>
            </div>
            <p className="text-sm text-[#53555D] text-center">Search</p>
          </div>
          <div className="flex h-full flex-col items-center -ml-1">
            <div className="w-12 h-12 rounded-full bg-[#363841] flex justify-center items-center">
              <Image
                alt="home icon"
                src="/assets/premium.svg"
                width={25}
                height={25}
              ></Image>
            </div>
            <p className="text-sm text-[#53555D]  mt-1">Premium</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomLayout;
