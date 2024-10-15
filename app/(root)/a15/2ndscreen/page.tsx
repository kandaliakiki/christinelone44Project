import ChatSection from "@/components/A15_2/ChatSection";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="h-full">
      <div className="bg-white h-full rounded-t-3xl">
        <div className="px-5 flex pt-3   items-center">
          <div className="flex  items-center">
            <ChevronLeft size={20} color="black"></ChevronLeft>
            <p className="font-semibold">Chat</p>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center">
            <p className="font-bold">Peggie, 23</p>
            <p className="text-sm text-black/50">Online</p>
          </div>
          <div className="relative w-12 h-12  rounded-full overflow-hidden   bg-profile-face bg-[center] bg-no-repeat bg-[length:50px_50px]"></div>
        </div>
        <hr className="mt-2 border-t border-black/10 w-full" />
        <ChatSection />
        <hr className="mt-2 border-t border-black/10 w-full" />

        <div className="px-5 mt-2 flex gap-2">
          <div className=" h-14 pr-3 rounded-2xl bg-[#EAE8E7] backdrop-blur-sm flex flex-1">
            <input
              placeholder="Message "
              className="bg-transparent text-black/50 focus:outline-none   px-5 flex-1"
            ></input>
            <div className="flex gap-2">
              <Image
                alt="emoji icon"
                src="/assets/emoji-a15.svg"
                width={20}
                height={20}
              ></Image>
            </div>
          </div>
          <div className=" h-14 w-14 rounded-2xl bg-[#EAE8E7]  flex justify-center items-center ">
            <Image
              alt="attachment icon"
              src="/assets/attach-a15.svg"
              width={30}
              height={30}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
