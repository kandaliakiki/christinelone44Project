import MatchesPictureMasonry from "@/components/A9_3/MatchesPictureMasonry";
import { matchName } from "@/constant";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="text-white ">
      <div className="flex w-full items-center  ">
        <ChevronLeft color="white" size={35}></ChevronLeft>
        <div className="flex-1 flex justify-center">
          <p className="text-lg font-light">My Matches</p>
        </div>
        <Image
          alt="filter icon"
          src="/assets/filter-a9.svg"
          width={27}
          height={27}
        ></Image>
      </div>
      <p className="mt-5">
        Likes <span className="text-white/50  font-light">16</span>
      </p>
      <div className="flex mt-3 overflow-x-scroll gap-2 scrollbar-hide">
        {matchName.map((match) => (
          <div className="flex flex-col items-center">
            <div className=" w-[70px] h-[70px] rounded-full overflow-hidden   bg-profile-face bg-[center] bg-no-repeat bg-[length:70px_70px]"></div>
            <p className="font-light">{match.name}</p>
          </div>
        ))}
      </div>
      <p className="mt-5">
        Matches <span className="text-white/50  font-light">7</span>
      </p>
      <div className=" h-[30rem] overflow-y-scroll scrollbar-hide mt-5">
        <MatchesPictureMasonry></MatchesPictureMasonry>
      </div>
      <div className="flex justify-center gap-7 mt-2">
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
