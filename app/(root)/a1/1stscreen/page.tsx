import HeroCarousel from "@/components/A1_1/HeroCarousel";
import HeroSection from "@/components/A1_1/HeroSection";
import LeftAndRightLayout from "@/components/A1_1/LeftAndRightLayout";
import SocialMediaSection from "@/components/A1_1/SocialMediaSection";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <main>
      <div className="flex justify-between p-5 font-barlow ">
        <div>
          <h1 className="text-2xl text-white leading-none tracking-wide font-semibold">
            Online <span className="block">catalog</span>
          </h1>
          <p className=" text-sm mt-5 text-stone-400 leading-none">
            Use promocodes <br></br>for discounts
          </p>
        </div>
        <SocialMediaSection></SocialMediaSection>
      </div>
      <div className="fixed inset-0 flex items-center justify-center z-20">
        <HeroCarousel></HeroCarousel>
      </div>
      <div className="h-[60vh] w-full bg-transparent "></div>
      <div className="flex flex-col">
        <div className="flex gap-3 justify-center  items-center w-full mt-5">
          <p className="h-1 w-6 bg-[#444342] mt-5 -skew-x-[40deg] self-start "></p>
          <p className="h-1 w-12 bg-[#706D6C] mt-5 -skew-x-[40deg] self-start"></p>
          <p className="font-modularAmplitude text-5xl text-white mx-5">$79</p>
          <p className="h-1 w-12 bg-[#706D6C] mt-5 skew-x-[40deg] self-start"></p>
          <p className="h-1 w-6 bg-[#444342] mt-5 skew-x-[40deg] self-start"></p>
        </div>
        <div className="w-full px-5">
          <Button className="w-full h-11 mt-3 self-center bg-[#B3EF1B] text-black font-barlow font-bold rounded-lg text-xl">
            Purchase
          </Button>
        </div>
        <div className="flex justify-between px-5 font-barlow mt-5 text-xs">
          <p className="text-stone-400 ">All rights are reserved</p>
          <p className="text-white">2024</p>
        </div>
      </div>
    </main>
  );
};

export default page;
