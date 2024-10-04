import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const LeftLayout = () => {
  return (
    <div className="left-layout-a3-shape bg-white ">
      <div className="absolute top-[22%] left-8  mr-2   z-10 text-black  font-modularAmplitude text-3xl ">
        <Image
          src="/assets/squares-3.svg"
          alt="squares"
          width={36}
          height={36}
        />
      </div>
    </div>
  );
};

export default LeftLayout;
