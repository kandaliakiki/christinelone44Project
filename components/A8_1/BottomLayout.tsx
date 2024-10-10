import Image from "next/image";
import React from "react";

const BottomLayout = () => {
  return (
    <div className="fixed bottom-7 left-1/2 transform -translate-x-1/2  px-16 py-2 rounded-full bg-white flex gap-4 items-center justify-center ">
      <Image
        alt="home icon"
        src="/assets/home-a8.svg"
        width={24}
        height={24}
        className=""
      ></Image>

      <div className="w-11 h-11 rounded-full bg-black flex flex-shrink-0 justify-center items-center">
        <Image
          alt="cards icon"
          src="/assets/documents.svg"
          width={24}
          height={24}
          className=""
        ></Image>
      </div>
      <Image
        alt="home icon"
        src="/assets/heart-a8.svg"
        width={24}
        height={24}
        className=""
      ></Image>
      <Image
        alt="home icon"
        src="/assets/gear-a8.svg"
        width={24}
        height={24}
        className=""
      ></Image>
    </div>
  );
};

export default BottomLayout;
