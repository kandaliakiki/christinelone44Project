import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center mt-5  font-roboto t">
      <Image
        alt="hero-image"
        src="/assets/hero-a3-background_1.png"
        width={370}
        height={370}
      ></Image>
      <div className="absolute top-0 right-20 leading-none text-sm text-[#E5E5E5]">
        <p className="uppercase ">two thousand</p>
        <div className="flex justify-center items-center">
          <p>23</p>
          <div className="w-full h-[2px] bg-[#626262] mx-2"></div>
        </div>
      </div>
      <div className="absolute top-20 left-12  text-black">
        <p className="uppercase text-[#626262] leading-none text-xs">unique</p>
        <p className="uppercase  text-3xl font-medium">ideas</p>
      </div>
      <div className="absolute top-44 left-10  text-black">
        <p className="uppercase  text-sm font-medium">w9737</p>
      </div>
      <div className="absolute top-20 right-0  text-black rotate-90">
        <p className="uppercase  text-xl font-medium">29531</p>
      </div>
      <div className="absolute bottom-56 -right-5  text-[#A5A5A5] rotate-90">
        <p className="uppercase  text-xs font-medium">the future</p>
      </div>
      <div className="absolute bottom-28 right-6  text-right text-sm">
        <div className="uppercase text-[#8D8D8D] leading-none">
          <p>preorder</p>
          <p>is available</p>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 text-black text-right text-6xl font-normal uppercase  leading-none">
        <p>tech</p>
      </div>
      <div className="absolute bottom-14 left-9  text-black">
        <p className="uppercase  text-[10px] font-medium">2953we</p>
      </div>
      <div className="absolute bottom-0 left-[85px]  text-[#A5A5A5]">
        <p className="uppercase  text-xs font-medium">true quality</p>
      </div>
      <div className="absolute top-32">
        <Image
          alt="cube"
          src="/assets/cube-hero.png"
          width={340}
          height={340}
        ></Image>
      </div>
    </div>
  );
};

export default HeroSection;
