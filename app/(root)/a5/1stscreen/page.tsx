import CookiesCardSection from "@/components/A5_1/CookiesCardSection";
import OffersSection from "@/components/A5_1/OffersSection";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex gap-3">
        <div className="w-12 h-12 rounded-full bg-white flex justify-center items-center">
          <div className="w-11 h-11  rounded-full  bg-profile-face bg-[center] bg-no-repeat bg-[length:50px_50px]"></div>
        </div>
        <div className="text-white -space-y-1">
          <p className="text-lg">James</p>
          <p className="font-light">Figueroa</p>
        </div>
      </div>

      <div className="flex justify-between mt-10">
        <div className="-space-y-1">
          <p className="text-5xl text-white font-light">Cookies</p>
          <p className="text-4xl font-light text-[#E38035]">Premium</p>
        </div>
        <p className="text-[#E38035] text-sm font-light self-end">See more</p>
      </div>

      <CookiesCardSection />
      <div className="flex justify-between mt-10">
        <div className="-space-y-1">
          <p className="text-5xl text-white font-light">Offers</p>
        </div>
        <p className="text-[#E38035] text-sm font-light self-end">See more</p>
      </div>
      <OffersSection />
    </div>
  );
};

export default page;
