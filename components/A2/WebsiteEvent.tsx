import Image from "next/image";
import React from "react";

const WebsiteEvent = () => {
  return (
    <div className=" custom-shape">
      <div className="website-event-shape text-center flex flex-col items-center">
        <div className=" mt-3">
          <Image
            src="/assets/globe-stretched.png"
            alt="globe"
            width={100}
            height={24}
          />
        </div>
        <div className="  font-barlow font-semibold text-4xl text-[#B3EF1B] -mb-2 mt-5">
          IVWA
        </div>
        <div className="  font-barlow font-semibold text-4xl text-white ">
          EVENT
        </div>
        <div className=" mt-1">
          <Image
            src="/assets/squares-2.svg"
            alt="globe"
            width={20}
            height={20}
          />
        </div>
        <div className=" uppercase mt-5 text-left font-barlow leading-none text-lg text-[#B3EF1B]">
          go to <br></br> website &#x2197;
        </div>
      </div>
    </div>
  );
};

export default WebsiteEvent;
