import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const OffersSection = () => {
  return (
    <div className="relative w-full ">
      <div className="pr-3 pl-4 py-3 flex gap-2 items-center rounded-xl rounded-br-[5rem] bg-[#363841] mt-2">
        <Image
          alt="cookie "
          src="/assets/cookie.png"
          width={100}
          height={100}
          className="   self-center z-20"
        ></Image>
        <div className=" w-1/3 ml-2">
          <p className="text-white text-xl font-light leading-none">
            Double Chocolate
          </p>
          <div className="flex  items-center gap-2 mt-1">
            <Image
              alt="premium icon"
              src="/assets/premium-orange.svg"
              width={15}
              height={15}
            ></Image>
            <p className="uppercase text-sm text-[#E38035] mt-1">Premium</p>
          </div>
        </div>
        <div className="font-semibold mt-5">
          <p className="text-white text-opacity-50 line-through line text-lg ">
            20 USD
          </p>
          <p className="text-white text-lg ">12 USD</p>
        </div>

        <div className="w-11 h-11 bg-black rounded-full flex justify-center items-center absolute bottom-2 -right-1">
          <MoveRight color="white"></MoveRight>
        </div>
      </div>
    </div>
  );
};

export default OffersSection;
