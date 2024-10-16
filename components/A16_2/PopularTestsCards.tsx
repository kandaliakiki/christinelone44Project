import { BellRing, Bookmark } from "lucide-react";
import Image from "next/image";
import React from "react";

const PopularTestsCards = () => {
  return (
    <div className="w-full overflow-x-scroll scrollbar-hide">
      <div className="pl-5 mt-5 flex gap-2 w-max">
        <div className="bg-white relative rounded-xl overflow-hidden w-max p-4 flex flex-col justify-between h-56">
          <div className="absolute w-max  -top-32 left-0">
            <Image
              alt="circular abstract background"
              src="/assets/circle-abstract-background-a16.svg"
              width={240}
              height={240}
              className="    "
            ></Image>
          </div>
          <div className="z-10  flex flex-col justify-between h-full">
            <p className="uppercase text-sm">20 questions</p>
            <div className="mb-10">
              <p className="uppercase font-bold">thought record</p>
              <p className="text-sm text-blue-500">
                Cognitive Behavioral Therapy
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm ">15 min</p>
                <p className="text-xs text-blue-500">to complete</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#C1DBF4]/50 flex items-center justify-center">
                <Bookmark size={18} color="#3b82f6"></Bookmark>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white relative rounded-xl overflow-hidden w-max p-4 flex flex-col justify-between h-56">
          <div className="absolute w-max  -bottom-32 left-0">
            <Image
              alt="circular abstract background"
              src="/assets/circle-abstract-background-a16_2.svg"
              width={300}
              height={300}
              className="    "
            ></Image>
          </div>
          <div className="z-10  flex flex-col justify-between h-full">
            <p className="uppercase text-sm">5 questions</p>
            <div className="mb-10">
              <p className="uppercase font-bold">mood diary</p>
              <p className="text-sm text-blue-500">
                Diealectical Behavioral Therapy
              </p>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm ">7 min</p>
                <p className="text-xs text-blue-500">to complete</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#C1DBF4]/50 flex items-center justify-center">
                <Bookmark size={18} color="#3b82f6"></Bookmark>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTestsCards;
