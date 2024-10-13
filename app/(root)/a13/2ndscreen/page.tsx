import MatchesPictureMasonry from "@/components/A13_2/MatchesPictureMasonry";
import ProfileCard from "@/components/A9_1/ProfileCard";
import ProfileCard2 from "@/components/A9_1/ProfileCard2";
import { matchName2 } from "@/constant";
import { ChevronLeft, Heart, RotateCcw, X, Zap } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="text-white">
      <div className="flex w-full  items-center  ">
        <Image
          alt="filter icon"
          src="/assets/filter-a9.svg"
          width={27}
          height={27}
        ></Image>
        <div className="flex-1 flex justify-center">
          <p className="text-xl font-medium ">My matches</p>
        </div>
        <div className="relative w-12 h-12  rounded-full overflow-hidden   bg-profile-face bg-[center] bg-no-repeat bg-[length:50px_50px]"></div>
      </div>
      <p className="mt-5  font-medium">
        Likes <span className="text-white/50  font-medium">&nbsp;28</span>
      </p>
      <div className="flex mt-3 overflow-x-scroll gap-2 scrollbar-hide ">
        {matchName2.map((match, index) => (
          <div className="flex flex-col items-center">
            <div
              className={`rounded-full bg-trasnparent  p-[2px] border-2 ${
                index === 0 || index === 3
                  ? `border-[#d64141]`
                  : `border-transparent`
              }`}
            >
              <div className=" w-[60px] h-[60px] rounded-full overflow-hidden   bg-profile-face bg-[center] bg-no-repeat bg-[length:60px_60px]"></div>
            </div>
            <div className=" text-sm font-medium flex items-center gap-2 ">
              {match.name}
              {(index === 0 || index === 3) && (
                <div className="w-[5px] h-[5px] rounded-full bg-[#D0FB95]  "></div>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-5  font-medium">
        Matches <span className="text-white/50  font-medium">&nbsp;15</span>
      </p>
      <div className=" h-[30rem] overflow-y-scroll scrollbar-hide mt-2">
        <MatchesPictureMasonry></MatchesPictureMasonry>
      </div>
      <div className="flex justify-evenly gap-7 mt-5">
        <Image
          alt="home icon"
          src="/assets/home-white-a13.svg"
          width={28}
          height={28}
        ></Image>

        <Image
          alt="compass icon"
          src="/assets/compass-white-a13.svg"
          width={28}
          height={28}
          className="opacity-40"
        ></Image>

        <Image
          alt="documents icon"
          src="/assets/documents-transparent.svg"
          width={28}
          height={28}
          className="opacity-40"
        ></Image>

        <Image
          alt="chat icon"
          src="/assets/chat-unread-white-a13.svg"
          width={28}
          height={28}
          className="opacity-40"
        ></Image>
      </div>
    </div>
  );
};

export default page;
