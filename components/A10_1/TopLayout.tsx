import Image from "next/image";
import React from "react";

const TopLayout = () => {
  return (
    <div className="text-white">
      <div className="flex w-full items-center justify-center  relative">
        <div className=" flex justify-center gap-2">
          <div className="h-10 px-3 flex justify-center items-center rounded-2xl bg-black/20 backdrop-blur-md backdrop-brightness-150">
            <p className="text-sm">For you</p>
          </div>
          <div className="h-10 px-3 flex justify-center items-center rounded-2xl bg-black/50 backdrop-blur-md backdrop-brightness-125">
            <p className="text-sm text-white/50">Nearby</p>
          </div>
        </div>
        <div className="absolute right-0 w-12 h-12 rounded-2xl flex justify-center items-center bg-black/50 backdrop-blur-md backdrop-brightness-125">
          <Image
            alt="cards icon"
            src="/assets/documents-transparent.svg"
            width={30}
            height={30}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default TopLayout;
