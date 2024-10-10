import AudioWaveForm from "@/components/A7_2/AudioWaveForm";
import {
  Check,
  CheckCheck,
  ChevronLeft,
  EllipsisVertical,
  Play,
  Plus,
  Send,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="w-screen -top-3 bg-white h-24 rounded-[2rem] rounded-t-none fixed flex items-center">
        <div className="flex  items-center mt-5 w-full">
          <div className="flex justify-between items-center w-full gap-2">
            <ChevronLeft size={30} />
            <div className="relative w-12 h-12  rounded-full overflow-hidden  self-center mt-1 bg-profile-face bg-[center] bg-no-repeat bg-[length:50px_50px]"></div>
            <div className="-space-y-1 flex-1 w-full ">
              <p className="text-xl font-bold">Dianne Russell</p>
              <p className="font-sfProDisplay font-semibold text-[#E33E3C]">
                Online
              </p>
            </div>
            <EllipsisVertical size={30} className="mr-5" />
          </div>
        </div>
      </div>
      <div className="px-5">
        <div className="flex mt-16 gap-2 items-end ">
          <div className="relative w-10 h-10  rounded-full overflow-hidden  mt-1 bg-profile-face bg-[center] bg-no-repeat bg-[length:40px_40px]"></div>
          <div className="py-3 w-64 rounded-2xl rounded-bl-lg bg-[#0E2432] p-4 space-y-1 ">
            <h2 className="text-lg  text-[#e33e3c]">Dianne Russell</h2>
            <p className="font-sfProDisplay  text-white leading-tight">
              Hey there! I stumbled upon your profile and couldn't resist saying
              hi. How's it going ?
            </p>
            <p className="font-sfProDisplay text-white/50 text-sm ">05:12</p>
          </div>
        </div>
        <div className="flex mt-5 gap-2 items-end justify-end ">
          <div className="py-3 w-64 rounded-2xl rounded-br-lg bg-white p-4 space-y-1 ">
            <h2 className="text-lg  text-[#e33e3c]">Kathryn Murphy</h2>
            <p className="font-sfProDisplay  text-black leading-tight">
              Hi! I'm doing well, just relaxing after a long day. How about you?
            </p>
            <div className="flex w-full justify-end  items-center gap-1">
              <p className="font-sfProDisplay  text-black/50 text-sm ">05:16</p>
              <CheckCheck color="#e33e3c" size={20}></CheckCheck>
            </div>
          </div>
          <div className="relative w-10 h-10  rounded-full overflow-hidden  mt-1 bg-profile-face bg-[center] bg-no-repeat bg-[length:40px_40px]"></div>
        </div>
        <div className="flex mt-5 gap-2 items-end ">
          <div className="relative w-10 h-10  rounded-full overflow-hidden  mt-1 bg-profile-face bg-[center] bg-no-repeat bg-[length:40px_40px]"></div>
          <div className="py-2 w-64 rounded-2xl rounded-bl-lg bg-[#e33e3c] p-4  relative ">
            <div className="flex justify-between items-center">
              <h2 className="text-lg  text-white">Dianne Russell</h2>
              <p className="font-sfProDisplay text-white/50 text-sm ">
                00:15/00:26
              </p>
            </div>
            <div className="flex w-full justify-center items-center ml-5 mt-3">
              <AudioWaveForm></AudioWaveForm>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-sfProDisplay text-white/50 text-sm ">05:17</p>
              <div className="w-10 h-10 rounded-2xl bg-white flex justify-center items-center">
                <Image
                  alt="play icon "
                  src="/assets/play.svg"
                  width={20}
                  height={20}
                ></Image>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5 gap-2 items-end justify-end ">
          <div className="py-3 w-64 rounded-2xl rounded-br-lg bg-white p-4 space-y-1 ">
            <h2 className="text-lg  text-[#e33e3c]">Kathryn Murphy</h2>
            <p className="font-sfProDisplay  text-black leading-tight">
              Absolutely! I love hiking. One of my favorite trails is the
              Cascade Falls trail.
            </p>
            <div className="flex w-full justify-end  items-center gap-1">
              <p className="font-sfProDisplay  text-black/50 text-sm ">05:16</p>
              <Check color="#e33e3c" size={20}></Check>
            </div>
          </div>
          <div className="relative w-10 h-10  rounded-full overflow-hidden  mt-1 bg-profile-face bg-[center] bg-no-repeat bg-[length:40px_40px]"></div>
        </div>
      </div>

      <div className="flex px-2  justify-center  gap-2 mt-7">
        <div className="w-12 h-12 rounded-xl bg-[#0E2432] flex justify-center items-center">
          <Plus size={20} color="white"></Plus>
        </div>
        <div className="flex items-center border-2 border-[#E0E1D2] rounded-xl px-1 gap-6">
          <input
            type="text"
            placeholder="Write your message"
            className="flex-1 rounded-xl bg-transparent  text-white px-5 py-2 font-sfProDisplay"
          ></input>
          <div className="w-10 h-10 rounded-xl bg-[#e33e3c] flex justify-center items-center">
            <Image
              alt="send icon"
              src="/assets/send-a7.svg"
              width={20}
              height={20}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
