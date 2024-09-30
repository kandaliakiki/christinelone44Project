import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="custom-shape relative">
      <div className=" w-full">
        <div className="hero-container-shape">
          <div className=" -top-[10%] absolute z-20 ">
            <Image
              alt="angular head"
              src="/assets/angularhead1.png"
              width={400}
              height={600}
              className=""
            ></Image>
            <div className="image-blur  w-3/4 mx-auto"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
