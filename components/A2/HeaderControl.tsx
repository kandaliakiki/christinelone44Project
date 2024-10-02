import React from "react";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

const HeaderControl = () => {
  return (
    <div className="flex w-full justify-between px-6 mt-14">
      <Button className="  mr-2 p-0 h-10 w-10 flex items-center justify-center rounded-xl bg-white focus:bg-white  border-none drop-shadow-[0_3px_2px_rgba(0,0,0,0.5)]">
        <ChevronLeft className="text-black" />
      </Button>
      <Button className=" mr-2 p-0 h-10 w-10 flex items-center justify-center rounded-xl bg-[#B3EF1B] focus:bg-[#B3EF1B]  border-none drop-shadow-[0_5px_2px_rgba(0,0,0,0.5)]">
        <Image src="/assets/profile.svg" alt="Antenna" width={24} height={24} />
      </Button>
    </div>
  );
};

export default HeaderControl;
