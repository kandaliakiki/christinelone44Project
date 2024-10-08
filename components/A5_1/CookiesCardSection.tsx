import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const CookiesCardSection = () => {
  return (
    <div className="flex gap-5 mt-5">
      <div className="relative w-1/2 flex flex-col">
        <Image
          alt="cookie "
          src="/assets/cookie.png"
          width={150}
          height={150}
          className="  top-0 self-center z-20"
        ></Image>
        <div className="pr-3 pl-4 pt-10 pb-3 rounded-xl rounded-br-[5rem] bg-[#363841] -mt-9">
          <p className="text-white text-2xl font-light leading-none">
            Chocolate Chips
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
          <p className="text-white text-lg mt-3">20 USD</p>
          <div className="w-11 h-11 bg-black rounded-full flex justify-center items-center absolute bottom-2 right-0">
            <MoveRight color="white"></MoveRight>
          </div>
        </div>
      </div>
      <div className="relative w-1/2 flex flex-col">
        <Image
          alt="cookie "
          src="/assets/cookie.png"
          width={150}
          height={150}
          className="  top-0 self-center z-20"
        ></Image>
        <div className="pr-3 pl-4 pt-10 pb-3 rounded-xl rounded-br-[5rem] bg-[#363841] -mt-9">
          <p className="text-white text-2xl font-light leading-none">
            Oatmeal with raisins
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
          <p className="text-white text-lg mt-3">16 USD</p>
          <div className="w-11 h-11 bg-black rounded-full flex justify-center items-center absolute bottom-2 right-0">
            <MoveRight color="white"></MoveRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesCardSection;
