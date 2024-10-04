import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center mt-5  font-roboto ">
      <Image
        alt="hero-image"
        src="/assets/a3-background-6.png"
        width={390}
        height={390}
        className=" mt-5   scale-y-[1.125] "
      ></Image>
      <div className="absolute top-20 -left-5  text-black rotate-90">
        <p className="uppercase  text-xs font-medium">empowerment</p>
      </div>
      <div className="absolute top-40 left-5  text-black">
        <p className="uppercase text-[#626262] leading-none text-xs">watch</p>
        <p className="uppercase  text-3xl font-medium">demo</p>
      </div>
      <div className="absolute top-20 -right-8  text-black rotate-90">
        <p className="uppercase  text-xs font-medium">apple vision pro</p>
      </div>
      <div className="absolute top-40 right-5  text-black">
        <p className="uppercase text-[#626262] leading-none text-xs">check</p>
        <p className="uppercase  text-3xl font-medium">gallery</p>
      </div>
      <div className="absolute top-[315px] right-[86px] text-left text-sm font-medium">
        <div className="uppercase text-black leading-none">
          <p>available on</p>
          <p>preorder</p>
        </div>
      </div>
      <div className="absolute top-[340px] left-1  text-black rotate-90">
        <p className="uppercase  text-[10px] font-medium">2953we</p>
      </div>
      <div className="absolute bottom-52 left-5  text-black">
        <p className="uppercase text-[#626262] leading-none text-xs">main</p>
        <p className="uppercase  text-3xl font-medium">features</p>
      </div>
      <div className="absolute bottom-32 -left-3  text-black rotate-90">
        <p className="uppercase  text-xl font-medium">29531ee</p>
      </div>
      <div className="absolute top-[55%] right-20 leading-none text-sm text-black font-bold">
        <p className="uppercase ">new arrivals</p>
        <div className="flex justify-center items-center ">
          <p>02</p>
          <div className="w-full h-[2px] bg-[#CFCFCF] mx-2"></div>
        </div>
      </div>
      <div className="absolute bottom-[35%] -right-10  text-black rotate-90">
        <p className="uppercase  text-xs font-medium">boston dynamics spot</p>
      </div>
      <Image
        alt="barcode"
        src="/assets/barcode-black.svg"
        width={120}
        height={120}
        className="absolute bottom-20 right-7 translate-x-10 -scale-y-75 scale-x-[0.35]"
      ></Image>
      <div className="absolute bottom-10 right-5  text-black">
        <p className="uppercase text-[#626262] leading-none text-xs">main</p>
        <p className="uppercase  text-3xl font-medium">features</p>
      </div>
      <div className="absolute bottom-3 right-36  text-black">
        <p className="uppercase  text-[10px] font-medium">2953we</p>
      </div>
      <div className="absolute -bottom-5 right-5 flex flex-col items-center justify-center w-12 h-12 bg-[#FA2B2D]  rounded-full">
        <p className="text-4xl font-regular  text-white leading-none">
          &#x2197;
        </p>
      </div>
      {/* batasnya disini */}
    </div>
  );
};

export default HeroSection;
