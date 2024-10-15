import { ArrowUpRight, MoveUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center  h-full overflow-hidden">
      <div className="w-max  relative ml-14 -mb-12">
        <Image
          alt="heart logo"
          src="/assets/heart-hero-a15.png"
          width={550}
          height={550}
        ></Image>
      </div>
      <div className="px-5 w-64 self-start">
        <h1 className="text-4xl font-bold leading-none">
          Embrace <br></br>a New Way <br></br>Of Dating
        </h1>
        <h2 className="mt-5 text-black/50 ">
          We combine cutting-edge technologies with a modern approach to
          matchmaking
        </h2>
        <div className="h-10 w-max px-3 mt-5 rounded-xl flex gap-2 justify-center items-center bg-[#F2681B]">
          <p className="text-white text-sm">Get Started</p>
          <ArrowUpRight size={20} color="white"></ArrowUpRight>
        </div>
      </div>
    </div>
  );
};

export default page;
