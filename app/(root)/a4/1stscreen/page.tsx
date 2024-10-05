import HeroSection from "@/components/A4_1/HeroSection";
import { ChevronRight } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <div className="font-montserrat ">
        <h1 className="px-7 mt-10 text-white font-light text-xl leading-65">
          NS arms you with the tools <br></br> to understand what makes your
          body tick and help you make changes that work for you.
        </h1>
        <div className="flex w-full  px-5 mt-10  ">
          <div className="bg-black  w-full  rounded-full  text-white flex p-2 items-center gap-5">
            <div className="text-5xl bg-[#DC5049] rounded-full  p-2">NS</div>
            <p className="text-xl ">Get Started</p>
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

          {/* <div className="w-40 h-40 bg-white rounded-full"></div> */}
        </div>
      </div>
    </div>
  );
};

export default page;
