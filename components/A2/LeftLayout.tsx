import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const LeftLayout = () => {
  return (
    <div className="left-layout-a2-shape bg-black bg-opacity-50 backdrop-brightness-150 backdrop-blur-md ">
      <div className="absolute bottom-1/4 right-40 mr-2  text-2xl z-10 text-white  font-modularAmplitude ">
        2<br />
        0<br />
        2<br />4
      </div>
      <Button className="absolute bottom-16 right-36 mr-2 p-0 h-10 w-10 flex items-center justify-center rounded-xl bg-[#B3EF1B] focus:bg-[#B3EF1B]  border-none drop-shadow-[0_5px_2px_rgba(0,0,0,0.5)]">
        <Image src="/assets/antenna.svg" alt="Antenna" width={24} height={24} />
      </Button>
    </div>
  );
};

export default LeftLayout;
