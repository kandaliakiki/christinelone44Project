import ProfileCard from "@/components/A9_1/ProfileCard";
import { ChevronLeft, Home } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex w-full text-white items-center  ">
        <ChevronLeft color="white" size={35}></ChevronLeft>
        <div className="flex-1 flex justify-center">
          <p className="text-lg font-light">Emily Thomson</p>
        </div>
        <Image
          alt="filter icon"
          src="/assets/filter-a9.svg"
          width={27}
          height={27}
        ></Image>
      </div>
      <div className="flex justify-center mt-10">
        <ProfileCard></ProfileCard>
      </div>
      <div className="text-white mt-8 px-3">
        <p>About</p>
        <p className="text-white/50 font-light">
          I love romantic adventures, ready to be a navigator or a true ally.
        </p>
      </div>
      <div className="flex justify-center gap-7 mt-5">
        <Image
          alt="home icon"
          src="/assets/home-a5.svg"
          width={45}
          height={45}
        ></Image>

        <Image
          alt="love icon"
          src="/assets/oval-love-a9.svg"
          width={35}
          height={35}
        ></Image>

        <Image
          alt="chat icon"
          src="/assets/chat-round-a9.svg"
          width={32}
          height={32}
        ></Image>

        <Image
          alt="compass icon"
          src="/assets/compass-a9.svg"
          width={35}
          height={35}
        ></Image>
      </div>
    </div>
  );
};

export default page;
