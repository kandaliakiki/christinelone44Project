import { angular3DHeadButtons } from "@/constant";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="custom-shape relative">
      <div className=" w-full">
        <div className="hero-container-shape">
          <div className="  z-10 -translate-y-16 ">
            <div className="  relative w-full ">
              <Image
                alt="angular head"
                src="/assets/angularhead1.png"
                width={300}
                height={400}
                className=""
              ></Image>
              <div className="image-blur  w-3/4 mx-auto "></div>
            </div>

            <p
              className="text-center font-barlow font-bold text-4xl leading-none
             text-black mt-5 uppercase"
            >
              angular <br></br> 3D Head
            </p>

            <div className="flex gap-1   mt-10 justify-center items-center">
              {angular3DHeadButtons.map((button, index) => (
                <Image
                  key={index}
                  src={button.imageUrl}
                  alt={`Button ${index}`}
                  width={32}
                  height={32}
                  className="mx-2"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
