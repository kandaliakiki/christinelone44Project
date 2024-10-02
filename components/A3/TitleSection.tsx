import Image from "next/image";
import React from "react";

const TitleSection = () => {
  return (
    <>
      <div className="title-a3-shape">
        <div className="absolute z-10 text-black font-barlow text-base w-full  ">
          <div className="leading-none w-full pl-16 flex flex-col justify-start items-start   text-white">
            <p className="mt-3 text-4xl leading-none font-semibold">
              3D Art.<br></br>Sculpting. <br></br>
            </p>
            <p className="mt-1 leading-none text-sm">From zero to hero</p>
            <p className="leading-none text-right ml-28 text-sm">
              within 6 months
            </p>
            <div className="mt-2 flex justify-between w-full pr-5">
              <p className=" uppercase text-[#B3EF1B]">find more &#x2197;</p>
              <Image
                src="/assets/squares-2-black.svg"
                alt="squares"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
};

export default TitleSection;
