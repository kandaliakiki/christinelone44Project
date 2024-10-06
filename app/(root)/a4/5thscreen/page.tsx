import HeroSection from "@/components/A4_5/HeroSection";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="flex items-center  justify-between mt-10">
        <div className="text-white text-5xl  leading-none ">
          <p>Glucose</p>
          <p>Measuring</p>
        </div>
        <div className="w-16 h-16 rounded-full border-white border-2 border-opacity-50 flex items-center justify-center">
          <Image
            alt="more"
            src="/assets/more.svg"
            width={40}
            height={40}
          ></Image>
        </div>
      </div>
      <HeroSection></HeroSection>
      <div className="flex justify-between text-white text-3xl mt-10">
        <p>Process</p>
        <p className="opacity-50">42%</p>
      </div>
      <div className=" relative w-full h-2 bg-white bg-opacity-55 rounded-full mt-4 mx-auto">
        <div className="absolute h-2 bg-white rounded-full w-[42%]"></div>
      </div>
      <div className="flex w-full   mt-10  ">
        <div className="bg-black  w-full  rounded-full  text-white flex p-2 items-center gap-5">
          <div className="text-5xl bg-[#DC5049] rounded-full  py-5 px-8 flex justify-center items-center">
            <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
              <X color="#DC5049"></X>
            </div>
          </div>
          <p className="text-xl flex-1 text-center ">Stop</p>
          <div className="flex -space-x-7">
            <ChevronRight
              size={42}
              strokeWidth={1.5}
              color="#4A4A4A"
            ></ChevronRight>
            <ChevronRight
              size={42}
              strokeWidth={1.5}
              color="#A7A7A7"
            ></ChevronRight>
            <ChevronRight
              size={42}
              strokeWidth={1.5}
              color="#CDCDCD"
            ></ChevronRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
