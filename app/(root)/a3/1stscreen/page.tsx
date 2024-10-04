import HeroSection from "@/components/A3_1/HeroSection";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="text-white">
      <HeroSection></HeroSection>
      <div className="relative uppercase text-white w-full  mt-10 px-3 font-light font-roboto ">
        <p className="text-[54px]  leading-none ">
          t<span className="blur-[2px]">he</span> f
          <span className="blur-[2px]">uture</span> <br></br> is here
        </p>
        <p className="uppercase text-[10px] absolute bottom-2 right-14 ">
          empowerment
        </p>
        <Image
          alt="barcode"
          src="/assets/barcode.svg"
          width={80}
          height={80}
          className="absolute bottom-4 right-3"
        ></Image>
      </div>
      <div className="px-3  ">
        <Button className="w-full font-roboto font-light mt-5 rounded-full h-11 uppercase text-white text-lg bg-red-700 py-5 ">
          see other products
        </Button>
      </div>
    </div>
  );
};

export default page;
