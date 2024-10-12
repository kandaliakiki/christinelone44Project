import CustomShapeButton from "@/components/A12_1/CustomShapeButton";
import HeroSection from "@/components/A12_1/HeroSection";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="relative  mt-5 overflow-hidden flex justify-center   w-full   ">
        <div className=" w-max scale-125 ">
          <HeroSection></HeroSection>
        </div>
      </div>
      <p className="text-white uppercase text-5xl px-5 leading-tight mt-5 ">
        <span className="text-[#76EEF2]">
          your <br />
          person
        </span>{" "}
        is
        <br /> near
        <br />
      </p>
      <div className="absolute right-10 bottom-20">
        <CustomShapeButton />
        <Image
          alt="radar icon"
          src="/assets/radar.svg"
          width={50}
          height={50}
          className="absolute inset-0 m-auto"
        ></Image>
      </div>
    </div>
  );
};

export default page;
