import HeroSection from "@/components/A6_1/HeroSection";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center">
      <HeroSection></HeroSection>
      <div className="text-5xl  uppercase mt-12 flex gap-1">
        <span>With</span>
        <span className="rounded-lg bg-[#E33E3C] text-white px-1 ">people</span>
      </div>
      <p className="text-5xl  uppercase"> all over the world</p>

      <p className="font-sfProDisplay mt-3 text-[#A6ADA5] leading-none ">
        Talk to strangers about my candid remarks that I've never told anyone
      </p>
      <div className="flex gap-2 font-sfProDisplay text-white w-full mt-8 ">
        <div className="rounded-2xl p-3 bg-[#0E2432] flex justify-center items-center">
          <Image
            alt="apple logo"
            src="/assets/applelogo.svg"
            width={30}
            height={30}
          ></Image>
        </div>
        <div className="flex-1 rounded-2xl p-3 bg-[#e33e3c] flex justify-between items-center">
          <p>Get started</p>
          <ArrowUpRight size={30} color="white"></ArrowUpRight>
        </div>
      </div>
    </div>
  );
};

export default page;
