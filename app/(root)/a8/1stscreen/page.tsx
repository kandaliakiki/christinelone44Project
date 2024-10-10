import ProfileCard from "@/components/A8_1/ProfileCard";
import { Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="flex justify-between bg-red-20 items-center px-5">
        <div className="w-14 h-14 relative rounded-full bg-white/30 flex items-center justify-center">
          <Image
            alt="conversation icon"
            src="/assets/conversation.svg"
            width={25}
            height={25}
          ></Image>
          <div className="absolute top-0 right-0 w-4 h-4 rounded-full bg-black text-white text-xs flex items-center justify-center">
            3
          </div>
        </div>
        <div className="flex justify-center -space-x-3">
          <div className="w-14 h-14 relative rounded-full bg-white/30 flex items-center justify-center">
            <Plus size={30} color="white"></Plus>
          </div>
          <div className="relative w-14 h-14  rounded-full overflow-hidden   bg-profile-face bg-[center] bg-no-repeat bg-[length:55px_55px]"></div>
        </div>
      </div>
      <h1 className="text-[2.6rem] text-white font-medium text-center mt-5">
        Selection For You
      </h1>
      <div className="relative  mt-5 overflow-hidden flex justify-center   w-full  space-x-4 ">
        <div className="w-max flex gap-7 top-0 items-end ">
          <ProfileCard isActive={false} position="left" />
          <ProfileCard isActive={true} />
          <ProfileCard isActive={false} position="right" />
        </div>
      </div>
    </div>
  );
};

export default page;
